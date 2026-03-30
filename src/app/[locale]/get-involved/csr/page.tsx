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

const csrOpportunities = [
  {
    icon: "🏥",
    title: "Healthcare Sponsorship",
    titleHi: "स्वास्थ्य सेवा प्रायोजन",
    desc: "Sponsor dialysis sessions, blood donation camps, or eye and dental check-up drives for underprivileged communities.",
  },
  {
    icon: "♿",
    title: "Divyang Welfare",
    titleHi: "दिव्यांग कल्याण",
    desc: "Fund wheelchair procurement, assistive devices, and livelihood support for specially-abled individuals.",
  },
  {
    icon: "🎓",
    title: "Education & Skill Development",
    titleHi: "शिक्षा और कौशल विकास",
    desc: "Support educational initiatives and skill development programmes for underprivileged youth and families.",
  },
  {
    icon: "🌊",
    title: "Disaster Relief Fund",
    titleHi: "आपदा राहत कोष",
    desc: "Contribute to our disaster relief reserve to enable rapid response when calamities strike across India.",
  },
  {
    icon: "🤝",
    title: "Pension & Financial Aid",
    titleHi: "पेंशन और वित्तीय सहायता",
    desc: "Sponsor monthly pensions for elderly or destitute families — an ongoing, high-impact contribution.",
  },
  {
    icon: "🌾",
    title: "Gaushala & Environment",
    titleHi: "गौशाला और पर्यावरण",
    desc: "Support cow shelter (gaushala) operations as a culturally meaningful and eco-conscious CSR activity.",
  },
];

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
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
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
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* 80G benefit */}
        <ScrollReveal delay={100}>
          <div className="relative mb-10 rounded-2xl bg-white shadow-md p-6 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 to-saffron-400" />
            <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-saffron-500/25 to-transparent" />
            <div className="flex items-start gap-5">
              <div className="text-3xl shrink-0" aria-hidden="true">📄</div>
              <div>
                <Badge variant="gold" className="mb-3">Tax Benefit</Badge>
                <h2 className="font-serif text-xl text-warm-900 mb-2">80G Tax Deduction for Corporations</h2>
                <p className="font-sans text-warm-800/70 text-sm leading-relaxed mb-3">
                  Corporate donations to the Shri Radhe Maa Charitable Society may qualify for deduction under <strong className="text-warm-900">Section 80G of the Income Tax Act, 1961</strong>. This makes your CSR contribution financially beneficial in addition to its social impact.
                </p>
                <p className="font-sans text-warm-800/60 text-sm leading-relaxed">
                  Please contact us for our 80G certificate and to discuss eligible donation structures under the Companies Act, 2013.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CSR Opportunities */}
        <ScrollReveal delay={200}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">CSR Opportunity Areas</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">सीएसआर के अवसर</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {csrOpportunities.map((item, i) => (
            <ScrollReveal key={item.title} delay={250 + i * 80}>
              <Card className="h-full">
                <CardHeader>
                  <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">{item.titleHi}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

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

      {/* CTA on Dark */}
      <section className="bg-gradient-to-br from-warm-900 via-warm-800 to-crimson-900 py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={900}>
            <p className="font-devanagari text-sm text-saffron-400 mb-2" lang="hi">अभी संपर्क करें</p>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">Start a CSR Partnership</h3>
            <p className="font-sans text-sm text-white/70 leading-relaxed mb-6">
              Contact our team to discuss CSR partnership opportunities, project scopes, and impact reporting.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-lg">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm px-5 py-4">
                <p className="font-sans text-xs uppercase tracking-wider text-white/50 mb-1">Phone</p>
                <a href="tel:+919560800343" className="font-sans text-sm text-saffron-400 hover:text-saffron-300 transition-colors">95608 00343</a>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm px-5 py-4">
                <p className="font-sans text-xs uppercase tracking-wider text-white/50 mb-1">Email</p>
                <a href="mailto:shriradhemaacharitablesociety@gmail.com" className="font-sans text-sm text-saffron-400 hover:text-saffron-300 transition-colors break-all">
                  shriradhemaacharitablesociety@gmail.com
                </a>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-crimson-500 text-sm font-medium rounded-lg hover:bg-white/90 transition-all duration-300"
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
