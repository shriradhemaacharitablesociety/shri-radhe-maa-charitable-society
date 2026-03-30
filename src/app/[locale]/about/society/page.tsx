import type { Metadata } from "next";
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

      {/* Dark Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-900 to-crimson-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <span className="inline-block px-3 py-1 rounded-full bg-saffron-500/20 text-saffron-400 text-xs font-semibold font-sans uppercase tracking-wider mb-4">Registered Society</span>
              <span className="font-devanagari text-sm text-saffron-400 font-medium block" lang="hi">
                सोसाइटी
              </span>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white tracking-tight mt-2">
                The Society
              </h1>
              <div className="w-12 h-1 bg-saffron-400 rounded-full mt-4" />
              <p className="text-[15px] text-white/70 mt-4 leading-relaxed max-w-xl">
                A registered charitable organisation committed to spiritual upliftment and social welfare.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* White section: Registration */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="relative rounded-2xl bg-white shadow-md overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl" aria-hidden="true">📋</div>
                  <div>
                    <h2 className="font-serif text-xl text-warm-900">Registration Details</h2>
                    <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">पंजीकरण विवरण</p>
                  </div>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
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

      {/* Dark section: Activities */}
      <section className="relative overflow-hidden bg-warm-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={300}>
              <div className="text-center mb-10 md:mb-16">
                <span className="font-devanagari text-sm text-saffron-400 font-medium" lang="hi">हमारी गतिविधियाँ</span>
                <h2 className="font-serif text-2xl md:text-3xl text-white tracking-tight mt-1">Our Activities</h2>
                <div className="w-12 h-1 bg-saffron-400 rounded-full mx-auto mt-4" />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: "🏥", title: "Healthcare", desc: "Free dialysis centre, ambulance service, blood donation camps, eye and dental check-ups." },
                { icon: "💰", title: "Financial Aid", desc: "Monthly pensions, one-time assistance, and marriage support for 100+ families." },
                { icon: "🌊", title: "Disaster Relief", desc: "Rapid response to floods, earthquakes, and the COVID-19 pandemic across multiple states." },
                { icon: "♿", title: "Janseva Abhiyan", desc: "Wheelchair and instrument distribution, clothing, food, and essential items for the specially abled." },
                { icon: "🐄", title: "Gaushala Seva", desc: "Donations and support to cow shelters (gaushalas) as an act of cultural and spiritual service." },
                { icon: "🎵", title: "Spiritual Events", desc: "Bhajan programmes, Sukhmani Sahib Paath, and Bhagwat Katha for community upliftment." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={350 + i * 80}>
                  <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 to-crimson-500" />
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-full bg-crimson-500 flex items-center justify-center text-white text-lg mb-3" aria-hidden="true">{item.icon}</div>
                      <h3 className="font-serif text-base text-warm-900">{item.title}</h3>
                      <p className="font-sans text-sm text-warm-600 leading-relaxed mt-2">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <p className="font-sans text-xs uppercase tracking-wider text-white/60 mb-1">Office Address</p>
                <address className="font-sans text-sm text-white not-italic leading-relaxed">
                  Plot No. 5, Pocket-11, Sector-5,<br />
                  Rohini, New Delhi – 110085
                </address>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 flex flex-col gap-4">
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-white/60 mb-1">Phone</p>
                  <a href="tel:+919560800343" className="font-sans text-sm text-white hover:text-saffron-400 transition-colors">
                    95608 00343
                  </a>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-white/60 mb-1">Email</p>
                  <a href="mailto:shriradhemaacharitablesociety@gmail.com" className="font-sans text-sm text-white hover:text-saffron-400 transition-colors break-all">
                    shriradhemaacharitablesociety@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
