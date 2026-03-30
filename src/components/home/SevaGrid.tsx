"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Heart, Droplets, Accessibility, Church, Wheat, Stethoscope } from "lucide-react";

export function SevaGrid() {
  const t = useTranslations("seva");

  const sevaItems = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: t("dialysis_title"),
      titleHi: "निःशुल्क डायलिसिस सेवा",
      stat: t("dialysis_stat"),
      desc: t("dialysis_desc"),
      featured: false,
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: t("pension_title"),
      titleHi: "वृद्ध पेंशन सेवा",
      stat: t("pension_stat"),
      desc: t("pension_desc"),
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: t("disaster_title"),
      titleHi: "आपदा राहत",
      stat: t("disaster_stat"),
      desc: t("disaster_desc"),
    },
    {
      icon: <Accessibility className="w-5 h-5" />,
      title: t("divyang_title"),
      titleHi: "दिव्यांग सेवा",
      stat: t("divyang_stat"),
      desc: t("divyang_desc"),
    },
    {
      icon: <Church className="w-5 h-5" />,
      title: t("marriage_title"),
      titleHi: "विवाह सहायता",
      stat: t("marriage_stat"),
      desc: t("marriage_desc"),
    },
    {
      icon: <Wheat className="w-5 h-5" />,
      title: "Community Welfare",
      titleHi: "सामुदायिक कल्याण",
      stat: "1000+",
      desc: "General welfare programmes including ration distribution, medical camps, and educational support.",
    },
  ];

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sevaItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={100 + i * 80}>
              <div
                className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white"
              >
                <div className="shrink-0 w-20 md:w-24 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500">
                  {item.icon}
                  <span className="font-stat font-bold text-sm md:text-lg leading-none">
                    {item.stat}
                  </span>
                </div>
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
