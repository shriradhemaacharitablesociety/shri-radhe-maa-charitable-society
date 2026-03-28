import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const donorTiers = [
  {
    name: "Seva Ratna",
    nameHi: "सेवा रत्न",
    threshold: "₹1,00,000+",
    description: "Our highest recognition for extraordinary generosity.",
    descriptionHi: "असाधारण उदारता के लिए हमारा सर्वोच्च सम्मान।",
    accentClass: "border-crimson-500 bg-crimson-50",
    badgeClass: "bg-crimson-500 text-white",
    iconBg: "bg-crimson-100",
    textColor: "text-crimson-600",
    cardAccent: "crimson" as const,
  },
  {
    name: "Seva Mitra",
    nameHi: "सेवा मित्र",
    threshold: "₹25,000+",
    description: "Dedicated friends of the society who make large-scale seva possible.",
    descriptionHi: "सोसाइटी के समर्पित मित्र जो बड़े स्तर पर सेवा संभव बनाते हैं।",
    accentClass: "border-saffron-500 bg-saffron-50",
    badgeClass: "bg-saffron-500 text-white",
    iconBg: "bg-saffron-100",
    textColor: "text-saffron-600",
    cardAccent: "gold" as const,
  },
  {
    name: "Seva Saathi",
    nameHi: "सेवा साथी",
    threshold: "₹5,000+",
    description: "Compassionate supporters whose contributions fuel our everyday seva.",
    descriptionHi: "करुणामय समर्थक जिनका योगदान हमारी दैनिक सेवा को शक्ति देता है।",
    accentClass: "border-warm-300 bg-warm-50",
    badgeClass: "bg-warm-600 text-white",
    iconBg: "bg-warm-100",
    textColor: "text-warm-700",
    cardAccent: "none" as const,
  },
];

const communityStats = [
  { value: "500+", label: "Families Served", labelHi: "परिवारों की सेवा" },
  { value: "7+", label: "Seva Programmes", labelHi: "सेवा कार्यक्रम" },
  { value: "₹25L+", label: "Government Contributions", labelHi: "सरकारी योगदान" },
  { value: "2017", label: "Serving Since", labelHi: "सेवा शुरू" },
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
      : "Our Supporters | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी के उदार दानदाताओं और सहयोगियों को सम्मान।"
      : "Honouring the generous donors and supporters of Shri Radhe Maa Charitable Society.",
    alternates: { languages: { "en-IN": "/en/donors", "hi-IN": "/hi/donors" } },
    openGraph: {
      title: "Our Supporters — Shri Radhe Maa Charitable Society",
      description: "Recognising the generous hearts behind our charitable seva.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function DonorWallPage() {
  return (
    <div style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      {/* Community Impact Stats */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              title="Our Supporters"
              titleHi="हमारे सहयोगी"
              subtitle="Every act of generosity brings us closer to a compassionate society. We honour those who walk this path of seva with us."
              className="mb-14"
            />
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-5 sm:p-8 mb-12 sm:mb-16">
              <p className="font-devanagari text-center text-sm text-crimson-500 mb-2" lang="hi">
                सामुदायिक प्रभाव
              </p>
              <h3 className="font-serif text-xl sm:text-2xl text-warm-900 text-center mb-6 sm:mb-8">
                Community Impact
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                {communityStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="font-stat text-3xl font-black text-crimson-500">
                      {stat.value}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-wider text-warm-800/60">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Donor Tiers */}
      <section className="bg-cream py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">
                सम्मान स्तर
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900">
                Recognition Tiers
              </h2>
              <div className="w-8 h-[3px] rounded-full bg-crimson-500 mt-3 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donorTiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 150}>
                <Card variant="white" accent={tier.cardAccent} className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${tier.iconBg}`}
                    >
                      <svg
                        className={`w-5 h-5 ${tier.textColor}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-warm-900">{tier.name}</h3>
                      <p className="font-devanagari text-sm text-warm-500" lang="hi">
                        {tier.nameHi}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold font-sans ${tier.badgeClass}`}
                  >
                    {tier.threshold}
                  </span>

                  <p className="font-sans text-sm text-warm-600 mt-4 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-warm-50 border border-warm-100">
                    <p className="font-sans text-sm text-warm-500 italic text-center">
                      Donor names will appear here when you connect your database.
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-devanagari text-sm text-crimson-500 mb-2" lang="hi">
              सेवा में भागीदार बनें
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-warm-900 mb-4">
              Join Our Donor Community
            </h2>
            <p className="font-sans text-warm-600 leading-relaxed mb-8">
              Your generosity directly funds free dialysis sessions, disability support, widow pensions,
              disaster relief, and more. All donations are eligible for 80G tax deduction.
            </p>
            <Link href="/get-involved">
              <Button size="lg">Donate and Join</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
