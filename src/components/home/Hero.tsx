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
    <section className="relative pb-12 overflow-hidden" style={{ paddingTop: "24px" }}>
      <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", paddingLeft: "24px", paddingRight: "24px" }}>
        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Left column */}
          <div>
            <ScrollReveal delay={0}>
              <Badge variant="gold">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-500" />
                {t("badge")}
              </Badge>
            </ScrollReveal>

            {/* Watermark + Title */}
            <div className="relative mt-6">
              <div
                className="font-devanagari font-black select-none pointer-events-none"
                style={{
                  fontSize: "120px",
                  lineHeight: 0.85,
                  letterSpacing: "-0.04em",
                  color: "rgba(26, 15, 8, 0.05)",
                }}
                aria-hidden="true"
              >
                सेवा
              </div>
              <h1
                className="font-serif text-warm-900 relative"
                style={{
                  fontSize: "52px",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  marginTop: "-44px",
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
              <p className="font-devanagari text-saffron-600/40 text-base" style={{ marginTop: "12px" }}>
                {t("sanskrit")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p className="text-warm-800/40" style={{ fontSize: "15px", lineHeight: 1.75, marginTop: "16px", maxWidth: "420px" }}>
                {t("description")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="flex flex-wrap gap-3" style={{ marginTop: "32px" }}>
                <Link href={"/seva" as any}>
                  <Button variant="primary">
                    {t("cta_primary")}{" "}
                    <span style={{ fontSize: "11px", opacity: 0.5 }}>→</span>
                  </Button>
                </Link>
                <Button variant="gold">{t("cta_secondary")}</Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — stat cards */}
          <div className="flex flex-col gap-3 pt-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={200 + i * 120}>
                <Card accent="crimson">
                  <div className="font-stat font-bold leading-none text-crimson-500" style={{ fontSize: "28px" }}>
                    {stat.num}
                  </div>
                  <p className="text-warm-800/35 font-medium" style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "8px" }}>
                    {stat.label}
                  </p>
                  <p className="text-warm-800/20" style={{ fontSize: "11px", marginTop: "4px" }}>
                    {stat.detail}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
