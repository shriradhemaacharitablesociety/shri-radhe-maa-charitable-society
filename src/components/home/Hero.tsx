"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Badge */}
        <ScrollReveal delay={0}>
          <Badge variant="gold">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron-500" />
            {t("badge")}
          </Badge>
        </ScrollReveal>

        {/* Main hero grid — text left, stats right */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
          {/* Left — headline + description + CTAs */}
          <div className="flex-1">
            {/* Watermark + Title layered */}
            <div className="relative">
              <div
                className="font-devanagari font-black select-none pointer-events-none text-warm-900/[0.04]"
                style={{
                  fontSize: "clamp(90px, 12vw, 140px)",
                  lineHeight: 0.8,
                  letterSpacing: "-0.04em",
                }}
                aria-hidden="true"
              >
                {"\u0938\u0947\u0935\u093E"}
              </div>
              <h1
                className="font-serif text-warm-900 -mt-12 relative z-10"
                style={{
                  fontSize: "clamp(40px, 5vw, 58px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                {t("title_1")}
                <br />
                {t("title_2")}{" "}
                <em className="text-crimson-500 italic">{t("title_3")}</em>{" "}
                <span className="text-saffron-600">{t("title_4")}</span>
              </h1>
            </div>

            <ScrollReveal delay={200}>
              <p className="font-devanagari text-saffron-600/40 text-base mt-4">
                {t("sanskrit")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-[15px] text-warm-800/40 leading-[1.8] mt-4 max-w-[440px]">
                {t("description")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex gap-3 mt-8">
                <Link href={"/seva" as any}>
                  <Button variant="primary">
                    {t("cta_primary")}{" "}
                    <span className="text-[11px] opacity-50">{"\u2192"}</span>
                  </Button>
                </Link>
                <Button variant="gold">{t("cta_secondary")}</Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — stat cards */}
          <div className="w-full lg:w-[380px] flex flex-col gap-2.5 lg:mt-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={200 + i * 120}>
                <Card accent="crimson">
                  <div className="font-stat text-[30px] font-bold leading-none text-crimson-500">
                    {stat.num}
                  </div>
                  <p className="text-[11px] text-warm-800/35 tracking-[1.5px] uppercase mt-2 font-medium">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-warm-800/20 mt-1">
                    {stat.detail}
                  </p>
                </Card>
              </ScrollReveal>
            ))}

            {/* Scroll hint */}
            <ScrollReveal delay={600}>
              <div className="flex items-center gap-2 mt-4 justify-end">
                <span className="text-[10px] text-warm-800/20 tracking-[2px] uppercase">
                  Scroll to explore
                </span>
                <div
                  className="w-10 h-px"
                  style={{
                    background: "linear-gradient(to right, rgba(196,30,58,0.15), rgba(218,165,32,0.15))",
                    transformOrigin: "left",
                    animation: "lineGrow 2s cubic-bezier(0.16, 1, 0.3, 1) infinite",
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
