import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd } from "@/lib/seo";
import { DisasterReliefCards, ApproachCards } from "./DisasterCards";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "आपदा राहत अभियान | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Disaster Relief Operations | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "पंजाब बाढ़, केरल बाढ़, नेपाल भूकंप, महाराष्ट्र बाढ़ और कोविड-19 राहत अभियान। इस्लामपुर गाँव का पूर्ण पुनर्निर्माण।"
      : "Punjab flood relief (Islampur village rebuild), Kerala floods, Nepal earthquake, Maharashtra floods, and COVID-19 relief. 5+ operations across India and Nepal.",
    keywords: isHindi
      ? ["बाढ़ राहत", "आपदा प्रबंधन", "पंजाब बाढ़", "नेपाल भूकंप", "कोविड राहत"]
      : ["disaster relief India", "flood relief NGO", "Punjab flood Islampur", "Nepal earthquake relief", "COVID relief India"],
    alternates: { languages: { "en-IN": "/en/seva/disaster-relief", "hi-IN": "/hi/seva/disaster-relief" } },
    openGraph: {
      title: "Disaster Relief Operations — Shri Radhe Maa Charitable Society",
      description: "5+ relief operations across Punjab, Kerala, Nepal, Maharashtra and COVID-19.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function DisasterReliefPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Seva", url: "https://shriradhemasociety.org/seva" },
    { name: "Disaster Relief", url: "https://shriradhemasociety.org/seva/disaster-relief" },
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
              आपदा राहत अभियान
            </span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              Disaster Relief Operations
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              When disaster strikes, the society responds — from rebuilding homes in Punjab to earthquake relief in Nepal.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Crimson stats bar */}
      <section className="relative overflow-hidden bg-gradient-to-r from-crimson-600 to-crimson-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative py-6 md:py-8 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3">
              {[
                { value: "5+", label: "Relief Operations" },
                { value: "4", label: "States + Nepal" },
                { value: "₹5L", label: "COVID Contribution" },
              ].map((stat, i) => (
                <div key={stat.label} className={`flex flex-col items-center text-center py-3 px-3 ${i < 2 ? "border-r border-white/20" : ""}`}>
                  <p className="font-stat text-2xl md:text-3xl font-black text-saffron-400">{stat.value}</p>
                  <p className="font-sans text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White section: Operations grid */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={150}>
            <div className="text-center mb-10 md:mb-16">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">राहत अभियान</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">Relief Operations</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <DisasterReliefCards />
        </div>
      </section>

      {/* Cream section: Our Approach */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-warm-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={850}>
            <div className="text-center mb-10 md:mb-16">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">हमारा दृष्टिकोण</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">Our Relief Approach</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <ApproachCards />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={950}>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">आपदा राहत में सहयोग करें</span>
            <h2 className="font-serif text-2xl md:text-3xl text-warm-900 mt-2 mb-3">Support Disaster Relief</h2>
            <p className="font-sans text-warm-600 text-base mb-8 max-w-md mx-auto">
              Your donation enables the society to respond swiftly to the next disaster — purchasing relief kits, funding transport, and providing direct aid.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/donate"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-crimson-500 text-white text-base font-semibold rounded-pill hover:bg-crimson-600 transition-all duration-300 shadow-lg"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                Donate for Relief
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/get-involved/volunteer"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-warm-100 text-warm-900 text-base font-medium rounded-pill hover:bg-warm-50 transition-all duration-200 font-sans"
              >
                Volunteer for Relief
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
