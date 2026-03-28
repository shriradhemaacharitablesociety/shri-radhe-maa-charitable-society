import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PLACEHOLDER_EVENTS = [
  {
    type: "seva",
    typeLabel: "Seva Camp",
    typeLabelHi: "\u0938\u0947\u0935\u093E \u0936\u093F\u0935\u093F\u0930",
    title: "Free Dialysis Awareness Drive",
    titleHi: "\u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915 \u0921\u093E\u092F\u0932\u093F\u0938\u093F\u0938 \u091C\u093E\u0917\u0930\u0942\u0915\u0924\u093E \u0936\u093F\u0935\u093F\u0930",
    date: "April 2025",
    location: "Anand Hospital, Dahisar, Mumbai",
  },
  {
    type: "relief",
    typeLabel: "Relief Drive",
    typeLabelHi: "\u0930\u093E\u0939\u0924 \u0905\u092D\u093F\u092F\u093E\u0928",
    title: "Monthly Pension Distribution",
    titleHi: "\u092E\u093E\u0938\u093F\u0915 \u092A\u0947\u0902\u0936\u0928 \u0935\u093F\u0924\u0930\u0923",
    date: "Every Month",
    location: "Delhi & NCR",
  },
];

export function EventCards() {
  const t = useTranslations("events");

  return (
    <section className="section-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
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
              <div
                className="group relative bg-cream rounded-2xl border border-black/[0.06] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                {/* Left accent bar on hover */}
                <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-crimson-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-center justify-between mb-4">
                  <Badge variant={event.type === "seva" ? "crimson" : "gold"}>
                    {event.typeLabel}
                  </Badge>
                  <span className="font-sans text-xs text-warm-600 font-medium">
                    {event.date}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-warm-900 leading-tight">
                  {event.title}
                </h3>
                <p className="font-devanagari text-warm-600/60 text-base mt-1" lang="hi">
                  {event.titleHi}
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <svg
                    className="w-3.5 h-3.5 text-saffron-500 shrink-0"
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
                  <span className="font-sans text-sm text-warm-600">
                    {event.location}
                  </span>
                </div>
              </div>
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
