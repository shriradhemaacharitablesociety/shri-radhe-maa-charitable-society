# Google Search Console Setup

**Status:** PENDING
**Priority:** MEDIUM
**Why:** Monitor search performance, submit sitemap, fix indexing issues

## Steps

### 1. Add Property
1. Go to https://search.google.com/search-console/
2. Sign in as `shriradhemaacharitablesociety@gmail.com`
3. Add property → URL prefix → enter your domain URL
4. Verify ownership (HTML tag method or DNS)

### 2. Submit Sitemap
1. In Search Console → Sitemaps
2. Enter: `https://yourdomain.com/sitemap.xml`
3. Click Submit

### 3. Request Indexing
1. Go to URL Inspection
2. Enter your homepage URL
3. Click "Request Indexing"

## Code Already Done
- `/public/sitemap.xml` — Sitemap file
- `/public/robots.txt` — Robots file
- JSON-LD structured data on all pages
- SEO metadata on all pages

## Values Needed
- [ ] Domain verified in Search Console
- [ ] Sitemap submitted
