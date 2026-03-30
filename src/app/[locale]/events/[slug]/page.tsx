import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { events } from "@/data/events";
import { breadcrumbJsonLd } from "@/lib/seo";
import { CampaignGallery } from "@/components/campaigns/CampaignGallery";
import { MapPin, Calendar, Clock, Users } from "lucide-react";

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found" };
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? `${event.titleHi} | श्री राधे माँ चैरिटेबल सोसाइटी`
      : `${event.title} | Shri Radhe Maa Charitable Society`,
    description: isHindi ? event.descriptionHi : event.description,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const isHindi = locale === "hi";
  const isCompleted = event.status === "completed";

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Events", url: "https://shriradhemasociety.org/events" },
    { name: event.title, url: `https://shriradhemasociety.org/events/${event.slug}` },
  ]);

  return (
    <div style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <ScrollReveal>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-warm-500 text-sm font-sans hover:text-crimson-500 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {isHindi ? "सभी आयोजन" : "All Events"}
          </Link>
        </ScrollReveal>

        {/* Hero header */}
        <ScrollReveal delay={100}>
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant={event.badgeVariant}>{isHindi ? event.typeLabelHi : event.typeLabel}</Badge>
              {isCompleted ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 text-xs font-semibold uppercase tracking-wider border border-emerald-100">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  {isHindi ? "पूर्ण" : "Completed"}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-crimson-50 text-crimson-500 text-xs font-semibold uppercase tracking-wider border border-crimson-100">
                  {isHindi ? "आगामी" : "Upcoming"}
                </span>
              )}
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-[2.75rem] text-warm-900 tracking-tight leading-tight mb-2">
              {isHindi ? event.titleHi : event.title}
            </h1>
            {!isHindi && (
              <p className="font-devanagari text-warm-800/50 text-lg mb-4" lang="hi">{event.titleHi}</p>
            )}
            {event.description && (
              <p className="text-warm-600 font-sans text-[15px] leading-[1.85] max-w-2xl">
                {isHindi ? event.descriptionHi : event.description}
              </p>
            )}
          </header>
        </ScrollReveal>

        {/* Event Details Card */}
        <ScrollReveal delay={200}>
          <div className="rounded-2xl border border-black/[0.06] bg-cream p-5 sm:p-8 mb-8">
            <h2 className="font-serif text-lg text-warm-900 mb-4">
              {isHindi ? "आयोजन विवरण" : "Event Details"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-crimson-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-xs text-warm-500 uppercase tracking-wider">{isHindi ? "तारीख" : "Date"}</p>
                  <p className="font-sans text-sm text-warm-900 font-medium">{isHindi ? event.dateHi || event.date : event.date}</p>
                  {isCompleted && event.completedDate && (
                    <p className="font-sans text-xs text-warm-500 mt-0.5">
                      {isHindi ? "पूर्ण" : "Completed"}: {new Date(event.completedDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                  )}
                </div>
              </div>
              {event.time && (
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-crimson-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-xs text-warm-500 uppercase tracking-wider">{isHindi ? "समय" : "Time"}</p>
                    <p className="font-sans text-sm text-warm-900 font-medium">{event.time}</p>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-crimson-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-xs text-warm-500 uppercase tracking-wider">{isHindi ? "स्थान" : "Venue"}</p>
                  <p className="font-sans text-sm text-warm-900 font-medium">{isHindi ? event.locationHi || event.location : event.location}</p>
                  {event.address && (
                    <p className="font-sans text-xs text-warm-500 mt-0.5">{isHindi ? event.addressHi || event.address : event.address}</p>
                  )}
                </div>
              </div>
              {isCompleted && event.attendees && (
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-crimson-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-xs text-warm-500 uppercase tracking-wider">{isHindi ? "उपस्थिति" : "Attendees"}</p>
                    <p className="font-sans text-sm text-warm-900 font-medium">{event.attendees}+</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* === COMPLETED EVENT SECTIONS === */}
        {isCompleted && (
          <>
            {/* Gallery */}
            {event.media && event.media.length > 0 && (
              <ScrollReveal delay={300}>
                <div className="mb-8">
                  <h2 className="font-serif text-xl md:text-2xl text-warm-900 mb-1">
                    {isHindi ? "आयोजन गैलरी" : "Event Gallery"}
                  </h2>
                  <p className="font-devanagari text-xs text-warm-500 mb-4" lang="hi">
                    {isHindi ? "" : "आयोजन गैलरी"}
                  </p>
                  <CampaignGallery media={event.media} />
                </div>
              </ScrollReveal>
            )}

            {/* Write-up */}
            {event.writeUp && (
              <ScrollReveal delay={350}>
                <div className="rounded-2xl bg-cream border border-black/[0.06] p-5 sm:p-8 mb-8">
                  <h2 className="font-serif text-xl md:text-2xl text-warm-900 mb-1">
                    {isHindi ? "आयोजन रिपोर्ट" : "Event Report"}
                  </h2>
                  <p className="font-devanagari text-xs text-crimson-500 mb-4" lang="hi">
                    {isHindi ? "" : "आयोजन रिपोर्ट"}
                  </p>
                  <div className="w-10 h-0.5 bg-crimson-500 rounded-full mb-4" />
                  <p className="text-warm-700 font-sans text-[15px] leading-[1.85]">
                    {isHindi ? event.writeUpHi : event.writeUp}
                  </p>
                </div>
              </ScrollReveal>
            )}

            {/* View Upcoming CTA */}
            <ScrollReveal delay={400}>
              <div className="rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-8 text-center mb-8">
                <h2 className="font-serif text-2xl text-warm-900 mb-3">
                  {isHindi ? "आगामी आयोजन देखें" : "View Upcoming Events"}
                </h2>
                <p className="text-warm-600 font-sans text-[15px] leading-relaxed mb-6 max-w-lg mx-auto">
                  {isHindi
                    ? "हमारे आगामी सेवा शिविरों और आध्यात्मिक आयोजनों में भाग लें।"
                    : "Join us at our upcoming seva camps and spiritual gatherings."}
                </p>
                <Link href="/events">
                  <Button variant="primary" size="lg">
                    {isHindi ? "आगामी आयोजन" : "Upcoming Events"}
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </>
        )}

        {/* === UPCOMING EVENT CTA === */}
        {!isCompleted && (
          <ScrollReveal delay={300}>
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-8 text-center mb-8">
              <h2 className="font-serif text-2xl text-warm-900 mb-3">
                {isHindi ? "रुचि दर्ज करें" : "Interested in Attending?"}
              </h2>
              <p className="text-warm-600 font-sans text-[15px] leading-relaxed mb-6 max-w-lg mx-auto">
                {isHindi
                  ? "अधिक जानकारी के लिए या इस आयोजन में भाग लेने के लिए हमसे संपर्क करें।"
                  : "Contact us for more details or to register your interest in attending this event."}
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  {isHindi ? "संपर्क करें" : "Contact Us"}
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
