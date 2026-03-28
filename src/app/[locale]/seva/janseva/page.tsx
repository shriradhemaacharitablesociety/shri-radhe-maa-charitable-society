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
    desc: "Wheelchairs are provided free of charge to differently-abled individuals who cannot afford mobility aids, restoring their independence and dignity.",
  },
  {
    icon: "🎵",
    title: "Instruments for Specially Abled",
    titleHi: "दिव्यांगों के लिए उपकरण",
    desc: "Musical instruments and assistive devices are distributed to specially-abled individuals as a means of livelihood, therapy, and creative expression.",
  },
  {
    icon: "🧥",
    title: "Blanket Distribution",
    titleHi: "कंबल वितरण",
    desc: "During winter months, blankets are distributed to the homeless and poor to protect them from the cold — a simple but life-saving act of seva.",
  },
  {
    icon: "👗",
    title: "Clothing Distribution",
    titleHi: "वस्त्र वितरण",
    desc: "New and quality clothing is distributed to families and individuals in need, especially during festive seasons and after disaster events.",
  },
  {
    icon: "🍚",
    title: "Ann Seva — Food Distribution",
    titleHi: "अन्न सेवा — भोजन वितरण",
    desc: "Regular food distribution (Ann Seva) ensures that no one in our community goes to sleep hungry. Nutritious meals and food packets are distributed at regular intervals.",
  },
  {
    icon: "📦",
    title: "Essential Items Distribution",
    titleHi: "आवश्यक वस्तुओं का वितरण",
    desc: "Essential household items — toiletries, grocery staples, medicines — are provided to families in need, helping them meet basic daily requirements.",
  },
];

export default function JansevaPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Seva", url: "https://shriradhemasociety.org/seva" },
    { name: "Janseva Abhiyan", url: "https://shriradhemasociety.org/seva/janseva" },
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
            <Badge variant="crimson">Janseva Abhiyan</Badge>
          </div>
          <SectionHeader
            title="Janseva Abhiyan"
            titleHi="जनसेवा अभियान"
            subtitle="Serving the people — distributing wheelchairs, food, clothing, and essentials to those who need them most."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Mission statement */}
        <ScrollReveal delay={100}>
          <div className="mb-10 rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8">
            <p className="font-serif text-xl text-warm-900 leading-relaxed mb-3">
              &ldquo;Service to man is service to God.&rdquo;
            </p>
            <p className="font-devanagari text-base text-warm-800/60 leading-relaxed" lang="hi">
              &ldquo;मनुष्य की सेवा ही ईश्वर की सेवा है।&rdquo;
            </p>
            <p className="font-sans text-sm text-warm-800/60 mt-4 leading-relaxed">
              The Janseva Abhiyan is the society&apos;s ground-level public service initiative. It covers the most direct and tangible forms of humanitarian work — putting essential items, mobility aids, food, and clothing in the hands of people who need them.
            </p>
          </div>
        </ScrollReveal>

        {/* Activities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {activities.map((activity, i) => (
            <ScrollReveal key={activity.title} delay={150 + i * 80}>
              <Card variant="default" className="h-full">
                <CardHeader>
                  <div className="text-2xl mb-2" aria-hidden="true">{activity.icon}</div>
                  <h2 className="font-serif text-lg text-warm-900">{activity.title}</h2>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">{activity.titleHi}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{activity.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Special focus: Divyang */}
        <ScrollReveal delay={650}>
          <div className="rounded-3xl border border-saffron-300/50 bg-white/40 backdrop-blur-sm p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl shrink-0" aria-hidden="true">♿</div>
              <div>
                <Badge variant="gold" className="mb-3">Special Focus</Badge>
                <h3 className="font-serif text-xl text-warm-900 mb-2">Divyang Seva</h3>
                <p className="font-devanagari text-sm text-warm-800/50 mb-3" lang="hi">दिव्यांग सेवा</p>
                <p className="font-sans text-sm text-warm-800/70 leading-relaxed">
                  The society holds a deep commitment to serving India&apos;s specially-abled community — referred to with dignity as <em>divyang</em> (those with divine gifts). Through wheelchair distribution, mobility aids, instruments, and livelihood support, we strive to enable independence and participation in society for every divyang individual.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Participate CTA */}
        <ScrollReveal delay={750}>
          <div className="rounded-3xl border border-crimson-200/50 bg-crimson-50/30 p-8 text-center">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">हमारे साथ सेवा करें</p>
            <h3 className="font-serif text-xl text-warm-900 mb-3">Participate in Janseva</h3>
            <p className="font-sans text-sm text-warm-800/60 leading-relaxed mb-5 max-w-md mx-auto">
              Want to volunteer for distribution drives, donate blankets or clothing, or sponsor a wheelchair? Contact us to get involved.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-crimson-500 to-crimson-400 text-white text-sm font-medium rounded-pill hover:from-crimson-600 hover:to-crimson-500 transition-all duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              Get Involved
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
