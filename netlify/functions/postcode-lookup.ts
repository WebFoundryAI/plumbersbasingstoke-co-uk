// Netlify Function – postcode lookup via Ideal Postcodes API
// Royal Mail PAF licensed data | https://ideal-postcodes.co.uk
//
// Set IDEAL_POSTCODES_API_KEY in Netlify dashboard:
//   Site settings > Environment variables  (must be a runtime variable, not just build)
//
// The 'iddqd' community key works for real postcodes (15 lookups/day/IP).
// For production, sign up at https://ideal-postcodes.co.uk (~2p per lookup).

const API_KEY = 'iddqd';
const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;

const json = (statusCode: number, body: Record<string, unknown>) => ({
  statusCode,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  },
  body: JSON.stringify(body),
});

export const handler = async (event: any) => {
  if (event.httpMethod !== 'GET') return json(405, { error: 'Method not allowed' });

  const params = event.queryStringParameters || {};
  const postcode = (params.postcode || '').trim();

  if (!postcode || !postcodeRegex.test(postcode)) {
    return json(400, { error: 'Enter a valid UK postcode.' });
  }

  const apiKey = process.env.IDEAL_POSTCODES_API_KEY || API_KEY;
  const cleanPostcode = postcode.replace(/\s/g, '');

  try {
    const response = await fetch(
      `https://api.ideal-postcodes.co.uk/v1/postcodes/${encodeURIComponent(cleanPostcode)}?api_key=${encodeURIComponent(apiKey)}`
    );
    const payload = (await response.json()) as any;

    // Ideal Postcodes uses code 2000 for success, 4040 for not found,
    // 4010 for invalid/exhausted key, 4020 for limit reached
    if (payload.code === 4040) {
      return json(404, { error: 'No addresses found for this postcode.' });
    }

    if (payload.code === 4010 || payload.code === 4020) {
      return json(429, { error: 'Postcode lookup limit reached. Please enter your address manually.' });
    }

    if (!Array.isArray(payload.result) || !payload.result.length) {
      return json(404, { error: payload.message || 'No addresses found for this postcode.' });
    }

    const addresses = payload.result.map((addr: any) => {
      const line = [addr.line_1, addr.line_2, addr.line_3, addr.post_town, addr.postcode]
        .filter(Boolean)
        .join(', ');
      return { line };
    });

    return json(200, { addresses });
  } catch {
    return json(502, { error: 'Address lookup temporarily unavailable. Please enter your address manually.' });
  }
};
