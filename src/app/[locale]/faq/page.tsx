import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqs } from "@/data/impact";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const categoryLabels: Record<string, { en: string; hi: string }> = {
  donations: { en: "Donations", hi: "दान" },
  volunteering: { en: "Volunteering", hi: "स्वयंसेवा" },
  programmes: { en: "Programmes", hi: "कार्यक्रम" },
  general: { en: "General", hi: "सामान्य" },
};

const categoryOrder = ["donations", "volunteering", "programmes", "general"];

function groupByCategory() {
  const grouped: Record<string, typeof faqs> = {};
  for (const faq of faqs) {
    if (!grouped[faq.category]) grouped[faq.category] = [];
    grouped[faq.category].push(faq);
  }
  return grouped;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "सामान्य प्रश्न (FAQ) | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Frequently Asked Questions | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी के बारे में अक्सर पूछे जाने वाले प्रश्न। दान, 80G रसीद, स्वयंसेवा, कार्यक्रमों और पंजीकरण की जानकारी।"
      : "Frequently asked questions about Shri Radhe Maa Charitable Society. Information on donations, 80G receipts, volunteering, programmes, and registration.",
    keywords: isHindi
      ? ["FAQ", "सामान्य प्रश्न", "दान", "80G", "स्वयंसेवा", "चैरिटेबल सोसाइटी"]
      : ["FAQ", "frequently asked questions", "donations", "80G", "volunteering", "charitable society"],
    alternates: { languages: { "en-IN": "/en/faq", "hi-IN": "/hi/faq" } },
    openGraph: {
      title: "FAQ | Shri Radhe Maa Charitable Society",
      description: "Find answers to common questions about donations, tax benefits, and seva programmes.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHindi = locale === "hi";
  const grouped = groupByCategory();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "FAQ", url: "https://shriradhemasociety.org/faq" },
  ]);

  const faqSchema = faqJsonLd(
    faqs.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">सामान्य प्रश्न</span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              {isHindi ? "सामान्य प्रश्न" : "Frequently Asked Questions"}
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              {isHindi
                ? "हमारे बारे में अक्सर पूछे जाने वाले प्रश्न और उनके उत्तर"
                : "Find answers to common questions about donations, tax benefits, and our seva programmes."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Accordions on White */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">

          {categoryOrder.map((category, catIndex) => {
            const items = grouped[category];
            if (!items) return null;
            const label = categoryLabels[category];

            return (
              <ScrollReveal key={category} delay={catIndex * 100}>
                <div className="mb-12">
                  {/* Category heading */}
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="font-serif text-2xl text-warm-900">
                      {isHindi ? label.hi : label.en}
                    </h3>
                    {!isHindi && (
                      <span className="font-devanagari text-sm text-crimson-500">
                        {label.hi}
                      </span>
                    )}
                    <div className="flex-1 h-px bg-warm-200" />
                  </div>

                  {/* FAQ items */}
                  <div className="space-y-3">
                    {items.map((faq, i) => (
                      <details
                        key={i}
                        className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        <summary className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden min-h-[44px]">
                          <span className="font-sans text-warm-900 text-[15px] font-medium leading-snug">
                            {isHindi ? faq.questionHi : faq.question}
                          </span>
                          {/* Chevron that rotates on open */}
                          <svg
                            className="w-5 h-5 text-warm-400 shrink-0 transition-transform duration-300 group-open:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </summary>
                        <div className="px-4 sm:px-6 pb-5 pt-0">
                          <p className="text-warm-600 text-sm leading-relaxed font-sans">
                            {isHindi ? faq.answerHi : faq.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}

        </div>
      </section>

      {/* CTA on Dark */}
      <section className="bg-gradient-to-br from-warm-900 via-warm-800 to-crimson-900 py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={500}>
            <p className="font-devanagari text-sm text-saffron-400 mb-2" lang="hi">प्रश्न</p>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
              {isHindi ? "अभी भी कोई प्रश्न है?" : "Still have questions?"}
            </h3>
            <p className="text-white/70 text-sm mb-6 font-sans">
              {isHindi
                ? "हमसे सीधे संपर्क करें, हम आपकी सहायता के लिए तत्पर हैं।"
                : "Reach out to us directly and we will be happy to help."}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-white text-crimson-500 font-sans font-semibold text-sm px-6 py-3 min-h-[44px] w-full sm:w-auto justify-center rounded-lg hover:bg-white/90 transition-colors duration-200"
            >
              {isHindi ? "संपर्क करें" : "Contact Us"}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
