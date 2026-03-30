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
      ? "नेतृत्व | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Leadership | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "महासचिव श्री रुपेंद्र कश्यप के नेतृत्व में पारदर्शी और समर्पित न्यासी मंडल।"
      : "Led by General Secretary Mr. Rupendra Kashyap, with a dedicated board of trustees ensuring transparent and compassionate governance.",
    alternates: { languages: { "en-IN": "/en/about/leadership", "hi-IN": "/hi/about/leadership" } },
    openGraph: {
      title: "Leadership — Shri Radhe Maa Charitable Society",
      description: "Transparent governance led by General Secretary Mr. Rupendra Kashyap.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function LeadershipPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "About", url: "https://shriradhemasociety.org/about" },
    { name: "Leadership", url: "https://shriradhemasociety.org/about/leadership" },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-semibold font-sans uppercase tracking-wider mb-4">Governance</span>
            <span className="font-devanagari text-sm text-crimson-500 font-medium block" lang="hi">
              नेतृत्व
            </span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              Leadership
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              The society is governed by a dedicated team of trustees committed to transparent and compassionate seva.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* White section: General Secretary */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="relative rounded-2xl bg-white shadow-md overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />
              <div className="p-6 md:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-semibold font-sans uppercase tracking-wider mb-5">General Secretary</span>
                <div className="flex gap-6 items-start">
                  {/* Photo placeholder */}
                  <div className="shrink-0 w-20 h-20 rounded-2xl border-2 border-warm-200 bg-warm-50 flex items-center justify-center text-warm-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl text-warm-900">Mr. Rupendra Kashyap</h2>
                    <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">श्री रुपेंद्र कश्यप</p>
                    <p className="font-sans text-sm text-crimson-500 font-semibold mt-2">General Secretary</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <p className="font-sans text-sm text-warm-600 leading-relaxed">
                    Mr. Rupendra Kashyap serves as the General Secretary of Shri Radhe Maa Charitable Society. Under his stewardship, the society has expanded its reach across multiple states — from operating a free dialysis centre in Mumbai to coordinating disaster relief in Punjab, Kerala, and Nepal.
                  </p>
                  <p className="font-sans text-sm text-warm-600 leading-relaxed">
                    His commitment to transparent governance and grassroots seva ensures that every rupee donated goes directly to the families and communities in need.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dark section: Governance Structure */}
      <section className="relative overflow-hidden bg-warm-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={200}>
              <div className="text-center mb-10 md:mb-16">
                <span className="font-devanagari text-sm text-saffron-400 font-medium" lang="hi">प्रशासनिक संरचना</span>
                <h2 className="font-serif text-2xl md:text-3xl text-white tracking-tight mt-1">Governance Structure</h2>
                <div className="w-12 h-1 bg-saffron-400 rounded-full mx-auto mt-4" />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  role: "Patron",
                  roleHi: "संरक्षक",
                  desc: "Shri Radhe Guru Maa provides spiritual guidance and vision for all society activities.",
                },
                {
                  role: "General Secretary",
                  roleHi: "महासचिव",
                  desc: "Mr. Rupendra Kashyap oversees day-to-day operations, governance, and programme implementation.",
                },
                {
                  role: "Board of Trustees",
                  roleHi: "न्यासी मंडल",
                  desc: "A dedicated group of trustees ensures financial oversight and strategic direction of the society.",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.role} delay={250 + i * 100}>
                  <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 to-crimson-500" />
                    <div className="p-6 md:p-8">
                      <div className="w-10 h-10 rounded-full bg-crimson-500 flex items-center justify-center text-white mb-4">
                        <span className="font-stat text-lg font-black">{i + 1}</span>
                      </div>
                      <h3 className="font-serif text-base text-warm-900">{item.role}</h3>
                      <p className="font-devanagari text-xs text-warm-600/50 mt-0.5" lang="hi">{item.roleHi}</p>
                      <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cream section: Guiding Principles */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={600}>
            <div className="text-center mb-10">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">हमारे मूल्य</span>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900 tracking-tight mt-1">Guiding Principles</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={650}>
            <div className="relative rounded-2xl bg-white shadow-md overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />
              <div className="p-6 md:p-8">
                <ul className="space-y-4">
                  {[
                    "Transparency in all financial matters — every donation is accounted for.",
                    "Seva without discrimination — we serve regardless of religion, caste, or region.",
                    "Accountability to donors and beneficiaries alike.",
                    "Spiritual grounding in all our humanitarian work.",
                  ].map((principle) => (
                    <li key={principle} className="flex items-start gap-3 font-sans text-sm text-warm-700">
                      <span className="w-6 h-6 rounded-full bg-crimson-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                      </span>
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
