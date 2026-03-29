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
    <section className="relative overflow-hidden bg-gradient-to-r from-crimson-600 to-crimson-500">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="relative py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center text-center py-4 md:py-0 px-3 md:px-6 ${
                  i < stats.length - 1 ? "lg:border-r lg:border-white/20" : ""
                } ${i < 2 ? "border-b lg:border-b-0 border-white/20" : ""} ${
                  i % 2 === 0 && i < 2 ? "border-r lg:border-r border-white/20" : ""
                } ${i === 1 ? "lg:border-r lg:border-white/20" : ""}`}
              >
                <AnimatedCounter
                  value={stat.value}
                  className="font-stat text-3xl sm:text-4xl md:text-5xl font-black text-saffron-400"
                />
                <p className="font-sans text-white text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider mt-2 md:mt-3">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
