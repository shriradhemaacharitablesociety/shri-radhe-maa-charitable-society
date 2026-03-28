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
    <section className="section-white" style={{ paddingTop: "24px", paddingBottom: "80px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <ScrollReveal delay={0}>
              <Badge variant="crimson">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 mr-2" />
                {t("badge")}
              </Badge>
            </ScrollReveal>

            {/* Watermark + Title */}
            <div className="relative mt-6">
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
                {"\u0938\u0947\u0935\u093E"}
              </div>
              <h1
                className="font-serif text-warm-900 relative"
                style={{
                  fontSize: "clamp(32px, 6vw, 56px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  marginTop: "clamp(-24px, -4vw, -44px)",
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
                style={{ fontSize: "16px", marginTop: "12px" }}
              >
                {t("sanskrit")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p
                className="text-warm-600 lg:max-w-[420px]"
                style={{
                  fontSize: "15px",
                  lineHeight: 1.75,
                  marginTop: "16px",
                }}
              >
                {t("description")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="flex flex-wrap gap-3" style={{ marginTop: "32px" }}>
                <Link href={"/seva" as any}>
                  <Button variant="primary">
                    {t("cta_primary")}{" "}
                    <span style={{ fontSize: "11px", opacity: 0.5 }}>
                      {"\u2192"}
                    </span>
                  </Button>
                </Link>
                <Button variant="ghost">{t("cta_secondary")}</Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - stat cards */}
          <div className="flex flex-col gap-3 pt-4 lg:pt-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={200 + i * 120}>
                <div
                  className="group relative bg-cream rounded-2xl border border-black/[0.06] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  {/* Left accent bar on hover */}
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
        </div>
      </div>
    </section>
  );
}
