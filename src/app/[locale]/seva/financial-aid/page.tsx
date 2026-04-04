import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { FinancialAidCards, GovtContributionCards } from "./FinancialAidCards";

const faqs = [
  {
    question: "How can I apply for the monthly pension programme?",
    answer:
      "To apply for monthly pension support, please contact the society office at 95608 00343 or email shriradhemaacharitablesociety@gmail.com. Our team will assess your situation and guide you through the process. Applications are evaluated based on need and available capacity.",
  },
  {
    question: "What is included in the marriage assistance package?",
    answer:
      "The marriage assistance package includes 5 essential items to help families with wedding expenses — typically covering household items, clothing, kitchen essentials, ceremony items, and practical utility goods. The exact items are tailored to the family's needs.",
  },
  {
    question: "Who is eligible for one-time financial assistance?",
    answer:
      "Families facing sudden financial crises — medical emergencies, loss of income, or other urgent hardships — may be eligible for one-time aid. Please reach out to the society to discuss your situation. Each case is evaluated on its individual merits.",
  },
  {
    question: "Are the pensions recurring every month?",
    answer:
      "Yes, the monthly pension programme provides consistent support every month to enrolled families. The society is committed to ensuring continuity and reliability of this support.",
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
      ? "वित्तीय सहायता और पेंशन | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Financial Aid & Monthly Pensions | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "100+ परिवारों को मासिक पेंशन, विवाह सहायता और एकमुश्त वित्तीय सहायता। सरकारी राहत कोष में ₹25 लाख से अधिक का योगदान।"
      : "Monthly pensions for 100+ families, marriage assistance, one-time financial aid, and ₹25 lakh+ in government relief fund contributions.",
    keywords: isHindi
      ? ["मासिक पेंशन", "विवाह सहायता", "वित्तीय सहायता दिल्ली", "गरीब परिवार सहायता"]
      : ["monthly pension NGO India", "financial aid Delhi", "marriage assistance charity", "poor family support India"],
    alternates: { languages: { "en-IN": "/en/seva/financial-aid", "hi-IN": "/hi/seva/financial-aid" } },
    openGraph: {
      title: "Financial Aid & Pensions — Shri Radhe Maa Charitable Society",
      description: "Monthly pensions for 100+ families and marriage assistance across Delhi NCR.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function FinancialAidPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://srmcs.org" },
    { name: "Seva", url: "https://srmcs.org/seva" },
    { name: "Financial Aid", url: "https://srmcs.org/seva/financial-aid" },
  ]);
  const faqSchema = faqJsonLd(faqs);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">
              वित्तीय सहायता और पेंशन
            </span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              Financial Aid &amp; Pensions
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              Providing sustained financial support to families who need it most — monthly pensions, emergency aid, and marriage assistance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Crimson stats bar */}
      <section className="relative overflow-hidden bg-gradient-to-r from-crimson-600 to-crimson-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative py-6 md:py-8 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3">
              {[
                { value: "100+", label: "Families on Monthly Pension" },
                { value: "5", label: "Items in Marriage Aid" },
                { value: "₹25L+", label: "Govt Contributions" },
              ].map((stat, i) => (
                <div key={stat.label} className={`flex flex-col items-center text-center py-3 px-3 ${i < 2 ? "border-r border-white/20" : ""}`}>
                  <AnimatedCounter value={stat.value} className="font-stat text-2xl md:text-3xl font-black text-saffron-400" />
                  <p className="font-sans text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White section: Core programmes */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={130}>
            <div className="text-center mb-10 md:mb-16">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">हमारे कार्यक्रम</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">Our Programmes</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <FinancialAidCards />
        </div>
      </section>

      {/* Cream section: Government Contributions */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-warm-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={400}>
            <div className="text-center mb-10 md:mb-16">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">सरकारी राहत कोष में योगदान</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">Government Fund Contributions</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
              <p className="text-[15px] text-warm-600 mt-4 leading-relaxed max-w-xl mx-auto">
                Significant contributions to government relief funds, channelling resources to disaster response and pandemic relief.
              </p>
            </div>
          </ScrollReveal>

          <GovtContributionCards />
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={700}>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">सहायता के लिए संपर्क करें</span>
            <h2 className="font-serif text-2xl md:text-3xl text-warm-900 mt-2 mb-3">Apply for Financial Assistance</h2>
            <p className="font-sans text-warm-600 text-base mb-8 max-w-md mx-auto">
              If you or someone you know needs financial assistance, please reach out to us. All applications are treated with complete confidentiality.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+919560800343"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-crimson-500 text-white text-base font-semibold rounded-pill hover:bg-crimson-600 transition-all duration-300 shadow-lg"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                Call: 95608 00343
              </a>
              <a
                href="mailto:shriradhemaacharitablesociety@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-warm-100 text-warm-900 text-base font-medium rounded-pill hover:bg-warm-50 transition-all duration-200 font-sans"
              >
                Email Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cream FAQ section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-warm-50">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={800}>
            <div className="text-center mb-10">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">सामान्य प्रश्न</span>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900 tracking-tight mt-1">Frequently Asked Questions</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-white shadow-md overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-sans text-sm font-medium text-warm-900 hover:bg-warm-50 transition-colors list-none">
                  {faq.question}
                  <svg className="w-4 h-4 text-crimson-500 shrink-0 ml-3 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 font-sans text-sm text-warm-600 leading-relaxed border-t border-warm-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
