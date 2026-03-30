import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { DonorStatCards } from "./DonorCards";
import { Star } from "lucide-react";

const donorTiers = [
  {
    name: "Seva Ratna",
    nameHi: "सेवा रत्न",
    threshold: "₹1,00,000+",
    description: "Our highest recognition for extraordinary generosity.",
  },
  {
    name: "Seva Mitra",
    nameHi: "सेवा मित्र",
    threshold: "₹25,000+",
    description: "Dedicated friends of the society who make large-scale seva possible.",
  },
  {
    name: "Seva Saathi",
    nameHi: "सेवा साथी",
    threshold: "₹5,000+",
    description: "Compassionate supporters whose contributions fuel our everyday seva.",
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
    <>
      {/* Hero */}
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">हमारे सहयोगी</span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">Our Supporters</h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              Every act of generosity brings us closer to a compassionate society. We honour those who walk this path of seva with us.
            </p>
          </ScrollReveal>

          {/* Stats inline */}
          <DonorStatCards stats={communityStats} />
        </div>
      </section>

      {/* Donor Tiers on Cream */}
      <section className="bg-cream pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6">
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
                <div className="group flex h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
                  <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                    <Star className="w-5 h-5" />
                    <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>{tier.threshold}</span>
                  </div>
                  <div className="flex-1 p-4 md:p-5">
                    <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">{tier.name}</h3>
                    <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">
                      {tier.nameHi}
                    </p>
                    <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-2">
                      {tier.description}
                    </p>
                    <div className="mt-4 p-4 rounded-xl bg-warm-50 border border-warm-100">
                      <p className="font-sans text-sm text-warm-500 italic text-center">
                        Donor names will appear here when you connect your database.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA on Dark */}
      <section className="bg-gradient-to-br from-warm-900 via-warm-800 to-crimson-900 py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-devanagari text-sm text-saffron-400 mb-2" lang="hi">
              सेवा में भागीदार बनें
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Join Our Donor Community
            </h2>
            <p className="font-sans text-white/70 leading-relaxed mb-8">
              Your generosity directly funds free dialysis sessions, disability support, widow pensions,
              disaster relief, and more. All donations are eligible for 80G tax deduction.
            </p>
            <Link href="/get-involved">
              <Button size="lg" className="bg-white text-crimson-500 hover:bg-white/90">Donate and Join</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
