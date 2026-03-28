import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { breadcrumbJsonLd } from "@/lib/seo";

const aboutSections = [
  {
    href: "/about/maa",
    badge: "Spiritual Foundation",
    badgeHi: "आध्यात्मिक आधार",
    badgeVariant: "crimson" as const,
    icon: "🙏",
    title: "Shri Radhe Guru Maa",
    titleHi: "श्री राधे गुरु माँ",
    description:
      "The spiritual force behind the society — 30+ years of humanitarian work across India and abroad, serving the poor and distressed.",
  },
  {
    href: "/about/society",
    badge: "Registration & Mission",
    badgeHi: "पंजीकरण और मिशन",
    badgeVariant: "gold" as const,
    icon: "📋",
    title: "The Society",
    titleHi: "सोसाइटी के बारे में",
    description:
      "Registered under The Societies Registration Act, 1860 (Reg. No. S/2930/SDM/NW/2017). Our mission, activities, and commitment to transparent seva.",
  },
  {
    href: "/about/leadership",
    badge: "Governance",
    badgeHi: "प्रशासन",
    badgeVariant: "crimson" as const,
    icon: "👤",
    title: "Leadership",
    titleHi: "नेतृत्व",
    description:
      "Led by General Secretary Mr. Rupendra Kashyap, the society operates with a dedicated team of trustees committed to the welfare of all.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "हमारे बारे में | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "About | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी — श्री राधे गुरु माँ के मार्गदर्शन में स्थापित। सोसाइटी का इतिहास, नेतृत्व और उद्देश्य जानें।"
      : "Learn about Shri Radhe Maa Charitable Society — founded under the spiritual guidance of Shri Radhe Guru Maa. Our history, leadership, and mission.",
    keywords: isHindi
      ? ["श्री राधे माँ सोसाइटी", "चैरिटेबल सोसाइटी दिल्ली", "पंजीकृत संस्था", "समाज सेवा"]
      : ["Shri Radhe Maa Society", "charitable society Delhi", "registered NGO", "social service India"],
    alternates: { languages: { "en-IN": "/en/about", "hi-IN": "/hi/about" } },
    openGraph: {
      title: "About Shri Radhe Maa Charitable Society",
      description: "Registered NGO serving humanity since 2017 under Shri Radhe Guru Maa.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function AboutPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "About", url: "https://shriradhemasociety.org/about" },
  ]);

  return (
    <div className="pt-32 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="About the Society"
            titleHi="सोसाइटी के बारे में"
            subtitle="A registered charitable organisation serving humanity under the spiritual guidance of Shri Radhe Guru Maa."
            className="mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutSections.map((section, i) => (
            <ScrollReveal key={section.href} delay={i * 150}>
              <Link href={section.href} className="block h-full group">
                <Card variant="default" className="h-full cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant={section.badgeVariant}>{section.badge}</Badge>
                    </div>
                    <div className="text-3xl mb-3" aria-hidden="true">{section.icon}</div>
                    <h2 className="font-serif text-xl text-warm-900 leading-tight group-hover:text-crimson-600 transition-colors">
                      {section.title}
                    </h2>
                    <p className="font-devanagari text-warm-800/50 text-base mt-1" lang="hi">
                      {section.titleHi}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-warm-800/60 font-sans text-sm leading-relaxed">
                      {section.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-crimson-500 text-sm font-semibold font-sans group-hover:gap-2.5 transition-all duration-300">
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Quick facts strip */}
        <ScrollReveal delay={500}>
          <div className="mt-16 rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8">
            <p className="font-devanagari text-center text-sm text-crimson-500 mb-2" lang="hi">
              संक्षिप्त तथ्य
            </p>
            <h3 className="font-serif text-2xl text-warm-900 text-center mb-8">
              Society at a Glance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "2017", label: "Year Founded" },
                { value: "500+", label: "Families Served" },
                { value: "₹25L+", label: "Government Contributions" },
                { value: "7+", label: "Seva Programmes" },
              ].map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1">
                  <span className="font-stat text-3xl font-black text-crimson-500">{fact.value}</span>
                  <span className="font-sans text-xs uppercase tracking-wider text-warm-800/60">{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
