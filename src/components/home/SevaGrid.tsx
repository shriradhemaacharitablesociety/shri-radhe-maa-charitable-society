"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SevaGrid() {
  const t = useTranslations("seva");

  const sevaItems = [
    {
      icon: "🏥",
      title: t("dialysis_title"),
      titleHi: "निःशुल्क डायलिसिस सेवा",
      stat: t("dialysis_stat"),
      desc: t("dialysis_desc"),
      featured: true,
    },
    {
      icon: "🤝",
      title: t("pension_title"),
      titleHi: "वृद्ध पेंशन सेवा",
      stat: t("pension_stat"),
      desc: t("pension_desc"),
    },
    {
      icon: "🌊",
      title: t("disaster_title"),
      titleHi: "आपदा राहत",
      stat: t("disaster_stat"),
      desc: t("disaster_desc"),
    },
    {
      icon: "♿",
      title: t("divyang_title"),
      titleHi: "दिव्यांग सेवा",
      stat: t("divyang_stat"),
      desc: t("divyang_desc"),
    },
    {
      icon: "💒",
      title: t("marriage_title"),
      titleHi: "विवाह सहायता",
      stat: t("marriage_stat"),
      desc: t("marriage_desc"),
    },
    {
      icon: "🌾",
      title: "Community Welfare",
      titleHi: "सामुदायिक कल्याण",
      stat: "1000+",
      desc: "General welfare programmes including ration distribution, medical camps, and educational support.",
    },
  ];

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-14">
            <span className="font-devanagari text-sm text-crimson-500 font-medium">
              {t("title_hi")}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">
              {t("title")}
            </h2>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 leading-relaxed max-w-xl mx-auto">
              Seven dimensions of seva — from free dialysis to disaster relief
            </p>
          </div>
        </ScrollReveal>

        {/* Cards — sidebar design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sevaItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={100 + i * 80}>
              <div
                className={`group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white ${
                  item.featured ? "md:col-span-2 border-2 border-crimson-200" : ""
                }`}
              >
                {/* Crimson sidebar */}
                <div className={`shrink-0 w-20 md:w-24 flex flex-col items-center justify-center text-white ${
                  item.featured ? "bg-gradient-to-b from-crimson-500 to-crimson-600" : "bg-crimson-500"
                }`}>
                  <span className="text-2xl md:text-3xl mb-1">{item.icon}</span>
                  <span className="font-stat font-bold text-base md:text-xl leading-none">
                    {item.stat}
                  </span>
                </div>

                {/* Body */}
                <div className="flex-1 p-4 md:p-5">
                  <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">
                    {item.title}
                  </h3>
                  <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">
                    {item.titleHi}
                  </p>
                  <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
