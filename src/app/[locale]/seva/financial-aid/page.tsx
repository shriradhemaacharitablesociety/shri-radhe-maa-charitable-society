import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

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
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Seva", url: "https://shriradhemasociety.org/seva" },
    { name: "Financial Aid", url: "https://shriradhemasociety.org/seva/financial-aid" },
  ]);
  const faqSchema = faqJsonLd(faqs);

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-3">
            <Badge variant="gold">Financial Aid</Badge>
          </div>
          <SectionHeader
            title="Financial Aid & Pensions"
            titleHi="वित्तीय सहायता और पेंशन"
            subtitle="Providing sustained financial support to families who need it most — monthly pensions, emergency aid, and marriage assistance."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-3 gap-4 mb-10 rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-6">
            {[
              { value: "100+", label: "Families on Monthly Pension" },
              { value: "5", label: "Items in Marriage Aid" },
              { value: "₹25L+", label: "Govt Contributions" },
            ].map((stat, i) => (
              <div key={stat.label} className={`text-center ${i < 2 ? "border-r border-saffron-300/40" : ""}`}>
                <AnimatedCounter value={stat.value} className="font-stat text-3xl font-black text-crimson-500" />
                <p className="font-sans text-xs uppercase tracking-wider text-warm-800/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Core programmes grid */}
        <ScrollReveal delay={130}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Our Programmes</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">हमारे कार्यक्रम</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* Monthly Pensions */}
          <ScrollReveal delay={150}>
            <Card accent="crimson" className="h-full">
              <CardHeader>
                <div className="text-2xl mb-2" aria-hidden="true">🤝</div>
                <h2 className="font-serif text-xl text-warm-900">Monthly Pension Programme</h2>
                <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">मासिक पेंशन कार्यक्रम</p>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
                  The society provides regular monthly pensions to over <strong>100 families</strong> across Delhi and NCR. These are families living in poverty — often elderly individuals or households that have lost their primary earner. The pension ensures dignity and basic sustenance on a consistent, reliable basis.
                </p>
                <div className="rounded-2xl bg-crimson-50/60 border border-crimson-200/40 px-4 py-3">
                  <p className="font-stat text-2xl font-bold text-crimson-500">100+</p>
                  <p className="font-sans text-xs text-warm-800/60 uppercase tracking-wider">Families supported monthly</p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* One-time Aid */}
          <ScrollReveal delay={200}>
            <Card accent="gold" className="h-full">
              <CardHeader>
                <div className="text-2xl mb-2" aria-hidden="true">💵</div>
                <h2 className="font-serif text-xl text-warm-900">One-Time Financial Assistance</h2>
                <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">एकमुश्त वित्तीय सहायता</p>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
                  For families facing sudden crises — medical emergencies, job loss, or other urgent situations — the society provides one-time financial assistance. These grants help families navigate difficult times without falling into long-term debt or destitution.
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Medical emergency support",
                    "Job loss and income disruption",
                    "Urgent household crises",
                    "Post-disaster recovery aid",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-sans text-sm text-warm-800/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Marriage Assistance */}
          <ScrollReveal delay={250}>
            <Card accent="crimson" className="h-full md:col-span-2">
              <CardHeader>
                <div className="text-2xl mb-2" aria-hidden="true">💒</div>
                <h2 className="font-serif text-xl text-warm-900">Marriage Assistance</h2>
                <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">विवाह सहायता</p>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
                  Marriages can be financially overwhelming for poor families. The society provides a package of <strong>5 essential items per family</strong> to help ease the burden and ensure that every family can celebrate this milestone with dignity — regardless of their financial circumstances.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-saffron-50/60 border border-saffron-200/60 px-5 py-4">
                    <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-3">Assistance Package (5 items)</p>
                    <ul className="space-y-1.5">
                      {[
                        "Essential household items",
                        "Clothing and textiles",
                        "Kitchen essentials",
                        "Religious ceremony items",
                        "Practical utility items",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 font-sans text-sm text-warm-800/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between gap-3">
                    <div className="rounded-2xl bg-white/40 border border-warm-800/[0.05] px-4 py-3">
                      <p className="font-sans text-xs text-warm-800/50 uppercase tracking-wider mb-1">Items per family</p>
                      <p className="font-stat text-3xl font-bold text-crimson-500">5</p>
                    </div>
                    <div className="rounded-2xl bg-white/40 border border-warm-800/[0.05] px-4 py-3">
                      <p className="font-sans text-xs text-warm-800/50 uppercase tracking-wider mb-1">Who is eligible</p>
                      <p className="font-sans text-sm text-warm-900">Families from economically weaker sections facing financial hardship at time of marriage</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Government Contributions */}
        <ScrollReveal delay={400}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Government Fund Contributions</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-2" lang="hi">सरकारी राहत कोष में योगदान</p>
          <p className="font-sans text-sm text-warm-800/60 leading-relaxed mb-6">
            In addition to direct beneficiary programmes, the society has made significant contributions to government relief funds, channelling resources to disaster response and pandemic relief at the national and state level.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            { fund: "PM Cares Fund", amount: "₹10 Lakh", icon: "🇮🇳", desc: "Contribution to the Prime Minister's Citizen Assistance and Relief in Emergency Situations Fund for national disaster and emergency response.", accent: "crimson" as const },
            { fund: "Delhi CM Relief Fund", amount: "₹5 Lakh", icon: "🏛️", desc: "Contribution to the Chief Minister of Delhi's Relief Fund, supporting welfare and emergency assistance for Delhi residents.", accent: "gold" as const },
            { fund: "Punjab CM Relief Fund", amount: "₹5 Lakh", icon: "🌾", desc: "Contribution to the Chief Minister of Punjab's Relief Fund — including COVID-19 pandemic relief for the state of Punjab.", accent: "crimson" as const },
            { fund: "Maharashtra CM Relief Fund", amount: "₹5 Lakh", icon: "🌊", desc: "Contribution to the Chief Minister of Maharashtra's Relief Fund in support of flood relief and disaster response in Maharashtra.", accent: "gold" as const },
          ].map((item, i) => (
            <ScrollReveal key={item.fund} delay={450 + i * 80}>
              <Card accent={item.accent} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl shrink-0" aria-hidden="true">{item.icon}</div>
                      <div>
                        <h3 className="font-serif text-lg text-warm-900">{item.fund}</h3>
                        <p className="font-stat text-2xl font-bold text-crimson-500 mt-0.5">{item.amount}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* How to apply CTA */}
        <ScrollReveal delay={700}>
          <div className="rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8 mb-10">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">सहायता के लिए संपर्क करें</p>
            <h3 className="font-serif text-xl text-warm-900 mb-3">Apply for Financial Assistance</h3>
            <p className="font-sans text-sm text-warm-800/60 leading-relaxed mb-5 max-w-lg">
              If you or someone you know needs financial assistance, please reach out to us. All applications are treated with complete confidentiality and compassion.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919560800343"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-crimson-500 to-crimson-400 text-white text-sm font-medium rounded-pill hover:from-crimson-600 hover:to-crimson-500 transition-all duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                Call: 95608 00343
              </a>
              <a
                href="mailto:shriradhemaacharitablesociety@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-warm-800/20 text-warm-800/70 text-sm font-medium rounded-pill hover:bg-warm-100 hover:text-warm-900 transition-all duration-200 font-sans"
              >
                Email Us
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal delay={800}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Frequently Asked Questions</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">सामान्य प्रश्न</p>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-saffron-300/50 bg-white/40 backdrop-blur-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-sans text-sm font-medium text-warm-900 hover:bg-saffron-50/40 transition-colors list-none">
                  {faq.question}
                  <svg className="w-4 h-4 text-warm-800/40 shrink-0 ml-3 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 font-sans text-sm text-warm-800/70 leading-relaxed border-t border-saffron-300/30 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
