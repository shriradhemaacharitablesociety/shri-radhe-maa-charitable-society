import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd } from "@/lib/seo";
import { CSROpportunityCards } from "./CSRCards";
import { FileText, Phone, Mail } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "सीएसआर साझेदारी | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "CSR & Corporate Partnerships | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "80G कर लाभ के साथ कॉर्पोरेट CSR साझेदारी। स्वास्थ्य सेवा, दिव्यांग कल्याण, आपदा राहत और गौशाला सेवा में निवेश करें।"
      : "Corporate CSR partnerships with 80G tax benefits. Invest in healthcare, divyang welfare, disaster relief, and gaushala seva with a registered NGO.",
    keywords: isHindi
      ? ["CSR साझेदारी", "कॉर्पोरेट सामाजिक जिम्मेदारी", "80G दान", "एनजीओ CSR"]
      : ["CSR partnership India", "corporate social responsibility NGO", "80G CSR donation", "registered NGO partnership"],
    alternates: { languages: { "en-IN": "/en/get-involved/csr", "hi-IN": "/hi/get-involved/csr" } },
    openGraph: {
      title: "CSR & Corporate Partnerships — Shri Radhe Maa Charitable Society",
      description: "Fulfil your CSR mandate with a registered, transparent NGO. 80G benefit.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function CSRPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "CSR", url: "https://shriradhemasociety.org/get-involved/csr" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">सीएसआर और कॉर्पोरेट साझेदारी</span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">CSR &amp; Corporate Partnerships</h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              Partner with us to fulfil your Corporate Social Responsibility mandate while creating real impact for India&apos;s most vulnerable communities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content on White */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* 80G benefit */}
        <ScrollReveal delay={100}>
          <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white mb-10">
            <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
              <FileText className="w-5 h-5" />
              <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>80G</span>
            </div>
            <div className="flex-1 p-4 md:p-5">
              <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">80G Tax Deduction for Corporations</h3>
              <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">कर लाभ</p>
              <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-2">
                Corporate donations to the Shri Radhe Maa Charitable Society may qualify for deduction under <strong className="text-warm-900">Section 80G of the Income Tax Act, 1961</strong>. This makes your CSR contribution financially beneficial in addition to its social impact.
              </p>
              <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-2">
                Please contact us for our 80G certificate and to discuss eligible donation structures under the Companies Act, 2013.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CSR Opportunities */}
        <ScrollReveal delay={200}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">CSR Opportunity Areas</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">सीएसआर के अवसर</p>
        </ScrollReveal>

        <CSROpportunityCards />

        {/* Why partner */}
        <ScrollReveal delay={750}>
          <div className="rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8 mb-8">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">हमारे साथ क्यों?</p>
            <h3 className="font-serif text-xl text-warm-900 mb-4">Why Partner with Us?</h3>
            <ul className="space-y-3">
              {[
                "Registered under Societies Registration Act, 1860 — legally compliant for CSR contributions.",
                "Transparent fund utilisation with annual reports available on request.",
                "Proven track record: 500+ families served, 5+ disaster relief operations, free dialysis centre running.",
                "80G certification for tax deductions on your donation.",
                "Direct impact — funds go to beneficiaries, not bureaucracy.",
                "Flexible partnership structures — project-based, programme-based, or unrestricted grants.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 font-sans text-sm text-warm-800/70">
                  <svg className="w-4 h-4 text-crimson-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

      </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={900}>
            <p className="font-devanagari text-sm text-crimson-500 mb-2" lang="hi">अभी संपर्क करें</p>
            <h3 className="font-serif text-2xl md:text-3xl text-warm-900 mb-3">Start a CSR Partnership</h3>
            <p className="font-sans text-sm text-warm-600 leading-relaxed mb-6">
              Contact our team to discuss CSR partnership opportunities, project scopes, and impact reporting.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-lg">
              <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
                <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                  <Phone className="w-5 h-5" />
                  <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>CALL</span>
                </div>
                <div className="flex-1 p-4 md:p-5">
                  <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">Phone</h3>
                  <a href="tel:+919560800343" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors mt-1 block">95608 00343</a>
                </div>
              </div>
              <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
                <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                  <Mail className="w-5 h-5" />
                  <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>EMAIL</span>
                </div>
                <div className="flex-1 p-4 md:p-5">
                  <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">Email</h3>
                  <a href="mailto:shriradhemaacharitablesociety@gmail.com" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors break-all mt-1 block">
                    shriradhemaacharitablesociety@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-crimson-500 text-white text-sm font-medium rounded-lg hover:bg-crimson-600 transition-all duration-300"
            >
              Get in Touch
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
