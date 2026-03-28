import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const AMOUNTS = [
  { amount: "\u20B9500", key: "amount_500" },
  { amount: "\u20B91,000", key: "amount_1000" },
  { amount: "\u20B95,000", key: "amount_5000" },
] as const;

export function DonateCTA() {
  const t = useTranslations("donate");

  return (
    <section className="bg-crimson-500 py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-10">
          {/* Title */}
          <ScrollReveal>
            <div className="flex flex-col gap-2">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                {t("title")}
              </h2>
              <p className="font-devanagari text-xl text-white/50" lang="hi">
                {t("title_hi")}
              </p>
            </div>
          </ScrollReveal>

          {/* Amount cards */}
          <ScrollReveal delay={150}>
            <div className="flex flex-wrap justify-center gap-3">
              {AMOUNTS.map(({ amount, key }) => (
                <div
                  key={key}
                  className="flex flex-col items-center gap-1.5 px-5 sm:px-6 py-4 rounded-lg bg-white border border-white/20 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 cursor-pointer min-w-[90px] sm:min-w-[120px] flex-1 sm:flex-initial"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  <span className="font-stat text-2xl font-black text-crimson-500">
                    {amount}
                  </span>
                  <span className="font-sans text-xs text-warm-600 text-center leading-tight max-w-[100px]">
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA button - white bg, crimson text */}
          <ScrollReveal delay={250}>
            <Link href={"/get-involved/donate" as any}>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg font-sans font-medium px-8 py-3.5 text-base bg-white text-crimson-500 shadow-sm hover:bg-white/90 hover:shadow-md active:scale-[0.98] transition-all duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-crimson-500"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                {t("cta")} / {"\u0926\u093E\u0928 \u0915\u0930\u0947\u0902"}
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
              </button>
            </Link>
          </ScrollReveal>

          {/* Trust signals in white */}
          <ScrollReveal delay={350}>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-white/80 text-sm">{"\u2705"}</span>
                <span className="font-sans text-xs text-white/80">
                  {t("trust_80g")}
                </span>
              </div>
              <div className="w-px h-4 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-white/80 text-sm">{"\uD83E\uDEB7"}</span>
                <span className="font-sans text-xs text-white/80">
                  {t("trust_100")}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
