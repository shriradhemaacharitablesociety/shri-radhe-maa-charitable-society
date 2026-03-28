import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
      ? "80G कर लाभ | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "80G Tax Benefits | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी को दान करें और धारा 80G के तहत कर छूट प्राप्त करें। PAN: AAUAS1740G। दान रसीद और ITR दाखिल करने की प्रक्रिया।"
      : "Donate to Shri Radhe Maa Charitable Society and claim tax deduction under Section 80G. PAN: AAUAS1740G. Learn how to get your receipt and file with ITR.",
    keywords: isHindi
      ? ["80G", "कर छूट", "दान", "आयकर", "टैक्स बचत", "चैरिटेबल सोसाइटी"]
      : ["80G", "tax deduction", "donation", "income tax", "tax saving", "charitable society"],
    alternates: { languages: { "en-IN": "/en/80g", "hi-IN": "/hi/80g" } },
    openGraph: {
      title: "80G Tax Benefits | Shri Radhe Maa Charitable Society",
      description: "Save taxes by donating. Get 80G receipts for your contributions.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

const steps = {
  en: [
    {
      number: "1",
      title: "Make a Donation",
      description:
        "Donate online or offline to Shri Radhe Maa Charitable Society. Every rupee counts towards making a difference.",
    },
    {
      number: "2",
      title: "Receive Your 80G Receipt",
      description:
        "Contact us with your donation details and we will issue an official 80G tax receipt within 7 working days.",
    },
    {
      number: "3",
      title: "File with Your ITR",
      description:
        "Submit the 80G receipt along with your Income Tax Return to claim the deduction and save on taxes.",
    },
  ],
  hi: [
    {
      number: "1",
      title: "दान करें",
      description:
        "श्री राधे माँ चैरिटेबल सोसाइटी को ऑनलाइन या ऑफलाइन दान करें। हर रुपया बदलाव लाने में मदद करता है।",
    },
    {
      number: "2",
      title: "80G रसीद प्राप्त करें",
      description:
        "अपने दान के विवरण के साथ हमसे संपर्क करें और हम 7 कार्य दिवसों के भीतर आधिकारिक 80G कर रसीद जारी करेंगे।",
    },
    {
      number: "3",
      title: "ITR के साथ दाखिल करें",
      description:
        "कर कटौती का दावा करने और कर बचाने के लिए अपने आयकर रिटर्न के साथ 80G रसीद जमा करें।",
    },
  ],
};

export default async function TaxBenefitsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHindi = locale === "hi";

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "80G Tax Benefits", url: "https://shriradhemasociety.org/80g" },
  ]);

  const currentSteps = isHindi ? steps.hi : steps.en;

  return (
    <div className="section-white" style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Header */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              title="80G Tax Benefits"
              titleHi="80G कर लाभ"
              subtitle={
                isHindi
                  ? "श्री राधे माँ चैरिटेबल सोसाइटी को किया गया दान आयकर अधिनियम की धारा 80G के तहत कर कटौती के लिए पात्र है।"
                  : "Donations made to Shri Radhe Maa Charitable Society are eligible for tax deduction under Section 80G of the Income Tax Act, 1961."
              }
              className="mb-14"
            />
          </ScrollReveal>

          {/* What is 80G */}
          <ScrollReveal delay={100}>
            <div className="mb-14">
              <h3 className="font-serif text-2xl text-warm-900 mb-4">
                {isHindi ? "धारा 80G क्या है?" : "What is Section 80G?"}
              </h3>
              <p className="text-warm-600 text-[15px] leading-relaxed font-sans mb-4">
                {isHindi
                  ? "आयकर अधिनियम, 1961 की धारा 80G भारत में करदाताओं को पंजीकृत चैरिटेबल संगठनों को किए गए दान पर कर कटौती का दावा करने की अनुमति देती है। दान राशि के 50% तक कर योग्य आय से कटौती की जा सकती है, जिससे आपका कर भार कम होता है।"
                  : "Section 80G of the Income Tax Act, 1961 allows taxpayers in India to claim a deduction on donations made to registered charitable organisations. Up to 50% of the donated amount can be deducted from your taxable income, reducing your overall tax liability."}
              </p>
              <p className="text-warm-600 text-[15px] leading-relaxed font-sans">
                {isHindi
                  ? "श्री राधे माँ चैरिटेबल सोसाइटी आयकर विभाग द्वारा 80G प्रमाणित है। आपके प्रत्येक दान पर कर लाभ उपलब्ध है।"
                  : "Shri Radhe Maa Charitable Society is 80G certified by the Income Tax Department. Every donation you make is eligible for tax benefits."}
              </p>
            </div>
          </ScrollReveal>

          {/* Tax Calculation Card */}
          <ScrollReveal delay={200}>
            <div className="mb-14 rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-5 sm:p-8 md:p-10">
              <p className="font-devanagari text-center text-sm text-crimson-500 mb-2" lang="hi">
                कर बचत उदाहरण
              </p>
              <h3 className="font-serif text-2xl text-warm-900 text-center mb-8">
                {isHindi ? "कर बचत कैसे काम करती है" : "How Tax Savings Work"}
              </h3>

              <div className="max-w-md mx-auto space-y-4">
                {/* Row 1: Donation */}
                <div className="flex items-center justify-between py-3 border-b border-warm-200">
                  <span className="font-sans text-warm-600 text-sm">
                    {isHindi ? "आपका दान" : "Your Donation"}
                  </span>
                  <span className="font-stat text-xl sm:text-2xl font-black text-warm-900">
                    &#x20B9;10,000
                  </span>
                </div>

                {/* Row 2: Deduction */}
                <div className="flex items-center justify-between py-3 border-b border-warm-200">
                  <span className="font-sans text-warm-600 text-sm">
                    {isHindi ? "80G कटौती (50%)" : "80G Deduction (50%)"}
                  </span>
                  <span className="font-stat text-xl sm:text-2xl font-black text-saffron-600">
                    &#x20B9;5,000
                  </span>
                </div>

                {/* Row 3: Tax saved */}
                <div className="flex items-center justify-between py-3 border-b border-warm-200">
                  <span className="font-sans text-warm-600 text-sm">
                    {isHindi
                      ? "कर बचत (30% स्लैब पर)"
                      : "Tax Saved (at 30% slab)"}
                  </span>
                  <span className="font-stat text-xl sm:text-2xl font-black text-crimson-500">
                    &#x20B9;1,500
                  </span>
                </div>

                {/* Effective cost */}
                <div className="rounded-2xl bg-white border border-crimson-200 p-5 text-center mt-6">
                  <p className="font-sans text-warm-600 text-xs uppercase tracking-wider mb-1">
                    {isHindi ? "प्रभावी दान लागत" : "Effective Cost of Donation"}
                  </p>
                  <p className="font-stat text-3xl sm:text-4xl font-black text-crimson-500">
                    &#x20B9;8,500
                  </p>
                  <p className="font-sans text-warm-500 text-xs mt-2">
                    {isHindi
                      ? "₹10,000 का दान करें, केवल ₹8,500 का वास्तविक खर्च"
                      : "Donate ₹10,000 — it effectively costs you only ₹8,500"}
                  </p>
                </div>

                <p className="text-warm-400 text-xs text-center font-sans mt-4">
                  {isHindi
                    ? "* वास्तविक बचत आपके कर स्लैब पर निर्भर करती है। यह केवल एक उदाहरण है।"
                    : "* Actual savings depend on your tax slab. This is an illustrative example only."}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Steps to Claim */}
          <ScrollReveal delay={300}>
            <div className="mb-14">
              <h3 className="font-serif text-2xl text-warm-900 text-center mb-8">
                {isHindi
                  ? "80G कर लाभ का दावा कैसे करें"
                  : "How to Claim Your 80G Tax Benefit"}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentSteps.map((step, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6 text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-crimson-500 text-white font-stat font-bold text-lg flex items-center justify-center mx-auto mb-4">
                      {step.number}
                    </div>
                    <h4 className="font-serif text-lg text-warm-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="font-sans text-warm-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Society Details */}
          <ScrollReveal delay={400}>
            <div className="mb-14 rounded-2xl border border-warm-200 bg-warm-50/50 p-4 sm:p-6 md:p-8">
              <h3 className="font-serif text-xl text-warm-900 mb-4">
                {isHindi ? "सोसाइटी विवरण" : "Society Details"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm">
                <div>
                  <span className="text-warm-500 block mb-1">
                    {isHindi ? "सोसाइटी का नाम" : "Society Name"}
                  </span>
                  <span className="text-warm-900 font-medium">
                    Shri Radhe Maa Charitable Society
                  </span>
                </div>
                <div>
                  <span className="text-warm-500 block mb-1">
                    {isHindi ? "पंजीकरण संख्या" : "Registration No."}
                  </span>
                  <span className="text-warm-900 font-medium">
                    S/2930/SDM/NW/2017
                  </span>
                </div>
                <div>
                  <span className="text-warm-500 block mb-1">PAN</span>
                  <span className="text-warm-900 font-medium">AAUAS1740G</span>
                </div>
                <div>
                  <span className="text-warm-500 block mb-1">
                    {isHindi ? "80G प्रमाणन" : "80G Certification"}
                  </span>
                  <span className="text-warm-900 font-medium">
                    {isHindi ? "आयकर विभाग द्वारा प्रमाणित" : "Certified by Income Tax Department"}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-white text-crimson-500 border-2 border-crimson-500 font-sans font-semibold text-sm px-6 py-3 min-h-[44px] w-full sm:w-auto rounded-lg hover:bg-crimson-50 transition-colors duration-200"
              >
                {isHindi ? "रसीद डाउनलोड करें" : "Download Receipt"}
              </Link>
              <Link
                href={`/${locale}/seva`}
                className="inline-flex items-center justify-center gap-2 bg-crimson-500 text-white font-sans font-semibold text-sm px-6 py-3 min-h-[44px] w-full sm:w-auto rounded-lg hover:bg-crimson-600 transition-colors duration-200"
              >
                {isHindi ? "अभी दान करें" : "Donate Now"}
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
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
