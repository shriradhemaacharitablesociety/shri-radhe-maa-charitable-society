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
    <section className="section-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.06] rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center py-10 px-6 bg-white"
            >
              <AnimatedCounter
                value={stat.value}
                className="font-stat text-4xl md:text-5xl font-black text-crimson-500"
              />
              <p className="font-sans text-warm-600 text-xs md:text-sm font-medium uppercase tracking-wider mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
