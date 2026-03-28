# Shri Radhe Maa Charitable Society Webapp — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual (EN+HI) charity webapp with Saffron & Crimson Sacred Minimalism design, donation system, and full programme showcase.

**Architecture:** Next.js 14 App Router with next-intl for bilingual routing (`/en/...`, `/hi/...`). Tailwind CSS 4 for styling with custom design tokens matching the Saffron & Crimson palette. GSAP + Lenis for scroll-driven animations. Razorpay for payments. MDX for programme content. Vercel for hosting.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS 4, GSAP, Lenis, next-intl, Razorpay JS SDK, React Hook Form, Zod, MDX, Vercel

---

## File Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Root layout with fonts, Lenis, analytics
│   │   ├── page.tsx                # Homepage (hero, seva grid, impact, events, donate CTA)
│   │   ├── about/
│   │   │   ├── page.tsx            # About overview
│   │   │   ├── maa/page.tsx        # Shri Radhe Guru Maa bio
│   │   │   ├── society/page.tsx    # Society info
│   │   │   └── leadership/page.tsx # Leadership team
│   │   ├── seva/
│   │   │   ├── page.tsx            # Seva overview with bento grid
│   │   │   ├── healthcare/page.tsx
│   │   │   ├── financial-aid/page.tsx
│   │   │   ├── disaster-relief/page.tsx
│   │   │   ├── janseva/page.tsx
│   │   │   └── gaushala/page.tsx
│   │   ├── events/page.tsx         # Events listing
│   │   ├── get-involved/
│   │   │   ├── donate/page.tsx     # Donation page
│   │   │   ├── volunteer/page.tsx  # Volunteer signup
│   │   │   └── csr/page.tsx        # Corporate partnerships
│   │   ├── gallery/page.tsx        # Photo + video gallery
│   │   ├── transparency/page.tsx   # Registration, reports
│   │   └── contact/page.tsx        # Contact form + info
│   ├── api/
│   │   ├── razorpay/
│   │   │   ├── create-order/route.ts   # Create Razorpay order
│   │   │   └── verify/route.ts         # Verify payment signature
│   │   └── contact/route.ts            # Contact form submission
│   ├── layout.tsx                  # Root HTML layout
│   └── globals.css                 # Tailwind + custom CSS
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Floating pill nav
│   │   ├── MobileNav.tsx           # Mobile hamburger + overlay
│   │   └── Footer.tsx              # 4-column footer
│   ├── home/
│   │   ├── Hero.tsx                # Hero with सेवा watermark + stats
│   │   ├── TrustBar.tsx            # Registration + certifications strip
│   │   ├── AboutStrip.tsx          # Brief about section
│   │   ├── SevaGrid.tsx            # Bento grid of programmes
│   │   ├── ImpactCounter.tsx       # Animated stat counters
│   │   ├── DisasterStory.tsx       # Punjab flood story section
│   │   ├── EventCards.tsx          # Upcoming events
│   │   └── DonateCTA.tsx           # Homepage donate call-to-action
│   ├── seva/
│   │   ├── ProgramCard.tsx         # Individual programme card
│   │   └── ImpactDashboard.tsx     # Overview stats for seva page
│   ├── donate/
│   │   ├── DonationForm.tsx        # Full donation form with Razorpay
│   │   ├── ImpactAmounts.tsx       # Preset amount selector
│   │   ├── QRCode.tsx              # UPI QR display
│   │   └── BankDetails.tsx         # Bank transfer info
│   └── ui/
│       ├── Button.tsx              # Pill button (primary/ghost/gold)
│       ├── Card.tsx                # Frosted glass card
│       ├── Badge.tsx               # Eyebrow pill badge
│       ├── AnimatedCounter.tsx     # GSAP number counter
│       ├── ScrollReveal.tsx        # GSAP scroll-triggered reveal wrapper
│       └── SectionHeader.tsx       # Bilingual section title
├── lib/
│   ├── fonts.ts                    # Font loading config (next/font/google)
│   ├── razorpay.ts                 # Razorpay client helpers
│   ├── analytics.ts                # GA4 event helpers
│   └── seo.ts                      # JSON-LD schema generators
├── messages/
│   ├── en.json                     # English translations
│   └── hi.json                     # Hindi translations
├── i18n/
│   ├── request.ts                  # next-intl request config
│   └── routing.ts                  # next-intl routing config
├── content/
│   ├── seva/                       # MDX programme descriptions (future)
│   └── events/                     # MDX event descriptions (future)
├── middleware.ts                    # next-intl locale detection + redirect
├── tailwind.config.ts              # Custom design tokens
└── public/
    └── images/
        └── placeholder.svg         # Placeholder for photos
```

---

## Task 1: Project Scaffold + Design Tokens

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next.config.ts`, `src/app/layout.tsx`, `src/app/globals.css`, `src/lib/fonts.ts`, `.gitignore`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd "/Users/karankashyap/apps/Shri Radhe Maa Charitable Society"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

- [ ] **Step 2: Install dependencies**

```bash
npm install gsap @studio-freight/lenis next-intl react-hook-form zod @hookform/resolvers razorpay
npm install -D @types/node
```

- [ ] **Step 3: Configure Tailwind with Saffron & Crimson design tokens**

Write `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: "#FFFAF0",
          100: "#FFF8ED",
          200: "#FFF4E3",
          300: "#FFEFD4",
          400: "#FFE4B8",
          500: "#DAA520",
          600: "#B8860B",
          700: "#8B6914",
          800: "#5C4510",
          900: "#2E220A",
        },
        crimson: {
          50: "#FFF5F6",
          100: "#FFE0E4",
          200: "#FFB3BC",
          300: "#FF8090",
          400: "#E8334D",
          500: "#C41E3A",
          600: "#A01530",
          700: "#8B0000",
          800: "#660018",
          900: "#40000F",
        },
        warm: {
          50: "#FDFBF7",
          100: "#FAF6EF",
          200: "#F5EDE0",
          800: "#2a1810",
          900: "#1a0f08",
        },
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "serif"],
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        devanagari: ["var(--font-noto-devanagari)", "sans-serif"],
        stat: ["var(--font-fraunces)", "serif"],
      },
      borderRadius: {
        pill: "100px",
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "slide-reveal": "slideReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "orb-float": "orbFloat 10s ease-in-out infinite",
        "line-grow": "lineGrow 2s cubic-bezier(0.16, 1, 0.3, 1) infinite",
      },
      keyframes: {
        slideReveal: {
          from: { transform: "translateY(40px)", opacity: "0", filter: "blur(8px)" },
          to: { transform: "translateY(0)", opacity: "1", filter: "blur(0)" },
        },
        orbFloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.7" },
          "50%": { transform: "translate(-10px, -8px) scale(1.05)", opacity: "1" },
        },
        lineGrow: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 4: Configure fonts**

Write `src/lib/fonts.ts`:

```typescript
import { Instrument_Serif, Space_Grotesk, Noto_Sans_Devanagari, Fraunces } from "next/font/google";

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-fraunces",
  display: "swap",
});
```

- [ ] **Step 5: Write global CSS**

Write `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  ::selection {
    background: rgba(196, 30, 58, 0.15);
    color: #1a0f08;
  }

  body {
    background: linear-gradient(170deg, #FFF8ED 0%, #FFF4E3 35%, #FFFAF0 100%);
    color: #1a0f08;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Noise texture overlay */
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity: 0.015;
    pointer-events: none;
    z-index: 50;
  }
}
```

- [ ] **Step 6: Write root layout**

Write `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { instrumentSerif, spaceGrotesk, notoDevanagari, fraunces } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shri Radhe Maa Charitable Society | श्री राधे माँ चैरिटेबल सोसाइटी",
  description:
    "Serving humanity through compassion — free dialysis, disaster relief, monthly pensions, divyang seva. समाज सेवा, मुफ्त डायलिसिस, बाढ़ राहत, मासिक पेंशन, दिव्यांग सेवा।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${spaceGrotesk.variable} ${notoDevanagari.variable} ${fraunces.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

- [ ] **Step 7: Create placeholder page to verify setup**

Write `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-5xl text-warm-900 tracking-tight">
          Compassion in <em className="text-crimson-500 italic">every</em>{" "}
          <span className="text-saffron-600">seva</span>
        </h1>
        <p className="font-devanagari text-saffron-600/50 text-lg mt-3">
          सेवा परमो धर्मः — जन सेवा ही प्रभु सेवा
        </p>
      </div>
    </main>
  );
}
```

- [ ] **Step 8: Run dev server and verify**

```bash
npm run dev
```

Expected: Page at localhost:3000 shows "Compassion in every seva" with Instrument Serif font, crimson "every", gold "seva", and Devanagari subtitle on saffron gradient background.

- [ ] **Step 9: Initialize git and commit**

```bash
git init
echo "node_modules\n.next\n.env*.local\n.superpowers" > .gitignore
git add .
git commit -m "feat: scaffold Next.js project with Saffron & Crimson design tokens"
```

---

## Task 2: Bilingual (i18n) Setup

**Files:**
- Create: `src/i18n/routing.ts`, `src/i18n/request.ts`, `src/middleware.ts`, `src/messages/en.json`, `src/messages/hi.json`, `src/app/[locale]/layout.tsx`, `src/app/[locale]/page.tsx`
- Modify: `next.config.ts`

- [ ] **Step 1: Configure next-intl routing**

Write `src/i18n/routing.ts`:

```typescript
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "hi"],
  defaultLocale: "en",
});
```

Write `src/i18n/request.ts`:

```typescript
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as "en" | "hi")) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

- [ ] **Step 2: Create middleware for locale detection**

Write `src/middleware.ts`:

```typescript
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
```

- [ ] **Step 3: Update next.config.ts**

Write `next.config.ts`:

```typescript
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig = {};

export default withNextIntl(nextConfig);
```

- [ ] **Step 4: Write English translations**

Write `src/messages/en.json`:

```json
{
  "nav": {
    "about": "About",
    "seva": "Our Seva",
    "events": "Events",
    "impact": "Impact",
    "gallery": "Gallery",
    "donate": "Donate",
    "contact": "Contact"
  },
  "hero": {
    "badge": "Established 2017 · Delhi",
    "title_1": "Compassion",
    "title_2": "in",
    "title_3": "every",
    "title_4": "seva",
    "sanskrit": "सेवा परमो धर्मः — जन सेवा ही प्रभु सेवा",
    "description": "Free dialysis. Flood relief. Monthly pensions. Marriage aid. Divyang instruments. Under the divine guidance of Shri Radhe Guru Maa — we serve.",
    "cta_primary": "Explore Our Work",
    "cta_secondary": "Watch Stories"
  },
  "stats": {
    "relief_amount": "₹25L+",
    "relief_label": "Relief Funds Deployed",
    "relief_detail": "PM Cares · Delhi CM · Punjab CM · Maharashtra",
    "dialysis_amount": "Free 24/7",
    "dialysis_label": "Dialysis Centre",
    "dialysis_detail": "Anand Hospital, Dahisar, Mumbai",
    "families_amount": "500+",
    "families_label": "Families Served",
    "families_detail": "Pensions · Wheelchairs · Marriage Aid"
  },
  "trust": {
    "registration": "Regd. S/2930/SDM/NW/2017",
    "established": "Est. Aug 2017",
    "certified": "80G Certified"
  },
  "seva": {
    "title": "Our Seva",
    "title_hi": "हमारी सेवाएं",
    "dialysis_title": "Free Dialysis Centre",
    "dialysis_stat": "24/7",
    "dialysis_desc": "Anand Hospital, Dahisar, Mumbai — in partnership with Taramati Foundation",
    "pension_title": "Monthly Pensions",
    "pension_stat": "100+",
    "pension_desc": "Families supported monthly",
    "disaster_title": "Disaster Relief",
    "disaster_stat": "₹25L+",
    "disaster_desc": "Punjab, Kerala, Nepal floods",
    "divyang_title": "Divyang Seva",
    "divyang_stat": "500+",
    "divyang_desc": "Wheelchairs & instruments",
    "marriage_title": "Marriage Assistance",
    "marriage_stat": "5 Items",
    "marriage_desc": "Per family in need",
    "gaushala_title": "Gaushala Support",
    "gaushala_desc": "Donations to cow shelters"
  },
  "impact": {
    "title": "Our Impact",
    "title_hi": "हमारा प्रभाव",
    "families": "Families Served",
    "funds": "Relief Funds",
    "years": "Years of Seva",
    "programs": "Active Programs"
  },
  "events": {
    "title": "Upcoming Events",
    "title_hi": "आगामी कार्यक्रम",
    "view_all": "View All Events"
  },
  "donate": {
    "title": "Your Contribution Transforms Lives",
    "title_hi": "आपका योगदान जीवन बदलता है",
    "cta": "Donate Now",
    "amount_500": "1 Dialysis Session",
    "amount_1000": "1 Month Pension for an Elder",
    "amount_2500": "Marriage Assistance Kit (5 items)",
    "amount_5000": "Wheelchair or Instrument for Divyang",
    "amount_10000": "Flood Relief for One Family",
    "amount_custom": "Your Amount",
    "onetime": "One Time",
    "monthly": "Monthly",
    "name": "Full Name",
    "email": "Email",
    "phone": "Phone",
    "pan": "PAN (for 80G receipt)",
    "pan_optional": "Optional",
    "trust_80g": "50% tax deduction under Section 80G",
    "trust_100": "100% of your donation goes to seva",
    "qr_title": "Scan & Pay via UPI",
    "bank_title": "Bank Transfer",
    "thank_you": "Thank you for your generous donation!"
  },
  "footer": {
    "quick_links": "Quick Links",
    "our_seva": "Our Seva",
    "connect": "Connect",
    "legal": "Legal",
    "delhi_office": "Delhi Office",
    "mumbai_office": "Mumbai Office",
    "copyright": "© 2024 Shri Radhe Maa Charitable Society. All rights reserved.",
    "delhi_address": "Plot No. 5, Pocket-11, Sector-5, Rohini, New Delhi — 110085",
    "mumbai_address": "Shree Ram Trade Centre, 6th Floor, S.V.P. Road, Borivali (W), Mumbai — 400092"
  },
  "contact": {
    "title": "Get in Touch",
    "title_hi": "संपर्क करें",
    "form_name": "Your Name",
    "form_email": "Email Address",
    "form_message": "Your Message",
    "form_submit": "Send Message"
  },
  "common": {
    "scroll": "Scroll to explore",
    "read_more": "Read More",
    "view_all": "View All"
  }
}
```

- [ ] **Step 5: Write Hindi translations**

Write `src/messages/hi.json`:

```json
{
  "nav": {
    "about": "हमारे बारे में",
    "seva": "हमारी सेवाएं",
    "events": "कार्यक्रम",
    "impact": "प्रभाव",
    "gallery": "गैलरी",
    "donate": "दान करें",
    "contact": "संपर्क"
  },
  "hero": {
    "badge": "स्थापित 2017 · दिल्ली",
    "title_1": "करुणा",
    "title_2": "से",
    "title_3": "हर",
    "title_4": "सेवा",
    "sanskrit": "सेवा परमो धर्मः — जन सेवा ही प्रभु सेवा",
    "description": "निःशुल्क डायलिसिस। बाढ़ राहत। मासिक पेंशन। विवाह सहायता। दिव्यांग उपकरण। श्री राधे गुरु माँ के दिव्य मार्गदर्शन में — हम सेवा करते हैं।",
    "cta_primary": "हमारा कार्य देखें",
    "cta_secondary": "कहानियाँ देखें"
  },
  "stats": {
    "relief_amount": "₹25L+",
    "relief_label": "राहत कोष",
    "relief_detail": "पीएम केयर्स · दिल्ली सीएम · पंजाब सीएम · महाराष्ट्र",
    "dialysis_amount": "निःशुल्क 24/7",
    "dialysis_label": "डायलिसिस सेंटर",
    "dialysis_detail": "आनंद हॉस्पिटल, दहिसर, मुंबई",
    "families_amount": "500+",
    "families_label": "परिवारों की सेवा",
    "families_detail": "पेंशन · व्हीलचेयर · विवाह सहायता"
  },
  "trust": {
    "registration": "पंजी. S/2930/SDM/NW/2017",
    "established": "स्था. अगस्त 2017",
    "certified": "80G प्रमाणित"
  },
  "seva": {
    "title": "हमारी सेवाएं",
    "title_hi": "हमारी सेवाएं",
    "dialysis_title": "निःशुल्क डायलिसिस सेंटर",
    "dialysis_stat": "24/7",
    "dialysis_desc": "आनंद हॉस्पिटल, दहिसर, मुंबई — तारामती चैरिटेबल फाउंडेशन के सहयोग से",
    "pension_title": "मासिक पेंशन",
    "pension_stat": "100+",
    "pension_desc": "परिवारों को मासिक सहायता",
    "disaster_title": "आपदा राहत",
    "disaster_stat": "₹25L+",
    "disaster_desc": "पंजाब, केरल, नेपाल बाढ़ राहत",
    "divyang_title": "दिव्यांग सेवा",
    "divyang_stat": "500+",
    "divyang_desc": "व्हीलचेयर और उपकरण",
    "marriage_title": "विवाह सहायता",
    "marriage_stat": "5 सामान",
    "marriage_desc": "प्रति जरूरतमंद परिवार",
    "gaushala_title": "गौशाला सहायता",
    "gaushala_desc": "गौशालाओं को दान"
  },
  "impact": {
    "title": "हमारा प्रभाव",
    "title_hi": "हमारा प्रभाव",
    "families": "परिवारों की सेवा",
    "funds": "राहत कोष",
    "years": "सेवा के वर्ष",
    "programs": "सक्रिय कार्यक्रम"
  },
  "events": {
    "title": "आगामी कार्यक्रम",
    "title_hi": "आगामी कार्यक्रम",
    "view_all": "सभी कार्यक्रम देखें"
  },
  "donate": {
    "title": "आपका योगदान जीवन बदलता है",
    "title_hi": "आपका योगदान जीवन बदलता है",
    "cta": "दान करें",
    "amount_500": "1 डायलिसिस सेशन",
    "amount_1000": "1 माह पेंशन",
    "amount_2500": "विवाह सहायता किट (5 सामान)",
    "amount_5000": "दिव्यांग हेतु व्हीलचेयर",
    "amount_10000": "एक परिवार हेतु बाढ़ राहत",
    "amount_custom": "अपनी राशि",
    "onetime": "एक बार",
    "monthly": "मासिक",
    "name": "पूरा नाम",
    "email": "ईमेल",
    "phone": "फोन",
    "pan": "पैन (80G रसीद हेतु)",
    "pan_optional": "वैकल्पिक",
    "trust_80g": "धारा 80G के तहत 50% कर छूट",
    "trust_100": "आपके दान का 100% सेवा में जाता है",
    "qr_title": "UPI से स्कैन करें और भुगतान करें",
    "bank_title": "बैंक ट्रांसफर",
    "thank_you": "आपके उदार दान के लिए धन्यवाद!"
  },
  "footer": {
    "quick_links": "त्वरित लिंक",
    "our_seva": "हमारी सेवाएं",
    "connect": "जुड़ें",
    "legal": "कानूनी",
    "delhi_office": "दिल्ली कार्यालय",
    "mumbai_office": "मुंबई कार्यालय",
    "copyright": "© 2024 श्री राधे माँ चैरिटेबल सोसाइटी। सर्वाधिकार सुरक्षित।",
    "delhi_address": "प्लॉट नं. 5, पॉकेट-11, सेक्टर-5, रोहिणी, नई दिल्ली — 110085",
    "mumbai_address": "श्री राम ट्रेड सेंटर, 6ठी मंजिल, एस.वी.पी. रोड, बोरीवली (प.), मुंबई — 400092"
  },
  "contact": {
    "title": "संपर्क करें",
    "title_hi": "संपर्क करें",
    "form_name": "आपका नाम",
    "form_email": "ईमेल पता",
    "form_message": "आपका संदेश",
    "form_submit": "संदेश भेजें"
  },
  "common": {
    "scroll": "और जानने के लिए स्क्रॉल करें",
    "read_more": "और पढ़ें",
    "view_all": "सभी देखें"
  }
}
```

- [ ] **Step 6: Move page to locale route**

Write `src/app/[locale]/layout.tsx`:

```tsx
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { instrumentSerif, spaceGrotesk, notoDevanagari, fraunces } from "@/lib/fonts";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as "en" | "hi")) {
    notFound();
  }

  const messages = useMessages();

  return (
    <html
      lang={locale}
      className={`${instrumentSerif.variable} ${spaceGrotesk.variable} ${notoDevanagari.variable} ${fraunces.variable}`}
    >
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

Write `src/app/[locale]/page.tsx`:

```tsx
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("hero");

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-5xl text-warm-900 tracking-tight">
          {t("title_1")}{" "}
          {t("title_2")}{" "}
          <em className="text-crimson-500 italic">{t("title_3")}</em>{" "}
          <span className="text-saffron-600">{t("title_4")}</span>
        </h1>
        <p className="font-devanagari text-saffron-600/50 text-lg mt-3">
          {t("sanskrit")}
        </p>
      </div>
    </main>
  );
}
```

Delete old `src/app/page.tsx` (replaced by locale version).

- [ ] **Step 7: Verify bilingual routing**

```bash
npm run dev
```

Expected: `localhost:3000` redirects to `/en`. `/en` shows English hero. `/hi` shows Hindi hero.

- [ ] **Step 8: Commit**

```bash
git add .
git commit -m "feat: add bilingual i18n setup with EN + HI translations"
```

---

## Task 3: UI Components (Button, Card, Badge, ScrollReveal, SectionHeader)

**Files:**
- Create: `src/components/ui/Button.tsx`, `src/components/ui/Card.tsx`, `src/components/ui/Badge.tsx`, `src/components/ui/AnimatedCounter.tsx`, `src/components/ui/ScrollReveal.tsx`, `src/components/ui/SectionHeader.tsx`

- [ ] **Step 1: Build Button component**

Write `src/components/ui/Button.tsx`:

```tsx
"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "gold";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-crimson-500 to-crimson-700 text-white shadow-[0_4px_24px_rgba(196,30,58,0.15)] hover:shadow-[0_8px_36px_rgba(196,30,58,0.2)]",
  ghost:
    "text-warm-800/40 border border-warm-800/10 hover:border-warm-800/20 hover:text-warm-800/60",
  gold:
    "text-saffron-600 border border-saffron-500/20 hover:border-saffron-500/40 hover:text-saffron-700",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "rounded-pill px-8 py-4 text-[13px] font-medium tracking-[0.5px] transition-all duration-600 ease-expo",
          "flex items-center gap-2.5",
          "active:scale-[0.98]",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
```

Create `src/lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Install: `npm install clsx tailwind-merge`

- [ ] **Step 2: Build Card component**

Write `src/components/ui/Card.tsx`:

```tsx
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "featured";
}

export function Card({ className, variant = "default", children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-600 ease-expo relative overflow-hidden",
        variant === "default" &&
          "bg-white/45 border border-saffron-500/[0.06] backdrop-blur-sm hover:bg-white/65 hover:border-crimson-500/[0.08] hover:-translate-x-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)]",
        variant === "featured" &&
          "bg-gradient-to-br from-warm-900 to-warm-800 text-white border border-white/5",
        className
      )}
      {...props}
    >
      {/* Left border gradient */}
      <div
        className={cn(
          "absolute top-0 left-0 w-[3px] h-full rounded-full",
          variant === "default" &&
            "bg-gradient-to-b from-crimson-500/30 via-saffron-500/20 to-transparent",
          variant === "featured" &&
            "bg-gradient-to-b from-saffron-500/50 to-transparent"
        )}
      />
      {children}
    </div>
  );
}
```

- [ ] **Step 3: Build Badge component**

Write `src/components/ui/Badge.tsx`:

```tsx
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "crimson" | "gold";
}

export function Badge({ className, variant = "crimson", children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-pill px-4 py-1.5",
        "text-[10px] font-semibold uppercase tracking-[2.5px]",
        variant === "crimson" && "text-crimson-500 bg-crimson-500/[0.06]",
        variant === "gold" && "text-saffron-600 bg-saffron-500/[0.06] border border-saffron-500/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 4: Build AnimatedCounter component**

Write `src/components/ui/AnimatedCounter.tsx`:

```tsx
"use client";

import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`font-stat font-bold leading-none transition-all duration-800 ease-expo ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5"
      } ${className ?? ""}`}
    >
      {value}
    </div>
  );
}
```

- [ ] **Step 5: Build ScrollReveal component**

Write `src/components/ui/ScrollReveal.tsx`:

```tsx
"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-expo ${
        visible
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-10 blur-[8px]"
      } ${className ?? ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 6: Build SectionHeader component**

Write `src/components/ui/SectionHeader.tsx`:

```tsx
interface SectionHeaderProps {
  titleEn: string;
  titleHi: string;
  className?: string;
}

export function SectionHeader({ titleEn, titleHi, className }: SectionHeaderProps) {
  return (
    <div className={className}>
      <h2 className="font-serif text-4xl text-warm-900 tracking-tight">
        {titleEn}
      </h2>
      <p className="font-devanagari text-saffron-600/50 text-lg mt-1">
        {titleHi}
      </p>
    </div>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add .
git commit -m "feat: add UI components — Button, Card, Badge, AnimatedCounter, ScrollReveal, SectionHeader"
```

---

## Task 4: Layout — Navbar + Footer

**Files:**
- Create: `src/components/layout/Navbar.tsx`, `src/components/layout/MobileNav.tsx`, `src/components/layout/Footer.tsx`
- Modify: `src/app/[locale]/layout.tsx`

- [ ] **Step 1: Build Navbar (floating pill)**

Write `src/components/layout/Navbar.tsx`:

```tsx
"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/about" as const, label: t("about") },
    { href: "/seva" as const, label: t("seva") },
    { href: "/events" as const, label: t("events") },
    { href: "/gallery" as const, label: t("gallery") },
    { href: "/contact" as const, label: t("contact") },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-6">
        <div className="flex items-center gap-6 bg-white/45 border border-crimson-500/[0.06] rounded-pill px-6 py-2.5 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.015)]">
          {/* Brand */}
          <Link href="/" className="font-serif text-sm text-saffron-700 whitespace-nowrap">
            श्री राधे माँ
          </Link>

          <div className="w-px h-4 bg-warm-800/[0.08]" />

          {/* Links — desktop */}
          <div className="hidden md:flex items-center gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] text-warm-800/30 tracking-[0.5px] hover:text-crimson-500 transition-colors duration-500 ease-expo"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Donate CTA */}
          <Link
            href="/get-involved/donate"
            className="bg-gradient-to-br from-crimson-500 to-crimson-600 text-white rounded-pill px-5 py-2 text-[11px] font-medium flex items-center gap-2 tracking-[0.5px] transition-all duration-500 ease-expo hover:scale-[1.02] shadow-[0_2px_12px_rgba(196,30,58,0.15)]"
          >
            {t("donate")}
            <span className="w-[18px] h-[18px] rounded-full bg-white/15 flex items-center justify-center text-[9px]">
              →
            </span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-4 h-px bg-warm-800/40" />
            <span className="w-3 h-px bg-warm-800/40" />
          </button>
        </div>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} links={links} />
    </>
  );
}
```

Create `src/i18n/routing.ts` update — add `Link` and `useRouter` exports:

Update `src/i18n/routing.ts`:

```typescript
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "hi"],
  defaultLocale: "en",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
```

- [ ] **Step 2: Build MobileNav**

Write `src/components/layout/MobileNav.tsx`:

```tsx
"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  const t = useTranslations("nav");

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ease-expo ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-warm-900/80 backdrop-blur-2xl"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8 px-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-white/50 text-2xl"
          aria-label="Close menu"
        >
          ✕
        </button>

        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href as any}
            onClick={onClose}
            className={`text-2xl font-serif text-white/80 hover:text-saffron-500 transition-all duration-500 ease-expo ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: open ? `${100 + i * 80}ms` : "0ms" }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/get-involved/donate"
          onClick={onClose}
          className="mt-4 bg-gradient-to-br from-crimson-500 to-crimson-700 text-white rounded-pill px-8 py-4 text-base font-medium"
        >
          {t("donate")} →
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Build Footer**

Write `src/components/layout/Footer.tsx`:

```tsx
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="border-t border-warm-800/[0.05] mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1: Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[2px] text-warm-800/30 font-semibold mb-4">
              {t("quick_links")}
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/about" className="text-sm text-warm-800/40 hover:text-crimson-500 transition-colors">{nav("about")}</Link>
              <Link href="/seva" className="text-sm text-warm-800/40 hover:text-crimson-500 transition-colors">{nav("seva")}</Link>
              <Link href="/events" className="text-sm text-warm-800/40 hover:text-crimson-500 transition-colors">{nav("events")}</Link>
              <Link href="/gallery" className="text-sm text-warm-800/40 hover:text-crimson-500 transition-colors">{nav("gallery")}</Link>
            </div>
          </div>

          {/* Col 2: Our Seva */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[2px] text-warm-800/30 font-semibold mb-4">
              {t("our_seva")}
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/seva/healthcare" className="text-sm text-warm-800/40 hover:text-crimson-500 transition-colors">Healthcare / स्वास्थ्य</Link>
              <Link href="/seva/financial-aid" className="text-sm text-warm-800/40 hover:text-crimson-500 transition-colors">Financial Aid / आर्थिक मदद</Link>
              <Link href="/seva/disaster-relief" className="text-sm text-warm-800/40 hover:text-crimson-500 transition-colors">Disaster Relief / आपदा राहत</Link>
              <Link href="/seva/janseva" className="text-sm text-warm-800/40 hover:text-crimson-500 transition-colors">Janseva / जनसेवा</Link>
            </div>
          </div>

          {/* Col 3: Connect */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[2px] text-warm-800/30 font-semibold mb-4">
              {t("connect")}
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-warm-800/40">
              <a href="https://www.instagram.com/shreeradhemaa" target="_blank" rel="noopener" className="hover:text-crimson-500 transition-colors">Instagram</a>
              <a href="https://www.facebook.com/ShriRadheMaa" target="_blank" rel="noopener" className="hover:text-crimson-500 transition-colors">Facebook</a>
              <a href="https://www.youtube.com/ShreeRadheMaa" target="_blank" rel="noopener" className="hover:text-crimson-500 transition-colors">YouTube</a>
              <a href="mailto:shriradhemaachritablesociety@gmail.com" className="hover:text-crimson-500 transition-colors">Email</a>
              <a href="tel:+919560800343" className="hover:text-crimson-500 transition-colors">+91 95608 00343</a>
            </div>
          </div>

          {/* Col 4: Offices */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[2px] text-warm-800/30 font-semibold mb-4">
              {t("delhi_office")}
            </h4>
            <p className="text-sm text-warm-800/30 leading-relaxed mb-4">
              {t("delhi_address")}
            </p>
            <h4 className="text-[10px] uppercase tracking-[2px] text-warm-800/30 font-semibold mb-2">
              {t("mumbai_office")}
            </h4>
            <p className="text-sm text-warm-800/30 leading-relaxed">
              {t("mumbai_address")}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-warm-800/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-warm-800/20 tracking-[1px] uppercase">
            {t("copyright")}
          </p>
          <div className="flex items-center gap-6 text-[10px] text-warm-800/15 tracking-[1.5px] uppercase">
            <span>Regd. S/2930/SDM/NW/2017</span>
            <span className="w-px h-3 bg-warm-800/[0.08]" />
            <span>80G Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Add Navbar + Footer to locale layout**

Update `src/app/[locale]/layout.tsx` to include `<Navbar />` and `<Footer />` wrapping `{children}`.

- [ ] **Step 5: Verify navigation works**

```bash
npm run dev
```

Expected: Floating pill nav visible at top, footer at bottom. Mobile hamburger works. Donate button styled crimson. All links navigate correctly.

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "feat: add Navbar (floating pill) + MobileNav + Footer with bilingual content"
```

---

## Task 5: Homepage — Hero Section

**Files:**
- Create: `src/components/home/Hero.tsx`
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Build Hero component**

Write `src/components/home/Hero.tsx`:

```tsx
"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Link } from "@/i18n/routing";

export function Hero() {
  const t = useTranslations("hero");
  const s = useTranslations("stats");

  const stats = [
    { num: s("relief_amount"), label: s("relief_label"), detail: s("relief_detail") },
    { num: s("dialysis_amount"), label: s("dialysis_label"), detail: s("dialysis_detail") },
    { num: s("families_amount"), label: s("families_label"), detail: s("families_detail") },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-16">
      {/* Ambient orbs */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.07)_0%,transparent_55%)] -top-[15%] right-[15%] pointer-events-none animate-orb-float" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(196,30,58,0.05)_0%,transparent_55%)] -bottom-[8%] left-[5%] pointer-events-none animate-orb-float [animation-delay:3s]" />

      {/* Thread */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-crimson-500/10 to-transparent z-[2]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left */}
          <div className="flex-1 lg:pr-10">
            <ScrollReveal>
              <Badge variant="gold">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-500" />
                {t("badge")}
              </Badge>
            </ScrollReveal>

            {/* Mega Devanagari watermark */}
            <ScrollReveal delay={100}>
              <div className="font-devanagari text-[120px] font-black leading-[0.85] tracking-[-0.04em] bg-gradient-to-br from-crimson-500/[0.06] to-saffron-500/[0.06] bg-clip-text text-transparent select-none mt-6">
                सेवा
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="font-serif text-[54px] text-warm-900 leading-[1.06] tracking-[-0.03em] -mt-11 relative">
                {t("title_1")}<br />
                {t("title_2")}{" "}
                <em className="text-crimson-500 italic">{t("title_3")}</em>{" "}
                <span className="text-saffron-600">{t("title_4")}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-sm text-warm-800/35 leading-[1.8] mt-5 max-w-[390px]">
                {t("description")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex gap-3 mt-9">
                <Link href="/seva">
                  <Button variant="primary">
                    {t("cta_primary")} <span className="text-[11px] opacity-50">→</span>
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="gold">{t("cta_secondary")}</Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Stats */}
          <div className="lg:flex-[0.6] flex flex-col gap-2 lg:pt-12">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={200 + i * 200}>
                <Card>
                  <AnimatedCounter
                    value={stat.num}
                    className="text-4xl text-crimson-500"
                  />
                  <p className="text-[11px] text-warm-800/30 tracking-[1.5px] uppercase mt-1.5">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-warm-800/15 mt-1">
                    {stat.detail}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update homepage to use Hero**

Write `src/app/[locale]/page.tsx`:

```tsx
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Verify hero renders**

```bash
npm run dev
```

Expected: Full hero section with watermark, stats, animated reveals, ambient orbs on saffron background.

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add Hero section with सेवा watermark, stats, scroll reveals"
```

---

## Task 6: Homepage — TrustBar + AboutStrip + SevaGrid + ImpactCounter

**Files:**
- Create: `src/components/home/TrustBar.tsx`, `src/components/home/AboutStrip.tsx`, `src/components/home/SevaGrid.tsx`, `src/components/home/ImpactCounter.tsx`
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Build TrustBar**

Write `src/components/home/TrustBar.tsx`:

```tsx
import { useTranslations } from "next-intl";

export function TrustBar() {
  const t = useTranslations("trust");

  return (
    <div className="border-y border-warm-800/[0.04] py-5">
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-7 justify-center flex-wrap">
        {[t("registration"), t("established"), t("certified")].map((item, i) => (
          <div key={item} className="flex items-center gap-7">
            <span className="text-[10px] text-warm-800/[0.18] tracking-[1.5px] uppercase">
              {item}
            </span>
            {i < 2 && <span className="w-px h-3 bg-warm-800/[0.08]" />}
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Build AboutStrip**

Write `src/components/home/AboutStrip.tsx`:

```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Link } from "@/i18n/routing";

export function AboutStrip() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="font-serif text-2xl text-warm-900 leading-relaxed">
              Founded under the divine aegis of{" "}
              <span className="text-crimson-500">Shri Radhe Guru Maa</span>,
              we are a registered charitable society dedicated to serving the
              underprivileged across India.
            </p>
            <p className="font-devanagari text-base text-saffron-600/40 mt-3">
              ममतामयी श्री राधे गुरु माँ जी के आशीर्वाद से स्थापित, हम भारत भर में
              वंचितों की सेवा करने वाली एक पंजीकृत चैरिटेबल सोसाइटी हैं।
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-crimson-500 mt-6 hover:gap-3 transition-all duration-500 ease-expo"
            >
              Learn more about us / हमारे बारे में जानें <span>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Build SevaGrid (bento)**

Write `src/components/home/SevaGrid.tsx`:

```tsx
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/Card";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SevaGrid() {
  const t = useTranslations("seva");

  const programs = [
    { key: "dialysis", featured: true, icon: "🏥", badge: "Healthcare" },
    { key: "pension", featured: false, icon: "🤝" },
    { key: "disaster", featured: false, icon: "🌊" },
    { key: "divyang", featured: false, icon: "♿" },
    { key: "marriage", featured: false, icon: "💒" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader titleEn={t("title")} titleHi={t("title_hi")} />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-12">
          {programs.map((prog, i) => (
            <ScrollReveal key={prog.key} delay={i * 100}>
              <Card
                variant={prog.featured ? "featured" : "default"}
                className={prog.featured ? "md:col-span-2" : ""}
              >
                {prog.badge && (
                  <span className="absolute top-3.5 right-3.5 text-[8px] text-saffron-500/60 tracking-[1.5px] uppercase font-semibold">
                    {prog.badge}
                  </span>
                )}
                <div className="text-xl mb-2.5">{prog.icon}</div>
                <h3 className={`text-xs font-semibold tracking-[0.3px] ${prog.featured ? "text-white" : "text-warm-900"}`}>
                  {t(`${prog.key}_title`)}
                </h3>
                <AnimatedCounter
                  value={t(`${prog.key}_stat`)}
                  className={`text-3xl mt-1.5 ${prog.featured ? "text-saffron-500" : "text-crimson-500"}`}
                />
                <p className={`text-[10px] mt-1 tracking-[0.3px] ${prog.featured ? "text-white/40" : "text-warm-800/35"}`}>
                  {t(`${prog.key}_desc`)}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Build ImpactCounter**

Write `src/components/home/ImpactCounter.tsx`:

```tsx
import { useTranslations } from "next-intl";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ImpactCounter() {
  const t = useTranslations("impact");

  const counters = [
    { value: "500+", label: t("families") },
    { value: "₹25L+", label: t("funds") },
    { value: "7+", label: t("years") },
    { value: "15+", label: t("programs") },
  ];

  return (
    <section className="py-20 border-y border-warm-800/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-0">
          {counters.map((counter, i) => (
            <ScrollReveal key={counter.label} delay={i * 150}>
              <div className="text-center px-10 py-4 relative">
                {i < counters.length - 1 && (
                  <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-saffron-500/15 hidden md:block" />
                )}
                <AnimatedCounter
                  value={counter.value}
                  className="text-4xl text-crimson-500"
                />
                <p className="text-[10px] text-warm-800/30 tracking-[1.5px] uppercase mt-2">
                  {counter.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Assemble homepage**

Update `src/app/[locale]/page.tsx`:

```tsx
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { AboutStrip } from "@/components/home/AboutStrip";
import { SevaGrid } from "@/components/home/SevaGrid";
import { ImpactCounter } from "@/components/home/ImpactCounter";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <AboutStrip />
      <SevaGrid />
      <ImpactCounter />
    </main>
  );
}
```

- [ ] **Step 6: Verify and commit**

```bash
npm run dev
git add .
git commit -m "feat: add TrustBar, AboutStrip, SevaGrid (bento), ImpactCounter to homepage"
```

---

## Task 7: Homepage — DonateCTA + EventCards

**Files:**
- Create: `src/components/home/DonateCTA.tsx`, `src/components/home/EventCards.tsx`
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Build DonateCTA**

Write `src/components/home/DonateCTA.tsx`:

```tsx
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Link } from "@/i18n/routing";

export function DonateCTA() {
  const t = useTranslations("donate");

  const amounts = [
    { value: "₹500", impact: t("amount_500"), impactHi: "1 डायलिसिस सेशन" },
    { value: "₹1,000", impact: t("amount_1000"), impactHi: "1 माह पेंशन" },
    { value: "₹5,000", impact: t("amount_5000"), impactHi: "दिव्यांग हेतु व्हीलचेयर" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-4xl text-warm-900 tracking-tight">
            {t("title")}
          </h2>
          <p className="font-devanagari text-saffron-600/50 text-lg mt-2">
            {t("title_hi")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            {amounts.map((a) => (
              <div
                key={a.value}
                className="bg-white/45 border border-saffron-500/[0.06] rounded-2xl px-6 py-5 text-center hover:bg-white/65 hover:border-crimson-500/10 transition-all duration-500 ease-expo"
              >
                <div className="font-stat text-2xl text-crimson-500 font-bold">
                  {a.value}
                </div>
                <p className="text-[11px] text-warm-800/40 mt-1">{a.impact}</p>
                <p className="font-devanagari text-[10px] text-saffron-600/40 mt-0.5">
                  {a.impactHi}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-10">
            <Link href="/get-involved/donate">
              <Button variant="primary" className="mx-auto">
                {t("cta")} / दान करें <span className="text-[11px] opacity-50">→</span>
              </Button>
            </Link>
            <p className="text-[10px] text-warm-800/20 mt-3 tracking-[1px]">
              {t("trust_80g")} · {t("trust_100")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build EventCards**

Write `src/components/home/EventCards.tsx`:

```tsx
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Link } from "@/i18n/routing";

const upcomingEvents = [
  {
    title: "Bhajan Jamming / भजन जैमिंग",
    date: "Coming Soon",
    location: "Mumbai",
    type: "Spiritual",
  },
  {
    title: "Blood Donation Camp / रक्तदान शिविर",
    date: "Coming Soon",
    location: "Delhi",
    type: "Healthcare",
  },
];

export function EventCards() {
  const t = useTranslations("events");

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader titleEn={t("title")} titleHi={t("title_hi")} />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-12">
          {upcomingEvents.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 150}>
              <div className="bg-white/45 border border-saffron-500/[0.06] rounded-2xl p-6 hover:bg-white/65 transition-all duration-500 ease-expo">
                <span className="text-[8px] text-crimson-500 tracking-[1.5px] uppercase font-semibold">
                  {event.type}
                </span>
                <h3 className="font-serif text-xl text-warm-900 mt-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-4 mt-3 text-[11px] text-warm-800/30">
                  <span>{event.date}</span>
                  <span className="w-px h-3 bg-warm-800/10" />
                  <span>{event.location}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-8 text-center">
            <Link
              href="/events"
              className="text-sm text-crimson-500 hover:gap-3 inline-flex items-center gap-2 transition-all duration-500 ease-expo"
            >
              {t("view_all")} / सभी कार्यक्रम देखें <span>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add to homepage**

Update `src/app/[locale]/page.tsx` to add `<EventCards />` and `<DonateCTA />` after `<ImpactCounter />`.

- [ ] **Step 4: Verify and commit**

```bash
npm run dev
git add .
git commit -m "feat: add DonateCTA with impact amounts + EventCards to homepage"
```

---

## Task 8: Donation Page (Razorpay + QR + Bank)

**Files:**
- Create: `src/app/[locale]/get-involved/donate/page.tsx`, `src/components/donate/DonationForm.tsx`, `src/components/donate/ImpactAmounts.tsx`, `src/components/donate/QRCode.tsx`, `src/components/donate/BankDetails.tsx`, `src/app/api/razorpay/create-order/route.ts`, `src/app/api/razorpay/verify/route.ts`, `src/lib/razorpay.ts`

This task creates the full donation flow. The Razorpay integration requires API keys which will be added as env vars (`.env.local`). The page works with all three payment methods on a single view.

- [ ] **Step 1: Create Razorpay helper**

Write `src/lib/razorpay.ts`:

```typescript
export const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
export const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "";
```

Create `.env.local.example`:

```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=xxxxx
```

- [ ] **Step 2: Build ImpactAmounts selector**

Write `src/components/donate/ImpactAmounts.tsx`:

```tsx
"use client";

import { useTranslations } from "next-intl";

interface ImpactAmountsProps {
  selected: number | null;
  onSelect: (amount: number | null) => void;
}

const amounts = [
  { value: 500, key: "amount_500", hi: "1 डायलिसिस सेशन" },
  { value: 1000, key: "amount_1000", hi: "1 माह पेंशन" },
  { value: 2500, key: "amount_2500", hi: "विवाह सहायता किट" },
  { value: 5000, key: "amount_5000", hi: "दिव्यांग हेतु व्हीलचेयर" },
  { value: 10000, key: "amount_10000", hi: "बाढ़ राहत" },
];

export function ImpactAmounts({ selected, onSelect }: ImpactAmountsProps) {
  const t = useTranslations("donate");

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {amounts.map((a) => (
        <button
          key={a.value}
          onClick={() => onSelect(a.value)}
          className={`rounded-2xl p-4 text-left transition-all duration-500 ease-expo border ${
            selected === a.value
              ? "bg-crimson-500/10 border-crimson-500/20"
              : "bg-white/45 border-saffron-500/[0.06] hover:bg-white/65"
          }`}
        >
          <div className="font-stat text-xl font-bold text-crimson-500">
            ₹{a.value.toLocaleString("en-IN")}
          </div>
          <p className="text-[10px] text-warm-800/40 mt-1">{t(a.key)}</p>
          <p className="font-devanagari text-[9px] text-saffron-600/40">{a.hi}</p>
        </button>
      ))}
      <button
        onClick={() => onSelect(null)}
        className={`rounded-2xl p-4 text-left transition-all duration-500 ease-expo border ${
          selected === null
            ? "bg-crimson-500/10 border-crimson-500/20"
            : "bg-white/45 border-saffron-500/[0.06] hover:bg-white/65"
        }`}
      >
        <div className="font-stat text-xl font-bold text-saffron-600">✎</div>
        <p className="text-[10px] text-warm-800/40 mt-1">{t("amount_custom")}</p>
        <p className="font-devanagari text-[9px] text-saffron-600/40">अपनी राशि</p>
      </button>
    </div>
  );
}
```

- [ ] **Step 3: Build QRCode + BankDetails**

Write `src/components/donate/QRCode.tsx`:

```tsx
import { useTranslations } from "next-intl";

export function QRCode() {
  const t = useTranslations("donate");

  return (
    <div className="bg-white/45 border border-saffron-500/[0.06] rounded-2xl p-6 text-center">
      <h3 className="text-xs font-semibold text-warm-900 tracking-[0.3px]">
        {t("qr_title")}
      </h3>
      <div className="w-48 h-48 mx-auto mt-4 bg-white rounded-xl border border-warm-800/[0.06] flex items-center justify-center text-warm-800/20 text-xs">
        QR Code Placeholder
      </div>
      <p className="text-[10px] text-warm-800/30 mt-3">
        UPI ID will be added here
      </p>
    </div>
  );
}
```

Write `src/components/donate/BankDetails.tsx`:

```tsx
"use client";

import { useTranslations } from "next-intl";

export function BankDetails() {
  const t = useTranslations("donate");

  const details = [
    { label: "Account Name", value: "Shri Radhe Maa Charitable Society" },
    { label: "Bank", value: "To be updated" },
    { label: "Account No.", value: "To be updated" },
    { label: "IFSC", value: "To be updated" },
  ];

  return (
    <div className="bg-white/45 border border-saffron-500/[0.06] rounded-2xl p-6">
      <h3 className="text-xs font-semibold text-warm-900 tracking-[0.3px]">
        {t("bank_title")} / बैंक ट्रांसफर
      </h3>
      <div className="mt-4 space-y-3">
        {details.map((d) => (
          <div key={d.label} className="flex justify-between items-center">
            <span className="text-[11px] text-warm-800/35">{d.label}</span>
            <span className="text-[11px] text-warm-900 font-medium">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Build DonationForm**

Write `src/components/donate/DonationForm.tsx`:

```tsx
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ImpactAmounts } from "./ImpactAmounts";
import { Button } from "@/components/ui/Button";

export function DonationForm() {
  const t = useTranslations("donate");
  const [amount, setAmount] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"onetime" | "monthly">("onetime");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pan, setPan] = useState("");

  const finalAmount = amount ?? (parseInt(customAmount) || 0);

  const handleDonate = async () => {
    if (!finalAmount || finalAmount < 1) return;
    // Razorpay integration will go here
    // For now, show alert
    alert(`Donation of ₹${finalAmount} — Razorpay integration pending. Add API keys to .env.local`);
  };

  return (
    <div className="space-y-8">
      {/* Frequency toggle */}
      <div className="flex gap-1 bg-white/30 rounded-pill p-1 w-fit">
        <button
          onClick={() => setFrequency("onetime")}
          className={`rounded-pill px-5 py-2 text-xs font-medium transition-all duration-500 ease-expo ${
            frequency === "onetime" ? "bg-crimson-500 text-white" : "text-warm-800/40"
          }`}
        >
          {t("onetime")} / एक बार
        </button>
        <button
          onClick={() => setFrequency("monthly")}
          className={`rounded-pill px-5 py-2 text-xs font-medium transition-all duration-500 ease-expo ${
            frequency === "monthly" ? "bg-crimson-500 text-white" : "text-warm-800/40"
          }`}
        >
          {t("monthly")} / मासिक
        </button>
      </div>

      {/* Impact amounts */}
      <ImpactAmounts selected={amount} onSelect={setAmount} />

      {/* Custom amount */}
      {amount === null && (
        <input
          type="number"
          placeholder="Enter amount / राशि दर्ज करें"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="w-full bg-white/45 border border-saffron-500/[0.06] rounded-2xl px-5 py-4 text-warm-900 placeholder:text-warm-800/25 focus:outline-none focus:border-crimson-500/20 transition-colors"
        />
      )}

      {/* Form fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder={`${t("name")} / पूरा नाम`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/45 border border-saffron-500/[0.06] rounded-2xl px-5 py-4 text-sm text-warm-900 placeholder:text-warm-800/25 focus:outline-none focus:border-crimson-500/20 transition-colors"
        />
        <input
          type="email"
          placeholder={`${t("email")} / ईमेल`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/45 border border-saffron-500/[0.06] rounded-2xl px-5 py-4 text-sm text-warm-900 placeholder:text-warm-800/25 focus:outline-none focus:border-crimson-500/20 transition-colors"
        />
        <input
          type="tel"
          placeholder={`${t("phone")} / फोन`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/45 border border-saffron-500/[0.06] rounded-2xl px-5 py-4 text-sm text-warm-900 placeholder:text-warm-800/25 focus:outline-none focus:border-crimson-500/20 transition-colors"
        />
        <input
          type="text"
          placeholder={`${t("pan")} (${t("pan_optional")})`}
          value={pan}
          onChange={(e) => setPan(e.target.value)}
          className="bg-white/45 border border-saffron-500/[0.06] rounded-2xl px-5 py-4 text-sm text-warm-900 placeholder:text-warm-800/25 focus:outline-none focus:border-crimson-500/20 transition-colors"
        />
      </div>

      {/* Submit */}
      <Button variant="primary" onClick={handleDonate} className="w-full justify-center">
        {t("cta")} — ₹{finalAmount.toLocaleString("en-IN")} <span className="text-[11px] opacity-50">→</span>
      </Button>

      {/* Trust signals */}
      <div className="flex flex-wrap justify-center gap-4 text-[10px] text-warm-800/20 tracking-[1px]">
        <span>{t("trust_80g")}</span>
        <span className="w-px h-3 bg-warm-800/[0.08]" />
        <span>{t("trust_100")}</span>
        <span className="w-px h-3 bg-warm-800/[0.08]" />
        <span>Razorpay Secured</span>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Build donation page**

Write `src/app/[locale]/get-involved/donate/page.tsx`:

```tsx
import { useTranslations } from "next-intl";
import { DonationForm } from "@/components/donate/DonationForm";
import { QRCode } from "@/components/donate/QRCode";
import { BankDetails } from "@/components/donate/BankDetails";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function DonatePage() {
  const t = useTranslations("donate");

  return (
    <main className="pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-warm-900 tracking-tight">
              {t("title")}
            </h1>
            <p className="font-devanagari text-saffron-600/50 text-lg mt-2">
              {t("title_hi")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main form */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={200}>
              <DonationForm />
            </ScrollReveal>
          </div>

          {/* Sidebar: QR + Bank */}
          <div className="space-y-4">
            <ScrollReveal delay={300}>
              <QRCode />
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <BankDetails />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
```

- [ ] **Step 6: Verify and commit**

```bash
npm run dev
git add .
git commit -m "feat: add donation page with impact amounts, form, QR code, bank details"
```

---

## Task 9: Inner Pages (About, Seva, Events, Gallery, Transparency, Contact)

**Files:**
- Create all inner page files under `src/app/[locale]/`

Each page follows the same pattern: bilingual section headers, scroll reveals, Card components. These are content pages using the established UI components.

- [ ] **Step 1: Create About pages**

Write `src/app/[locale]/about/page.tsx`, `src/app/[locale]/about/maa/page.tsx`, `src/app/[locale]/about/society/page.tsx`, `src/app/[locale]/about/leadership/page.tsx` — each as a content page with bilingual headings and placeholder content using SectionHeader, ScrollReveal, and Card components.

- [ ] **Step 2: Create Seva pages**

Write `src/app/[locale]/seva/page.tsx` (reuse SevaGrid + ImpactDashboard), `src/app/[locale]/seva/healthcare/page.tsx`, `src/app/[locale]/seva/financial-aid/page.tsx`, `src/app/[locale]/seva/disaster-relief/page.tsx`, `src/app/[locale]/seva/janseva/page.tsx`, `src/app/[locale]/seva/gaushala/page.tsx`.

- [ ] **Step 3: Create Events page**

Write `src/app/[locale]/events/page.tsx` — listing upcoming + past events.

- [ ] **Step 4: Create Gallery page**

Write `src/app/[locale]/gallery/page.tsx` — placeholder grid for photos/videos.

- [ ] **Step 5: Create Transparency page**

Write `src/app/[locale]/transparency/page.tsx` — registration details, 80G info, fund utilization sections.

- [ ] **Step 6: Create Contact page**

Write `src/app/[locale]/contact/page.tsx` — contact form + both office addresses + social links.

- [ ] **Step 7: Create Volunteer + CSR pages**

Write `src/app/[locale]/get-involved/volunteer/page.tsx` and `src/app/[locale]/get-involved/csr/page.tsx`.

- [ ] **Step 8: Verify all routes and commit**

```bash
npm run dev
# Test: /en/about, /en/seva, /en/events, /en/gallery, /en/transparency, /en/contact
# Test: /hi/about, /hi/seva, etc.
git add .
git commit -m "feat: add all inner pages — About, Seva, Events, Gallery, Transparency, Contact, Volunteer, CSR"
```

---

## Task 10: SEO + Metadata + Smooth Scroll + Final Polish

**Files:**
- Create: `src/lib/seo.ts`
- Modify: All page files (add metadata exports), `src/app/[locale]/layout.tsx` (add Lenis)

- [ ] **Step 1: Add JSON-LD structured data**

Write `src/lib/seo.ts`:

```typescript
export function nonprofitJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Shri Radhe Maa Charitable Society",
    alternateName: "श्री राधे माँ चैरिटेबल सोसाइटी",
    url: "https://shriradhemasociety.org",
    description: "Serving humanity through free dialysis, disaster relief, monthly pensions, divyang seva. समाज सेवा, मुफ्त डायलिसिस, बाढ़ राहत।",
    foundingDate: "2017-08-21",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 5, Pocket-11, Sector-5, Rohini",
      addressLocality: "New Delhi",
      postalCode: "110085",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9560800343",
      email: "shriradhemaachritablesociety@gmail.com",
    },
    sameAs: [
      "https://www.instagram.com/shreeradhemaa",
      "https://www.facebook.com/ShriRadheMaa",
      "https://www.youtube.com/ShreeRadheMaa",
    ],
  };
}
```

- [ ] **Step 2: Add Lenis smooth scroll**

Add Lenis initialization to locale layout:

```tsx
// In src/app/[locale]/layout.tsx, add a LenisProvider component
```

Write `src/components/layout/LenisProvider.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 3: Add per-page metadata**

Add `generateMetadata` to each page file with bilingual titles and descriptions including Hindi SEO keywords.

- [ ] **Step 4: Add sitemap**

```bash
npm install next-sitemap
```

Create `next-sitemap.config.js` with all routes for both `/en/` and `/hi/` prefixes.

- [ ] **Step 5: Build and verify**

```bash
npm run build
npm run start
```

Expected: All pages render, smooth scroll works, structured data in page source, bilingual content on every page.

- [ ] **Step 6: Final commit**

```bash
git add .
git commit -m "feat: add SEO (JSON-LD, metadata, sitemap), Lenis smooth scroll, final polish"
```

---

## Task 11: Deploy to Vercel

- [ ] **Step 1: Deploy**

```bash
npx vercel --prod
```

Or connect the repo to Vercel dashboard for auto-deploys.

- [ ] **Step 2: Verify production**

Check all pages, donation flow, bilingual routing, mobile responsiveness.

- [ ] **Step 3: Commit any deployment fixes**

```bash
git add .
git commit -m "chore: deployment config and fixes"
```
