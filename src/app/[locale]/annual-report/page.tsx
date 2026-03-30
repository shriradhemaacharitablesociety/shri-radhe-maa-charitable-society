import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { breadcrumbJsonLd } from "@/lib/seo";
import { HighlightCards } from "./HighlightCards";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "वार्षिक रिपोर्ट 2025-26 | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Annual Report 2025-26 | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी की वार्षिक रिपोर्ट 2025-26। प्रमुख उपलब्धियाँ, कोष उपयोग, और प्रभाव आँकड़े।"
      : "Annual Report 2025-26 of Shri Radhe Maa Charitable Society. Key highlights, fund utilization, impact statistics, and milestone timeline.",
    keywords: isHindi
      ? ["वार्षिक रिपोर्ट", "कोष उपयोग", "पारदर्शिता", "श्री राधे माँ सोसाइटी"]
      : ["annual report", "fund utilization", "transparency", "NGO report", "Shri Radhe Maa Society"],
    alternates: {
      languages: {
        "en-IN": "/en/annual-report",
        "hi-IN": "/hi/annual-report",
      },
    },
    openGraph: {
      title: "Annual Report 2025-26 | Shri Radhe Maa Charitable Society",
      description: "Key highlights, fund utilization, and impact from our work in 2025-26.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

interface Highlight {
  value: string;
  label: string;
  labelHi: string;
}

const highlights: Highlight[] = [
  { value: "5,200+", label: "Free Dialysis Sessions", labelHi: "निःशुल्क डायलिसिस सत्र" },
  { value: "₹32L+", label: "Financial Aid Disbursed", labelHi: "वित्तीय सहायता वितरित" },
  { value: "1,500+", label: "Families Reached", labelHi: "परिवारों तक पहुँच" },
  { value: "120+", label: "Wheelchairs Donated", labelHi: "व्हीलचेयर दान" },
];

interface FundCategory {
  name: string;
  nameHi: string;
  percentage: number;
  color: string;
}

const fundCategories: FundCategory[] = [
  { name: "Healthcare / Dialysis", nameHi: "स्वास्थ्य / डायलिसिस", percentage: 35, color: "bg-crimson-500" },
  { name: "Financial Aid", nameHi: "वित्तीय सहायता", percentage: 25, color: "bg-crimson-400" },
  { name: "Disaster Relief", nameHi: "आपदा राहत", percentage: 15, color: "bg-saffron-500" },
  { name: "Divyang Seva", nameHi: "दिव्यांग सेवा", percentage: 10, color: "bg-saffron-400" },
  { name: "Gaushala", nameHi: "गौशाला", percentage: 10, color: "bg-warm-400" },
  { name: "Administration", nameHi: "प्रशासन", percentage: 5, color: "bg-warm-300" },
];

interface Milestone {
  year: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
}

const milestones: Milestone[] = [
  {
    year: "2017",
    title: "Society Founded",
    titleHi: "सोसाइटी की स्थापना",
    description: "Registered under the Societies Registration Act (S/2930/SDM/NW/2017) in New Delhi.",
    descriptionHi: "नई दिल्ली में सोसायटी पंजीकरण अधिनियम के तहत पंजीकृत।",
  },
  {
    year: "2018",
    title: "First Pension Programme",
    titleHi: "पहला पेंशन कार्यक्रम",
    description: "Launched monthly pension payments for widows, elderly, and disabled individuals.",
    descriptionHi: "विधवाओं, बुजुर्गों और दिव्यांग व्यक्तियों के लिए मासिक पेंशन भुगतान शुरू किया।",
  },
  {
    year: "2019",
    title: "Divyang Seva Begins",
    titleHi: "दिव्यांग सेवा शुरू",
    description: "Started distributing wheelchairs, hearing aids, and mobility aids to differently-abled individuals.",
    descriptionHi: "दिव्यांग व्यक्तियों को व्हीलचेयर, श्रवण यंत्र और गतिशीलता सहायक वितरण शुरू किया।",
  },
  {
    year: "2020",
    title: "COVID-19 Relief",
    titleHi: "COVID-19 राहत",
    description: "Distributed food, PPE kits, and medical supplies during the pandemic across Delhi and Mumbai.",
    descriptionHi: "महामारी के दौरान दिल्ली और मुंबई में भोजन, PPE किट और चिकित्सा आपूर्ति वितरित की।",
  },
  {
    year: "2022",
    title: "Free Dialysis Centre",
    titleHi: "निःशुल्क डायलिसिस केंद्र",
    description: "Inaugurated a 24/7 free haemodialysis centre at Anand Hospital, Dahisar East, Mumbai.",
    descriptionHi: "आनंद अस्पताल, दहिसर पूर्व, मुंबई में 24/7 निःशुल्क हेमोडायलिसिस केंद्र का उद्घाटन किया।",
  },
  {
    year: "2024",
    title: "5,000 Dialysis Sessions",
    titleHi: "5,000 डायलिसिस सत्र",
    description: "Crossed the milestone of 5,000 free dialysis sessions provided to patients in need.",
    descriptionHi: "ज़रूरतमंद रोगियों को 5,000 निःशुल्क डायलिसिस सत्र प्रदान करने का मील का पत्थर पार किया।",
  },
  {
    year: "2025",
    title: "Flood Relief — 500 Families",
    titleHi: "बाढ़ राहत — 500 परिवार",
    description: "Major flood relief operation in Punjab, reaching over 500 families with essential supplies.",
    descriptionHi: "पंजाब में प्रमुख बाढ़ राहत अभियान, 500 से अधिक परिवारों तक आवश्यक आपूर्ति पहुँचाई।",
  },
  {
    year: "2026",
    title: "80G Renewal & Expansion",
    titleHi: "80G नवीनीकरण और विस्तार",
    description: "80G certification renewed for 2026-2031. Expanded outreach across 5 states.",
    descriptionHi: "2026-2031 के लिए 80G प्रमाणपत्र नवीनीकृत। 5 राज्यों में विस्तारित पहुँच।",
  },
];

export default async function AnnualReportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHindi = locale === "hi";

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    {
      name: "Annual Report",
      url: "https://shriradhemasociety.org/annual-report",
    },
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
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">वार्षिक रिपोर्ट</span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              {isHindi ? "वार्षिक रिपोर्ट 2025-26" : "Annual Report 2025-26"}
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              {isHindi
                ? "पारदर्शिता और जवाबदेही — हमारे सेवा कार्यों का वार्षिक विवरण।"
                : "Transparency and accountability — a comprehensive overview of our seva activities."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Key Highlights ──────────────────────────────── */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h3 className="font-serif text-xl sm:text-2xl text-warm-900 tracking-tight text-center mb-10">
              {isHindi ? "प्रमुख उपलब्धियाँ" : "Key Highlights"}
            </h3>
          </ScrollReveal>
          <HighlightCards highlights={highlights} isHindi={isHindi} />
        </div>
      </section>

      {/* ── Section 3: Fund Utilization ────────────────────────────── */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h3 className="font-serif text-xl sm:text-2xl text-warm-900 tracking-tight text-center mb-3">
              {isHindi ? "कोष उपयोग विवरण" : "Fund Utilization Breakdown"}
            </h3>
            <p className="text-warm-500 font-sans text-sm text-center mb-10 max-w-lg mx-auto">
              {isHindi
                ? "आपके योगदान का उपयोग कैसे किया जाता है — वित्तीय वर्ष 2025-26"
                : "How your contributions are utilized — Financial Year 2025-26"}
            </p>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            {/* Stacked bar */}
            <ScrollReveal delay={100}>
              <div className="w-full h-8 rounded-full overflow-hidden flex mb-8">
                {fundCategories.map((cat) => (
                  <div
                    key={cat.name}
                    className={`${cat.color} h-full transition-all duration-700`}
                    style={{ width: `${cat.percentage}%` }}
                    title={`${cat.name}: ${cat.percentage}%`}
                  />
                ))}
              </div>
            </ScrollReveal>

            {/* Legend with individual bars */}
            <div className="space-y-4">
              {fundCategories.map((cat, i) => (
                <ScrollReveal key={cat.name} delay={200 + i * 80}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-28 sm:w-40 md:w-52 flex-shrink-0">
                      <p className="text-warm-800 font-sans text-sm font-medium">
                        {isHindi ? cat.nameHi : cat.name}
                      </p>
                    </div>
                    <div className="flex-1 h-2 rounded-full bg-warm-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${cat.color} transition-all duration-700`}
                        style={{ width: `${cat.percentage}%` }}
                      />
                    </div>
                    <span className="text-warm-900 font-sans text-sm font-semibold w-10 text-right">
                      {cat.percentage}%
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Timeline of Key Milestones ──────────────────── */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h3 className="font-serif text-xl sm:text-2xl text-warm-900 tracking-tight text-center mb-10 sm:mb-14">
              {isHindi
                ? "प्रमुख मील के पत्थर (2017–2026)"
                : "Key Milestones (2017–2026)"}
            </h3>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-warm-200" />

            {milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={milestone.year} delay={100 + i * 100}>
                  <div
                    className={`relative flex items-start mb-10 last:mb-0 ${
                      isLeft
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Year dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-crimson-500 flex items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-crimson-500" />
                    </div>

                    {/* Content card */}
                    <div
                      className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                      }`}
                    >
                      <Badge variant="crimson" className="mb-2">
                        {milestone.year}
                      </Badge>
                      <h4 className="font-serif text-lg text-warm-900 tracking-tight mb-1">
                        {isHindi ? milestone.titleHi : milestone.title}
                      </h4>
                      <p className="text-warm-600 font-sans text-sm leading-relaxed">
                        {isHindi
                          ? milestone.descriptionHi
                          : milestone.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 5: Download PDF on Dark ────────────────────────── */}
      <section className="bg-gradient-to-br from-warm-900 via-warm-800 to-crimson-900 py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-devanagari text-sm text-saffron-400 mb-2" lang="hi">डाउनलोड</p>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
              {isHindi
                ? "पूरी रिपोर्ट डाउनलोड करें"
                : "Download Full Report"}
            </h3>
            <p className="text-white/60 font-sans text-sm mb-8 max-w-md mx-auto">
              {isHindi
                ? "वित्तीय विवरण और विस्तृत प्रभाव आँकड़ों सहित पूरी वार्षिक रिपोर्ट PDF में डाउनलोड करें।"
                : "Download the complete annual report as PDF including financial statements and detailed impact statistics."}
            </p>
            <Button variant="primary" size="lg" className="bg-white text-crimson-500 hover:bg-white/90">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              {isHindi
                ? "PDF डाउनलोड करें (2025-26)"
                : "Download PDF (2025-26)"}
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
