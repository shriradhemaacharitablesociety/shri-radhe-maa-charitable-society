# Google Analytics Setup

**Status:** PENDING
**Priority:** HIGH
**Why:** Track visitor behavior, donation conversions, page views, traffic sources

## Steps

### 1. Create GA4 Property
1. Go to https://analytics.google.com/
2. Sign in as `shriradhemaacharitablesociety@gmail.com`
3. Click "Start measuring" or Admin → Create Property
4. Property name: `Shri Radhe Maa Charitable Society`
5. Country: India, Currency: INR, Time zone: IST
6. Business type: Non-profit
7. Click Create

### 2. Get Measurement ID
1. In the property, go to Data Streams → Add stream → Web
2. Website URL: `srmcs.org` (or your Vercel URL)
3. Stream name: `Main Website`
4. Copy the **Measurement ID** (starts with `G-`)

### 3. Add to .env.local
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 4. Configure Events (recommended)
Set up these custom events in GA4:
- `donate_click` — when someone clicks the Donate button
- `campaign_contribute` — when someone clicks Contribute on a campaign
- `newsletter_signup` — when someone subscribes
- `contact_form_submit` — when contact form is submitted
- `donor_signup` — when a new donor account is created

## Values Needed
- [ ] GA4 Measurement ID (G-XXXXXXXXXX)
