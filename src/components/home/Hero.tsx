"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "8px", paddingBottom: "32px" }}
    >
      {/* Warm gradient background — visible on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-saffron-50 via-white to-white md:from-white md:to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* 2-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <ScrollReveal delay={0}>
              <Badge variant="crimson">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 mr-2" />
                {t("badge")}
              </Badge>
            </ScrollReveal>

            {/* Watermark + Title */}
            <div className="relative mt-3 md:mt-6">
              <div
                className="font-devanagari font-black select-none pointer-events-none hidden md:block"
                style={{
                  fontSize: "clamp(60px, 15vw, 120px)",
                  lineHeight: 0.85,
                  letterSpacing: "-0.04em",
                  color: "rgba(26, 15, 8, 0.04)",
                }}
                aria-hidden="true"
              >
                {"\u0938\u0947\u0935\u093E"}
              </div>
              <h1
                className="font-serif text-warm-900 relative md:-mt-11"
                style={{
                  fontSize: "clamp(26px, 6vw, 56px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  zIndex: 1,
                }}
              >
                {t("title_1")}
                <br />
                {t("title_2")}{" "}
                <em className="text-crimson-500 italic">{t("title_3")}</em>{" "}
                <span className="text-saffron-600">{t("title_4")}</span>
              </h1>
            </div>

            <ScrollReveal delay={150}>
              <p
                className="font-devanagari text-saffron-500 opacity-50 hidden md:block"
                style={{ fontSize: "14px", marginTop: "8px" }}
              >
                {t("sanskrit")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p
                className="text-warm-600 lg:max-w-[420px] text-[13px] md:text-[15px] leading-relaxed"
                style={{ marginTop: "10px" }}
              >
                {t("description")}
              </p>
            </ScrollReveal>

            {/* CTAs — full width stacked on mobile */}
            <ScrollReveal delay={350}>
              <div
                className="flex flex-col sm:flex-row gap-2.5 sm:gap-3"
                style={{ marginTop: "16px" }}
              >
                <Link href={"/seva" as any} className="w-full sm:w-auto">
                  <Button variant="primary" className="w-full sm:w-auto">
                    {t("cta_primary")}{" "}
                    <span style={{ fontSize: "11px", opacity: 0.5 }}>
                      {"\u2192"}
                    </span>
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full sm:w-auto">
                  {t("cta_secondary")}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - stat cards */}
          {/* Desktop: vertical stack */}
          <div className="hidden lg:flex flex-col gap-3 pt-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={200 + i * 120}>
                <div
                  className="group relative bg-cream rounded-2xl border border-black/[0.06] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-crimson-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div
                    className="font-stat font-bold leading-none text-crimson-500"
                    style={{ fontSize: "28px" }}
                  >
                    {stat.num}
                  </div>
                  <p
                    className="text-warm-600 font-medium font-sans"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      marginTop: "8px",
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-warm-600/50 font-sans"
                    style={{ fontSize: "11px", marginTop: "4px" }}
                  >
                    {stat.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: horizontal scrollable row */}
          <div className="lg:hidden -mx-4 px-4 mt-4">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 scrollbar-hide">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="snap-start shrink-0 min-w-[200px] flex-1 bg-white rounded-xl border-l-[3px] border-l-crimson-500 border border-black/[0.06] px-4 py-3.5 shadow-sm"
                >
                  <div className="font-stat font-bold text-crimson-500 text-xl leading-none">
                    {stat.num}
                  </div>
                  <p className="font-sans text-warm-700 font-medium text-[10px] uppercase tracking-wider mt-1.5">
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
