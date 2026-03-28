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
      ? "आयोजन और गतिविधियाँ | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Events & Activities | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "सेवा शिविर, स्वास्थ्य शिविर, भजन जैमिंग, सुखमनी साहिब पाठ, भागवत कथा — आगामी और पिछले आयोजन।"
      : "Seva camps, health camps, bhajan programmes, Sukhmani Sahib Paath, Bhagwat Katha — upcoming and past events.",
    keywords: isHindi
      ? ["सेवा शिविर", "भजन जैमिंग", "भागवत कथा", "स्वास्थ्य शिविर", "आध्यात्मिक आयोजन"]
      : ["seva camp Delhi", "bhajan programme", "Bhagwat Katha", "health camp NGO", "spiritual events India"],
    alternates: { languages: { "en-IN": "/en/events", "hi-IN": "/hi/events" } },
    openGraph: {
      title: "Events & Activities — Shri Radhe Maa Charitable Society",
      description: "Seva camps, spiritual gatherings, and distribution drives across India.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

const upcomingEvents = [
  {
    type: "seva",
    typeLabel: "Seva Camp",
    typeLabelHi: "सेवा शिविर",
    badgeVariant: "crimson" as const,
    title: "Monthly Pension Distribution",
    titleHi: "मासिक पेंशन वितरण",
    date: "Every Month",
    location: "Delhi & NCR",
  },
  {
    type: "health",
    typeLabel: "Health Camp",
    typeLabelHi: "स्वास्थ्य शिविर",
    badgeVariant: "gold" as const,
    title: "Free Dialysis Awareness Drive",
    titleHi: "निःशुल्क डायलिसिस जागरूकता",
    date: "Coming Soon",
    location: "Anand Hospital, Dahisar, Mumbai",
  },
  {
    type: "seva",
    typeLabel: "Janseva",
    typeLabelHi: "जनसेवा",
    badgeVariant: "crimson" as const,
    title: "Wheelchair Distribution Drive",
    titleHi: "व्हीलचेयर वितरण अभियान",
    date: "Coming Soon",
    location: "Delhi",
  },
];

const pastEvents = [
  {
    type: "spiritual",
    typeLabel: "Spiritual Event",
    typeLabelHi: "आध्यात्मिक आयोजन",
    badgeVariant: "gold" as const,
    title: "Bhajan Jamming",
    titleHi: "भजन जैमिंग",
    date: "2024",
    location: "Delhi",
  },
  {
    type: "spiritual",
    typeLabel: "Spiritual Event",
    typeLabelHi: "आध्यात्मिक आयोजन",
    badgeVariant: "gold" as const,
    title: "Sukhmani Sahib Paath",
    titleHi: "सुखमनी साहिब पाठ",
    date: "2024",
    location: "Delhi",
  },
  {
    type: "spiritual",
    typeLabel: "Spiritual Event",
    typeLabelHi: "आध्यात्मिक आयोजन",
    badgeVariant: "gold" as const,
    title: "Bhagwat Katha",
    titleHi: "भागवत कथा",
    date: "2023",
    location: "Delhi NCR",
  },
  {
    type: "relief",
    typeLabel: "Disaster Relief",
    typeLabelHi: "आपदा राहत",
    badgeVariant: "crimson" as const,
    title: "Punjab Flood Relief — Islampur Village",
    titleHi: "पंजाब बाढ़ राहत — इस्लामपुर",
    date: "2023",
    location: "Islampur Village, Punjab",
  },
  {
    type: "seva",
    typeLabel: "Blanket Distribution",
    typeLabelHi: "कंबल वितरण",
    badgeVariant: "crimson" as const,
    title: "Winter Blanket Distribution Drive",
    titleHi: "शीतकालीन कंबल वितरण",
    date: "Winter 2023",
    location: "Delhi",
  },
  {
    type: "health",
    typeLabel: "Blood Donation",
    typeLabelHi: "रक्तदान",
    badgeVariant: "gold" as const,
    title: "Blood Donation Camp",
    titleHi: "रक्तदान शिविर",
    date: "2023",
    location: "Delhi",
  },
];

function EventCard({ event }: { event: typeof upcomingEvents[0] }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <Badge variant={event.badgeVariant}>{event.typeLabel}</Badge>
          <span className="font-sans text-xs text-warm-800/40 font-medium">{event.date}</span>
        </div>
        <h3 className="font-serif text-xl text-warm-900 leading-tight">{event.title}</h3>
        <p className="font-devanagari text-warm-800/50 text-base mt-1" lang="hi">{event.titleHi}</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-saffron-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <span className="font-sans text-sm text-warm-800/60">{event.location}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function EventsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Events", url: "https://shriradhemasociety.org/events" },
  ]);

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Events & Activities"
            titleHi="आयोजन और गतिविधियाँ"
            subtitle="From spiritual gatherings to seva camps — stay updated on our upcoming and past events."
            className="mb-10"
          />
        </ScrollReveal>

        {/* Upcoming Events */}
        <ScrollReveal delay={100}>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-serif text-2xl text-warm-900">Upcoming Events</h2>
            <Badge variant="crimson">Live</Badge>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {upcomingEvents.map((event, i) => (
            <ScrollReveal key={event.title} delay={150 + i * 100}>
              <EventCard event={event} />
            </ScrollReveal>
          ))}
        </div>

        {/* Past Events */}
        <ScrollReveal delay={500}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Past Events</h2>
          <p className="font-devanagari text-sm text-warm-800/50 mb-6" lang="hi">पिछले आयोजन</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {pastEvents.map((event, i) => (
            <ScrollReveal key={event.title} delay={550 + i * 80}>
              <EventCard event={event} />
            </ScrollReveal>
          ))}
        </div>

        {/* Newsletter CTA */}
        <ScrollReveal delay={1000}>
          <div className="rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8 text-center">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">अपडेट रहें</p>
            <h3 className="font-serif text-xl text-warm-900 mb-3">Stay Updated on Events</h3>
            <p className="font-sans text-sm text-warm-800/60 leading-relaxed mb-5 max-w-md mx-auto">
              To receive updates about upcoming seva camps, spiritual events, and distribution drives, contact us or follow our social media.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-crimson-500 to-crimson-400 text-white text-sm font-medium rounded-pill hover:from-crimson-600 hover:to-crimson-500 transition-all duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              Contact Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
