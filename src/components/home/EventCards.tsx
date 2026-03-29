import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PLACEHOLDER_EVENTS = [
  {
    type: "seva",
    typeLabel: "Seva Camp",
    title: "Free Dialysis Awareness Drive",
    titleHi: "\u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915 \u0921\u093E\u092F\u0932\u093F\u0938\u093F\u0938 \u091C\u093E\u0917\u0930\u0942\u0915\u0924\u093E \u0936\u093F\u0935\u093F\u0930",
    dateMonth: "APR",
    dateDay: "15",
    dateYear: "2025",
    location: "Anand Hospital, Dahisar, Mumbai",
  },
  {
    type: "relief",
    typeLabel: "Relief Drive",
    title: "Monthly Pension Distribution",
    titleHi: "\u092E\u093E\u0938\u093F\u0915 \u092A\u0947\u0902\u0936\u0928 \u0935\u093F\u0924\u0930\u0923",
    dateMonth: "EVERY",
    dateDay: "1st",
    dateYear: "MONTH",
    location: "Delhi & NCR",
  },
];

export function EventCards() {
  const t = useTranslations("events");

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-14">
            <span className="font-devanagari text-sm text-crimson-500 font-medium">
              {t("title_hi")}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">
              {t("title")}
            </h2>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-[15px] text-warm-600 mt-4 leading-relaxed max-w-xl mx-auto">
              Stay updated on our upcoming seva activities and camps
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {PLACEHOLDER_EVENTS.map((event, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="group bg-white rounded-2xl shadow-md border border-black/[0.04] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex">
                  {/* Date badge */}
                  <div className="shrink-0 w-20 md:w-24 bg-crimson-500 flex flex-col items-center justify-center py-4 md:py-6 text-white">
                    <span className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-80">
                      {event.dateMonth}
                    </span>
                    <span className="font-stat text-2xl md:text-3xl font-black leading-none mt-0.5">
                      {event.dateDay}
                    </span>
                    <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-wider opacity-60 mt-0.5">
                      {event.dateYear}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 md:p-6">
                    <span className={`inline-block font-sans text-[10px] md:text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      event.type === "seva"
                        ? "bg-crimson-50 text-crimson-500"
                        : "bg-saffron-100 text-saffron-600"
                    }`}>
                      {event.typeLabel}
                    </span>

                    <h3 className="font-serif text-base md:text-xl text-warm-900 leading-tight mt-2.5">
                      {event.title}
                    </h3>
                    <p className="font-devanagari text-warm-500 text-xs md:text-sm mt-0.5" lang="hi">
                      {event.titleHi}
                    </p>

                    <div className="flex items-center gap-1.5 mt-3">
                      <svg
                        className="w-3.5 h-3.5 text-saffron-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <span className="font-sans text-xs md:text-sm text-warm-600">
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTA */}
        <ScrollReveal delay={350}>
          <div className="flex justify-center mt-10 md:mt-12">
            <Link
              href={"/events" as any}
              className="inline-flex items-center justify-center gap-2 rounded-xl font-sans font-bold px-8 py-3.5 text-sm bg-crimson-500 text-white shadow-md hover:bg-crimson-600 hover:shadow-lg active:scale-[0.98] transition-all duration-300 cursor-pointer select-none"
            >
              {t("view_all")}
              <svg
                className="w-4 h-4"
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
