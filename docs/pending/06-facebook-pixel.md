# Facebook Pixel Setup

**Status:** PENDING
**Priority:** LOW
**Why:** Track conversions from Facebook/Instagram ads, retarget visitors

## Steps

### 1. Create Pixel
1. Go to https://business.facebook.com/events_manager
2. Sign in with the society's Facebook account
3. Click "Connect Data Sources" → "Web" → "Facebook Pixel"
4. Pixel name: `SRMCS Website`
5. Copy the **Pixel ID**

### 2. Add to .env.local
```
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXX
```

### 3. Events to Track
- `Donate` — when donation is completed
- `Lead` — when contact form is submitted
- `Subscribe` — when newsletter is signed up
- `CompleteRegistration` — when donor account is created

## Values Needed
- [ ] Facebook Pixel ID
