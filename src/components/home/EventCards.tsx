import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PLACEHOLDER_EVENTS = [
  {
    type: "seva",
    typeLabel: "Seva Camp",
    typeLabelHi: "सेवा शिविर",
    title: "Free Dialysis Awareness Drive",
    titleHi: "निःशुल्क डायलिसिस जागरूकता शिविर",
    date: "April 2025",
    location: "Anand Hospital, Dahisar, Mumbai",
  },
  {
    type: "relief",
    typeLabel: "Relief Drive",
    typeLabelHi: "राहत अभियान",
    title: "Monthly Pension Distribution",
    titleHi: "मासिक पेंशन वितरण",
    date: "Every Month",
    location: "Delhi & NCR",
  },
];

export function EventCards() {
  const t = useTranslations("events");

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title={t("title")}
            titleHi={t("title_hi")}
            subtitle="Stay updated on our upcoming seva activities and camps"
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PLACEHOLDER_EVENTS.map((event, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant={event.type === "seva" ? "crimson" : "gold"}>
                      {event.typeLabel}
                    </Badge>
                    <span className="font-sans text-xs text-warm-800/40 font-medium">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-warm-900 leading-tight">
                    {event.title}
                  </h3>
                  <p className="font-devanagari text-warm-800/50 text-base mt-1" lang="hi">
                    {event.titleHi}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-3.5 h-3.5 text-saffron-600 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <span className="font-sans text-sm text-warm-800/60">
                      {event.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={350}>
          <div className="flex justify-center mt-10">
            <Link
              href={"/events" as any}
              className="font-sans text-sm font-semibold text-crimson-500 hover:text-crimson-600 transition-colors inline-flex items-center gap-1.5 group"
            >
              {t("view_all")}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
