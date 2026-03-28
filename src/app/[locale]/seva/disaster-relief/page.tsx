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
  },
  {
    icon: "🌧️",
    badge: "Kerala",
    badgeVariant: "crimson" as const,
    title: "Kerala Flood Relief",
    titleHi: "केरल बाढ़ राहत",
    desc: "During Kerala's catastrophic floods, the society mobilised relief material, essential supplies, and financial aid to affected communities. Our teams worked on the ground to ensure aid reached the most vulnerable families.",
    highlight: "On-ground relief",
  },
  {
    icon: "🏔️",
    badge: "Nepal",
    badgeVariant: "gold" as const,
    title: "Nepal Earthquake Relief",
    titleHi: "नेपाल भूकंप राहत",
    desc: "Following the devastating Nepal earthquake, the society extended its humanitarian work beyond India's borders. Emergency relief kits, food, clothing, and financial contributions were directed to affected communities in Nepal.",
    highlight: "Cross-border aid",
  },
  {
    icon: "🌊",
    badge: "Maharashtra",
    badgeVariant: "crimson" as const,
    title: "Maharashtra Flood Relief",
    titleHi: "महाराष्ट्र बाढ़ राहत",
    desc: "Maharashtra's flood-affected families received direct aid including food, clothing, essential items, and financial support to help them rebuild their lives and livelihoods after the disaster.",
    highlight: "Direct aid delivery",
  },
  {
    icon: "🦠",
    badge: "COVID-19",
    badgeVariant: "gold" as const,
    title: "COVID-19 Relief",
    titleHi: "कोविड-19 राहत",
    desc: "During the COVID-19 pandemic, the society contributed ₹5 lakh to the Punjab CM Relief Fund to support the state's pandemic response. Food distribution and essential items were also provided to affected families across Delhi.",
    highlight: "₹5L to Punjab CM Fund",
  },
];

export default function DisasterReliefPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Seva", url: "https://shriradhemasociety.org/seva" },
    { name: "Disaster Relief", url: "https://shriradhemasociety.org/seva/disaster-relief" },
  ]);

  return (
    <div className="pt-28 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-4xl mx-auto px-6">
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
        <div className="space-y-5 mb-12">
          {reliefOperations.map((op, i) => (
            <ScrollReveal key={op.title} delay={150 + i * 100}>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant={op.badgeVariant}>{op.badge}</Badge>
                      </div>
                      <div className="text-2xl mb-2" aria-hidden="true">{op.icon}</div>
                      <h2 className="font-serif text-xl text-warm-900">{op.title}</h2>
                      <p className="font-devanagari text-sm text-warm-800/50 mt-1" lang="hi">{op.titleHi}</p>
                    </div>
                    <div className="shrink-0 rounded-2xl bg-saffron-50 border border-saffron-200/60 px-3 py-2 text-center">
                      <p className="font-sans text-xs text-saffron-700 font-medium">{op.highlight}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/70 leading-relaxed">{op.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* How we respond */}
        <ScrollReveal delay={750}>
          <div className="rounded-3xl border border-saffron-300/50 bg-warm-50/60 p-8">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">हमारा दृष्टिकोण</p>
            <h3 className="font-serif text-xl text-warm-900 mb-4">Our Relief Approach</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { step: "1", title: "Rapid Response", desc: "We mobilise within days of a disaster, deploying teams and resources to affected areas." },
                { step: "2", title: "Needs Assessment", desc: "Ground teams assess actual needs before distributing aid to ensure maximum impact." },
                { step: "3", title: "Sustained Support", desc: "We don't just respond — we follow up to help communities rebuild over time." },
              ].map((item) => (
                <div key={item.step} className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-crimson-100 border border-crimson-200 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-stat text-xs font-black text-crimson-600">{item.step}</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-warm-900 mb-1">{item.title}</p>
                    <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
