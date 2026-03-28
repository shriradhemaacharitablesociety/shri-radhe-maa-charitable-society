# Sacred Modern — Complete Webapp Redesign Spec

**Date:** 2026-03-28
**Status:** Approved
**Design:** Sacred Modern — clean white canvas, alternating white/cream sections, crimson/saffron spiritual accents

---

## 1. Design System

### Color Palette
- **White:** `#FFFFFF` — primary content background
- **Cream:** `#FAF7F2` — alternating section backgrounds, footer, subtle cards
- **Cream Dark:** `#F3EDE4` — borders on cream sections
- **Warm-50:** `#FDFBF7` — form input backgrounds
- **Warm-600:** `#8B7355` — secondary text, labels
- **Warm-800:** `#3D2E1F` — body text
- **Warm-900:** `#1a0f08` — headings, emphasis
- **Crimson:** `#C41E3A` — primary accent, CTAs, stats
- **Crimson Dark:** `#A01530` — hover states
- **Crimson Light:** `#FFF0F2` — badge backgrounds, featured card tints
- **Saffron:** `#DAA520` — secondary accent, decorative elements
- **Saffron Light:** `#FFF8ED` — badge backgrounds

### Typography
- **Headings:** Instrument Serif (serif) — cultural gravitas
- **Body:** Space Grotesk (sans-serif) — clean readability
- **Hindi:** Noto Sans Devanagari — bilingual labels
- **Stats:** Fraunces — impact numbers

### Card Patterns
- **On white sections:** Cards use `bg-cream border-cream-dark` (cream cards on white)
- **On cream sections:** Cards use `bg-white border-rgba(0,0,0,0.06)` (white cards on cream)
- **Hover:** `translateY(-2px)` + `shadow-lg` + crimson left accent bar appears
- **Border radius:** `16px` for cards, `8px` for buttons, `10px` for inputs

### Section Rhythm
- Alternating `section-white` / `section-cream` backgrounds
- Each section: `py-20 px-6`, inner `max-w-7xl mx-auto`
- Section headers: Hindi label (crimson, small), Serif title (large), accent line (3px crimson), description

### Navbar
- Full-width, `position: fixed`, white with `backdrop-blur`
- Left: Logo (44px round) + "श्री राधे माँ" + "Charitable Society" subtext
- Right: Links (About, Our Seva, Events, Gallery, Contact) + Donate button (crimson, rounded-lg)
- No pill shape — clean horizontal bar with subtle bottom border

### Footer
- Background: `cream (#FAF7F2)` with `border-top: cream-dark`
- 4-column grid: Brand, Quick Links, Our Seva, Offices
- Bottom bar: Copyright, registration number, 80G badge (crimson outline)

### Animations
- Scroll reveal: `translateY(20px)` + `opacity: 0` → visible, staggered delays
- Counters: Animate on scroll intersection
- Cards: `translateY(-2px)` on hover, left accent bar fade-in
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` throughout
- Smooth scroll: Lenis with 1.2s duration

---

## 2. Pages & Features

### 2.1 Existing Pages (Redesigned)

**Homepage**
- Society Banner (below navbar)
- Hero: 2-col (text + stat cards), badge, watermark, CTAs
- Trust Bar: Regd, Est. 2017, 80G Certified
- Impact Counter Bar: 4 stats in rounded grid with dividers
- About Strip: Centered bilingual text
- Seva Grid: Featured card (dialysis, 2-col span) + 5 service cards
- Impact Calculator (NEW): Interactive "your donation can" section
- Beneficiary Stories carousel (NEW)
- Events preview (2-3 upcoming)
- Newsletter signup strip (NEW)
- Donate CTA section

**About Section**
- `/about` — Overview with society mission
- `/about/maa` — Shri Radhe Guru Maa biography
- `/about/society` — Registration, history, governance
- `/about/leadership` — Team and trustees

**Seva Section**
- `/seva` — Overview grid of all programmes
- `/seva/healthcare` — Free dialysis, health camps
- `/seva/financial-aid` — Pensions, financial assistance
- `/seva/disaster-relief` — Flood relief, emergency aid
- `/seva/janseva` — Community service, divyang support
- `/seva/gaushala` — Cow sanctuary

**Get Involved**
- `/get-involved/donate` — Enhanced donation flow (see 2.2)
- `/get-involved/volunteer` — Volunteer page with stories
- `/get-involved/csr` — Corporate partnerships

**Other**
- `/events` — Calendar view + list (upgraded)
- `/gallery` — Photo/video gallery
- `/contact` — Form + office cards
- `/transparency` — Financial reports, fund utilization

### 2.2 New Pages

**Impact Calculator** (`/impact` or homepage section)
- Slider or amount input
- Real-time display: "₹1,500 = 1 dialysis session", "₹5,000 = 1 wheelchair"
- CTA to donate that amount
- Impact amounts data:
  - ₹500 = 1 week pension for elderly
  - ₹1,500 = 1 dialysis session
  - ₹2,000 = 1 month pension
  - ₹5,000 = 1 wheelchair
  - ₹10,000 = 1 month gaushala feed
  - ₹25,000 = marriage assistance for 1 family
  - ₹50,000 = disaster relief kit for 10 families

**Beneficiary Stories** (`/stories`)
- Grid of story cards with photo, name, seva type, short quote
- Individual story pages with full narrative, before/after, video
- Filter by seva type (dialysis, pension, divyang, etc.)
- Share buttons (WhatsApp, Facebook, Twitter)

**Blog / News** (`/blog`)
- Blog listing with featured post + grid
- Individual post pages with rich content
- Categories: Camp Reports, Events, Milestones, News
- Author attribution, date, read time
- Social share buttons

**80G Certificate & Tax Benefits** (`/80g`)
- Display 80G certificate image
- Explain tax benefits with calculation examples
- How to claim: step-by-step guide
- Download receipt CTA
- Link to donate page

**Legal Pages**
- `/privacy-policy` — Data handling, cookies, third-party services
- `/terms` — Terms of use, donation terms
- `/refund-policy` — Cancellation and refund policy for online donations

**FAQ** (`/faq`)
- Organized by category: Donations, Tax Benefits, Volunteering, Programmes, General
- Accordion/collapsible answers
- Search functionality
- CTA to contact page for unanswered questions

**Press & Media** (`/press`)
- News coverage links and clippings
- Press releases
- Downloadable press kit (logo, fact sheet, leadership bios)
- Media contact information

**Partnerships** (`/partnerships`)
- Hospital partnerships (dialysis centre)
- Government affiliations
- NGO network memberships
- Awards and recognitions
- Partner logos grid

**Donor Wall** (`/donors`)
- Recognition tiers: Seva Ratna (₹1L+), Seva Mitra (₹25K+), Seva Saathi (₹5K+)
- Names (with permission) in respective tier sections
- Corporate donor logos
- Total community impact stats

**Sponsor-a-Cause** (`/campaigns`)
- Active campaign cards with progress bars and goals
- Individual campaign pages: "Fund 100 Dialysis Sessions This Month"
- Donor count, amount raised, days remaining
- Share campaign functionality

**Seva Subscriptions** (`/seva-subscriptions`)
- 3 monthly tiers:
  - Seva Saathi: ₹500/mo — funds weekly pension payments
  - Seva Mitra: ₹2,000/mo — funds dialysis sessions
  - Seva Bandhu: ₹5,000/mo — funds comprehensive seva
- Each tier shows exact monthly impact
- Monthly impact update email to subscribers

**Interactive Annual Report** (`/annual-report`)
- Web-based interactive report for current year
- Scroll-driven data visualizations
- Fund utilization breakdown with animated charts
- Key milestones timeline
- Embedded testimonial videos
- Downloadable PDF version

**Seva Map** (`/seva-map`)
- Interactive India map showing operational locations
- Clickable pins: Delhi (HQ), Mumbai (dialysis), disaster relief locations
- Pop-up cards with location details and stats
- Filter by seva type

### 2.3 New Components

**WhatsApp Floating Button**
- Fixed bottom-right, green WhatsApp icon
- Opens WhatsApp with pre-filled message
- Number: 9560800343
- Pulse animation on first visit

**Newsletter Signup Strip**
- Full-width cream section between homepage sections
- Email input + subscribe button
- "Get monthly updates on our seva" tagline
- Integration: store emails in Supabase (when connected)

**Live Donation Notification**
- Toast popup: "Ramesh from Delhi donated ₹5,000" (bottom-left)
- Subtle, auto-dismiss after 5 seconds
- Pull from recent donations (when payment integration is live)
- For now: static rotation of example notifications

**Social Share Buttons**
- WhatsApp, Facebook, Twitter/X, Copy Link
- Used on: stories, blog posts, campaigns, events

**Cookie Consent Banner**
- Bottom bar: "We use cookies to improve your experience"
- Accept / Manage preferences
- Required for compliance

---

## 3. Enhanced Donation Flow

**Page structure:**
1. Impact amounts with labels (not blank inputs)
2. Frequency toggle: One-time / Monthly
3. Seva designation dropdown: "Where should your donation go?"
   - General Fund, Dialysis Centre, Financial Aid, Disaster Relief, Gaushala, Divyang Seva
4. Donor details: Name, Email, Phone, PAN (for 80G)
5. Payment: Razorpay integration (UPI, Card, Net Banking, Wallets)
6. Trust signals: 80G badge, "100% goes to seva", secure payment badge
7. Post-donation: Thank you page with receipt download, social share, impact summary

**Bank Details Card:**
- HDFC Account: 50100214648162
- IFSC: HDFC0002072
- PAN: AAUAS1740G
- Copy buttons for each field
- QR code for UPI payment

---

## 4. Admin Dashboard (`/admin`)

### 4.1 Authentication
- Email/password login (admin accounts)
- Role-based access: Super Admin, Content Editor, Donation Manager
- Protected routes with middleware

### 4.2 Dashboard Home
- Overview cards: Total donations, Active campaigns, Blog posts, Subscribers
- Recent donations table
- Quick actions: New blog post, Add event, View messages

### 4.3 Modules

**Content Management (CMS)**
- Edit page content (hero text, section descriptions, stats)
- Manage seva programme details
- Update about page content
- Rich text editor for content blocks

**Blog Management**
- Create/edit/delete blog posts
- Rich text editor with image upload
- Categories and tags
- Draft/Published status
- Schedule publishing

**Event Management**
- Create/edit/delete events
- Event details: title, date, location, description, image
- RSVP tracking
- Past/Upcoming filter

**Donation Management**
- View all donations (table with filters)
- Donation details: amount, donor info, date, seva designation, payment status
- Export to CSV/Excel
- Generate 80G receipts
- Monthly/yearly donation reports with charts

**Beneficiary Stories Management**
- Create/edit/delete stories
- Fields: name, photo, seva type, quote, full story, video URL
- Published/Draft status
- Featured story toggle

**Campaign Management**
- Create/edit/delete campaigns
- Fields: title, goal amount, description, end date, seva type
- Track progress (raised vs goal)
- Campaign donors list

**Newsletter Management**
- View subscriber list
- Export subscribers
- Unsubscribe management

**Contact Messages**
- View messages from contact form
- Mark as read/responded
- Reply via email

**User Management**
- Add/remove admin users
- Role assignment
- Activity log

**Gallery Management**
- Upload/delete photos and videos
- Organize by category (Events, Seva, Spiritual)
- Set captions and alt text

**Settings**
- Society details (name, registration, address)
- Bank details
- Social media links
- SEO metadata
- 80G certificate upload

### 4.4 Dashboard Design
- Sidebar navigation with icons
- Light theme matching Sacred Modern palette
- Responsive (works on tablet+)
- Data tables with search, sort, pagination
- Charts for donation analytics (monthly trend, seva-wise breakdown)
- Toast notifications for actions

---

## 5. Data Architecture

### Supabase Tables (when connected)

```
donations: id, amount, donor_name, donor_email, donor_phone, donor_pan, seva_type, frequency, payment_id, status, created_at
blog_posts: id, title, slug, content, excerpt, category, author, image_url, status, published_at, created_at
events: id, title, date, location, description, image_url, rsvps, status, created_at
stories: id, name, photo_url, seva_type, quote, full_story, video_url, featured, status, created_at
campaigns: id, title, slug, goal, raised, description, end_date, seva_type, status, created_at
subscribers: id, email, subscribed_at, unsubscribed_at
contact_messages: id, name, email, subject, message, read, responded, created_at
gallery: id, url, caption, alt_text, category, type (photo/video), created_at
admin_users: id, email, name, role, created_at
settings: id, key, value, updated_at
```

### For Now (No Supabase Yet)
- Static JSON data files in `/src/data/` for stories, blog posts, events, campaigns
- Contact form: client-side submission simulation
- Donation form: Razorpay redirect
- Admin dashboard: reads/writes JSON files via API routes
- Easy migration path: swap JSON reads for Supabase queries later

---

## 6. Technical Approach

- **Framework:** Next.js 16 App Router (existing)
- **Styling:** Tailwind CSS 4 — update tailwind config with new design tokens
- **Data:** Static JSON → Supabase migration path
- **Admin:** `/admin` route group with layout, sidebar, protected pages
- **Blog:** MDX or JSON-based posts with dynamic routes
- **Maps:** Leaflet.js (free, no API key needed) for seva map
- **Charts:** Recharts for dashboard analytics
- **Rich Text:** TipTap editor for admin CMS
- **Animations:** GSAP + Lenis (existing), refined for new design
- **i18n:** next-intl (existing), extend to new pages

---

## 7. Implementation Phases

### Phase 1: Design System + Core Redesign
- Update tailwind.config with new design tokens
- Update globals.css (backgrounds, selections)
- Redesign all UI components (Button, Card, Badge, SectionHeader, ScrollReveal)
- Redesign Navbar, Footer, MobileNav, SocietyBanner
- Redesign Homepage (Hero, TrustBar, ImpactCounter, SevaGrid, AboutStrip, DonateCTA, EventCards)
- Add WhatsApp floating button
- Add Newsletter signup strip

### Phase 2: New Public Pages
- Impact Calculator (homepage section + standalone)
- Beneficiary Stories page + individual story pages
- Blog listing + individual post pages
- FAQ page
- 80G Certificate page
- Legal pages (Privacy, Terms, Refund)
- Press & Media page
- Partnerships page
- Donor Wall page
- Seva Map page

### Phase 3: Enhanced Features
- Sponsor-a-Cause campaigns with progress bars
- Seva Subscription tiers page
- Enhanced donation flow (designation, impact labels)
- Events calendar upgrade
- Interactive Annual Report page
- Social share buttons component
- Cookie consent banner
- Live donation notification component

### Phase 4: Admin Dashboard
- Admin layout (sidebar + header)
- Authentication (email/password)
- Dashboard home with overview cards
- Blog CRUD
- Event CRUD
- Story CRUD
- Campaign CRUD
- Contact messages viewer
- Gallery management
- Donation management (when payment connected)
- Newsletter subscriber management
- Settings page
- User management

### Phase 5: Data Migration
- Connect Supabase
- Migrate JSON data to database
- Wire up admin CRUD to Supabase
- Wire up forms to Supabase
- Add real-time donation notifications
