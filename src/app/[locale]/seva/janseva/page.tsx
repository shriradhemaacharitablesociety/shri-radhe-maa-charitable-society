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
      ? "जनसेवा अभियान | व्हीलचेयर, भोजन, वस्त्र वितरण"
      : "Janseva Abhiyan | Wheelchair, Food & Clothing Distribution",
    description: isHindi
      ? "व्हीलचेयर वितरण, दिव्यांग सेवा, कंबल और वस्त्र वितरण, अन्न सेवा, आवश्यक वस्तुएँ — 500+ लाभार्थी।"
      : "Wheelchair distribution, divyang seva, blanket and clothing drives, Ann Seva food distribution, essential items — 500+ beneficiaries across India.",
    keywords: isHindi
      ? ["जनसेवा", "व्हीलचेयर वितरण", "दिव्यांग सेवा", "अन्न सेवा", "कंबल वितरण"]
      : ["janseva", "wheelchair distribution India", "divyang seva", "food distribution NGO", "blanket distribution Delhi"],
    alternates: { languages: { "en-IN": "/en/seva/janseva", "hi-IN": "/hi/seva/janseva" } },
    openGraph: {
      title: "Janseva Abhiyan — Shri Radhe Maa Charitable Society",
      description: "Wheelchairs, food, clothing, and essential items for 500+ beneficiaries.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

const activities = [
  {
    icon: "♿",
    title: "Wheelchair Distribution",
    titleHi: "व्हीलचेयर वितरण",
    desc: "Wheelchairs are provided free of charge to differently-abled individuals who cannot afford mobility aids. Each wheelchair restores independence, dignity, and the ability to participate in community life.",
    detail: "For divyang individuals",
  },
  {
    icon: "🎵",
    title: "Instruments for Specially Abled",
    titleHi: "दिव्यांगों के लिए उपकरण",
    desc: "Musical instruments and assistive devices are distributed to specially-abled individuals as a means of livelihood, therapy, and creative expression — enabling them to earn with dignity.",
    detail: "Livelihood & therapy",
  },
  {
    icon: "🧥",
    title: "Blanket Distribution",
    titleHi: "कंबल वितरण",
    desc: "During winter months, blankets are distributed to the homeless and poor to protect them from the cold — a simple but life-saving act of seva.",
    detail: "Winter relief drives",
  },
  {
    icon: "👗",
    title: "Clothing Distribution",
    titleHi: "वस्त्र वितरण",
    desc: "New and quality clothing is distributed to families and individuals in need, especially during festive seasons and after disaster events.",
    detail: "Festive & year-round",
  },
  {
    icon: "🍚",
    title: "Ann Seva — Food Distribution",
    titleHi: "अन्न सेवा — भोजन वितरण",
    desc: "Regular food distribution (Ann Seva) ensures that no one in our community goes hungry. Nutritious meals and food packets are distributed at regular intervals.",
    detail: "Regular distributions",
  },
  {
    icon: "📦",
    title: "Essential Items Distribution",
    titleHi: "आवश्यक वस्तुओं का वितरण",
    desc: "Essential household items — toiletries, grocery staples, medicines, and daily necessities — are provided to families in need.",
    detail: "Daily necessities",
  },
];

export default function JansevaPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Seva", url: "https://shriradhemasociety.org/seva" },
    { name: "Janseva Abhiyan", url: "https://shriradhemasociety.org/seva/janseva" },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">
              जनसेवा अभियान
            </span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              Janseva Abhiyan
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              Serving the people — distributing wheelchairs, food, clothing, and essentials to those who need them most.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Crimson stats bar */}
      <section className="relative overflow-hidden bg-gradient-to-r from-crimson-600 to-crimson-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative py-6 md:py-8 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { value: "500+", label: "Beneficiaries Served" },
                { value: "6", label: "Distribution Categories" },
                { value: "Delhi+", label: "Operating Areas" },
                { value: "Regular", label: "Recurring Drives" },
              ].map((stat, i) => (
                <div key={stat.label} className={`flex flex-col items-center text-center py-3 px-3 ${i < 3 ? "border-r border-white/20" : ""}`}>
                  <p className="font-stat text-2xl md:text-3xl font-black text-saffron-400">{stat.value}</p>
                  <p className="font-sans text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cream quote section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-warm-50">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={100}>
            <p className="font-serif text-xl md:text-2xl text-warm-900 leading-relaxed">
              &ldquo;Service to man is service to God.&rdquo;
            </p>
            <p className="font-devanagari text-base text-warm-600/70 leading-relaxed mt-2" lang="hi">
              &ldquo;मनुष्य की सेवा ही ईश्वर की सेवा है।&rdquo;
            </p>
            <p className="font-sans text-sm text-warm-600 mt-4 leading-relaxed max-w-xl mx-auto">
              The Janseva Abhiyan is the society&apos;s ground-level public service initiative covering the most direct forms of humanitarian work — putting essential items, mobility aids, food, and clothing directly in the hands of people who need them most.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* White section: Activities grid */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="text-center mb-10 md:mb-16">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">जनसेवा गतिविधियाँ</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">Janseva Activities</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {activities.map((activity, i) => (
              <ScrollReveal key={activity.title} delay={250 + i * 80}>
                <div className="relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl mb-4" aria-hidden="true">{activity.icon}</div>
                    <h3 className="font-serif text-lg text-warm-900">{activity.title}</h3>
                    <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">{activity.titleHi}</p>
                    <p className="font-sans text-sm text-warm-600 leading-relaxed mt-4 mb-4">{activity.desc}</p>
                    <span className="inline-block font-sans text-xs text-crimson-600 bg-crimson-50 border border-crimson-200/60 rounded-full px-3 py-1 font-semibold">
                      {activity.detail}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark section: Divyang Seva */}
      <section className="relative overflow-hidden bg-warm-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal delay={800}>
              <div className="text-center mb-10">
                <span className="inline-block px-3 py-1 rounded-full bg-saffron-500/20 text-saffron-400 text-xs font-semibold font-sans uppercase tracking-wider mb-4">Special Focus</span>
                <span className="font-devanagari text-sm text-saffron-400 font-medium block" lang="hi">दिव्यांग सेवा</span>
                <h2 className="font-serif text-2xl md:text-3xl text-white tracking-tight mt-1">Divyang Seva</h2>
                <div className="w-12 h-1 bg-saffron-400 rounded-full mx-auto mt-4" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={850}>
              <p className="font-sans text-base text-white/70 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                The society holds a deep commitment to serving India&apos;s specially-abled community — referred to with dignity as <em className="text-saffron-400">divyang</em> (those with divine gifts).
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {[
                { icon: "♿", label: "Wheelchairs", desc: "Free mobility aids to restore independence" },
                { icon: "🎵", label: "Instruments", desc: "Tools for livelihood and creative expression" },
                { icon: "🤝", label: "Ongoing Support", desc: "Continued follow-up and community care" },
              ].map((item) => (
                <div key={item.label} className="relative rounded-2xl bg-white shadow-xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 to-crimson-500" />
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl mx-auto mb-3" aria-hidden="true">{item.icon}</div>
                    <p className="font-sans text-sm font-semibold text-warm-900">{item.label}</p>
                    <p className="font-sans text-xs text-warm-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crimson CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-crimson-600 to-crimson-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal delay={900}>
              <span className="font-devanagari text-sm text-white/80 font-medium" lang="hi">हमारे साथ सेवा करें</span>
              <h2 className="font-serif text-2xl md:text-3xl text-white mt-2 mb-3">Participate in Janseva</h2>
              <p className="font-sans text-white/70 text-base mb-8 max-w-md mx-auto">
                Want to volunteer for distribution drives, donate blankets or clothing, or sponsor a wheelchair? Contact us to get involved.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-crimson-600 text-base font-semibold rounded-pill hover:bg-saffron-50 transition-all duration-300 shadow-lg"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  Get Involved
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="tel:+919560800343"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white text-base font-medium rounded-pill hover:bg-white/10 transition-all duration-200 font-sans"
                >
                  Call: 95608 00343
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
