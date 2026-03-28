"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Hero() {
  const t = useTranslations("hero");
  const s = useTranslations("stats");

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Ambient orbs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,30,58,0.12) 0%, rgba(218,165,32,0.06) 60%, transparent 80%)",
          animation: "orbFloat 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[10%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(218,165,32,0.1) 0%, rgba(196,30,58,0.05) 60%, transparent 80%)",
          animation: "orbFloat 14s ease-in-out infinite reverse",
        }}
      />

      {/* Vertical thread line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px pointer-events-none hidden lg:block">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(196,30,58,0.15) 20%, rgba(218,165,32,0.2) 50%, rgba(196,30,58,0.1) 80%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          {/* Left side */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <ScrollReveal delay={0}>
              <Badge variant="gold">{t("badge")}</Badge>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              {/* Devanagari watermark */}
              <div
                className="font-devanagari font-black leading-none select-none pointer-events-none"
                style={{
                  fontSize: "clamp(72px, 10vw, 120px)",
                  background: "linear-gradient(135deg, #C41E3A 0%, #DAA520 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: 0.12,
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                सेवा
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <h1
                className="font-serif leading-tight text-warm-900"
                style={{ fontSize: "clamp(36px, 5vw, 54px)" }}
              >
                {t("title_1")} {t("title_2")}{" "}
                <em className="text-crimson-500 italic not-italic font-serif">
                  {t("title_3")}
                </em>{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #DAA520 0%, #B8860B 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t("title_4")}
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <p className="font-devanagari text-saffron-600/60 text-base leading-relaxed">
                {t("sanskrit")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <p className="font-sans text-warm-800/70 text-base leading-relaxed max-w-lg">
                {t("description")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href={"/seva" as any}>
                  <Button variant="primary" size="lg">
                    {t("cta_primary")}
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
                  </Button>
                </Link>
                <Button variant="gold" size="lg">
                  {t("cta_secondary")}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side: Stat cards */}
          <div className="flex-shrink-0 w-full lg:w-[360px] flex flex-col gap-3">
            <ScrollReveal delay={200}>
              <Card variant="featured">
                <CardHeader>
                  <div
                    className="text-3xl font-stat font-black"
                    style={{
                      background: "linear-gradient(135deg, #FFE4B8 0%, #DAA520 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s("relief_amount")}
                  </div>
                  <p className="text-saffron-300 font-sans text-sm font-medium mt-1">
                    {s("relief_label")}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-200/50 font-sans text-xs leading-relaxed">
                    {s("relief_detail")}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card variant="default">
                <CardHeader>
                  <div className="text-2xl font-stat font-black text-crimson-500">
                    {s("dialysis_amount")}
                  </div>
                  <p className="text-warm-800/70 font-sans text-sm font-medium mt-1">
                    {s("dialysis_label")}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-800/50 font-sans text-xs leading-relaxed">
                    {s("dialysis_detail")}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card variant="default">
                <CardHeader>
                  <div className="text-2xl font-stat font-black text-saffron-600">
                    {s("families_amount")}
                  </div>
                  <p className="text-warm-800/70 font-sans text-sm font-medium mt-1">
                    {s("families_label")}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-800/50 font-sans text-xs leading-relaxed">
                    {s("families_detail")}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
