import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const hospitalPartners = [
  {
    name: "Anand Hospital",
    location: "Dahisar East, Mumbai",
    programme: "Free Haemodialysis Centre",
    description:
      "The society operates a free dialysis centre on the 2nd floor of Anand Hospital, Dahisar Village, Anand Nagar, Dahisar East, Mumbai — 400068. Patients receive free haemodialysis sessions, ensuring life-saving treatment is accessible to those who cannot afford it.",
    contact: "86570 67228 / 98921 54615",
  },
];

const governmentAffiliations = [
  {
    name: "PM CARES Fund",
    nameHi: "पीएम केयर्स फंड",
    description:
      "Contributed to the Prime Minister's Citizen Assistance and Relief in Emergency Situations Fund for national-level disaster response.",
  },
  {
    name: "Delhi Chief Minister's Relief Fund",
    nameHi: "दिल्ली मुख्यमंत्री राहत कोष",
    description:
      "Donated to the Delhi CM Relief Fund to support state-level relief and welfare programmes for the people of Delhi.",
  },
  {
    name: "Punjab Chief Minister's Relief Fund",
    nameHi: "पंजाब मुख्यमंत्री राहत कोष",
    description:
      "Contributed to the Punjab CM Relief Fund, supporting welfare and relief initiatives across Punjab.",
  },
];

const partnerBenefits = [
  "Direct CSR compliance under Section 135 of the Companies Act, 2013",
  "80G tax deduction certificates for all contributions",
  "Transparent impact reporting with audited financials",
  "Named programme sponsorship opportunities",
  "Brand visibility across our digital and offline campaigns",
  "Joint press releases and media coverage",
  "Site visits and direct beneficiary interaction",
  "Customised CSR programme design aligned with your goals",
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
      ? "हमारे सहयोगी | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Partnerships | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी की अस्पताल साझेदारी, सरकारी संबद्धता और CSR सहयोग।"
      : "Hospital partnerships, government affiliations, and CSR collaboration opportunities with Shri Radhe Maa Charitable Society.",
    alternates: { languages: { "en-IN": "/en/partnerships", "hi-IN": "/hi/partnerships" } },
    openGraph: {
      title: "Partnerships — Shri Radhe Maa Charitable Society",
      description: "Partner with a registered, 80G-certified society for meaningful CSR impact.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function PartnershipsPage() {
  return (
    <div style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      {/* Header */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              title="Our Partners"
              titleHi="हमारे सहयोगी"
              subtitle="Strategic partnerships that amplify our reach and deepen our impact across healthcare, government welfare, and community development."
              className="mb-14"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Hospital Partnerships */}
      <section className="bg-cream py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-10">
              <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">
                अस्पताल साझेदारी
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900">Hospital Partnerships</h2>
              <div className="w-8 h-[3px] rounded-full bg-crimson-500 mt-3" />
            </div>
          </ScrollReveal>

          {hospitalPartners.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 150}>
              <Card variant="white" accent="crimson" className="mb-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-crimson-50 border border-crimson-100 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-crimson-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="font-serif text-lg sm:text-xl text-warm-900">{partner.name}</h3>
                      <Badge variant="crimson">{partner.programme}</Badge>
                    </div>
                    <p className="font-sans text-sm text-warm-500 mb-3">
                      {partner.location}
                    </p>
                    <p className="font-sans text-sm text-warm-600 leading-relaxed mb-3">
                      {partner.description}
                    </p>
                    <p className="font-sans text-xs text-warm-500">
                      Contact:{" "}
                      <span className="text-crimson-500 font-medium">{partner.contact}</span>
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Government Affiliations */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-10">
              <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">
                सरकारी संबद्धता
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900">Government Affiliations</h2>
              <div className="w-8 h-[3px] rounded-full bg-crimson-500 mt-3" />
              <p className="font-sans text-[15px] text-warm-600 mt-3 max-w-xl leading-relaxed">
                The society has contributed to major government relief funds, reinforcing our
                commitment to national welfare beyond our own programmes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {governmentAffiliations.map((affiliation, i) => (
              <ScrollReveal key={affiliation.name} delay={i * 150}>
                <Card variant="cream" accent="gold" className="h-full">
                  <div className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-saffron-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-warm-900 mb-1">
                    {affiliation.name}
                  </h3>
                  <p className="font-devanagari text-sm text-warm-500 mb-3" lang="hi">
                    {affiliation.nameHi}
                  </p>
                  <p className="font-sans text-sm text-warm-600 leading-relaxed">
                    {affiliation.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="bg-cream py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
            <ScrollReveal>
              <div>
                <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">
                  हमारे साथ जुड़ें
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-warm-900 mb-4">Partner With Us</h2>
                <div className="w-8 h-[3px] rounded-full bg-crimson-500 mb-6" />
                <p className="font-sans text-warm-600 leading-relaxed mb-6">
                  Whether you are a corporation looking to fulfil your CSR mandate, a hospital
                  seeking to expand community healthcare, or an organisation aligned with our
                  mission, we welcome meaningful partnerships that create lasting impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg">Get in Touch</Button>
                  </Link>
                  <Link href="/transparency">
                    <Button variant="ghost" size="lg">
                      View Our Financials
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card variant="white" accent="crimson">
                <h3 className="font-serif text-lg text-warm-900 mb-4">
                  Partnership Benefits
                </h3>
                <ul className="space-y-3">
                  {partnerBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-crimson-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-sans text-sm text-warm-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>

          {/* CSR Compliance Note */}
          <ScrollReveal delay={350}>
            <div className="mt-10 sm:mt-12 rounded-2xl border border-saffron-300/50 bg-saffron-50/40 p-4 sm:p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-saffron-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-warm-900 mb-2">
                    CSR Compliance — Section 135
                  </h4>
                  <p className="font-sans text-sm text-warm-600 leading-relaxed">
                    Under Section 135 of the Companies Act, 2013, companies meeting specified
                    net worth, turnover, or profit thresholds are required to spend at least 2%
                    of their average net profit on CSR activities. Shri Radhe Maa Charitable
                    Society is a registered, 80G-certified organisation eligible to receive CSR
                    funds. Our programmes in healthcare (free dialysis), disability support,
                    elderly welfare, disaster relief, and community development align with
                    Schedule VII activities recognised under the Act.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
