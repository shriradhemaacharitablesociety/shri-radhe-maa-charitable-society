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
                className="font-devanagari font-black select-none pointer-events-none hidden md:block"
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

          {/* Desktop stat cards */}
          <div className="hidden lg:flex flex-col gap-3 pt-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={200 + i * 120}>
                <div className="group relative bg-cream rounded-2xl border border-black/[0.06] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-crimson-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="font-stat font-bold leading-none text-crimson-500 text-[28px]">
                    {stat.num}
                  </div>
                  <p className="font-sans text-warm-600 font-medium text-[11px] uppercase tracking-[1.5px] mt-2">
                    {stat.label}
                  </p>
                  <p className="font-sans text-warm-500 text-[11px] mt-1">
                    {stat.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile horizontal scroll stat cards */}
          <div className="lg:hidden -mx-4 px-4 mt-3">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 scrollbar-hide">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="snap-start shrink-0 min-w-[200px] flex-1 bg-cream rounded-xl border-l-[3px] border-l-crimson-500 border border-black/[0.06] px-4 py-3.5 shadow-sm"
                >
                  <div className="font-stat font-bold text-crimson-500 text-xl leading-none">
                    {stat.num}
                  </div>
                  <p className="font-sans text-warm-700 font-medium text-[10px] uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </p>
                  <p className="font-sans text-warm-500 text-[10px] mt-0.5">
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
