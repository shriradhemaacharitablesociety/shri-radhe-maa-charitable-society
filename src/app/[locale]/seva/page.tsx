import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
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

const sevaPrograms = [
  {
    href: "/seva/healthcare",
    icon: "🏥",
    title: "Healthcare",
    titleHi: "स्वास्थ्य सेवा",
    stat: "Free",
    statLabel: "Dialysis",
    desc: "Free dialysis centre, ambulance service, blood donation camps, eye and dental check-ups.",
    featured: true,
  },
  {
    href: "/seva/financial-aid",
    icon: "🤝",
    title: "Financial Aid",
    titleHi: "वित्तीय सहायता",
    stat: "100+",
    statLabel: "Families",
    desc: "Monthly pensions, one-time aid, and marriage assistance for families in need.",
    featured: false,
  },
  {
    href: "/seva/disaster-relief",
    icon: "🌊",
    title: "Disaster Relief",
    titleHi: "आपदा राहत",
    stat: "5+",
    statLabel: "Operations",
    desc: "Punjab, Kerala, Nepal, Maharashtra floods and COVID-19 relief.",
    featured: false,
  },
  {
    href: "/seva/janseva",
    icon: "♿",
    title: "Janseva Abhiyan",
    titleHi: "जनसेवा अभियान",
    stat: "500+",
    statLabel: "Beneficiaries",
    desc: "Wheelchairs, instruments, clothing, food, and essential items for the specially abled.",
    featured: false,
  },
  {
    href: "/seva/gaushala",
    icon: "🐄",
    title: "Gaushala Seva",
    titleHi: "गौशाला सेवा",
    stat: "∞",
    statLabel: "Compassion",
    desc: "Donations and support to cow shelters as a sacred act of service.",
    featured: false,
  },
];

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
    <div style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {/* Impact stats header */}
      <div className="border-b border-saffron-300/40 bg-saffron-50/40 mb-16">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center py-4 px-4 ${
                  i < stats.length - 1 ? "lg:border-r lg:border-saffron-300/40" : ""
                } ${i % 2 === 0 && i < stats.length - 1 ? "border-r border-saffron-300/40 lg:border-r-0" : ""}`}
              >
                <AnimatedCounter
                  value={stat.value}
                  className="font-stat text-4xl md:text-5xl font-black text-crimson-500"
                />
                <p className="font-sans text-warm-800/60 text-xs md:text-sm font-medium uppercase tracking-wider mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Our Seva Programmes"
            titleHi="हमारे सेवा कार्यक्रम"
            subtitle="Seven dimensions of compassionate service — from free medical care to disaster relief across India."
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sevaPrograms.map((program, i) => (
            <ScrollReveal
              key={program.href}
              delay={i * 100}
              className={program.featured ? "md:col-span-2" : ""}
            >
              <Link href={program.href} className="block group h-full">
                <div
                  className="relative rounded-xl bg-white/50 border border-warm-800/[0.05] transition-all duration-500 hover:bg-white/70 hover:shadow-sm hover:-translate-y-0.5 overflow-hidden"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  {/* Left border gradient */}
                  <div className={`absolute left-0 top-2 bottom-2 w-[2px] rounded-full ${
                    program.featured
                      ? "bg-gradient-to-b from-saffron-500/25 to-transparent"
                      : "bg-gradient-to-b from-crimson-500/25 to-transparent"
                  }`} />

                  <div className={`p-5 ${program.featured ? "md:flex md:items-center md:gap-8" : ""}`}>
                    <div className={program.featured ? "flex-1" : ""}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className={`mb-3 ${program.featured ? "text-3xl" : "text-2xl"}`} aria-hidden="true">
                            {program.icon}
                          </div>
                          <h2 className="font-serif leading-tight text-xl text-warm-900 group-hover:text-crimson-600 transition-colors">
                            {program.title}
                          </h2>
                          <p className="font-devanagari text-base mt-1 text-warm-800/50" lang="hi">
                            {program.titleHi}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-stat text-4xl font-black text-crimson-500">
                            {program.stat}
                          </div>
                          <p className="text-xs font-sans mt-1 uppercase tracking-wider text-warm-800/50">
                            {program.statLabel}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={program.featured ? "md:w-80 mt-4 md:mt-0" : "mt-4"}>
                      <p className="font-sans text-sm leading-relaxed text-warm-800/60">
                        {program.desc}
                      </p>
                      <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold font-sans text-crimson-500 group-hover:gap-2.5 transition-all duration-300">
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Donate CTA */}
        <ScrollReveal delay={600}>
          <div className="mt-16 text-center">
            <p className="font-devanagari text-sm text-crimson-500 mb-2" lang="hi">
              इन सेवाओं को जारी रखने में मदद करें
            </p>
            <p className="font-sans text-warm-800/60 text-base mb-6">
              Your donation directly funds these programmes. Every rupee counts.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-crimson-500 to-crimson-400 text-white text-base font-medium rounded-pill hover:from-crimson-600 hover:to-crimson-500 transition-all duration-300 active:scale-[0.98] shadow-sm"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              Support Our Seva
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
