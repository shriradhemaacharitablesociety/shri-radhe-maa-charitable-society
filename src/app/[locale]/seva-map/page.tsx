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
      ? "सेवा मानचित्र | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Seva Map | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "हम कहाँ सेवा करते हैं — दिल्ली, मुम्बई, पंजाब, महाराष्ट्र में हमारे कार्यक्रम देखें।"
      : "Where we serve — explore our charitable programmes across Delhi, Mumbai, Punjab, and Maharashtra.",
    keywords: isHindi
      ? ["सेवा मानचित्र", "दिल्ली सेवा", "मुम्बई डायलिसिस", "पंजाब राहत", "चैरिटी स्थान"]
      : ["seva map India", "charity locations Delhi", "free dialysis Mumbai", "disaster relief Punjab", "NGO Maharashtra"],
    alternates: { languages: { "en-IN": "/en/seva-map", "hi-IN": "/hi/seva-map" } },
    openGraph: {
      title: "Seva Map — Shri Radhe Maa Charitable Society",
      description: "Serving humanity across 4 states with 15+ programmes. Explore our locations.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

const stats = [
  { value: "4", label: "States", labelHi: "राज्य" },
  { value: "2", label: "Offices", labelHi: "कार्यालय" },
  { value: "15+", label: "Programmes", labelHi: "कार्यक्रम" },
];

const locations = [
  {
    city: "Delhi",
    cityHi: "दिल्ली",
    type: "HQ",
    address: "Plot 5, Pocket-11, Sector-5, Rohini, New Delhi — 110085",
    addressHi: "प्लॉट 5, पॉकेट-11, सेक्टर-5, रोहिणी, नई दिल्ली — 110085",
    phone: "+91 95608 00343",
    programmes: [
      "Monthly Pension Distribution",
      "Wheelchair & Assistive Device Distribution",
      "Blanket & Ration Distribution",
      "Blood Donation Camps",
      "Bhajan Jamming",
      "Sukhmani Sahib Paath",
      "Bhagwat Katha",
    ],
    programmesHi: [
      "मासिक पेंशन वितरण",
      "व्हीलचेयर व सहायक उपकरण वितरण",
      "कंबल व राशन वितरण",
      "रक्तदान शिविर",
      "भजन जैमिंग",
      "सुखमनी साहिब पाठ",
      "भागवत कथा",
    ],
    accent: "crimson" as const,
  },
  {
    city: "Mumbai",
    cityHi: "मुम्बई",
    type: "Centre",
    address: "Anand Hospital, Dahisar, Mumbai, Maharashtra",
    addressHi: "आनंद अस्पताल, दहिसर, मुम्बई, महाराष्ट्र",
    phone: null,
    programmes: ["Free Dialysis Centre (2 machines, 3 shifts/day)"],
    programmesHi: ["निःशुल्क डायलिसिस केंद्र (2 मशीन, 3 पारी/दिन)"],
    accent: "gold" as const,
  },
  {
    city: "Punjab",
    cityHi: "पंजाब",
    type: "Field Operations",
    address: "Multiple districts including Islampur Village",
    addressHi: "कई ज़िले जिसमें इस्लामपुर गाँव शामिल",
    phone: null,
    programmes: ["Disaster Relief Operations", "Flood Relief Distribution"],
    programmesHi: ["आपदा राहत अभियान", "बाढ़ राहत वितरण"],
    accent: "crimson" as const,
  },
  {
    city: "Maharashtra",
    cityHi: "महाराष्ट्र",
    type: "Camps",
    address: "Various locations across the state",
    addressHi: "राज्य भर में विभिन्न स्थान",
    phone: null,
    programmes: ["Healthcare Camps", "Medical Aid Distribution"],
    programmesHi: ["स्वास्थ्य शिविर", "चिकित्सा सहायता वितरण"],
    accent: "gold" as const,
  },
];

export default function SevaMapPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Seva Map", url: "https://shriradhemasociety.org/seva-map" },
  ]);

  return (
    <div className="bg-cream" style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <SectionHeader
            title="Where We Serve"
            titleHi="हम कहाँ सेवा करते हैं"
            subtitle="Our charitable programmes reach communities across multiple states in India."
            className="mb-12"
          />
        </ScrollReveal>

        {/* Stats Bar */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-black/[0.06] p-5 text-center"
              >
                <p className="font-serif text-3xl text-crimson-500 font-semibold">
                  {stat.value}
                </p>
                <p className="font-sans text-sm text-warm-600 mt-1">{stat.label}</p>
                <p className="font-devanagari text-xs text-warm-800/40 mt-0.5" lang="hi">
                  {stat.labelHi}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc, i) => (
            <ScrollReveal key={loc.city} delay={200 + i * 120}>
              <Card variant="white" accent={loc.accent} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {/* Location pin icon */}
                      <div className="w-10 h-10 rounded-xl bg-crimson-50 flex items-center justify-center shrink-0">
                        <svg
                          className="w-5 h-5 text-crimson-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-warm-900 leading-tight">
                          {loc.city}
                        </h3>
                        <p className="font-devanagari text-sm text-warm-800/50" lang="hi">
                          {loc.cityHi}
                        </p>
                      </div>
                    </div>
                    <Badge variant={loc.accent === "crimson" ? "crimson" : "gold"}>
                      {loc.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Address */}
                  <div className="flex items-start gap-2 mb-4">
                    <svg
                      className="w-3.5 h-3.5 text-saffron-600 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21"
                      />
                    </svg>
                    <span className="font-sans text-sm text-warm-600 leading-relaxed">
                      {loc.address}
                    </span>
                  </div>

                  {/* Phone (if applicable) */}
                  {loc.phone && (
                    <div className="flex items-center gap-2 mb-4">
                      <svg
                        className="w-3.5 h-3.5 text-saffron-600 shrink-0"
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
                      <a
                        href={`tel:${loc.phone.replace(/\s/g, "")}`}
                        className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  )}

                  {/* Programmes */}
                  <div className="border-t border-warm-200/60 pt-4">
                    <p className="font-sans text-xs text-warm-800/40 uppercase tracking-wider font-semibold mb-2">
                      Programmes
                    </p>
                    <ul className="space-y-1.5">
                      {loc.programmes.map((prog) => (
                        <li
                          key={prog}
                          className="flex items-start gap-2 font-sans text-sm text-warm-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-crimson-400 shrink-0 mt-1.5" />
                          {prog}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal delay={800}>
          <div className="mt-12 rounded-2xl border border-black/[0.06] bg-white p-8 text-center">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">
              हमसे जुड़ें
            </p>
            <h3 className="font-serif text-xl text-warm-900 mb-3">
              Want to Volunteer at a Location?
            </h3>
            <p className="font-sans text-sm text-warm-600 leading-relaxed mb-5 max-w-md mx-auto">
              Whether you want to help at our Delhi headquarters or assist with field operations, we welcome your support.
            </p>
            <a
              href="/get-involved"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-crimson-500 text-white text-sm font-medium rounded-lg hover:bg-crimson-600 transition-colors duration-200"
            >
              Get Involved
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
