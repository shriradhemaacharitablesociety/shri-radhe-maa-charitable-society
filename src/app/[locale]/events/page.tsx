import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Calendar, Heart, Stethoscope, Droplets, MapPin, Music, BookOpen, Shirt } from "lucide-react";

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
    icon: <Heart className="w-5 h-5" />,
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
    icon: <Stethoscope className="w-5 h-5" />,
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
    icon: <Heart className="w-5 h-5" />,
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
    icon: <Music className="w-5 h-5" />,
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
    icon: <BookOpen className="w-5 h-5" />,
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
    icon: <BookOpen className="w-5 h-5" />,
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
    icon: <Droplets className="w-5 h-5" />,
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
    icon: <Shirt className="w-5 h-5" />,
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
    icon: <Droplets className="w-5 h-5" />,
  },
];

function EventCard({ event }: { event: typeof upcomingEvents[0]; variant?: "white" | "cream" }) {
  return (
    <div className="group flex h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
      <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
        {event.icon}
        <span
          className="font-stat font-bold text-sm md:text-base uppercase tracking-wider"
          style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
        >
          {event.date}
        </span>
      </div>
      <div className="flex-1 p-4 md:p-5">
        <Badge variant={event.badgeVariant}>{event.typeLabel}</Badge>
        <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900 mt-2">
          {event.title}
        </h3>
        <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">{event.titleHi}</p>
        <div className="flex items-center gap-1.5 mt-3">
          <MapPin className="w-3.5 h-3.5 text-saffron-500 shrink-0" />
          <span className="font-sans text-xs md:text-sm text-warm-600">{event.location}</span>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Events", url: "https://shriradhemasociety.org/events" },
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
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">आयोजन और गतिविधियाँ</span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">Events &amp; Activities</h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              From spiritual gatherings to seva camps — stay updated on our upcoming and past events.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming Events on White */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900">Upcoming Events</h2>
              <p className="font-devanagari text-sm text-warm-800/50" lang="hi">आगामी आयोजन</p>
              <Badge variant="crimson">Live</Badge>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingEvents.map((event, i) => (
              <ScrollReveal key={event.title} delay={150 + i * 100}>
                <EventCard event={event} variant="cream" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events on Cream */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={500}>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900">Past Events</h2>
              <p className="font-devanagari text-sm text-warm-800/50" lang="hi">पिछले आयोजन</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents.map((event, i) => (
              <ScrollReveal key={event.title} delay={550 + i * 80}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-gradient-to-br from-warm-900 via-warm-800 to-crimson-900 py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={1000}>
            <p className="font-devanagari text-sm text-saffron-400 mb-2" lang="hi">अपडेट रहें</p>
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">Stay Updated on Events</h3>
            <p className="font-sans text-sm text-white/70 leading-relaxed mb-6 max-w-md mx-auto">
              To receive updates about upcoming seva camps, spiritual events, and distribution drives, contact us or follow our social media.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-crimson-500 text-sm font-medium rounded-lg hover:bg-white/90 transition-colors duration-200"
            >
              Contact Us
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
