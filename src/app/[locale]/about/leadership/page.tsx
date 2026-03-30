import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd } from "@/lib/seo";
import { GovernanceCards } from "./LeadershipCards";
import { UserCircle, Compass, Check } from "lucide-react";

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
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
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
      <section className="pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
              <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                <UserCircle className="w-5 h-5" />
                <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>GEN SEC</span>
              </div>
              <div className="flex-1 p-4 md:p-5">
                <span className="inline-block px-3 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-semibold font-sans uppercase tracking-wider mb-4">General Secretary</span>
                <h2 className="font-sans text-sm md:text-base font-semibold text-warm-900">Mr. Rupendra Kashyap</h2>
                <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">श्री रुपेंद्र कश्यप</p>
                <p className="font-sans text-sm text-crimson-500 font-semibold mt-2">General Secretary</p>
                <div className="mt-4 space-y-3">
                  <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed">
                    Mr. Rupendra Kashyap serves as the General Secretary of Shri Radhe Maa Charitable Society. Under his stewardship, the society has expanded its reach across multiple states — from operating a free dialysis centre in Mumbai to coordinating disaster relief in Punjab, Kerala, and Nepal.
                  </p>
                  <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed">
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

            <GovernanceCards />
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
            <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
              <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                <Compass className="w-5 h-5" />
                <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>VALUES</span>
              </div>
              <div className="flex-1 p-4 md:p-5">
                <ul className="space-y-4">
                  {[
                    "Transparency in all financial matters — every donation is accounted for.",
                    "Seva without discrimination — we serve regardless of religion, caste, or region.",
                    "Accountability to donors and beneficiaries alike.",
                    "Spiritual grounding in all our humanitarian work.",
                  ].map((principle) => (
                    <li key={principle} className="flex items-start gap-3 font-sans text-sm text-warm-700">
                      <Check className="w-4 h-4 text-crimson-500 shrink-0 mt-0.5" />
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
