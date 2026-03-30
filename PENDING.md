# Pending Tasks

## 2. Authentication System
- [ ] Implement admin login with Supabase Auth (email/password)
- [ ] Add session-based access control to /admin routes
- [ ] Role-based permissions (Super Admin, Content Editor)
- [ ] Protect API routes with auth middleware
- [ ] Add "Forgot Password" flow

## 3. Image/Media Uploads
- [ ] Configure Supabase Storage buckets (gallery, events, campaigns)
- [ ] Create upload API routes with file validation (max size, allowed types)
- [ ] Wire up gallery admin page to upload/delete from Storage
- [ ] Wire up campaign media manager to Storage
- [ ] Wire up event media manager to Storage
- [ ] Add image optimization (Next.js Image component with Supabase URLs)
- [ ] Add placeholder-to-real image migration

## 4. Razorpay Payment Integration
- [ ] Create /api/razorpay/create-order endpoint
- [ ] Create /api/razorpay/verify-payment webhook endpoint
- [ ] Wire DonationForm component to Razorpay checkout
- [ ] Store payment records in Supabase donations table
- [ ] Generate 80G tax receipts (PDF) after successful payment
- [ ] Send receipt emails to donors
- [ ] Add payment status tracking in admin donations page
- [ ] Test with Razorpay test mode
