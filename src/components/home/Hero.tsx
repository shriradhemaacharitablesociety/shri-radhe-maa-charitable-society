"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Hero() {
  const t = useTranslations("hero");
  const s = useTranslations("stats");

  const stats = [
    {
      num: s("relief_amount"),
      label: s("relief_label"),
      detail: s("relief_detail"),
    },
    {
      num: s("dialysis_amount"),
      label: s("dialysis_label"),
      detail: s("dialysis_detail"),
    },
    {
      num: s("families_amount"),
      label: s("families_label"),
      detail: s("families_detail"),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-warm-900 via-warm-800 to-crimson-900">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(196,30,58,0.15),transparent_60%)]" />

      <div className="relative py-16 md:py-24 lg:py-32 pb-28 md:pb-36 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full bg-saffron-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider font-sans text-warm-900">
              <span className="w-1.5 h-1.5 rounded-full bg-warm-900" />
              {t("badge")}
            </span>
          </ScrollReveal>

          {/* Main heading */}
          <ScrollReveal delay={100}>
            <h1
              className="font-serif text-white mt-6 md:mt-8 max-w-4xl mx-auto"
              style={{
                fontSize: "clamp(28px, 7vw, 64px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              {t("title_1")}{" "}
              {t("title_2")}{" "}
              <em className="italic text-crimson-300">{t("title_3")}</em>{" "}
              <span className="text-saffron-400">{t("title_4")}</span>
            </h1>
          </ScrollReveal>

          {/* Sanskrit text */}
          <ScrollReveal delay={200}>
            <p
              className="font-devanagari text-saffron-400 mt-3 md:mt-4"
              style={{ fontSize: "clamp(13px, 2vw, 16px)" }}
              lang="hi"
            >
              {t("sanskrit")}
            </p>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={250}>
            <p
              className="text-white/80 font-sans max-w-xl mx-auto leading-relaxed mt-4 md:mt-6"
              style={{ fontSize: "clamp(14px, 2vw, 17px)" }}
            >
              {t("description")}
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={350}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 md:mt-10">
              <Link href={"/seva" as any} className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl font-sans font-bold px-8 py-3.5 text-sm md:text-base bg-white text-crimson-600 shadow-lg hover:bg-white/90 hover:shadow-xl active:scale-[0.98] transition-all duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  {t("cta_primary")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </Link>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl font-sans font-medium px-8 py-3.5 text-sm md:text-base border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/5 active:scale-[0.98] transition-all duration-300 cursor-pointer select-none"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                {t("cta_secondary")}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Stat cards — overlapping into next section */}
      <div className="relative -mb-16 md:-mb-20 px-4 sm:px-6 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Desktop: 3 cards in a row */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={400 + i * 100}>
                <div className="bg-white rounded-2xl shadow-xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="font-stat text-3xl lg:text-4xl font-black text-crimson-500 leading-none">
                    {stat.num}
                  </div>
                  <p className="font-sans text-warm-700 font-semibold text-xs uppercase tracking-wider mt-3">
                    {stat.label}
                  </p>
                  <p className="font-sans text-warm-500 text-xs mt-1">
                    {stat.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: horizontal scroll row */}
          <div className="md:hidden -mx-4 px-4">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 scrollbar-hide">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="snap-start shrink-0 min-w-[220px] flex-1 bg-white rounded-xl shadow-lg p-4 text-center"
                >
                  <div className="font-stat text-2xl font-black text-crimson-500 leading-none">
                    {stat.num}
                  </div>
                  <p className="font-sans text-warm-700 font-semibold text-[10px] uppercase tracking-wider mt-2">
                    {stat.label}
                  </p>
                  <p className="font-sans text-warm-500 text-[10px] mt-0.5 leading-snug">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
