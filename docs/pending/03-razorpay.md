# Razorpay Payment Gateway Setup

**Status:** PENDING
**Priority:** HIGH
**Why:** Accept online donations via UPI, cards, net banking, wallets

## Steps

### 1. Create Razorpay Account
1. Go to https://razorpay.com/
2. Sign up with `shriradhemaacharitablesociety@gmail.com`
3. Complete KYC verification:
   - Society registration certificate (S/2930/SDM/NW/2017)
   - PAN: AAUAS1740G
   - Bank account: HDFC 50100214648162
   - Authorized signatory ID proof
4. Wait for approval (1-3 business days)

### 2. Get API Keys
1. Dashboard → Settings → API Keys
2. Generate Key ID and Key Secret
3. Copy both

### 3. Add to .env.local
```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_XXXXXXXXXX
RAZORPAY_KEY_SECRET=XXXXXXXXXX
```

### 4. Test Mode (optional, for development)
```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXX
RAZORPAY_KEY_SECRET=XXXXXXXXXX
```

### 5. Configure Webhook
1. Dashboard → Settings → Webhooks
2. Webhook URL: `https://your-domain.com/api/razorpay/webhook`
3. Events: `payment.captured`, `payment.failed`, `refund.created`
4. Copy Webhook Secret

## Code Already Done
- `/src/lib/razorpay.ts` — Razorpay config utility
- `/src/components/donate/DonationForm.tsx` — Donation form ready for Razorpay integration

## Values Needed
- [ ] Razorpay Key ID (live)
- [ ] Razorpay Key Secret (live)
- [ ] Razorpay Webhook Secret
