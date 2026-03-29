"use client";

import { useTranslations } from "next-intl";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function ImpactCounter() {
  const t = useTranslations("impact");

  const stats = [
    { value: "500+", label: t("families") },
    { value: "\u20B925L+", label: t("funds") },
    { value: "7+", label: t("years") },
    { value: "15+", label: t("programs") },
  ];

  return (
    <section className="py-8 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-black/[0.06]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center py-5 md:py-10 px-3 md:px-6 ${
                i % 2 === 0 ? "bg-crimson-50/60" : "bg-white"
              } md:bg-white`}
            >
              <AnimatedCounter
                value={stat.value}
                className="font-stat text-2xl sm:text-3xl md:text-5xl font-black text-crimson-500"
              />
              <p className="font-sans text-warm-600 text-[9px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider mt-1.5 md:mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
