import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { breadcrumbJsonLd } from "@/lib/seo";
import { AboutSectionCards } from "./AboutCards";

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

      {/* Hero */}
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">
              सोसाइटी के बारे में
            </span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              About the Society
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              A registered charitable organisation serving humanity under the spiritual guidance of Shri Radhe Guru Maa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* White section: About cards */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AboutSectionCards />
        </div>
      </section>

      {/* Crimson stats bar */}
      <section className="relative overflow-hidden bg-gradient-to-r from-crimson-600 to-crimson-500 mt-8 md:mt-12">
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
