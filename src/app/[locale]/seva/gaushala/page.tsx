import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
  },
  {
    icon: "🌾",
    title: "Fodder & Grain Supply",
    titleHi: "चारा और अनाज आपूर्ति",
    desc: "Seasonal contributions of fodder, green grass, grain, and dry feed ensure that gaushalas can sustain their herds through summer scarcity and winter months alike.",
  },
  {
    icon: "🏥",
    title: "Veterinary & Medical Aid",
    titleHi: "पशु चिकित्सा सहायता",
    desc: "Support for veterinary care, medicines, and treatment of injured or ill cows at shelter facilities — because every life in a gaushala deserves dignified care.",
  },
  {
    icon: "🤲",
    title: "Volunteer Seva Days",
    titleHi: "सेवा दिवस",
    desc: "Organising group visits and seva days where volunteers clean, feed, and spend time with the cows — connecting community members with the practice of Gau Seva directly.",
  },
  {
    icon: "🏗️",
    title: "Infrastructure Support",
    titleHi: "ढाँचागत सहायता",
    desc: "Contributing towards shelter repairs, roofing, water facilities, and basic infrastructure improvements to ensure gaushalas can house their animals safely year-round.",
  },
  {
    icon: "📣",
    title: "Awareness & Outreach",
    titleHi: "जागरूकता अभियान",
    desc: "Encouraging devotees, community members, and the broader public to participate in gaushala seva — spreading the cultural and spiritual significance of Gau Mata in Indian tradition.",
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
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Dark Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-900 to-crimson-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <span className="font-devanagari text-sm text-saffron-400 font-medium" lang="hi">
                गौशाला सेवा
              </span>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white tracking-tight mt-2">
                Gaushala Seva
              </h1>
              <div className="w-12 h-1 bg-saffron-400 rounded-full mt-4" />
              <p className="text-[15px] text-white/70 mt-4 leading-relaxed max-w-xl">
                Supporting cow shelters as a sacred act of cultural and spiritual service — caring for Gau Mata, the divine mother of Indian tradition.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cream context section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="flex items-start gap-6">
              <div className="text-5xl shrink-0 hidden sm:block" aria-hidden="true">🐄</div>
              <div>
                <h2 className="font-serif text-xl md:text-2xl text-warm-900 leading-relaxed mb-2">
                  The Gau Mata — Revered Across India
                </h2>
                <p className="font-devanagari text-base text-warm-600/70 leading-relaxed mb-3" lang="hi">
                  गाय को भारतीय परंपरा में माता का दर्जा प्राप्त है — &ldquo;गौ माता।&rdquo;
                </p>
                <p className="font-sans text-sm text-warm-600 leading-relaxed">
                  In Indian spiritual and cultural tradition, the cow holds a place of deep reverence — she is <em>Gau Mata</em>, the divine mother. Supporting gaushalas (cow shelters) is considered a deeply meritorious act of service. The Shri Radhe Maa Charitable Society contributes regularly to registered gaushalas across India as part of its wider seva mission.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* White section: Support types */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={150}>
            <div className="text-center mb-10 md:mb-16">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">गौशालाओं के लिए हमारा सहयोग</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">How We Support Gaushalas</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {supportTypes.map((item, i) => (
              <ScrollReveal key={item.title} delay={200 + i * 80}>
                <div className="relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl mb-4" aria-hidden="true">{item.icon}</div>
                    <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
                    <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">{item.titleHi}</p>
                    <p className="font-sans text-sm text-warm-600 leading-relaxed mt-4">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark section: Why it matters */}
      <section className="relative overflow-hidden bg-warm-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal delay={700}>
              <div className="text-center mb-10 md:mb-16">
                <span className="font-devanagari text-sm text-saffron-400 font-medium" lang="hi">गौशाला सेवा का महत्व</span>
                <h2 className="font-serif text-2xl md:text-3xl text-white tracking-tight mt-1">Why Gaushala Seva Matters</h2>
                <div className="w-12 h-1 bg-saffron-400 rounded-full mx-auto mt-4" />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {whyMatters.map((item, i) => (
                <ScrollReveal key={item.title} delay={750 + i * 80}>
                  <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 to-crimson-500" />
                    <div className="p-6 md:p-8">
                      <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
                      <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">{item.titleHi}</p>
                      <p className="font-sans text-sm text-warm-600 leading-relaxed mt-4">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White section: How donations are used */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={1000}>
            <div className="relative rounded-2xl bg-white shadow-md overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl" aria-hidden="true">📊</div>
                  <div>
                    <h2 className="font-serif text-xl text-warm-900">How Your Donation Is Used</h2>
                    <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">आपका दान कैसे उपयोग होता है</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-warm-600 leading-relaxed mb-6">
                  Every rupee donated towards Gaushala Seva is directed transparently to the registered gaushalas we support. Here is how contributions are typically allocated:
                </p>
                <div className="space-y-4">
                  {[
                    { category: "Feed & Fodder for Cows", percent: 50, color: "bg-saffron-500" },
                    { category: "Veterinary Care & Medicines", percent: 25, color: "bg-crimson-500" },
                    { category: "Shelter Maintenance & Infrastructure", percent: 15, color: "bg-warm-400" },
                    { category: "Operational Support", percent: 10, color: "bg-warm-300" },
                  ].map((item) => (
                    <div key={item.category}>
                      <div className="flex justify-between mb-1.5">
                        <span className="font-sans text-sm text-warm-700">{item.category}</span>
                        <span className="font-stat text-sm font-bold text-crimson-500">{item.percent}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-warm-100">
                        <div
                          className={`h-2.5 rounded-full ${item.color}`}
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-sans text-xs text-warm-500 mt-5">
                  * Approximate figures based on typical gaushala support distributions.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Crimson CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-crimson-600 to-crimson-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal delay={1100}>
              <span className="font-devanagari text-sm text-white/80 font-medium" lang="hi">गौशाला सेवा में योगदान दें</span>
              <h2 className="font-serif text-2xl md:text-3xl text-white mt-2 mb-2">Support Gaushala Seva</h2>
              <p className="font-sans text-white/70 text-base mb-2 max-w-lg mx-auto">
                Your donation towards gaushala seva contributes to the care of cows, supports Indian cultural traditions, and earns deep spiritual merit.
              </p>
              <p className="font-devanagari text-sm text-white/60 mb-8 max-w-lg mx-auto" lang="hi">
                गौशाला सेवा में आपका योगदान गौ माता की रक्षा और भारतीय संस्कृति की सेवा है।
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="/donate"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-crimson-600 text-base font-semibold rounded-pill hover:bg-saffron-50 transition-all duration-300 shadow-lg"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  Donate for Gaushala
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white text-base font-medium rounded-pill hover:bg-white/10 transition-all duration-200 font-sans"
                >
                  Contact Us
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
