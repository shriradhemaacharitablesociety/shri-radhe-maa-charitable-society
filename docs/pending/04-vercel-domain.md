# Vercel Custom Domain Setup

**Status:** PENDING
**Priority:** HIGH
**Why:** Map your custom domain (e.g., shriradhemasociety.org) to the Vercel deployment

## Steps

### 1. Buy a Domain (if not already owned)
Recommended registrars: GoDaddy, Namecheap, Google Domains, Hostinger
Suggested domain: `shriradhemasociety.org` or `shriradhemasociety.in`

### 2. Add Domain to Vercel
1. Go to https://vercel.com/dashboard
2. Select `shri-radhe-maa-charitable-society` project
3. Settings → Domains
4. Add your domain
5. Vercel will show DNS records to configure

### 3. Configure DNS
Add these records at your domain registrar:
- **A Record:** `@` → `76.76.21.21`
- **CNAME Record:** `www` → `cname.vercel-dns.com`

### 4. SSL Certificate
Vercel automatically provisions SSL — no action needed.

### 5. Update Redirect URLs
After domain is set, update:
- Google OAuth redirect URI → `https://yourdomain.com/api/auth/callback`
- Supabase Auth → Site URL → `https://yourdomain.com`
- Razorpay webhook URL → `https://yourdomain.com/api/razorpay/webhook`

## Values Needed
- [ ] Custom domain name
- [ ] DNS configured at registrar
