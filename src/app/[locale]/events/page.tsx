import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { breadcrumbJsonLd } from "@/lib/seo";
import { events } from "@/data/events";
import { Heart, Stethoscope, Droplets, MapPin, Music, BookOpen, Shirt } from "lucide-react";

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

const iconMap: Record<string, React.ReactNode> = {
  seva: <Heart className="w-5 h-5" />,
  health: <Stethoscope className="w-5 h-5" />,
  spiritual: <Music className="w-5 h-5" />,
  relief: <Droplets className="w-5 h-5" />,
};

const upcomingEvts = events.filter((e) => e.status === "upcoming");
const pastEvts = events.filter((e) => e.status === "completed");

function EventCard({ event }: { event: (typeof events)[number] }) {
  return (
    <Link href={`/events/${event.slug}` as any} className="block h-full">
      <div className="group flex h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
        <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
          {iconMap[event.type] || <Heart className="w-5 h-5" />}
          <span
            className="font-stat font-bold text-sm md:text-base uppercase tracking-wider"
            style={{ writingMode: "vertical-lr" as const, textOrientation: "mixed" as const }}
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
    </Link>
  );
}

export default function EventsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://srmcs.org" },
    { name: "Events", url: "https://srmcs.org/events" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
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
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900">Upcoming Events</h2>
              <p className="font-devanagari text-sm text-warm-800/50" lang="hi">आगामी आयोजन</p>
              <Badge variant="crimson">Live</Badge>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingEvts.map((event, i) => (
              <ScrollReveal key={event.title} delay={150 + i * 100}>
                <EventCard event={event} />
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
            {pastEvts.map((event, i) => (
              <ScrollReveal key={event.title} delay={550 + i * 80}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal delay={1000}>
            <p className="font-devanagari text-sm text-crimson-500 mb-2" lang="hi">अपडेट रहें</p>
            <h3 className="font-serif text-2xl md:text-3xl text-warm-900 mb-3">Stay Updated on Events</h3>
            <p className="font-sans text-sm text-warm-600 leading-relaxed mb-6 max-w-md mx-auto">
              To receive updates about upcoming seva camps, spiritual events, and distribution drives, contact us or follow our social media.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-crimson-500 text-white text-sm font-medium rounded-lg hover:bg-crimson-600 transition-colors duration-200"
            >
              Contact Us
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
