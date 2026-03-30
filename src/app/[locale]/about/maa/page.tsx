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
              <span className="inline-block px-3 py-1 rounded-full bg-saffron-500/20 text-saffron-400 text-xs font-semibold font-sans uppercase tracking-wider mb-4">Spiritual Leader</span>
              <span className="font-devanagari text-sm text-saffron-400 font-medium block" lang="hi">
                श्री राधे गुरु माँ
              </span>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white tracking-tight mt-2">
                Shri Radhe Guru Maa
              </h1>
              <div className="w-12 h-1 bg-saffron-400 rounded-full mt-4" />
              <p className="text-[15px] text-white/70 mt-4 leading-relaxed max-w-xl">
                The spiritual force under whose aegis this society was founded and operates.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cream note banner */}
      <section className="py-6 px-4 sm:px-6 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="rounded-xl bg-saffron-50 border border-saffron-200/60 px-6 py-4 text-sm font-sans text-warm-700 leading-relaxed">
              <strong className="text-warm-900">Note:</strong> This page represents the charitable society&apos;s perspective on Shri Radhe Guru Maa&apos;s humanitarian contributions. For Maa&apos;s personal ministry and teachings, please visit her official social media channels.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* White section: Bio */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Photo placeholder */}
            <ScrollReveal delay={150}>
              <div className="rounded-2xl border-2 border-warm-200 bg-warm-50 aspect-[3/4] flex flex-col items-center justify-center gap-3 text-warm-400">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span className="font-sans text-xs text-center px-4">Photo coming soon</span>
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal delay={200} className="md:col-span-2">
              <div className="flex flex-col gap-5">
                <p className="font-sans text-warm-700 leading-relaxed">
                  Shri Radhe Guru Maa is a revered spiritual leader whose life has been dedicated to the service of humanity. For over 30 years, she has worked tirelessly to uplift the poor, the sick, and the distressed across India and abroad.
                </p>
                <p className="font-sans text-warm-700 leading-relaxed">
                  Her humanitarian vision gave birth to the <strong className="text-warm-900">Shri Radhe Maa Charitable Society</strong>, a registered organisation that carries forward her mission of compassionate service — from operating free dialysis centres to rebuilding homes for flood-affected families.
                </p>
                <p className="font-sans text-warm-700 leading-relaxed">
                  Under her spiritual guidance, the society has served over 500 families, contributed ₹25 lakh+ through government relief funds, and reached communities in Punjab, Delhi, Kerala, Nepal, and Maharashtra.
                </p>
                <p className="font-devanagari text-warm-600 leading-relaxed text-base" lang="hi">
                  माँ का मानना है कि सेवा ही सबसे बड़ी पूजा है — &ldquo;जिसने मानव की सेवा की, उसने ईश्वर की सेवा की।&rdquo;
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dark section: Key contributions */}
      <section className="relative overflow-hidden bg-warm-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={300}>
              <div className="text-center mb-10 md:mb-16">
                <span className="font-devanagari text-sm text-saffron-400 font-medium" lang="hi">मानवीय योगदान</span>
                <h2 className="font-serif text-2xl md:text-3xl text-white tracking-tight mt-1">Humanitarian Contributions</h2>
                <div className="w-12 h-1 bg-saffron-400 rounded-full mx-auto mt-4" />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: "🏥", title: "Free Dialysis Centre", desc: "Established a free kidney dialysis centre at Anand Hospital, Mumbai — serving patients who cannot afford treatment." },
                { icon: "🌊", title: "Disaster Relief", desc: "Led relief operations in Punjab, Kerala, Nepal, and Maharashtra — including rebuilding homes for flood-affected families in Islampur village." },
                { icon: "🤝", title: "Monthly Pensions", desc: "Over 100+ families receive monthly financial support through the society under Maa's guidance." },
                { icon: "💊", title: "Healthcare Camps", desc: "Blood donation drives, free eye and dental check-up camps organised across India." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={350 + i * 100}>
                  <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 to-crimson-500" />
                    <div className="p-6 md:p-8">
                      <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl mb-4" aria-hidden="true">{item.icon}</div>
                      <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
                      <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cream section: Social Media */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={700}>
            <div className="text-center mb-8">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">सोशल मीडिया</span>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900 tracking-tight mt-1">Follow Maa&apos;s Ministry</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
              <p className="font-sans text-sm text-warm-600 mt-4">
                For Maa&apos;s personal spiritual teachings, satsangs, and updates, follow her official channels:
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://www.instagram.com/shreeradhemaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-white shadow-md hover:shadow-xl text-warm-800 font-sans text-sm font-medium hover:text-crimson-600 transition-all duration-200"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-white shadow-md hover:shadow-xl text-warm-800 font-sans text-sm font-medium hover:text-crimson-600 transition-all duration-200"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-white shadow-md hover:shadow-xl text-warm-800 font-sans text-sm font-medium hover:text-crimson-600 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                ShreeRadheMaa
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
