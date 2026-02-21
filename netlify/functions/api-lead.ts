// DEPRECATED: This Netlify function uses the old Supabase REST API backend.
// The active version is /functions/api/lead.ts (Cloudflare Pages + D1 database).
// Kept for reference only — do not deploy to Netlify without updating to D1.

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const memoryStore = new Map<string, { count: number; start: number }>();

const json = (statusCode: number, body: Record<string, unknown>) => ({
  statusCode,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  },
  body: JSON.stringify(body),
});

const validate = (payload: Record<string, unknown>) => {
  const required = ['name', 'phone', 'postcode', 'service'];
  const errors: string[] = [];
  required.forEach((field) => {
    const value = String(payload[field] ?? '').trim();
    if (!value) errors.push(`${field} is required`);
  });
  if (String(payload.company ?? '').trim()) errors.push('spam detected');
  return errors;
};

export const handler = async (event: any) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const ip = event.headers['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();
  const entry = memoryStore.get(ip);

  if (!entry || now - entry.start > RATE_LIMIT_WINDOW_MS) {
    memoryStore.set(ip, { count: 1, start: now });
  } else if (entry.count >= RATE_LIMIT_MAX) {
    return json(429, { error: 'Too many requests, please try again shortly.' });
  } else {
    memoryStore.set(ip, { count: entry.count + 1, start: entry.start });
  }

  let payload: Record<string, unknown> = {};
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { error: 'Invalid JSON payload' });
  }

  const errors = validate(payload);
  if (errors.length) return json(400, { error: errors.join(', '), fields: errors });

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseServiceRole) return json(500, { error: 'Missing Supabase configuration' });

  const record = {
    name: String(payload.name ?? '').trim(),
    phone: String(payload.phone ?? '').trim(),
    postcode: String(payload.postcode ?? '').trim().toUpperCase(),
    address: String(payload.address ?? '').trim() || null,
    service: String(payload.service ?? '').trim(),
    notes: String(payload.notes ?? '').trim() || null,
    source: String(payload.source ?? 'website').trim(),
    ip_address: ip,
    user_agent: event.headers['user-agent'] || null,
  };

  const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      apikey: supabaseServiceRole,
      authorization: `Bearer ${supabaseServiceRole}`,
      prefer: 'return=minimal',
    },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    return json(502, { error: 'Failed to store lead', details: await response.text() });
  }

  return json(200, { success: true });
};
