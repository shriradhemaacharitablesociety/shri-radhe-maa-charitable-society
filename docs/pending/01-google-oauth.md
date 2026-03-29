# Google OAuth Setup (for Login)

**Status:** PENDING
**Priority:** HIGH
**Why:** Enables "Continue with Google" login for donors and admin

## Steps

### 1. Google Cloud Console
1. Go to https://console.cloud.google.com/
2. Sign in as `shriradhemaacharitablesociety@gmail.com`
3. Click "Select a project" → "New Project"
4. Name: `Shri Radhe Maa Society` → Create

### 2. OAuth Consent Screen
1. Left sidebar: **APIs & Services → OAuth consent screen**
2. Click "Get Started" or "Configure Consent Screen"
3. App name: `Shri Radhe Maa Charitable Society`
4. User support email: `shriradhemaacharitablesociety@gmail.com`
5. Developer contact: `shriradhemaacharitablesociety@gmail.com`
6. Save and Continue through remaining steps
7. Publish the app (move from "Testing" to "Production")

### 3. Create OAuth Credentials
1. Left sidebar: **APIs & Services → Credentials**
2. Click "+ Create Credentials" → "OAuth client ID"
3. Application type: **Web application**
4. Name: `Supabase Auth`
5. Authorized redirect URIs → Add:
   ```
   https://gbfogimmzokajmslecbp.supabase.co/auth/v1/callback
   ```
6. Click Create
7. Copy **Client ID** and **Client Secret**

### 4. Configure Supabase
1. Go to https://supabase.com/dashboard → your project
2. Authentication → Providers → Google
3. Enable Google provider
4. Paste Client ID and Client Secret
5. Save

### 5. Update .env.local (optional)
No changes needed — Supabase handles Google OAuth server-side.

## Code Already Done
- `/src/app/login/page.tsx` — "Continue with Google" button
- `/src/app/api/auth/callback/route.ts` — Routes admin email to /admin, others to /donor
- Supabase client utilities in `/src/lib/supabase/`

## Values Needed
- [ ] Google Client ID
- [ ] Google Client Secret
