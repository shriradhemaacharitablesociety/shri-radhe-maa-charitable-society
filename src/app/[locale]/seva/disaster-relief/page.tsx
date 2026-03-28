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
    badgeVariant: "gold" as const,
    title: "Punjab Floods — Islampur Village",
    titleHi: "पंजाब बाढ़ — इस्लामपुर गांव",
    desc: "When devastating floods struck Punjab, the society adopted Islampur village in its entirety. Teams were deployed to assess damage, and the society funded the rebuilding of homes for all affected families — ensuring they had safe shelter before the next season.",
    highlight: "Adopted entire village",
    accent: "crimson" as const,
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
    badgeVariant: "crimson" as const,
    title: "Kerala Flood Relief",
    titleHi: "केरल बाढ़ राहत",
    desc: "During Kerala's catastrophic floods, the society mobilised relief material, essential supplies, and financial aid to affected communities. Our teams worked on the ground to ensure aid reached the most vulnerable families.",
    highlight: "On-ground relief",
    accent: "gold" as const,
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
    badgeVariant: "gold" as const,
    title: "Nepal Earthquake Relief",
    titleHi: "नेपाल भूकंप राहत",
    desc: "Following the devastating Nepal earthquake, the society extended its humanitarian work beyond India's borders. Emergency relief kits, food, clothing, and financial contributions were directed to affected communities in Nepal.",
    highlight: "Cross-border aid",
    accent: "crimson" as const,
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
    badgeVariant: "crimson" as const,
    title: "Maharashtra Flood Relief",
    titleHi: "महाराष्ट्र बाढ़ राहत",
    desc: "Maharashtra's flood-affected families received direct aid including food, clothing, essential items, and financial support to help them rebuild their lives and livelihoods after the disaster.",
    highlight: "Direct aid delivery",
    accent: "gold" as const,
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
    badgeVariant: "gold" as const,
    title: "COVID-19 Relief",
    titleHi: "कोविड-19 राहत",
    desc: "During the COVID-19 pandemic, the society contributed ₹5 lakh to the Punjab CM Relief Fund to support the state's pandemic response. Food distribution and essential items were also provided to affected families across Delhi.",
    highlight: "₹5L to Punjab CM Fund",
    accent: "crimson" as const,
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
    <div style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-3">
            <Badge variant="crimson">Disaster Relief</Badge>
          </div>
          <SectionHeader
            title="Disaster Relief Operations"
            titleHi="आपदा राहत अभियान"
            subtitle="When disaster strikes, the society responds — from rebuilding homes in Punjab to earthquake relief in Nepal."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Stats strip */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-3 gap-4 mb-10 rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-6 text-center">
            {[
              { value: "5+", label: "Relief Operations" },
              { value: "4", label: "States + Nepal" },
              { value: "₹5L", label: "COVID Contribution" },
            ].map((stat, i) => (
              <div key={stat.label} className={i < 2 ? "border-r border-saffron-300/40" : ""}>
                <p className="font-stat text-3xl font-black text-crimson-500">{stat.value}</p>
                <p className="font-sans text-xs uppercase tracking-wider text-warm-800/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Operations */}
        <ScrollReveal delay={150}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Relief Operations</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">राहत अभियान</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {reliefOperations.map((op, i) => (
            <ScrollReveal key={op.title} delay={200 + i * 100}>
              <Card accent={op.accent} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <Badge variant={op.badgeVariant}>{op.badge}</Badge>
                    <div className="shrink-0 rounded-2xl bg-saffron-50 border border-saffron-200/60 px-3 py-1.5 text-center">
                      <p className="font-sans text-xs text-saffron-700 font-medium">{op.highlight}</p>
                    </div>
                  </div>
                  <div className="text-2xl mb-2" aria-hidden="true">{op.icon}</div>
                  <h2 className="font-serif text-xl text-warm-900">{op.title}</h2>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">{op.titleHi}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">{op.desc}</p>
                  <ul className="space-y-1.5">
                    {op.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 font-sans text-sm text-warm-800/60">
                        <svg className="w-3.5 h-3.5 text-saffron-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* How we respond */}
        <ScrollReveal delay={850}>
          <Card accent="gold" className="mb-10">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl" aria-hidden="true">⚡</div>
                <div>
                  <h3 className="font-serif text-xl text-warm-900">Our Relief Approach</h3>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">हमारा दृष्टिकोण</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { step: "1", title: "Rapid Response", titleHi: "त्वरित प्रतिक्रिया", desc: "We mobilise within days of a disaster, deploying teams and resources to affected areas before conditions worsen." },
                  { step: "2", title: "Needs Assessment", titleHi: "आवश्यकता आकलन", desc: "Ground teams assess actual needs before distributing aid — ensuring maximum impact and no duplication." },
                  { step: "3", title: "Sustained Support", titleHi: "निरंतर सहयोग", desc: "We don't just respond — we follow up to help communities rebuild over time, not just survive the immediate crisis." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-crimson-100 border border-crimson-200 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-stat text-xs font-black text-crimson-600">{item.step}</span>
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-warm-900 mb-0.5">{item.title}</p>
                      <p className="font-devanagari text-xs text-warm-800/40 mb-1" lang="hi">{item.titleHi}</p>
                      <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Support CTA */}
        <ScrollReveal delay={950}>
          <div className="rounded-3xl border border-crimson-200/50 bg-crimson-50/30 p-8 text-center">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">आपदा राहत में सहयोग करें</p>
            <h3 className="font-serif text-xl text-warm-900 mb-3">Support Disaster Relief</h3>
            <p className="font-sans text-sm text-warm-800/60 leading-relaxed mb-5 max-w-md mx-auto">
              Your donation enables the society to respond swiftly to the next disaster — purchasing relief kits, funding transport, and providing direct aid to families in crisis.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/donate"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-crimson-500 to-crimson-400 text-white text-sm font-medium rounded-pill hover:from-crimson-600 hover:to-crimson-500 transition-all duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                Donate for Relief
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/get-involved/volunteer"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-warm-800/20 text-warm-800/70 text-sm font-medium rounded-pill hover:bg-warm-100 hover:text-warm-900 transition-all duration-200 font-sans"
              >
                Volunteer for Relief
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
