import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd } from "@/lib/seo";
import { ClipboardList, FileText, BarChart3, Landmark, FolderOpen, MailCheck, Phone, Mail } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "पारदर्शिता और अनुपालन | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Transparency & Compliance | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "पंजीकरण संख्या S/2930/SDM/NW/2017, 80G कर छूट, वार्षिक रिपोर्ट, निधि उपयोग और शासन सिद्धांत।"
      : "Registration No. S/2930/SDM/NW/2017, 80G tax exemption, annual reports, fund utilisation breakdown, and governance principles.",
    keywords: isHindi
      ? ["80G कर छूट", "एनजीओ पारदर्शिता", "वार्षिक रिपोर्ट", "पंजीकृत समाज"]
      : ["80G tax exemption India", "NGO transparency", "annual report charity", "registered society India"],
    alternates: { languages: { "en-IN": "/en/transparency", "hi-IN": "/hi/transparency" } },
    openGraph: {
      title: "Transparency & Compliance — Shri Radhe Maa Charitable Society",
      description: "Fully registered, 80G certified, transparent fund utilisation.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function TransparencyPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Transparency", url: "https://shriradhemasociety.org/transparency" },
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
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">पारदर्शिता और अनुपालन</span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">Transparency &amp; Compliance</h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              We believe every donor deserves to know how their contribution is used. Here is our full compliance and governance record.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content on White */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top 2-col grid: Registration + Tax Exemption */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Registration */}
          <ScrollReveal delay={100}>
            <div className="group flex h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
              <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                <ClipboardList className="w-5 h-5" />
                <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>REG</span>
              </div>
              <div className="flex-1 p-4 md:p-5">
                <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">Society Registration</h3>
                <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">सोसाइटी पंजीकरण</p>
                <dl className="space-y-3 mt-3">
                  {[
                    { label: "Registration Number", value: "S/2930/SDM/NW/2017" },
                    { label: "Registered Under", value: "The Societies Registration Act, 1860" },
                    { label: "Date of Registration", value: "21 August 2017" },
                    { label: "Jurisdiction", value: "Sub-Divisional Magistrate, North-West, Delhi" },
                    { label: "Registered Office", value: "Plot 5, Pocket-11, Sector-5, Rohini, Delhi 110085" },
                  ].map((item) => (
                    <div key={item.label}>
                      <dt className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-0.5">{item.label}</dt>
                      <dd className="font-sans text-sm font-medium text-warm-900">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </ScrollReveal>

          {/* 80G + 12A */}
          <ScrollReveal delay={150}>
            <div className="group flex h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
              <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                <FileText className="w-5 h-5" />
                <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>80G</span>
              </div>
              <div className="flex-1 p-4 md:p-5">
                <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">Tax Exemption &amp; 12A</h3>
                <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">80G एवं 12A पंजीकरण</p>
                <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-2 mb-4">
                  Donations to the Shri Radhe Maa Charitable Society are eligible for tax deduction under <strong>Section 80G</strong> of the Income Tax Act, 1961. The society is also registered under <strong>Section 12A</strong>, which grants income tax exemption on the society&apos;s own income.
                </p>
                <div className="space-y-2 mb-4">
                  {[
                    { label: "80G Status", value: "Certified — Donations tax-deductible" },
                    { label: "12A Status", value: "Registered — Income tax exempt" },
                    { label: "Act", value: "Income Tax Act, 1961" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between gap-3">
                      <span className="font-sans text-xs text-warm-800/50">{item.label}</span>
                      <span className="font-sans text-xs font-medium text-warm-900 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-saffron-50/60 border border-saffron-200/60 px-4 py-3">
                  <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1.5">For Tax Receipts &amp; Certificates</p>
                  <p className="font-sans text-sm text-warm-800/80">
                    Call: <a href="tel:+919560800343" className="text-crimson-500 hover:text-crimson-600 transition-colors">95608 00343</a>
                  </p>
                  <p className="font-sans text-sm text-warm-800/80 mt-0.5">
                    Email: <a href="mailto:shriradhemaacharitablesociety@gmail.com" className="text-crimson-500 hover:text-crimson-600 transition-colors break-all">shriradhemaacharitablesociety@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Fund Utilisation */}
        <ScrollReveal delay={250}>
          <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white mb-6">
            <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
              <BarChart3 className="w-5 h-5" />
              <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>FUNDS</span>
            </div>
            <div className="flex-1 p-4 md:p-5">
              <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">Fund Utilisation</h3>
              <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">निधि उपयोग विवरण</p>
              <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-2 mb-5">
                The society maintains a strict policy of directing the maximum possible proportion of funds directly to beneficiary programmes. Our approximate allocation across activity areas:
              </p>
              <div className="space-y-4">
                {[
                  { category: "Healthcare Programmes", categoryHi: "स्वास्थ्य सेवा", percent: 30, color: "bg-crimson-500" },
                  { category: "Financial Aid & Pensions", categoryHi: "वित्तीय सहायता और पेंशन", percent: 25, color: "bg-saffron-500" },
                  { category: "Janseva & Distribution Drives", categoryHi: "जनसेवा अभियान", percent: 20, color: "bg-warm-500" },
                  { category: "Disaster Relief Operations", categoryHi: "आपदा राहत", percent: 15, color: "bg-warm-400" },
                  { category: "Administration & Operations", categoryHi: "प्रशासन", percent: 10, color: "bg-warm-300" },
                ].map((item) => (
                  <div key={item.category}>
                    <div className="flex justify-between mb-1.5">
                      <div>
                        <span className="font-sans text-sm text-warm-800/80">{item.category}</span>
                        <span className="font-devanagari text-xs text-warm-800/40 ml-2" lang="hi">{item.categoryHi}</span>
                      </div>
                      <span className="font-stat text-sm font-bold text-crimson-500">{item.percent}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-warm-100">
                      <div
                        className={`h-2.5 rounded-full ${item.color}`}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs text-warm-800/40 mt-4">
                * Approximate figures. Exact breakdown available in the annual report on request.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Governance + Annual Reports grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Governance */}
          <ScrollReveal delay={350}>
            <div className="group flex h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
              <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                <Landmark className="w-5 h-5" />
                <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>GOV</span>
              </div>
              <div className="flex-1 p-4 md:p-5">
                <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">Governance</h3>
                <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">शासन संरचना</p>
                <div className="rounded-2xl bg-saffron-50/60 border border-saffron-200/60 px-4 py-3 mt-3 mb-4">
                  <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">General Secretary</p>
                  <p className="font-sans text-sm font-semibold text-warm-900">Mr. Rupendra Kashyap</p>
                  <p className="font-sans text-xs text-warm-800/50 mt-0.5">Shri Radhe Maa Charitable Society</p>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "All financial transactions are documented and audited annually.",
                    "The Board meets regularly to review programmes and finances.",
                    "Donor receipts issued for all contributions.",
                    "Operations in full compliance with the Societies Registration Act, 1860.",
                    "No officer benefits personally from society funds.",
                    "Transparent, accountable, and community-first in all decisions.",
                  ].map((principle) => (
                    <li key={principle} className="flex items-start gap-2.5 font-sans text-sm text-warm-800/70">
                      <svg className="w-4 h-4 text-saffron-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Annual Reports */}
          <ScrollReveal delay={400}>
            <div className="group flex h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
              <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                <FolderOpen className="w-5 h-5" />
                <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>REPORTS</span>
              </div>
              <div className="flex-1 p-4 md:p-5">
                <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">Annual Reports</h3>
                <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">वार्षिक रिपोर्ट</p>
                <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-2 mb-5">
                  Annual reports documenting our activities, financial statements, and impact are available on request. We are committed to full transparency in all our financial dealings.
                </p>
                <div className="space-y-3">
                  {["2023–24", "2022–23", "2021–22", "2020–21"].map((year) => (
                    <div key={year} className="flex items-center justify-between rounded-2xl border border-saffron-300/50 bg-white/40 px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-saffron-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                        <span className="font-sans text-sm font-medium text-warm-900">Annual Report {year}</span>
                      </div>
                      <span className="font-sans text-xs text-warm-800/40 border border-warm-800/10 rounded-full px-3 py-1">
                        On request
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact for Verification */}
        <ScrollReveal delay={500}>
          <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white mb-10">
            <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
              <MailCheck className="w-5 h-5" />
              <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>VERIFY</span>
            </div>
            <div className="flex-1 p-4 md:p-5">
              <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">Contact for Verification</h3>
              <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">सत्यापन के लिए संपर्क</p>
              <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-2 mb-5">
                Donors, auditors, and members of the public are welcome to contact us to verify registration details, request copies of certificates, or enquire about our governance and financial records. We are committed to full openness.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-saffron-50/60 border border-saffron-200/60 px-5 py-4">
                  <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-2">Phone</p>
                  <a href="tel:+919560800343" className="font-stat text-2xl font-bold text-crimson-500 hover:text-crimson-600 transition-colors">
                    95608 00343
                  </a>
                  <p className="font-sans text-xs text-warm-800/50 mt-1">Mon – Sat, 10 AM – 6 PM</p>
                </div>
                <div className="rounded-2xl bg-saffron-50/60 border border-saffron-200/60 px-5 py-4">
                  <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-2">Email</p>
                  <a
                    href="mailto:shriradhemaacharitablesociety@gmail.com"
                    className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors break-all"
                  >
                    shriradhemaacharitablesociety@gmail.com
                  </a>
                  <p className="font-sans text-xs text-warm-800/50 mt-1">We respond within 2 business days</p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl bg-white/40 border border-warm-800/[0.05] px-5 py-3.5">
                <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Registered Office</p>
                <p className="font-sans text-sm text-warm-900">Plot 5, Pocket-11, Sector-5, Rohini, Delhi – 110085</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
      </section>

      {/* Commitment */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={600}>
            <p className="font-devanagari text-sm text-crimson-500 mb-2" lang="hi">हमारी प्रतिबद्धता</p>
            <h3 className="font-serif text-2xl md:text-3xl text-warm-900 mb-4">Our Commitment to Donors</h3>
            <p className="font-sans text-base text-warm-600 leading-relaxed max-w-2xl mx-auto">
              Every donation received by the Shri Radhe Maa Charitable Society is accounted for, reported, and directed towards the purposes for which it was given. We operate on the principle that donor trust is sacred — and we honour it with complete transparency in every transaction, programme, and report.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
