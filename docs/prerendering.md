# Bot Prerendering Guide

This document describes how to implement prerendering for search engine and social media bots when using a CSR (Client-Side Rendered) React application like this one.

> **Note**: Lovable does not provide built-in SSR or prerendering. This guide covers external proxy/CDN configuration that would be implemented at the hosting or CDN layer.

---

## Overview

Prerendering serves fully-rendered HTML to bots while regular users receive the standard SPA. This improves:
- Indexation speed for search engines
- Social media link previews
- Core Web Vitals for bot measurements

---

## Option 1: Prerender.io (Recommended)

### Setup
1. Sign up at [prerender.io](https://prerender.io)
2. Add your site URL: `https://swindonblockeddrains.co.uk`
3. Configure your CDN/proxy to route bot traffic to Prerender.io

### User Agents to Prerender
These bots receive prerendered HTML:

```
Googlebot
Bingbot
Slurp (Yahoo)
DuckDuckBot
Baiduspider
YandexBot
facebookexternalhit
Twitterbot
LinkedInBot
WhatsApp
TelegramBot
Discordbot
Pinterest
Slackbot
```

### Cache Rules
- **Default TTL**: 24 hours for most pages
- **Blog posts**: 7 days (lower change frequency)
- **Homepage**: 6 hours (higher priority for freshness)
- **Sitemap/static pages**: 30 days

### Cloudflare Worker Example
```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const BOT_AGENTS = [
  'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
  'yandexbot', 'facebookexternalhit', 'twitterbot', 'linkedinbot',
  'whatsapp', 'telegrambot', 'discordbot', 'pinterest', 'slackbot'
]

async function handleRequest(request) {
  const userAgent = (request.headers.get('User-Agent') || '').toLowerCase()
  const isBot = BOT_AGENTS.some(bot => userAgent.includes(bot))
  
  if (isBot) {
    // Route to Prerender.io
    const prerenderUrl = `https://service.prerender.io/${request.url}`
    return fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': 'YOUR_PRERENDER_TOKEN'
      }
    })
  }
  
  // Regular users get the SPA
  return fetch(request)
}
```

---

## Option 2: Cloudflare Workers + Puppeteer

For self-hosted prerendering using Cloudflare's Browser Rendering API.

### Setup
1. Enable Cloudflare Browser Rendering in your Cloudflare dashboard
2. Deploy a Worker that renders pages on-demand for bots
3. Cache rendered HTML in Cloudflare KV or R2

---

## What Remains Unchanged

When implementing prerendering, these elements stay the same:

| Element | Location | Notes |
|---------|----------|-------|
| Canonical URLs | `<link rel="canonical">` via Helmet | Same URL for bots and users |
| Robots meta | `<meta name="robots">` via Helmet | Respects per-route noindex rules |
| sitemap.xml | `/sitemap.xml` | Static file, not prerendered |
| robots.txt | `/robots.txt` | Static file, not prerendered |
| JSON-LD schemas | Inline `<script type="application/ld+json">` | Rendered in prerendered HTML |

### Critical: Canonical Consistency
The prerendered HTML must contain the **exact same canonical URL** as the client-rendered version. Prerender.io handles this automatically by rendering your actual React app.

---

## Verification

### 1. Google Search Console - URL Inspection
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Enter a URL: `https://swindonblockeddrains.co.uk/services/blocked-drains/`
3. Click "Test Live URL"
4. Click "View Tested Page" → "Screenshot" and "HTML"
5. Verify:
   - Full content is visible in screenshot
   - `<title>` tag is correct
   - `<meta name="description">` is present
   - `<link rel="canonical">` matches the URL
   - JSON-LD schemas are in the HTML

### 2. Mobile-Friendly Test
1. Go to [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
2. Enter your URL
3. Check "Page loading issues" for any blocked resources

### 3. Rich Results Test
1. Go to [Rich Results Test](https://search.google.com/test/rich-results)
2. Enter URL
3. Verify all structured data is detected

### 4. Manual Bot Simulation
```bash
# Simulate Googlebot
curl -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" \
  https://swindonblockeddrains.co.uk/services/blocked-drains/

# Check for full HTML content, not just <div id="root"></div>
```

### 5. Prerender.io Dashboard
- Monitor cache hit rates
- Check for rendering errors
- Verify pages are being cached

---

## Current Status (Without Prerendering)

This site currently uses Client-Side Rendering (CSR). Google's crawler executes JavaScript and can index the content, but:
- Indexing may be slightly delayed (Google's rendering queue)
- Social media previews rely on static OG tags in `index.html`
- Core Web Vitals measured by bots reflect JS execution time

### Mitigation Already Implemented
1. **Static OG/Twitter tags** in `index.html` for social previews
2. **react-helmet-async** for per-route SEO metadata
3. **JSON-LD schemas** on all key pages
4. **Comprehensive sitemap** with all indexable URLs
5. **Static `/llm.html`** for AI crawlers

---

## Recommended Next Steps

1. **Monitor GSC** - Check if pages are being indexed correctly
2. **Review Core Web Vitals** - If bot scores are poor, consider prerendering
3. **Evaluate Prerender.io** - Free tier available for testing
4. **Test with real bot** - Use GSC URL Inspection to verify rendering

---

## Cost Considerations

| Solution | Cost | Complexity |
|----------|------|------------|
| No prerendering (current) | Free | None |
| Prerender.io | $15-99/mo | Low |
| Cloudflare Workers | $5/mo + usage | Medium |
| Self-hosted Puppeteer | Server costs | High |

For most sites, Google's JavaScript rendering is sufficient. Prerendering is recommended if:
- Indexing is significantly delayed
- Social previews are critical for marketing
- Core Web Vitals scores from bots are poor
