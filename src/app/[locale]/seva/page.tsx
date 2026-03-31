import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { breadcrumbJsonLd } from "@/lib/seo";
import { SevaCards } from "./SevaCards";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "सेवा कार्यक्रम | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Seva Programmes | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "मुफ्त डायलिसिस, वित्तीय सहायता, बाढ़ राहत, जनसेवा अभियान, गौशाला सेवा — 500+ परिवारों की सेवा।"
      : "Free dialysis, financial aid, disaster relief, Janseva Abhiyan, gaushala seva — 7 programmes serving 500+ families across India.",
    keywords: isHindi
      ? ["सेवा कार्यक्रम", "मुफ्त डायलिसिस", "जनसेवा", "दिव्यांग सेवा", "बाढ़ राहत"]
      : ["seva programmes", "free dialysis India", "janseva", "divyang seva", "disaster relief NGO"],
    alternates: { languages: { "en-IN": "/en/seva", "hi-IN": "/hi/seva" } },
    openGraph: {
      title: "Seva Programmes — Shri Radhe Maa Charitable Society",
      description: "7 dimensions of compassionate service for India's most vulnerable.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

const stats = [
  { value: "500+", label: "Families Served" },
  { value: "₹25L+", label: "Govt Contributions" },
  { value: "7+", label: "Years of Seva" },
  { value: "5+", label: "Programmes" },
];

export default function SevaPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Seva", url: "https://shriradhemasociety.org/seva" },
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
              हमारे सेवा कार्यक्रम
            </span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              Our Seva Programmes
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              Seven dimensions of compassionate service — from free medical care to disaster relief across India.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Crimson stats bar */}
      <section className="relative overflow-hidden bg-gradient-to-r from-crimson-600 to-crimson-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative py-8 md:py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center justify-center text-center py-4 md:py-0 px-3 md:px-6 ${
                    i < stats.length - 1 ? "lg:border-r lg:border-white/20" : ""
                  } ${i < 2 ? "border-b lg:border-b-0 border-white/20" : ""} ${
                    i % 2 === 0 && i < 2 ? "border-r lg:border-r border-white/20" : ""
                  } ${i === 1 ? "lg:border-r lg:border-white/20" : ""}`}
                >
                  <AnimatedCounter
                    value={stat.value}
                    className="font-stat text-3xl sm:text-4xl md:text-5xl font-black text-saffron-400"
                  />
                  <p className="font-sans text-white text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider mt-2 md:mt-3">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White section: Programme cards */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-16">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">
                सेवा कार्यक्रम
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">
                Explore Our Programmes
              </h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <SevaCards />
        </div>
      </section>

      {/* Donate CTA */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal delay={100}>
            <p className="font-devanagari text-sm text-crimson-500 mb-2" lang="hi">
              इन सेवाओं को जारी रखने में मदद करें
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-warm-900 mb-3">
              Support Our Seva
            </h2>
            <p className="font-sans text-warm-600 text-base mb-8 max-w-md mx-auto">
              Your donation directly funds these programmes. Every rupee counts.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-crimson-500 text-white text-base font-semibold rounded-pill hover:bg-crimson-600 transition-all duration-300 active:scale-[0.98] shadow-lg"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              Donate Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
