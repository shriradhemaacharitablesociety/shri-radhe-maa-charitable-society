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
    <section className="bg-white" style={{ paddingTop: "8px", paddingBottom: "32px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <ScrollReveal delay={0}>
              <Badge variant="crimson">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 mr-2" />
                {t("badge")}
              </Badge>
            </ScrollReveal>

            <div className="relative mt-3 md:mt-6">
              <div
                className="font-devanagari font-black select-none pointer-events-none"
                style={{
                  fontSize: "clamp(60px, 15vw, 120px)",
                  lineHeight: 0.85,
                  letterSpacing: "-0.04em",
                  color: "rgba(26, 15, 8, 0.04)",
                }}
                aria-hidden="true"
              >
                सेवा
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
                className="font-devanagari text-saffron-500 opacity-50"
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

            <ScrollReveal delay={350}>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3" style={{ marginTop: "16px" }}>
                <Link href={"/seva" as any} className="w-full sm:w-auto">
                  <Button variant="primary" className="w-full sm:w-auto">
                    {t("cta_primary")} →
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full sm:w-auto">
                  {t("cta_secondary")}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Desktop stat cards — sidebar style */}
          <div className="hidden lg:flex flex-col gap-3 pt-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={200 + i * 120}>
                <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
                  <div className="shrink-0 w-20 bg-crimson-500 flex flex-col items-center justify-center py-4 gap-2">
                    <span
                      className="font-stat font-bold text-white text-base uppercase tracking-wider"
                      style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
                    >
                      {stat.num}
                    </span>
                  </div>
                  <div className="flex-1 p-4">
                    <p className="font-sans text-warm-800 font-semibold text-sm">
                      {stat.label}
                    </p>
                    <p className="font-sans text-warm-500 text-xs mt-1">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile stat cards — sidebar style */}
          <div className="lg:hidden -mx-4 px-4 mt-3">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 scrollbar-hide">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="snap-start shrink-0 min-w-[220px] flex-1 flex rounded-2xl overflow-hidden shadow-md bg-white"
                >
                  <div className="shrink-0 w-16 bg-crimson-500 flex flex-col items-center justify-center py-4">
                    <span
                      className="font-stat font-bold text-white text-sm uppercase tracking-wider"
                      style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
                    >
                      {stat.num}
                    </span>
                  </div>
                  <div className="flex-1 p-3.5">
                    <p className="font-sans text-warm-800 font-semibold text-xs uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="font-sans text-warm-500 text-[10px] mt-1 leading-snug">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
