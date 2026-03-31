import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd } from "@/lib/seo";
import { SocietyActivityCards, SocietyContactCards } from "./SocietyCards";
import { ClipboardList } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "सोसाइटी का परिचय | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "The Society | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "पंजीकरण संख्या S/2930/SDM/NW/2017 — सोसाइटी रजिस्ट्रेशन अधिनियम 1860 के तहत पंजीकृत। मिशन, गतिविधियाँ और पते।"
      : "Registration No. S/2930/SDM/NW/2017 — registered under The Societies Registration Act, 1860. Mission, activities, and contact details.",
    alternates: { languages: { "en-IN": "/en/about/society", "hi-IN": "/hi/about/society" } },
    openGraph: {
      title: "About the Society — Shri Radhe Maa Charitable Society",
      description: "Registered NGO (S/2930/SDM/NW/2017) serving India since 2017.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function SocietyPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "About", url: "https://shriradhemasociety.org/about" },
    { name: "The Society", url: "https://shriradhemasociety.org/about/society" },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 rounded-full bg-crimson-50 text-crimson-600 text-xs font-semibold font-sans uppercase tracking-wider mb-4">Registered Society</span>
            <span className="font-devanagari text-sm text-crimson-500 font-medium block" lang="hi">
              सोसाइटी
            </span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              The Society
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              A registered charitable organisation committed to spiritual upliftment and social welfare.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* White section: Registration */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
              <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                <ClipboardList className="w-5 h-5" />
                <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>REG</span>
              </div>
              <div className="flex-1 p-4 md:p-5">
                <h2 className="font-sans text-sm md:text-base font-semibold text-warm-900">Registration Details</h2>
                <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">पंजीकरण विवरण</p>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-4">
                  {[
                    { label: "Society Name", value: "Shri Radhe Maa Charitable Society" },
                    { label: "Registration Number", value: "S/2930/SDM/NW/2017" },
                    { label: "Registered Under", value: "The Societies Registration Act, 1860" },
                    { label: "Date of Registration", value: "21 August 2017" },
                    { label: "Jurisdiction", value: "Sub-Divisional Magistrate, North-West, Delhi" },
                    { label: "Type", value: "Charitable Society" },
                  ].map((item) => (
                    <div key={item.label}>
                      <dt className="font-sans text-xs uppercase tracking-wider text-warm-500 mb-0.5">{item.label}</dt>
                      <dd className="font-sans text-sm font-medium text-warm-900">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cream section: Mission */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="text-center mb-10">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">हमारा मिशन</span>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900 tracking-tight mt-1">Our Mission</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <div className="max-w-2xl mx-auto">
              <p className="font-sans text-warm-700 leading-relaxed mb-4">
                The Shri Radhe Maa Charitable Society exists to carry forward the humanitarian vision of Shri Radhe Guru Maa — providing tangible relief to those who need it most, while nurturing spiritual well-being in our communities.
              </p>
              <p className="font-sans text-warm-700 leading-relaxed">
                We believe that social welfare and spiritual service are inseparable. Every act of seva — whether distributing wheelchairs, running a dialysis centre, or rebuilding homes after floods — is an expression of our collective devotion.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={300}>
            <div className="text-center mb-10 md:mb-16">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">हमारी गतिविधियाँ</span>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900 tracking-tight mt-1">Our Activities</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <SocietyActivityCards />
        </div>
      </section>

      {/* Crimson Contact CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-crimson-600 to-crimson-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={800}>
              <div className="text-center mb-8">
                <span className="font-devanagari text-sm text-white/80 font-medium" lang="hi">संपर्क करें</span>
                <h2 className="font-serif text-2xl md:text-3xl text-white tracking-tight mt-1">Contact the Society</h2>
                <div className="w-12 h-1 bg-saffron-400 rounded-full mx-auto mt-4" />
              </div>
            </ScrollReveal>
            <SocietyContactCards />
          </div>
        </div>
      </section>
    </div>
  );
}
