import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { breadcrumbJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "गौशाला सेवा | गौ माता की सेवा | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Gaushala Seva | Cow Shelter Support | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "गौशालाओं को वित्तीय दान, चारा, और पशु चिकित्सा सहायता — भारतीय संस्कृति और आध्यात्मिक परंपरा की सेवा।"
      : "Financial donations, fodder, and veterinary support to registered gaushalas — serving Indian cultural tradition and caring for Gau Mata.",
    keywords: isHindi
      ? ["गौशाला सेवा", "गाय आश्रय", "गौ माता", "गौशाला दान"]
      : ["gaushala seva", "cow shelter donation India", "gau mata", "gaushala support NGO"],
    alternates: { languages: { "en-IN": "/en/seva/gaushala", "hi-IN": "/hi/seva/gaushala" } },
    openGraph: {
      title: "Gaushala Seva — Shri Radhe Maa Charitable Society",
      description: "Supporting cow shelters as a sacred act of cultural and spiritual service.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

const supportTypes = [
  {
    icon: "💰",
    title: "Financial Donations",
    titleHi: "वित्तीय दान",
    desc: "The society makes regular monetary contributions to registered gaushalas to fund their day-to-day operations — covering food, shelter maintenance, and the care of hundreds of cows.",
    accent: "crimson" as const,
  },
  {
    icon: "🌾",
    title: "Fodder & Grain Supply",
    titleHi: "चारा और अनाज आपूर्ति",
    desc: "Seasonal contributions of fodder, green grass, grain, and dry feed ensure that gaushalas can sustain their herds through summer scarcity and winter months alike.",
    accent: "gold" as const,
  },
  {
    icon: "🏥",
    title: "Veterinary & Medical Aid",
    titleHi: "पशु चिकित्सा सहायता",
    desc: "Support for veterinary care, medicines, and treatment of injured or ill cows at shelter facilities — because every life in a gaushala deserves dignified care.",
    accent: "crimson" as const,
  },
  {
    icon: "🤲",
    title: "Volunteer Seva Days",
    titleHi: "सेवा दिवस",
    desc: "Organising group visits and seva days where volunteers clean, feed, and spend time with the cows — connecting community members with the practice of Gau Seva directly.",
    accent: "gold" as const,
  },
  {
    icon: "🏗️",
    title: "Infrastructure Support",
    titleHi: "ढाँचागत सहायता",
    desc: "Contributing towards shelter repairs, roofing, water facilities, and basic infrastructure improvements to ensure gaushalas can house their animals safely year-round.",
    accent: "crimson" as const,
  },
  {
    icon: "📣",
    title: "Awareness & Outreach",
    titleHi: "जागरूकता अभियान",
    desc: "Encouraging devotees, community members, and the broader public to participate in gaushala seva — spreading the cultural and spiritual significance of Gau Mata in Indian tradition.",
    accent: "gold" as const,
  },
];

const whyMatters = [
  {
    title: "Cultural Heritage",
    titleHi: "सांस्कृतिक विरासत",
    desc: "The cow has been central to Indian civilisation for millennia — providing milk, supporting agriculture, and occupying a sacred place in religious practice.",
  },
  {
    title: "Spiritual Merit",
    titleHi: "आध्यात्मिक पुण्य",
    desc: "In Hindu tradition, serving Gau Mata is considered one of the highest acts of merit — directly aligned with the ideals of compassion, non-violence, and devotion.",
  },
  {
    title: "Saving Abandoned Cows",
    titleHi: "परित्यक्त गायों की देखभाल",
    desc: "Gaushalas rescue abandoned, injured, and elderly cows that would otherwise face neglect. Supporting them is a direct act of animal welfare and compassion.",
  },
];

export default function GaushalaPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Seva", url: "https://shriradhemasociety.org/seva" },
    { name: "Gaushala Seva", url: "https://shriradhemasociety.org/seva/gaushala" },
  ]);

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-3">
            <Badge variant="gold">Gaushala Seva</Badge>
          </div>
          <SectionHeader
            title="Gaushala Seva"
            titleHi="गौशाला सेवा"
            subtitle="Supporting cow shelters as a sacred act of cultural and spiritual service — caring for Gau Mata, the divine mother of Indian tradition."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Hero context block */}
        <ScrollReveal delay={100}>
          <div className="mb-12 rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8">
            <div className="flex items-start gap-6">
              <div className="text-5xl shrink-0" aria-hidden="true">🐄</div>
              <div>
                <p className="font-serif text-xl text-warm-900 leading-relaxed mb-3">
                  The Gau Mata — Revered Across India
                </p>
                <p className="font-devanagari text-base text-warm-800/60 leading-relaxed mb-4" lang="hi">
                  गाय को भारतीय परंपरा में माता का दर्जा प्राप्त है — &ldquo;गौ माता।&rdquo;
                </p>
                <p className="font-sans text-sm text-warm-800/70 leading-relaxed">
                  In Indian spiritual and cultural tradition, the cow holds a place of deep reverence — she is <em>Gau Mata</em>, the divine mother. Supporting gaushalas (cow shelters) is considered a deeply meritorious act of service, caring for animals that are central to India&apos;s agricultural and cultural heritage. The Shri Radhe Maa Charitable Society contributes regularly to registered gaushalas across India as part of its wider seva mission.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Support types grid */}
        <ScrollReveal delay={150}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">How We Support Gaushalas</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">गौशालाओं के लिए हमारा सहयोग</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {supportTypes.map((item, i) => (
            <ScrollReveal key={item.title} delay={200 + i * 80}>
              <Card accent={item.accent} className="h-full">
                <CardHeader>
                  <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">{item.titleHi}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Why it matters */}
        <ScrollReveal delay={700}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Why Gaushala Seva Matters</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">गौशाला सेवा का महत्व</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {whyMatters.map((item, i) => (
            <ScrollReveal key={item.title} delay={750 + i * 80}>
              <Card accent="gold" className="h-full">
                <CardHeader>
                  <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">{item.titleHi}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* How donations are used */}
        <ScrollReveal delay={1000}>
          <Card accent="crimson" className="mb-12">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl" aria-hidden="true">📊</div>
                <div>
                  <h2 className="font-serif text-xl text-warm-900">How Your Donation Is Used</h2>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">आपका दान कैसे उपयोग होता है</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-5">
                Every rupee donated towards Gaushala Seva is directed transparently to the registered gaushalas we support. Here is how contributions are typically allocated:
              </p>
              <div className="space-y-3">
                {[
                  { category: "Feed & Fodder for Cows", percent: 50, color: "bg-saffron-500" },
                  { category: "Veterinary Care & Medicines", percent: 25, color: "bg-crimson-500" },
                  { category: "Shelter Maintenance & Infrastructure", percent: 15, color: "bg-warm-400" },
                  { category: "Operational Support", percent: 10, color: "bg-warm-300" },
                ].map((item) => (
                  <div key={item.category}>
                    <div className="flex justify-between mb-1">
                      <span className="font-sans text-sm text-warm-800/70">{item.category}</span>
                      <span className="font-stat text-sm font-bold text-warm-900">{item.percent}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-warm-100">
                      <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs text-warm-800/40 mt-4">
                * Approximate figures based on typical gaushala support distributions.
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Donate prompt */}
        <ScrollReveal delay={1100}>
          <div className="rounded-3xl border border-saffron-300/50 bg-warm-50/60 p-8 text-center">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">गौशाला सेवा में योगदान दें</p>
            <h3 className="font-serif text-xl text-warm-900 mb-3">Support Gaushala Seva</h3>
            <p className="font-sans text-sm text-warm-800/60 leading-relaxed mb-2 max-w-lg mx-auto">
              Your donation towards gaushala seva contributes to the care of cows, supports Indian cultural traditions, and earns deep spiritual merit.
            </p>
            <p className="font-devanagari text-sm text-warm-800/50 mb-6 max-w-lg mx-auto" lang="hi">
              गौशाला सेवा में आपका योगदान गौ माता की रक्षा और भारतीय संस्कृति की सेवा है।
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/donate"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-saffron-500 to-saffron-400 text-white text-sm font-medium rounded-pill hover:from-saffron-600 hover:to-saffron-500 transition-all duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                Donate for Gaushala
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-warm-800/20 text-warm-800/70 text-sm font-medium rounded-pill hover:bg-warm-100 hover:text-warm-900 transition-all duration-200 font-sans"
              >
                Contact Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
