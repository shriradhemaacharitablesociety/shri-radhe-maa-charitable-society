import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
      ? "मासिक सेवा | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Monthly Seva | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "मासिक सेवा सदस्यता से नियमित योगदान दें। डायलिसिस, पेंशन, दिव्यांग सेवा — हर माह जीवन बदलें।"
      : "Subscribe to monthly seva and make a regular impact. Fund dialysis sessions, pensions, and divyang seva every month.",
    keywords: isHindi
      ? ["मासिक दान", "सेवा सदस्यता", "नियमित योगदान", "श्री राधे माँ सोसाइटी"]
      : ["monthly donation", "seva subscription", "recurring donation", "NGO India", "Shri Radhe Maa Society"],
    alternates: {
      languages: {
        "en-IN": "/en/seva-subscriptions",
        "hi-IN": "/hi/seva-subscriptions",
      },
    },
    openGraph: {
      title: "Monthly Seva | Shri Radhe Maa Charitable Society",
      description: "Subscribe to monthly seva and make a lasting impact every month.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

interface SevaTier {
  name: string;
  nameHi: string;
  price: number;
  tagline: string;
  taglineHi: string;
  features: string[];
  featuresHi: string[];
  accent: "warm" | "crimson" | "saffron";
  popular: boolean;
}

const sevaTiers: SevaTier[] = [
  {
    name: "Seva Saathi",
    nameHi: "सेवा साथी",
    price: 500,
    tagline: "Funds weekly pension payments",
    taglineHi: "साप्ताहिक पेंशन भुगतान का वित्तपोषण",
    features: [
      "Weekly pension for 1 elderly person",
      "Monthly impact report via email",
      "80G tax receipt every quarter",
      "Name on donor honour wall",
    ],
    featuresHi: [
      "1 बुज़ुर्ग के लिए साप्ताहिक पेंशन",
      "ईमेल द्वारा मासिक प्रभाव रिपोर्ट",
      "हर तिमाही 80G कर रसीद",
      "दानदाता सम्मान दीवार पर नाम",
    ],
    accent: "warm",
    popular: false,
  },
  {
    name: "Seva Mitra",
    nameHi: "सेवा मित्र",
    price: 2000,
    tagline: "Funds dialysis sessions",
    taglineHi: "डायलिसिस सत्रों का वित्तपोषण",
    features: [
      "1 free dialysis session per month",
      "Monthly pension for 1 widow",
      "Personalised impact dashboard",
      "80G tax receipt every quarter",
      "Priority volunteer event access",
    ],
    featuresHi: [
      "प्रति माह 1 निःशुल्क डायलिसिस सत्र",
      "1 विधवा के लिए मासिक पेंशन",
      "व्यक्तिगत प्रभाव डैशबोर्ड",
      "हर तिमाही 80G कर रसीद",
      "स्वयंसेवक कार्यक्रमों में प्राथमिकता",
    ],
    accent: "crimson",
    popular: true,
  },
  {
    name: "Seva Bandhu",
    nameHi: "सेवा बंधु",
    price: 5000,
    tagline: "Funds comprehensive seva",
    taglineHi: "व्यापक सेवा का वित्तपोषण",
    features: [
      "3 free dialysis sessions per month",
      "Monthly pension for 2 beneficiaries",
      "1 wheelchair donation per quarter",
      "Gaushala feed contribution",
      "Personalised impact dashboard",
      "80G tax receipt every quarter",
      "Society annual event invitation",
    ],
    featuresHi: [
      "प्रति माह 3 निःशुल्क डायलिसिस सत्र",
      "2 लाभार्थियों के लिए मासिक पेंशन",
      "प्रति तिमाही 1 व्हीलचेयर दान",
      "गौशाला चारा योगदान",
      "व्यक्तिगत प्रभाव डैशबोर्ड",
      "हर तिमाही 80G कर रसीद",
      "सोसाइटी वार्षिक कार्यक्रम आमंत्रण",
    ],
    accent: "saffron",
    popular: false,
  },
];

export default async function SevaSubscriptionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHindi = locale === "hi";

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    {
      name: "Monthly Seva",
      url: "https://shriradhemasociety.org/seva-subscriptions",
    },
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
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">
              {isHindi ? "मासिक सेवा" : "मासिक सेवा"}
            </span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              {isHindi ? "मासिक सेवा" : "Monthly Seva"}
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              {isHindi
                ? "नियमित योगदान से हर माह जीवन बदलें। अपनी सेवा योजना चुनें।"
                : "Transform lives every month with a regular contribution. Choose your seva plan."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tiers on White */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Tiers grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {sevaTiers.map((tier, i) => {
            const accentBorder =
              tier.accent === "crimson"
                ? "border-crimson-500"
                : tier.accent === "saffron"
                  ? "border-saffron-500"
                  : "border-black/[0.06]";

            const accentText =
              tier.accent === "crimson"
                ? "text-crimson-500"
                : tier.accent === "saffron"
                  ? "text-saffron-600"
                  : "text-warm-600";

            const accentBg =
              tier.accent === "crimson"
                ? "bg-crimson-50"
                : tier.accent === "saffron"
                  ? "bg-saffron-50"
                  : "bg-warm-50";

            return (
              <ScrollReveal key={tier.name} delay={100 + i * 120}>
                <div
                  className={`relative rounded-2xl border-2 bg-white p-5 sm:p-8 transition-all duration-300 hover:-translate-y-0.5 ${
                    tier.popular
                      ? `${accentBorder} shadow-xl scale-[1.02]`
                      : "border-transparent shadow-md hover:shadow-xl"
                  }`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Popular badge */}
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="crimson">
                        {isHindi ? "लोकप्रिय" : "POPULAR"}
                      </Badge>
                    </div>
                  )}

                  {/* Tier icon/accent dot */}
                  <div
                    className={`w-10 h-10 rounded-xl ${accentBg} flex items-center justify-center mb-5`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        tier.accent === "crimson"
                          ? "bg-crimson-500"
                          : tier.accent === "saffron"
                            ? "bg-saffron-500"
                            : "bg-warm-400"
                      }`}
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-serif text-2xl text-warm-900 tracking-tight mb-1">
                    {isHindi ? tier.nameHi : tier.name}
                  </h3>
                  {!isHindi && (
                    <p
                      className="font-devanagari text-warm-800/50 text-sm"
                      lang="hi"
                    >
                      {tier.nameHi}
                    </p>
                  )}

                  {/* Price */}
                  <div className="mt-4 mb-2">
                    <span className={`font-sans text-3xl sm:text-4xl font-bold ${accentText}`}>
                      ₹{tier.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-warm-400 text-sm font-sans">
                      /{isHindi ? "माह" : "mo"}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="text-warm-600 font-sans text-[15px] mb-6">
                    {isHindi ? tier.taglineHi : tier.tagline}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-3 mb-8">
                    {(isHindi ? tier.featuresHi : tier.features).map(
                      (feature, fi) => (
                        <li
                          key={fi}
                          className="flex items-start gap-2.5 text-warm-600 font-sans text-sm"
                        >
                          <svg
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${accentText}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {feature}
                        </li>
                      )
                    )}
                  </ul>

                  {/* CTA */}
                  <Link href="/seva">
                    <Button
                      variant={tier.accent === "crimson" ? "primary" : "ghost"}
                      size="md"
                      className="w-full"
                    >
                      {isHindi ? "सदस्यता लें" : "Subscribe"}
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
      </section>

      {/* Bottom note on Cream */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={500}>
            <p className="font-devanagari text-sm text-crimson-500 mb-2" lang="hi">जानकारी</p>
            <p className="text-warm-600 font-sans text-sm leading-relaxed max-w-xl mx-auto">
              {isHindi
                ? "सभी सदस्यताएँ आयकर अधिनियम की धारा 80G के तहत कर कटौती के पात्र हैं। आप किसी भी समय अपनी सदस्यता रद्द या बदल सकते हैं।"
                : "All subscriptions are eligible for tax deduction under Section 80G of the Income Tax Act. You can cancel or change your plan at any time."}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
