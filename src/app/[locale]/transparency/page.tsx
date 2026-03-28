import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
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
    <div className="pt-32 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-3">
            <Badge variant="gold">Transparency</Badge>
          </div>
          <SectionHeader
            title="Transparency & Compliance"
            titleHi="पारदर्शिता और अनुपालन"
            subtitle="We believe every donor deserves to know how their contribution is used. Here is our full compliance and governance record."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Registration */}
        <ScrollReveal delay={100}>
          <Card variant="default" className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl" aria-hidden="true">📋</div>
                <div>
                  <h2 className="font-serif text-xl text-warm-900">Society Registration</h2>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">सोसाइटी पंजीकरण</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { label: "Registration Number", value: "S/2930/SDM/NW/2017" },
                  { label: "Registered Under", value: "The Societies Registration Act, 1860" },
                  { label: "Date of Registration", value: "21 August 2017" },
                  { label: "Jurisdiction", value: "Sub-Divisional Magistrate, North-West, Delhi" },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-0.5">{item.label}</dt>
                    <dd className="font-sans text-sm font-medium text-warm-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* 80G */}
        <ScrollReveal delay={200}>
          <Card variant="default" className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl" aria-hidden="true">📄</div>
                <div>
                  <h2 className="font-serif text-xl text-warm-900">80G Tax Exemption</h2>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">80G कर छूट</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
                Donations to the Shri Radhe Maa Charitable Society may be eligible for tax deduction under Section 80G of the Income Tax Act, 1961. Please contact us for the current 80G certificate and to receive your donation receipt.
              </p>
              <div className="rounded-2xl bg-saffron-50/60 border border-saffron-200/60 px-5 py-4">
                <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-2">For Tax Receipts & 80G Certificates</p>
                <p className="font-sans text-sm text-warm-800/80">Contact: <a href="tel:+919560800343" className="text-crimson-500 hover:text-crimson-600 transition-colors">95608 00343</a></p>
                <p className="font-sans text-sm text-warm-800/80 mt-1">Email: <a href="mailto:shriradhemaacharitablesociety@gmail.com" className="text-crimson-500 hover:text-crimson-600 transition-colors break-all">shriradhemaacharitablesociety@gmail.com</a></p>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Annual Report */}
        <ScrollReveal delay={300}>
          <Card variant="default" className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl" aria-hidden="true">📊</div>
                <div>
                  <h2 className="font-serif text-xl text-warm-900">Annual Reports</h2>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">वार्षिक रिपोर्ट</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-5">
                Annual reports documenting our activities, financial statements, and impact are available on request. We are committed to full transparency in all our financial dealings.
              </p>
              <div className="space-y-3">
                {["2023–24", "2022–23", "2021–22"].map((year) => (
                  <div key={year} className="flex items-center justify-between rounded-2xl border border-saffron-300/50 bg-white/40 px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-saffron-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>
                      <span className="font-sans text-sm font-medium text-warm-900">Annual Report {year}</span>
                    </div>
                    <span className="font-sans text-xs text-warm-800/40 border border-warm-800/10 rounded-pill px-3 py-1">
                      Available on request
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Fund Utilization */}
        <ScrollReveal delay={400}>
          <Card variant="default" className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl" aria-hidden="true">🥧</div>
                <div>
                  <h2 className="font-serif text-xl text-warm-900">Fund Utilisation</h2>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">निधि उपयोग</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-5">
                The society maintains a strict policy of directing the maximum possible proportion of funds to direct beneficiary activities. Our approximate allocation:
              </p>
              <div className="space-y-3">
                {[
                  { category: "Direct Beneficiary Programmes", percent: 75, color: "bg-crimson-500" },
                  { category: "Healthcare Initiatives", percent: 15, color: "bg-saffron-500" },
                  { category: "Administration & Operations", percent: 10, color: "bg-warm-400" },
                ].map((item) => (
                  <div key={item.category}>
                    <div className="flex justify-between mb-1">
                      <span className="font-sans text-sm text-warm-800/70">{item.category}</span>
                      <span className="font-stat text-sm font-bold text-warm-900">{item.percent}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-warm-100">
                      <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs text-warm-800/40 mt-4">
                * Approximate figures. Exact breakdown available in the annual report.
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Governance */}
        <ScrollReveal delay={500}>
          <div className="rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">शासन संरचना</p>
            <h3 className="font-serif text-xl text-warm-900 mb-4">Governance Principles</h3>
            <ul className="space-y-3">
              {[
                "All financial transactions are documented and audited annually.",
                "The Board of Trustees meets regularly to review programmes and finances.",
                "Donor receipts are issued for all contributions.",
                "The society operates in full compliance with the Societies Registration Act, 1860.",
                "No trustee or officer benefits personally from society funds.",
              ].map((principle) => (
                <li key={principle} className="flex items-start gap-3 font-sans text-sm text-warm-800/70">
                  <svg className="w-4 h-4 text-crimson-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
