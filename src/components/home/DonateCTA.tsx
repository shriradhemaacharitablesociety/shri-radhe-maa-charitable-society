"use client";

import { useState } from "react";
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
  const [selected, setSelected] = useState(1);

  return (
    <section className="relative overflow-hidden">
      {/* Diagonal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-crimson-600 via-crimson-500 to-saffron-600" />
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />

      <div className="relative py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <ScrollReveal>
            <h2
              className="font-serif text-white leading-tight"
              style={{ fontSize: "clamp(24px, 5vw, 48px)" }}
            >
              {t("title")}
            </h2>
            <p
              className="font-devanagari text-white/70 mt-2 md:mt-3"
              style={{ fontSize: "clamp(14px, 2.5vw, 20px)" }}
              lang="hi"
            >
              {t("title_hi")}
            </p>
          </ScrollReveal>

          {/* Amount pills */}
          <ScrollReveal delay={150}>
            <div className="flex w-full justify-center gap-3 md:gap-4 mt-8 md:mt-10">
              {AMOUNTS.map(({ amount, key }, i) => (
                <button
                  key={key}
                  onClick={() => setSelected(i)}
                  className={`flex flex-col items-center gap-1 px-5 sm:px-8 py-3.5 md:py-5 rounded-2xl transition-all duration-300 cursor-pointer flex-1 max-w-[160px] select-none ${
                    selected === i
                      ? "bg-white text-crimson-600 shadow-xl scale-105 ring-2 ring-white/50"
                      : "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  <span className={`font-stat text-xl md:text-2xl font-black ${
                    selected === i ? "text-crimson-600" : "text-white"
                  }`}>
                    {amount}
                  </span>
                  <span className={`font-sans text-[9px] md:text-xs text-center leading-tight ${
                    selected === i ? "text-warm-600" : "text-white/70"
                  }`}>
                    {t(key)}
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal delay={250}>
            <div className="mt-8 md:mt-10">
              <Link
                href={"/get-involved/donate" as any}
                className="block w-full sm:w-auto sm:inline-block"
              >
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl font-sans font-black px-10 py-4.5 text-base md:text-lg bg-white text-crimson-600 shadow-xl hover:bg-white/95 hover:shadow-2xl active:scale-[0.98] transition-all duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-crimson-500"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  {t("cta")} {"\u2192"}
                </button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Trust badges */}
          <ScrollReveal delay={350}>
            <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8 mt-8 md:mt-10">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="font-sans text-xs md:text-sm text-white/80 font-medium">
                  {t("trust_80g")}
                </span>
              </div>
              <div className="w-px h-4 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <span className="font-sans text-xs md:text-sm text-white/80 font-medium">
                  {t("trust_100")}
                </span>
              </div>
              <div className="w-px h-4 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <span className="font-sans text-xs md:text-sm text-white/80 font-medium">
                  Secure Payments
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
