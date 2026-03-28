# Shri Radhe Maa Charitable Society — Project Guide

## Overview
Official website + admin dashboard for Shri Radhe Maa Charitable Society (Reg. S/2930/SDM/NW/2017). Bilingual (English + Hindi) webapp with 30+ public pages, admin panel, and mobile-first design.

**Important:** This is the *society's* website — keep it distinct from Shri Radhe Guru Maa's personal brand/social media.

## Tech Stack
- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript 5
- **Styling:** Tailwind CSS 4 with Sacred Modern design system
- **i18n:** next-intl with `[locale]` dynamic segment (en/hi)
- **Animations:** GSAP 3.14 + Lenis smooth scroll
- **Payments:** Razorpay integration
- **Database:** Supabase (credentials in .env.local)
- **Fonts:** Instrument Serif, Space Grotesk, Noto Devanagari, Fraunces

## Design System: "Sacred Modern"
- **Mobile-first:** Most users are on mobile phones (India). Design for 375px first, scale up.
- **Backgrounds:** Pure white `#FFFFFF` + warm cream `#FAF7F2` alternating sections
- **Cards on white:** Use `bg-cream` | **Cards on cream:** Use `bg-white`
- **Accents:** Crimson `#C41E3A` for primary, Saffron `#DAA520` for secondary
- **Text:** warm-900 headings, warm-600 body, warm-500 labels
- **Border radius:** `rounded-2xl` (16px) cards, `rounded-lg` (8px) buttons, `rounded-full` navbar
- **Navbar:** Floating centered pill with logo inside, nav links, crimson donate button
- **Footer:** Cream `#FAF7F2` background, logo + links + offices
- **Animations:** Expo ease `cubic-bezier(0.16, 1, 0.3, 1)`, scroll reveals `translateY(20px)`, no blur
- **Touch targets:** Minimum 44px for all interactive elements

## Project Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout (html/body, fonts, globals.css)
│   ├── globals.css             # Design tokens, section utilities
│   ├── [locale]/               # Public pages (i18n: en/hi)
│   │   ├── layout.tsx          # Locale layout (Navbar, Footer, WhatsApp, Cookie)
│   │   ├── page.tsx            # Homepage
│   │   ├── about/              # maa, society, leadership
│   │   ├── seva/               # healthcare, financial-aid, disaster-relief, janseva, gaushala
│   │   ├── get-involved/       # donate, csr, volunteer
│   │   ├── stories/            # Beneficiary stories + [id] detail
│   │   ├── blog/               # News + [slug] detail
│   │   ├── campaigns/          # Sponsor-a-cause + [slug] detail
│   │   ├── contact/, gallery/, events/, transparency/
│   │   ├── impact/             # Interactive donation calculator
│   │   ├── donors/             # Donor recognition wall
│   │   ├── seva-map/           # Operational locations
│   │   ├── seva-subscriptions/ # Monthly giving tiers
│   │   ├── annual-report/      # Interactive annual report
│   │   ├── faq/, 80g/, press/, partnerships/
│   │   └── privacy-policy/, terms/, refund-policy/
│   └── admin/                  # Dashboard (NO i18n, excluded from middleware)
│       ├── layout.tsx          # Sidebar + responsive hamburger
│       └── [module]/page.tsx   # blog, events, stories, campaigns, donations, gallery, messages, subscribers, settings, users
├── components/
│   ├── ui/                     # Button, Card, Badge, SectionHeader, ScrollReveal, AnimatedCounter
│   ├── home/                   # Hero, TrustBar, ImpactCounter, SevaGrid, AboutStrip, DonateCTA, EventCards, NewsletterStrip
│   ├── layout/                 # Navbar, MobileNav, Footer, SocietyBanner, WhatsAppButton, CookieConsent, LenisProvider
│   ├── contact/                # ContactForm
│   ├── donate/                 # DonationForm, BankDetails, QRCode, ImpactAmounts
│   └── gallery/                # GalleryGrid
├── data/                       # Static JSON data (stories, blog, campaigns, impact/FAQs)
├── lib/                        # utils.ts, seo.ts, fonts.ts, razorpay.ts
├── messages/                   # en.json, hi.json translation files
├── i18n/                       # Routing config
└── middleware.ts               # i18n middleware (excludes /admin, /api)
```

## Key Data
- **Phone:** 9560800343 | **Email:** shriradhemaacharitablesociety@gmail.com
- **Bank:** HDFC 50100214648162, IFSC HDFC0002072, PAN AAUAS1740G
- **Registration:** S/2930/SDM/NW/2017 | **80G Certified**
- **Delhi:** Plot 5, Pocket-11, Sector-5, Rohini 110085
- **Mumbai:** Shree Ram Trade Centre, 6th Floor, Borivali (W) 400092

## Routing
- `/admin` is excluded from i18n middleware (matcher in middleware.ts)
- Admin layout is a `<div>` wrapper (root layout provides `<html>/<body>`)
- Locale layout wraps public pages with Navbar, Footer, WhatsApp, CookieConsent

## Commands
```bash
npm run dev          # Start dev server (port 3000)
npx next build       # Production build
npm run lint         # ESLint
npx playwright test  # E2E tests
```

## Deployment
- **GitHub:** shriradhemaacharitablesociety/shri-radhe-maa-charitable-society
- **Vercel:** shriradhemaacharitablesociety@gmail.com
- **Supabase:** https://gbfogimmzokajmslecbp.supabase.co

## Design Spec
Full spec: `docs/superpowers/specs/2026-03-28-sacred-modern-redesign.md`
