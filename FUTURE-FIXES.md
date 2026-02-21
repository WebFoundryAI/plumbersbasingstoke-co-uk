# Future Fixes

## Medium Priority

- ~~**`.env` not in `.gitignore`**~~ – FIXED: `.env` added to `.gitignore` and untracked from git.
- **API keys in Git history** – `GOOGLE_MAPS_API_KEY` is still in Git history. Rotate the key in Google Cloud Console and set it only via the hosting platform dashboard.
- **Sign up for Ideal Postcodes account** – The `iddqd` community test key is limited to 15 requests/day/IP. Sign up at https://ideal-postcodes.co.uk for a production key and set `IDEAL_POSTCODES_API_KEY` in Cloudflare Pages dashboard.
- ~~**Netlify lead function uses deprecated Supabase**~~ – DOCUMENTED: Deprecation comments added to `netlify/functions/`. The active backend is `functions/api/lead.ts` (Cloudflare D1).

## Low Priority

- ~~**Missing skip-to-content link**~~ – FIXED: Skip link added to `BaseLayout.astro`.
- **`wrangler.toml` has empty `account_id`/`zone_id`** – Only matters if deploying the Cloudflare Worker.
- ~~**XSS in address dropdown text**~~ – FIXED: Replaced `innerHTML` string concatenation with `document.createElement` + `textContent` in both `LeadForm.astro` and `HeroLeadForm.astro`.
- ~~**Phone validation too loose**~~ – FIXED: Replaced loose digit-count check with proper UK phone number regex.
- **No CSRF protection on forms** – Forms don't include CSRF tokens. Low risk since API is same-origin with no auth cookies.
