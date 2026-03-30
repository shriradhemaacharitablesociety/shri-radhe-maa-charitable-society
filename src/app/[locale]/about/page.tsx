import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { breadcrumbJsonLd } from "@/lib/seo";

const aboutSections = [
  {
    href: "/about/maa",
    badge: "Spiritual Foundation",
    icon: "🙏",
    title: "Shri Radhe Guru Maa",
    titleHi: "श्री राधे गुरु माँ",
    description:
      "The spiritual force behind the society — 30+ years of humanitarian work across India and abroad, serving the poor and distressed.",
  },
  {
    href: "/about/society",
    badge: "Registration & Mission",
    icon: "📋",
    title: "The Society",
    titleHi: "सोसाइटी के बारे में",
    description:
      "Registered under The Societies Registration Act, 1860 (Reg. No. S/2930/SDM/NW/2017). Our mission, activities, and commitment to transparent seva.",
  },
  {
    href: "/about/leadership",
    badge: "Governance",
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
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Dark Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-900 to-crimson-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <ScrollReveal>
              <span className="font-devanagari text-sm text-saffron-400 font-medium" lang="hi">
                सोसाइटी के बारे में
              </span>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white tracking-tight mt-2">
                About the Society
              </h1>
              <div className="w-12 h-1 bg-saffron-400 rounded-full mx-auto mt-4" />
              <p className="text-[15px] text-white/70 mt-4 leading-relaxed max-w-xl mx-auto">
                A registered charitable organisation serving humanity under the spiritual guidance of Shri Radhe Guru Maa.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* White section: About cards */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {aboutSections.map((section, i) => (
              <ScrollReveal key={section.href} delay={i * 150}>
                <Link href={section.href} className="block h-full group">
                  <div className="relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />
                    <div className="p-6 md:p-8">
                      <span className="inline-block px-3 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-semibold font-sans uppercase tracking-wider mb-4">{section.badge}</span>
                      <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl mb-4" aria-hidden="true">{section.icon}</div>
                      <h2 className="font-serif text-xl text-warm-900 leading-tight group-hover:text-crimson-600 transition-colors">
                        {section.title}
                      </h2>
                      <p className="font-devanagari text-warm-600/60 text-sm mt-1" lang="hi">
                        {section.titleHi}
                      </p>
                      <p className="text-warm-600 font-sans text-sm leading-relaxed mt-4">
                        {section.description}
                      </p>
                      <div className="mt-5 flex items-center gap-1.5 text-crimson-500 text-sm font-semibold font-sans group-hover:gap-2.5 transition-all duration-300">
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Crimson stats bar */}
      <section className="relative overflow-hidden bg-gradient-to-r from-crimson-600 to-crimson-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal delay={500}>
              <div className="text-center mb-8">
                <span className="font-devanagari text-sm text-white/80 font-medium" lang="hi">संक्षिप्त तथ्य</span>
                <h2 className="font-serif text-2xl md:text-3xl text-white tracking-tight mt-1">Society at a Glance</h2>
                <div className="w-12 h-1 bg-saffron-400 rounded-full mx-auto mt-4" />
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { value: "2017", label: "Year Founded" },
                { value: "500+", label: "Families Served" },
                { value: "₹25L+", label: "Government Contributions" },
                { value: "7+", label: "Seva Programmes" },
              ].map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex flex-col items-center justify-center text-center py-4 md:py-0 px-3 md:px-6 ${
                    i < 3 ? "border-r border-white/20" : ""
                  } ${i < 2 ? "border-b md:border-b-0 border-white/20" : ""}`}
                >
                  <AnimatedCounter
                    value={fact.value}
                    className="font-stat text-3xl sm:text-4xl md:text-5xl font-black text-saffron-400"
                  />
                  <p className="font-sans text-white text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider mt-2 md:mt-3">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
