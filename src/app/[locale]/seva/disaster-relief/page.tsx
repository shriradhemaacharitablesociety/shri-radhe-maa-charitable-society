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

const reliefOperations = [
  {
    icon: "🌊",
    badge: "Punjab",
    title: "Punjab Floods — Islampur Village",
    titleHi: "पंजाब बाढ़ — इस्लामपुर गांव",
    desc: "When devastating floods struck Punjab, the society adopted Islampur village in its entirety. Teams were deployed to assess damage, and the society funded the rebuilding of homes for all affected families.",
    highlight: "Adopted entire village",
    details: [
      "Complete village adoption and needs assessment",
      "Funded home rebuilding for all affected families",
      "Distributed essential relief supplies and food",
      "Provided clothing and blankets to displaced residents",
    ],
  },
  {
    icon: "🌧️",
    badge: "Kerala",
    title: "Kerala Flood Relief",
    titleHi: "केरल बाढ़ राहत",
    desc: "During Kerala's catastrophic floods, the society mobilised relief material, essential supplies, and financial aid to affected communities.",
    highlight: "On-ground relief",
    details: [
      "Rapid deployment of relief materials and essential supplies",
      "Financial aid to affected families",
      "Food and drinking water distribution",
      "Coordination with local NGOs and relief agencies",
    ],
  },
  {
    icon: "🏔️",
    badge: "Nepal",
    title: "Nepal Earthquake Relief",
    titleHi: "नेपाल भूकंप राहत",
    desc: "Following the devastating Nepal earthquake, the society extended its humanitarian work beyond India's borders with emergency relief kits, food, clothing, and financial contributions.",
    highlight: "Cross-border aid",
    details: [
      "Emergency relief kits to earthquake survivors",
      "Food, clothing, and essential supplies",
      "Financial contributions towards reconstruction",
      "Cross-border coordination of humanitarian aid",
    ],
  },
  {
    icon: "🌊",
    badge: "Maharashtra",
    title: "Maharashtra Flood Relief",
    titleHi: "महाराष्ट्र बाढ़ राहत",
    desc: "Maharashtra's flood-affected families received direct aid including food, clothing, essential items, and financial support to rebuild their lives.",
    highlight: "Direct aid delivery",
    details: [
      "Direct food and clothing distribution",
      "Essential household item kits",
      "Financial support for rebuilding livelihoods",
      "Post-flood follow-up care",
    ],
  },
  {
    icon: "🦠",
    badge: "COVID-19",
    title: "COVID-19 Relief",
    titleHi: "कोविड-19 राहत",
    desc: "During the COVID-19 pandemic, the society contributed ₹5 lakh to the Punjab CM Relief Fund and distributed food and essential items to affected families across Delhi.",
    highlight: "₹5L to Punjab CM Fund",
    details: [
      "₹5 lakh contributed to Punjab CM Relief Fund",
      "Food distribution to affected Delhi families",
      "Essential items provided to those who lost income",
      "Support for migrant workers and daily wage earners",
    ],
  },
];

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

      {/* Dark Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-900 to-crimson-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <span className="font-devanagari text-sm text-saffron-400 font-medium" lang="hi">
                आपदा राहत अभियान
              </span>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white tracking-tight mt-2">
                Disaster Relief Operations
              </h1>
              <div className="w-12 h-1 bg-saffron-400 rounded-full mt-4" />
              <p className="text-[15px] text-white/70 mt-4 leading-relaxed max-w-xl">
                When disaster strikes, the society responds — from rebuilding homes in Punjab to earthquake relief in Nepal.
              </p>
            </ScrollReveal>
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {reliefOperations.map((op, i) => (
              <ScrollReveal key={op.title} delay={200 + i * 100}>
                <div className="relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-semibold font-sans uppercase tracking-wider">{op.badge}</span>
                      <span className="inline-block px-3 py-1 rounded-full bg-saffron-100 text-saffron-700 text-xs font-medium font-sans">{op.highlight}</span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl mb-4" aria-hidden="true">{op.icon}</div>
                    <h3 className="font-serif text-xl text-warm-900">{op.title}</h3>
                    <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">{op.titleHi}</p>
                    <p className="font-sans text-sm text-warm-600 leading-relaxed mt-4 mb-4">{op.desc}</p>
                    <ul className="space-y-2">
                      {op.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 font-sans text-sm text-warm-600">
                          <span className="w-5 h-5 rounded-full bg-crimson-500 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {[
              { step: "1", title: "Rapid Response", titleHi: "त्वरित प्रतिक्रिया", desc: "We mobilise within days of a disaster, deploying teams and resources to affected areas before conditions worsen." },
              { step: "2", title: "Needs Assessment", titleHi: "आवश्यकता आकलन", desc: "Ground teams assess actual needs before distributing aid — ensuring maximum impact and no duplication." },
              { step: "3", title: "Sustained Support", titleHi: "निरंतर सहयोग", desc: "We don't just respond — we follow up to help communities rebuild over time, not just survive the immediate crisis." },
            ].map((item) => (
              <ScrollReveal key={item.step} delay={900}>
                <div className="relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />
                  <div className="p-6 md:p-8">
                    <div className="w-10 h-10 rounded-full bg-crimson-500 flex items-center justify-center mb-4">
                      <span className="font-stat text-lg font-black text-white">{item.step}</span>
                    </div>
                    <h3 className="font-sans text-base font-semibold text-warm-900 mb-0.5">{item.title}</h3>
                    <p className="font-devanagari text-xs text-warm-600/50 mb-3" lang="hi">{item.titleHi}</p>
                    <p className="font-sans text-sm text-warm-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="relative overflow-hidden bg-warm-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal delay={950}>
              <span className="font-devanagari text-sm text-saffron-400 font-medium" lang="hi">आपदा राहत में सहयोग करें</span>
              <h2 className="font-serif text-2xl md:text-3xl text-white mt-2 mb-3">Support Disaster Relief</h2>
              <p className="font-sans text-white/60 text-base mb-8 max-w-md mx-auto">
                Your donation enables the society to respond swiftly to the next disaster — purchasing relief kits, funding transport, and providing direct aid.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="/donate"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-crimson-600 text-base font-semibold rounded-pill hover:bg-saffron-50 transition-all duration-300 shadow-lg"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  Donate for Relief
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="/get-involved/volunteer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white text-base font-medium rounded-pill hover:bg-white/10 transition-all duration-200 font-sans"
                >
                  Volunteer for Relief
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
