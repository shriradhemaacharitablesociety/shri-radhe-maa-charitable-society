# Shri Radhe Maa Charitable Society — Project Guide

## Overview
Official website for Shri Radhe Maa Charitable Society (Reg. S/2930/SDM/NW/2017), a registered charitable organisation based in Delhi. Bilingual (English + Hindi) webapp showcasing the society's seva programmes, events, donations, and impact.

**Important:** This is the *society's* website — keep it distinct from Shri Radhe Guru Maa's personal brand/social media.

## Tech Stack
- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript 5
- **Styling:** Tailwind CSS 4 with Sacred Modern design system
- **i18n:** next-intl with `[locale]` dynamic segment (en/hi)
- **Animations:** GSAP 3.14 + Lenis smooth scroll
- **Payments:** Razorpay integration
- **Data:** Static JSON in `/src/data/` (Supabase migration planned)
- **Charts:** Recharts (admin dashboard)
- **Maps:** Leaflet.js (seva map)
- **Rich Text:** TipTap (admin CMS)
- **Testing:** Playwright
- **Fonts:** Instrument Serif, Space Grotesk, Noto Devanagari, Fraunces

## Design System: "Sacred Modern"
- **Philosophy:** Clean white canvas with warm cultural accents. Not corporate, not heavy — spiritual and credible.
- **Backgrounds:** Pure white `#FFFFFF` for content sections, warm cream `#FAF7F2` for alternating sections. Sections alternate for visual rhythm.
- **Cards on white sections:** Use `bg-cream` (cream on white = always visible)
- **Cards on cream sections:** Use `bg-white` with subtle border (white on cream = always visible)
- **Typography:** Serif headings (Instrument Serif), sans body (Space Grotesk), Devanagari for Hindi (Noto Sans Devanagari), stats (Fraunces)
- **Accents:** Crimson `#C41E3A` for primary (CTAs, stats, headings), Saffron `#DAA520` for secondary (badges, decorative)
- **Border radius:** `16px` cards, `8px` buttons, `10px` inputs
- **Navbar:** Full-width horizontal, white backdrop-blur, bottom border (NOT pill shape)
- **Footer:** Cream `#FAF7F2` background, NOT dark
- **Animations:** Expo ease `cubic-bezier(0.16, 1, 0.3, 1)`, scroll reveals, hover translateY(-2px)

## Project Structure
```
src/
├── app/
│   ├── [locale]/              # Public pages (i18n)
│   │   ├── about/             # maa, society, leadership
│   │   ├── seva/              # gaushala, healthcare, financial-aid, disaster-relief, janseva
│   │   ├── get-involved/      # donate, csr, volunteer
│   │   ├── stories/           # Beneficiary stories
│   │   ├── blog/              # News and updates
│   │   ├── campaigns/         # Sponsor-a-cause
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── events/
│   │   ├── transparency/
│   │   ├── impact/            # Impact calculator
│   │   ├── donors/            # Donor wall
│   │   ├── seva-map/          # Interactive map
│   │   ├── faq/
│   │   ├── 80g/               # Tax benefits
│   │   ├── press/             # Media coverage
│   │   ├── partnerships/
│   │   ├── seva-subscriptions/
│   │   ├── annual-report/
│   │   ├── privacy-policy/
│   │   ├── terms/
│   │   └── refund-policy/
│   └── admin/                 # Dashboard (no i18n)
│       ├── layout.tsx
│       ├── page.tsx            # Dashboard home
│       ├── blog/
│       ├── events/
│       ├── stories/
│       ├── campaigns/
│       ├── donations/
│       ├── gallery/
│       ├── messages/
│       ├── subscribers/
│       ├── users/
│       └── settings/
├── components/
│   ├── ui/                    # Design system primitives
│   ├── home/                  # Homepage sections
│   ├── layout/                # Navbar, Footer, WhatsApp, CookieConsent
│   ├── admin/                 # Dashboard components
│   ├── contact/
│   ├── donate/
│   ├── blog/
│   ├── stories/
│   ├── campaigns/
│   └── gallery/
├── data/                      # Static JSON data files
├── lib/                       # Utilities
├── messages/                  # i18n translations
└── middleware.ts
```

## Key Data
- **Phone:** 9560800343
- **Email:** shriradhemaacharitablesociety@gmail.com
- **Bank:** HDFC 50100214648162, IFSC HDFC0002072
- **PAN:** AAUAS1740G
- **Registration:** S/2930/SDM/NW/2017

## Commands
```bash
npm run dev          # Start dev server
npx next build       # Production build
npm run lint         # ESLint
npx playwright test  # E2E tests
```

## Deployment
- GitHub + Vercel on shriradhemaacharitablesociety@gmail.com

## Design Spec
Full spec: `docs/superpowers/specs/2026-03-28-sacred-modern-redesign.md`
