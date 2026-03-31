import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd } from "@/lib/seo";
import { GaushalaSupportCards, WhyMattersCards, DonationUsageCard } from "./GaushalaCards";

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

      {/* Hero */}
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">
              गौशाला सेवा
            </span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              Gaushala Seva
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              Supporting cow shelters as a sacred act of cultural and spiritual service — caring for Gau Mata, the divine mother of Indian tradition.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cream context section */}
      <section className="pt-2 md:pt-4 pb-12 md:pb-16 px-4 sm:px-6 bg-warm-50">
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

          <GaushalaSupportCards />
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={700}>
            <div className="text-center mb-10 md:mb-16">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">गौशाला सेवा का महत्व</span>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900 tracking-tight mt-1">Why Gaushala Seva Matters</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <WhyMattersCards />
        </div>
      </section>

      {/* White section: How donations are used */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={1000}>
            <DonationUsageCard />
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
