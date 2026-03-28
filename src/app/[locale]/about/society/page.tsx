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
    <div className="pt-32 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-3">
            <Badge variant="gold">Registered Society</Badge>
          </div>
          <SectionHeader
            title="The Society"
            titleHi="सोसाइटी"
            subtitle="A registered charitable organisation committed to spiritual upliftment and social welfare."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Registration Card */}
        <ScrollReveal delay={100}>
          <Card variant="default" className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl" aria-hidden="true">📋</div>
                <div>
                  <h2 className="font-serif text-xl text-warm-900">Registration Details</h2>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">पंजीकरण विवरण</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
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
                    <dt className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-0.5">{item.label}</dt>
                    <dd className="font-sans text-sm font-medium text-warm-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Mission */}
        <ScrollReveal delay={200}>
          <div className="mb-8">
            <h2 className="font-serif text-2xl text-warm-900 mb-2">Our Mission</h2>
            <p className="font-devanagari text-sm text-crimson-500 mb-4" lang="hi">हमारा मिशन</p>
            <p className="font-sans text-warm-800/80 leading-relaxed mb-4">
              The Shri Radhe Maa Charitable Society exists to carry forward the humanitarian vision of Shri Radhe Guru Maa — providing tangible relief to those who need it most, while nurturing spiritual well-being in our communities.
            </p>
            <p className="font-sans text-warm-800/80 leading-relaxed">
              We believe that social welfare and spiritual service are inseparable. Every act of seva — whether distributing wheelchairs, running a dialysis centre, or rebuilding homes after floods — is an expression of our collective devotion.
            </p>
          </div>
        </ScrollReveal>

        {/* Activities */}
        <ScrollReveal delay={300}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Our Activities</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">हमारी गतिविधियाँ</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { icon: "🏥", title: "Healthcare", desc: "Free dialysis centre, ambulance service, blood donation camps, eye and dental check-ups." },
            { icon: "💰", title: "Financial Aid", desc: "Monthly pensions, one-time assistance, and marriage support for 100+ families." },
            { icon: "🌊", title: "Disaster Relief", desc: "Rapid response to floods, earthquakes, and the COVID-19 pandemic across multiple states." },
            { icon: "♿", title: "Janseva Abhiyan", desc: "Wheelchair and instrument distribution, clothing, food, and essential items for the specially abled." },
            { icon: "🐄", title: "Gaushala Seva", desc: "Donations and support to cow shelters (gaushalas) as an act of cultural and spiritual service." },
            { icon: "🎵", title: "Spiritual Events", desc: "Bhajan programmes, Sukhmani Sahib Paath, and Bhagwat Katha for community upliftment." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={350 + i * 80}>
              <Card variant="default">
                <CardHeader>
                  <div className="text-xl mb-1.5" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-serif text-base text-warm-900">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Address & Contact */}
        <ScrollReveal delay={800}>
          <div className="rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">संपर्क करें</p>
            <h3 className="font-serif text-xl text-warm-900 mb-6">Contact the Society</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Office Address</p>
                <address className="font-sans text-sm text-warm-800/80 not-italic leading-relaxed">
                  Plot No. 5, Pocket-11, Sector-5,<br />
                  Rohini, New Delhi – 110085
                </address>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Phone</p>
                  <a href="tel:+919560800343" className="font-sans text-sm text-warm-800/80 hover:text-crimson-600 transition-colors">
                    95608 00343
                  </a>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Email</p>
                  <a href="mailto:shriradhemaacharitablesociety@gmail.com" className="font-sans text-sm text-warm-800/80 hover:text-crimson-600 transition-colors break-all">
                    shriradhemaacharitablesociety@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
