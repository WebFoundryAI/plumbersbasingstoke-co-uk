-- DEPRECATED: This Supabase migration is no longer used.
-- The active database is Cloudflare D1. See /functions/api/lead.ts for the current schema.

create table if not exists public.leads (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  postcode text not null,
  address text,
  service text not null,
  notes text,
  source text not null default 'website',
  ip_address text,
  user_agent text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_postcode_idx on public.leads (postcode);
create index if not exists leads_service_idx on public.leads (service);
