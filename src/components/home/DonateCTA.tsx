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
    <section className="relative overflow-hidden">
      {/* Deep crimson gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-crimson-700 via-crimson-500 to-crimson-600" />
      {/* Subtle saffron glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-crimson-800/30 via-transparent to-saffron-500/10" />

      <div className="relative py-10 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-6 md:gap-10">
            {/* Title */}
            <ScrollReveal>
              <div className="flex flex-col gap-1.5 md:gap-2">
                <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white leading-tight">
                  {t("title")}
                </h2>
                <p
                  className="font-devanagari text-base md:text-xl text-white/50"
                  lang="hi"
                >
                  {t("title_hi")}
                </p>
              </div>
            </ScrollReveal>

            {/* Amount cards */}
            <ScrollReveal delay={150}>
              <div className="flex w-full justify-center gap-2.5 md:gap-3">
                {AMOUNTS.map(({ amount, key }) => (
                  <div
                    key={key}
                    className="flex flex-col items-center gap-1 px-4 sm:px-6 py-3 md:py-4 rounded-xl bg-white/95 backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 cursor-pointer flex-1 max-w-[140px]"
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    <span className="font-stat text-xl md:text-2xl font-black text-crimson-600">
                      {amount}
                    </span>
                    <span className="font-sans text-[9px] md:text-xs text-warm-600 text-center leading-tight">
                      {t(key)}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA button — full width on mobile */}
            <ScrollReveal delay={250}>
              <Link
                href={"/get-involved/donate" as any}
                className="block w-full sm:w-auto"
              >
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl font-sans font-bold px-8 py-4 text-base md:text-lg bg-white text-crimson-600 shadow-lg hover:bg-white/90 hover:shadow-xl active:scale-[0.98] transition-all duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-crimson-500"
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {t("cta")} /{" "}
                  {"\u0926\u093E\u0928 \u0915\u0930\u0947\u0902"}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </Link>
            </ScrollReveal>

            {/* Trust signals */}
            <ScrollReveal delay={350}>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center gap-1.5">
                  <span className="text-white/80 text-sm">{"\u2705"}</span>
                  <span className="font-sans text-[10px] md:text-xs text-white/80">
                    {t("trust_80g")}
                  </span>
                </div>
                <div className="w-px h-3 bg-white/20" />
                <div className="flex items-center gap-1.5">
                  <span className="text-white/80 text-sm">
                    {"\uD83E\uDEB7"}
                  </span>
                  <span className="font-sans text-[10px] md:text-xs text-white/80">
                    {t("trust_100")}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
