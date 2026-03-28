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
      ? "श्री राधे गुरु माँ | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Shri Radhe Guru Maa | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे गुरु माँ — 30+ वर्षों की मानवीय सेवा, निःशुल्क डायलिसिस केन्द्र, बाढ़ राहत और दिव्यांग सेवा।"
      : "Shri Radhe Guru Maa — 30+ years of humanitarian service, free dialysis centre, disaster relief, and divyang seva across India.",
    keywords: isHindi
      ? ["श्री राधे गुरु माँ", "राधे माँ", "आध्यात्मिक नेता", "मानवीय सेवा"]
      : ["Shri Radhe Guru Maa", "Radhe Maa", "spiritual leader", "humanitarian service India"],
    alternates: { languages: { "en-IN": "/en/about/maa", "hi-IN": "/hi/about/maa" } },
    openGraph: {
      title: "Shri Radhe Guru Maa — Humanitarian Leader",
      description: "30+ years of compassionate service across India and abroad.",
      type: "profile",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function MaaPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "About", url: "https://shriradhemasociety.org/about" },
    { name: "Shri Radhe Guru Maa", url: "https://shriradhemasociety.org/about/maa" },
  ]);
  return (
    <div style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-3">
            <Badge variant="crimson">Spiritual Leader</Badge>
          </div>
          <SectionHeader
            title="Shri Radhe Guru Maa"
            titleHi="श्री राधे गुरु माँ"
            subtitle="The spiritual force under whose aegis this society was founded and operates."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Note banner */}
        <ScrollReveal delay={100}>
          <div className="mb-10 rounded-2xl border border-saffron-300/60 bg-saffron-50/60 px-6 py-4 text-sm font-sans text-warm-800/70 leading-relaxed">
            <strong className="text-warm-900">Note:</strong> This page represents the charitable society&apos;s perspective on Shri Radhe Guru Maa&apos;s humanitarian contributions. For Maa&apos;s personal ministry and teachings, please visit her official social media channels.
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Photo placeholder */}
          <ScrollReveal delay={150}>
            <div className="rounded-3xl border border-saffron-300/50 bg-warm-100/50 aspect-[3/4] flex flex-col items-center justify-center gap-3 text-warm-800/40">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="font-sans text-xs text-center px-4">Photo coming soon</span>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal delay={200} className="md:col-span-2">
            <div className="flex flex-col gap-5">
              <p className="font-sans text-warm-800/80 leading-relaxed">
                Shri Radhe Guru Maa is a revered spiritual leader whose life has been dedicated to the service of humanity. For over 30 years, she has worked tirelessly to uplift the poor, the sick, and the distressed across India and abroad.
              </p>
              <p className="font-sans text-warm-800/80 leading-relaxed">
                Her humanitarian vision gave birth to the <strong>Shri Radhe Maa Charitable Society</strong>, a registered organisation that carries forward her mission of compassionate service — from operating free dialysis centres to rebuilding homes for flood-affected families.
              </p>
              <p className="font-sans text-warm-800/80 leading-relaxed">
                Under her spiritual guidance, the society has served over 500 families, contributed ₹25 lakh+ through government relief funds, and reached communities in Punjab, Delhi, Kerala, Nepal, and Maharashtra.
              </p>
              <p className="font-devanagari text-warm-800/70 leading-relaxed text-base" lang="hi">
                माँ का मानना है कि सेवा ही सबसे बड़ी पूजा है — &ldquo;जिसने मानव की सेवा की, उसने ईश्वर की सेवा की।&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Key contributions */}
        <ScrollReveal delay={300}>
          <h2 className="font-serif text-2xl text-warm-900 mb-6">
            Humanitarian Contributions
            <span className="block font-devanagari text-sm text-crimson-500 mt-1 font-normal" lang="hi">मानवीय योगदान</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            { icon: "🏥", title: "Free Dialysis Centre", desc: "Established a free kidney dialysis centre at Anand Hospital, Mumbai — serving patients who cannot afford treatment." },
            { icon: "🌊", title: "Disaster Relief", desc: "Led relief operations in Punjab, Kerala, Nepal, and Maharashtra — including rebuilding homes for flood-affected families in Islampur village." },
            { icon: "🤝", title: "Monthly Pensions", desc: "Over 100+ families receive monthly financial support through the society under Maa's guidance." },
            { icon: "💊", title: "Healthcare Camps", desc: "Blood donation drives, free eye and dental check-up camps organised across India." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={350 + i * 100}>
              <Card>
                <CardHeader>
                  <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Social Media */}
        <ScrollReveal delay={700}>
          <div className="rounded-3xl border border-saffron-300/50 bg-warm-50/60 p-8">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">सोशल मीडिया</p>
            <h3 className="font-serif text-xl text-warm-900 mb-2">Follow Maa&apos;s Ministry</h3>
            <p className="font-sans text-sm text-warm-800/60 mb-6">
              For Maa&apos;s personal spiritual teachings, satsangs, and updates, follow her official channels:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/shreeradhemaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-warm-800/20 font-sans text-sm text-warm-800/80 hover:bg-warm-100 hover:text-warm-900 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                @shreeradhemaa
              </a>
              <a
                href="https://www.facebook.com/ShriRadheMaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-warm-800/20 font-sans text-sm text-warm-800/80 hover:bg-warm-100 hover:text-warm-900 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                ShriRadheMaa
              </a>
              <a
                href="https://www.youtube.com/@ShreeRadheMaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-warm-800/20 font-sans text-sm text-warm-800/80 hover:bg-warm-100 hover:text-warm-900 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                ShreeRadheMaa
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
