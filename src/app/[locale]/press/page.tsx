import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const pressPlaceholders = [
  {
    outlet: "Media Coverage",
    title: "Shri Radhe Maa Charitable Society Distributes Wheelchairs in Delhi",
    date: "Coming Soon",
    excerpt:
      "Coverage of the society's Divyang Seva programme, providing wheelchairs, hearing aids, and crutches to differently-abled individuals across Delhi NCR.",
  },
  {
    outlet: "Press Feature",
    title: "Free Dialysis Centre Opens at Anand Hospital, Mumbai",
    date: "Coming Soon",
    excerpt:
      "An in-depth look at the society's free haemodialysis centre in Dahisar East, Mumbai, serving patients who cannot afford life-saving dialysis treatment.",
  },
  {
    outlet: "Community Spotlight",
    title: "Disaster Relief Efforts During Natural Calamities",
    date: "Coming Soon",
    excerpt:
      "How the society mobilises food, water, medicine, and shelter for families affected by floods, earthquakes, and other natural disasters across India.",
  },
];

const keyFacts = [
  { label: "Registration No.", value: "S/2930/SDM/NW/2017" },
  { label: "Established", value: "2017" },
  { label: "Tax Status", value: "80G Certified" },
  { label: "Active Programmes", value: "7+" },
  { label: "Families Served", value: "500+" },
  { label: "Head Office", value: "Rohini, New Delhi" },
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
      ? "प्रेस और मीडिया | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Press & Media | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी की मीडिया कवरेज, प्रेस किट और मीडिया संपर्क।"
      : "Media coverage, press kit, and media contact for Shri Radhe Maa Charitable Society.",
    alternates: { languages: { "en-IN": "/en/press", "hi-IN": "/hi/press" } },
    openGraph: {
      title: "Press & Media — Shri Radhe Maa Charitable Society",
      description: "Press mentions, media kit, and contact details for media enquiries.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function PressPage() {
  return (
    <div style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      {/* Press Mentions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              title="Press & Media"
              titleHi="प्रेस और मीडिया"
              subtitle="Media coverage and resources for journalists and content creators covering our charitable work."
              className="mb-14"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressPlaceholders.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <Card variant="cream" accent="crimson" className="h-full">
                  <Badge variant="crimson" className="mb-4">
                    {item.outlet}
                  </Badge>
                  <h3 className="font-serif text-lg text-warm-900 leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-warm-500 uppercase tracking-wider mb-3">
                    {item.date}
                  </p>
                  <p className="font-sans text-sm text-warm-600 leading-relaxed">
                    {item.excerpt}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts / Press Kit */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">
                प्रेस किट
              </p>
              <h2 className="font-serif text-3xl text-warm-900">Press Kit</h2>
              <div className="w-8 h-[3px] rounded-full bg-crimson-500 mt-3 mx-auto" />
              <p className="font-sans text-[15px] text-warm-600 mt-3 max-w-xl mx-auto leading-relaxed">
                Download our press kit or use the key facts below for your coverage.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Key Facts Card */}
            <ScrollReveal delay={100}>
              <Card variant="white" accent="crimson" className="h-full">
                <h3 className="font-serif text-xl text-warm-900 mb-6">Key Facts</h3>
                <div className="space-y-4">
                  {keyFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-center justify-between py-2 border-b border-warm-100 last:border-0"
                    >
                      <span className="font-sans text-sm text-warm-600">{fact.label}</span>
                      <span className="font-stat text-sm font-bold text-warm-900">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>

            {/* About blurb + download */}
            <ScrollReveal delay={250}>
              <Card variant="white" accent="gold" className="h-full flex flex-col">
                <h3 className="font-serif text-xl text-warm-900 mb-4">About the Society</h3>
                <p className="font-sans text-sm text-warm-600 leading-relaxed mb-4">
                  Shri Radhe Maa Charitable Society is a registered charitable organisation
                  (Reg. No. S/2930/SDM/NW/2017) established under the spiritual guidance of
                  Shri Radhe Guru Maa. The society runs 7+ programmes including free
                  haemodialysis, disability support, widow and elderly pensions, mass marriage
                  assistance, gaushala maintenance, disaster relief, and government fund
                  contributions.
                </p>
                <p className="font-sans text-sm text-warm-600 leading-relaxed mb-6">
                  The society is 80G certified, and all donations are eligible for tax
                  deduction under Section 80G of the Income Tax Act, 1961.
                </p>
                <div className="mt-auto">
                  <Button variant="ghost" size="md" disabled>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12M12 16.5V3"
                      />
                    </svg>
                    Download Press Kit (Coming Soon)
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-devanagari text-sm text-crimson-500 mb-2" lang="hi">
              मीडिया संपर्क
            </p>
            <h2 className="font-serif text-3xl text-warm-900 mb-4">
              Media Contact
            </h2>
            <p className="font-sans text-warm-600 leading-relaxed mb-8">
              For press enquiries, interviews, or media coverage requests, please reach out to us.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <Card variant="cream" accent="none" className="inline-block text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-crimson-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <div>
                    <p className="font-sans text-xs text-warm-500 uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:shriradhemaacharitablesociety@gmail.com"
                      className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors"
                    >
                      shriradhemaacharitablesociety@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-crimson-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <div>
                    <p className="font-sans text-xs text-warm-500 uppercase tracking-wider">
                      Phone
                    </p>
                    <a
                      href="tel:+919560800343"
                      className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors"
                    >
                      95608 00343
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
