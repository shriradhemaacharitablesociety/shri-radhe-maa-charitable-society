# Shri Radhe Maa Charitable Society — Webapp Design Spec

**Date:** 2026-03-28
**Status:** Approved
**Design Direction:** Saffron & Crimson Sacred Minimalism

---

## 1. Visual Identity

### Colour System
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#FFF8ED → #FFF4E3 → #FFFAF0` (gradient) | Page background |
| `--accent-crimson` | `#C41E3A` | Primary CTAs, stat numbers, donate button |
| `--accent-crimson-dark` | `#8B0000` | Gradient endpoints, hover states |
| `--accent-gold` | `#B8860B` | Secondary CTAs, brand text, nav brand |
| `--accent-gold-light` | `#DAA520` | Decorative elements, thread accents |
| `--text-primary` | `#1a0f08` | Headlines, primary body text |
| `--text-secondary` | `rgba(42, 24, 16, 0.35)` | Descriptions, secondary content |
| `--text-tertiary` | `rgba(42, 24, 16, 0.15)` | Labels, registration numbers |
| `--surface-card` | `rgba(255, 255, 255, 0.45)` | Frosted glass cards |
| `--surface-card-hover` | `rgba(255, 255, 255, 0.65)` | Card hover state |
| `--border-subtle` | `rgba(218, 165, 32, 0.06)` | Card borders |

### Typography
| Role | Font | Size | Weight | Tracking |
|------|------|------|--------|----------|
| Display / Hero | Instrument Serif | 54px | 400 | -0.03em |
| Devanagari Watermark | Noto Sans Devanagari | 120px | 900 | -0.04em |
| Stat Numbers | Fraunces | 36px | 700 | default |
| Navigation / Labels | Space Grotesk | 11-12px | 400-500 | 0.5px |
| Body | Space Grotesk | 14px | 400 | default |
| Hindi Body | Noto Sans Devanagari | 14px | 400 | default |

### Signature Elements
- Massive "सेवा" Devanagari watermark with `background: linear-gradient(crimson, gold)` clip
- Crimson-to-gold thread line at page centre
- Ambient radial gradient orbs (saffron + crimson) with floating animation
- Subtle noise texture overlay at 1.5% opacity
- Floating pill navigation with frosted glass backdrop
- Stat cards with crimson-to-gold left-border gradient

### Animation
- All transitions: `cubic-bezier(0.16, 1, 0.3, 1)` (expo out)
- Page load: staggered reveal (watermark → title → subtitle → CTAs, 200ms stagger)
- Scroll: elements fade-up from `translateY(40px) blur(8px)` to `translateY(0) blur(0)`
- Stat numbers: count-up animation on viewport entry
- Smooth scroll: Lenis for weighted, physical scroll feel
- Hover: `scale(0.98)` on press, stat cards `translateX(-4px)`
- All GPU-accelerated (transform + opacity only)

---

## 2. Site Architecture

```
/[locale]/                    → Homepage
/[locale]/about/              → About overview
/[locale]/about/maa/          → Shri Radhe Guru Maa
/[locale]/about/society/      → The Society (registration, mission)
/[locale]/about/leadership/   → Leadership & trustees
/[locale]/seva/               → Our Seva overview (bento grid + impact dashboard)
/[locale]/seva/healthcare/    → Dialysis, ambulance, camps
/[locale]/seva/financial-aid/ → Pensions, one-time aid, marriage assistance
/[locale]/seva/disaster-relief/ → Flood relief, earthquake relief
/[locale]/seva/janseva/       → Divyang seva, distributions
/[locale]/seva/gaushala/      → Gaushala support
/[locale]/events/             → Upcoming + past events
/[locale]/get-involved/donate/ → Donation page (Razorpay + QR + bank)
/[locale]/get-involved/volunteer/ → Volunteer signup
/[locale]/get-involved/csr/   → Corporate partnerships
/[locale]/gallery/            → Photo + video gallery
/[locale]/transparency/       → Registration, reports, fund utilization
/[locale]/contact/            → Contact info + form
```

Locale values: `en` (English), `hi` (Hindi). Phase 2: `mr` (Marathi), `pa` (Punjabi).

---

## 3. Homepage Sections

1. **Hero** — "सेवा" watermark, "Compassion in *every* seva" headline, crimson CTA, 3 stat cards
2. **Trust Bar** — Registration S/2930/SDM/NW/2017, Est. 2017, 80G Certified
3. **About Strip** — One-liner about society + Maa's photo placeholder
4. **Seva Bento Grid** — Featured dialysis card (full width) + 4-5 programme cards with impact numbers
5. **Impact Counter** — 4 animated counters on scroll
6. **Disaster Relief Story** — Punjab flood village adoption narrative + photo placeholders
7. **Upcoming Events** — Next 2-3 event cards
8. **Donate CTA** — Preset amounts with bilingual impact labels
9. **Footer** — 4-column: Quick Links, Our Seva, Connect, Legal. Both addresses.

---

## 4. Bilingual Strategy

- English + Hindi coexist on every page (not a language toggle)
- Headlines in English with Hindi subtitle underneath
- Section titles bilingual: "Our Seva | हमारी सेवाएं"
- Body text: English primary, Hindi secondary in lighter weight
- All meta tags, JSON-LD structured data in both languages
- `hreflang` tags for `en-IN` and `hi-IN`
- URL slugs in English, page titles bilingual
- Hindi SEO keywords: श्री राधे माँ चैरिटेबल सोसाइटी, मुफ्त डायलिसिस, दान करें, मासिक पेंशन, दिव्यांग सेवा, बाढ़ राहत, भजन कीर्तन, 80G टैक्स छूट, समाज सेवा, जनसेवा अभियान

---

## 5. Donation System

### Payment Methods (single page)
1. **Razorpay** — UPI, cards, net banking, wallets (primary)
2. **QR Code** — Static UPI QR displayed on page
3. **Bank Transfer** — Account details with copy buttons

### Impact-Linked Amounts
| Amount | Impact (EN) | Impact (HI) |
|--------|-------------|-------------|
| ₹500 | 1 Dialysis Session | 1 डायलिसिस सेशन |
| ₹1,000 | 1 Month Pension for an Elder | 1 माह पेंशन |
| ₹2,500 | Marriage Assistance Kit (5 items) | विवाह सहायता किट |
| ₹5,000 | Wheelchair or Instrument for Divyang | दिव्यांग हेतु व्हीलचेयर |
| ₹10,000 | Flood Relief for One Family | एक परिवार हेतु बाढ़ राहत |
| Custom | Your Amount | अपनी राशि |

### Form Fields
Name, Phone/Email, Amount, One-time/Monthly, PAN (optional for 80G), Payment method

### Trust Signals
- 80G badge, registration number, "100% goes to seva", Razorpay verified, SSL

---

## 6. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 4 |
| Animation | GSAP + Lenis |
| Fonts | Instrument Serif, Space Grotesk, Noto Sans Devanagari, Fraunces (self-hosted) |
| i18n | next-intl |
| Payment | Razorpay JS SDK |
| Forms | React Hook Form + Zod |
| CMS | MDX (Phase 1) → Sanity (Phase 2) |
| Images | Next.js Image (WebP/AVIF, lazy load, blur placeholder) |
| Hosting | Vercel |
| Analytics | GA4 + GTM |
| SEO | next-sitemap + JSON-LD (NonProfit, Event schemas) |

### Performance Targets
- LCP < 2.5s
- CLS near zero
- Lighthouse 90+ all metrics
- GPU-only animations

---

## 7. Content Strategy

### Phase 1 (Launch)
- All pages with placeholder images (clear labels: "Photo coming soon")
- Real programme data and impact numbers from existing materials
- Bilingual content for all pages
- 3-5 past events documented
- Donation system fully functional

### Phase 2 (Post-Launch)
- Real photos/videos added as available
- Blog/news section for updates
- Marathi + Punjabi language support
- Sanity CMS for content team updates
- Newsletter signup
- Volunteer portal

---

## 8. Charitable Programmes (Content Source)

### Healthcare
- Free Dialysis Centre — Anand Hospital, Dahisar East, Mumbai 400068 (with Taramati Foundation)
- Free Ambulance — Satyam Charitable Hospital
- Blood donation camps, eye/dental check-up camps

### Financial Aid
- Monthly pensions (100+ families)
- One-time financial aid
- Marriage assistance (5 items per family)
- Government contributions: PM Cares ₹10L, Delhi CM ₹5L, Punjab CM ₹5L, Maharashtra CM ₹5L

### Disaster Relief
- Punjab floods — Islampur village adoption, home reconstruction
- Kerala, Nepal, Maharashtra flood relief

### Janseva Abhiyan
- Divyang seva — wheelchairs, instruments for specially abled
- Blanket, clothing, food, essential items distribution

### Other
- Gaushala donations
- Golden Temple utensils (2018)
- Spiritual events: Bhajan Jamming, Sukhmani Sahib Paath, Bhagwat Katha, Jagran, Langar

### Two Entities
- **Society (Delhi):** Plot 5, Pocket-11, Sector-5, Rohini 110085 — 95608 00343
- **Trust (Mumbai):** Shree Ram Trade Centre, 6th Floor, Borivali West 400092 — 98209 69020
