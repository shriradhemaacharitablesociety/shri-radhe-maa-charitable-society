"use client";

import { useTranslations } from "next-intl";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SevaGrid() {
  const t = useTranslations("seva");

  return (
    <section className="section-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title={t("title")}
            titleHi={t("title_hi")}
            subtitle="Seven dimensions of seva — from free dialysis to disaster relief"
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured: Dialysis - spans 2 cols + 2 rows */}
          <ScrollReveal delay={100} className="md:col-span-2 md:row-span-2">
            <div
              className="group relative h-full rounded-2xl bg-gradient-to-br from-crimson-50 to-white border border-black/[0.06] p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              {/* Left accent bar on hover */}
              <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-crimson-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className="w-10 h-10 rounded-lg bg-crimson-500 flex items-center justify-center text-white text-lg mb-4"
                    aria-hidden="true"
                  >
                    {"\uD83C\uDFE5"}
                  </div>
                  <h3 className="font-serif text-2xl text-warm-900 leading-tight">
                    {t("dialysis_title")}
                  </h3>
                  <p className="font-devanagari text-warm-600/60 text-sm mt-1" lang="hi">
                    {"\u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915 \u0921\u093E\u092F\u0932\u093F\u0938\u093F\u0938 \u0938\u0947\u0935\u093E"}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-stat text-4xl font-black text-crimson-500">
                    {t("dialysis_stat")}
                  </div>
                  <p className="text-saffron-500 text-xs font-sans mt-1 uppercase tracking-wider">
                    Free Access
                  </p>
                </div>
              </div>
              <p className="text-warm-600 font-sans text-sm leading-relaxed mt-4">
                {t("dialysis_desc")}
              </p>
            </div>
          </ScrollReveal>

          {/* Pensions */}
          <ScrollReveal delay={200}>
            <div
              className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-crimson-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="w-10 h-10 rounded-lg bg-saffron-100 flex items-center justify-center text-lg mb-3" aria-hidden="true">
                {"\uD83E\uDD1D"}
              </div>
              <h3 className="font-sans text-base font-semibold text-warm-900 leading-tight">
                {t("pension_title")}
              </h3>
              <p className="font-devanagari text-warm-600/60 text-sm mt-0.5" lang="hi">
                {"\u0935\u0943\u0926\u094D\u0927 \u092A\u0947\u0902\u0936\u0928 \u0938\u0947\u0935\u093E"}
              </p>
              <div className="mt-3 mb-2">
                <AnimatedCounter
                  value={t("pension_stat")}
                  className="font-stat text-2xl font-black text-crimson-500"
                />
              </div>
              <p className="text-warm-600 font-sans text-sm leading-relaxed">
                {t("pension_desc")}
              </p>
            </div>
          </ScrollReveal>

          {/* Disaster Relief */}
          <ScrollReveal delay={300}>
            <div
              className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-saffron-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-lg mb-3" aria-hidden="true">
                {"\uD83C\uDF0A"}
              </div>
              <h3 className="font-sans text-base font-semibold text-warm-900 leading-tight">
                {t("disaster_title")}
              </h3>
              <p className="font-devanagari text-warm-600/60 text-sm mt-0.5" lang="hi">
                {"\u0906\u092A\u0926\u093E \u0930\u093E\u0939\u0924"}
              </p>
              <div className="mt-3 mb-2">
                <span className="font-stat text-2xl font-black text-crimson-500">
                  {t("disaster_stat")}
                </span>
              </div>
              <p className="text-warm-600 font-sans text-sm leading-relaxed">
                {t("disaster_desc")}
              </p>
            </div>
          </ScrollReveal>

          {/* Divyang Seva */}
          <ScrollReveal delay={400}>
            <div
              className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-crimson-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="w-10 h-10 rounded-lg bg-crimson-50 flex items-center justify-center text-lg mb-3" aria-hidden="true">
                {"\u267F"}
              </div>
              <h3 className="font-sans text-base font-semibold text-warm-900 leading-tight">
                {t("divyang_title")}
              </h3>
              <p className="font-devanagari text-warm-600/60 text-sm mt-0.5" lang="hi">
                {"\u0926\u093F\u0935\u094D\u092F\u093E\u0902\u0917 \u0938\u0947\u0935\u093E"}
              </p>
              <div className="mt-3 mb-2">
                <AnimatedCounter
                  value={t("divyang_stat")}
                  className="font-stat text-2xl font-black text-crimson-500"
                />
              </div>
              <p className="text-warm-600 font-sans text-sm leading-relaxed">
                {t("divyang_desc")}
              </p>
            </div>
          </ScrollReveal>

          {/* Marriage Assistance */}
          <ScrollReveal delay={500}>
            <div
              className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-saffron-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="w-10 h-10 rounded-lg bg-saffron-100 flex items-center justify-center text-lg mb-3" aria-hidden="true">
                {"\uD83D\uDC92"}
              </div>
              <h3 className="font-sans text-base font-semibold text-warm-900 leading-tight">
                {t("marriage_title")}
              </h3>
              <p className="font-devanagari text-warm-600/60 text-sm mt-0.5" lang="hi">
                {"\u0935\u093F\u0935\u093E\u0939 \u0938\u0939\u093E\u092F\u0924\u093E"}
              </p>
              <div className="mt-3 mb-2">
                <span className="font-stat text-2xl font-black text-crimson-500">
                  {t("marriage_stat")}
                </span>
              </div>
              <p className="text-warm-600 font-sans text-sm leading-relaxed">
                {t("marriage_desc")}
              </p>
            </div>
          </ScrollReveal>

          {/* Extra card slot for 3-col balance */}
          <ScrollReveal delay={600}>
            <div
              className="group relative rounded-2xl bg-white border border-black/[0.06] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-crimson-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-lg mb-3" aria-hidden="true">
                {"\uD83C\uDF3E"}
              </div>
              <h3 className="font-sans text-base font-semibold text-warm-900 leading-tight">
                Community Welfare
              </h3>
              <p className="font-devanagari text-warm-600/60 text-sm mt-0.5" lang="hi">
                {"\u0938\u093E\u092E\u0941\u0926\u093E\u092F\u093F\u0915 \u0915\u0932\u094D\u092F\u093E\u0923"}
              </p>
              <div className="mt-3 mb-2">
                <span className="font-stat text-2xl font-black text-crimson-500">
                  1000+
                </span>
              </div>
              <p className="text-warm-600 font-sans text-sm leading-relaxed">
                General welfare programmes including ration distribution, medical camps, and educational support.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
