# Cloudinary Image CDN Setup

**Status:** PENDING
**Priority:** LOW
**Why:** Optimize gallery images, auto-resize, serve via CDN for faster loading

## Steps

### 1. Create Account
1. Go to https://cloudinary.com/
2. Sign up (free tier: 25GB storage, 25GB bandwidth/month)
3. Copy Cloud Name, API Key, API Secret

### 2. Add to .env.local
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=XXXXXXXXXX
CLOUDINARY_API_SECRET=XXXXXXXXXX
```

## No Action Needed Now
Next.js Image component already optimizes images. Cloudinary is only needed when the gallery has many high-res photos and you need a dedicated image CDN.
