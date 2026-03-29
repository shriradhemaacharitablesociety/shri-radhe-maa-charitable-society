"use client";

import { useTranslations } from "next-intl";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SevaGrid() {
  const t = useTranslations("seva");

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header with crimson accent line */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <span className="font-devanagari text-sm text-crimson-500 font-medium">
              {t("title_hi")}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">
              {t("title")}
            </h2>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-[15px] text-warm-600 mt-4 leading-relaxed max-w-xl mx-auto">
              Seven dimensions of seva — from free dialysis to disaster relief
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Featured: Dialysis - spans 2 cols + 2 rows on desktop */}
          <ScrollReveal delay={100} className="md:col-span-2 md:row-span-2">
            <div className="group relative h-full rounded-2xl bg-crimson-50 border-2 border-crimson-200 p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              {/* Top gradient band */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl mb-4" aria-hidden="true">
                    {"\uD83C\uDFE5"}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-warm-900 leading-tight">
                    {t("dialysis_title")}
                  </h3>
                  <p className="font-devanagari text-warm-600/60 text-xs md:text-sm mt-1" lang="hi">
                    {"\u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915 \u0921\u093E\u092F\u0932\u093F\u0938\u093F\u0938 \u0938\u0947\u0935\u093E"}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-stat text-3xl md:text-5xl font-black text-crimson-500">
                    {t("dialysis_stat")}
                  </div>
                  <p className="text-saffron-600 text-[10px] md:text-xs font-sans mt-1 uppercase tracking-wider font-semibold">
                    Free Access
                  </p>
                </div>
              </div>
              <p className="text-warm-600 font-sans text-sm md:text-base leading-relaxed mt-4 md:mt-6">
                {t("dialysis_desc")}
              </p>
            </div>
          </ScrollReveal>

          {/* Pensions */}
          <ScrollReveal delay={200}>
            <SevaCard
              icon={"\uD83E\uDD1D"}
              title={t("pension_title")}
              titleHi={"\u0935\u0943\u0926\u094D\u0927 \u092A\u0947\u0902\u0936\u0928 \u0938\u0947\u0935\u093E"}
              stat={t("pension_stat")}
              desc={t("pension_desc")}
              animated
            />
          </ScrollReveal>

          {/* Disaster Relief */}
          <ScrollReveal delay={300}>
            <SevaCard
              icon={"\uD83C\uDF0A"}
              title={t("disaster_title")}
              titleHi={"\u0906\u092A\u0926\u093E \u0930\u093E\u0939\u0924"}
              stat={t("disaster_stat")}
              desc={t("disaster_desc")}
            />
          </ScrollReveal>

          {/* Divyang Seva */}
          <ScrollReveal delay={400}>
            <SevaCard
              icon={"\u267F"}
              title={t("divyang_title")}
              titleHi={"\u0926\u093F\u0935\u094D\u092F\u093E\u0902\u0917 \u0938\u0947\u0935\u093E"}
              stat={t("divyang_stat")}
              desc={t("divyang_desc")}
              animated
            />
          </ScrollReveal>

          {/* Marriage Assistance */}
          <ScrollReveal delay={500}>
            <SevaCard
              icon={"\uD83D\uDC92"}
              title={t("marriage_title")}
              titleHi={"\u0935\u093F\u0935\u093E\u0939 \u0938\u0939\u093E\u092F\u0924\u093E"}
              stat={t("marriage_stat")}
              desc={t("marriage_desc")}
            />
          </ScrollReveal>

          {/* Community Welfare */}
          <ScrollReveal delay={600}>
            <SevaCard
              icon={"\uD83C\uDF3E"}
              title="Community Welfare"
              titleHi={"\u0938\u093E\u092E\u0941\u0926\u093E\u092F\u093F\u0915 \u0915\u0932\u094D\u092F\u093E\u0923"}
              stat="1000+"
              desc="General welfare programmes including ration distribution, medical camps, and educational support."
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function SevaCard({
  icon,
  title,
  titleHi,
  stat,
  desc,
  animated,
}: {
  icon: string;
  title: string;
  titleHi: string;
  stat: string;
  desc: string;
  animated?: boolean;
}) {
  return (
    <div className="group relative rounded-2xl bg-white shadow-md border border-black/[0.04] p-5 md:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      {/* Top color band */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />

      <div className="flex items-start gap-3">
        <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-crimson-500 flex items-center justify-center text-white text-base md:text-lg shrink-0" aria-hidden="true">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900 leading-tight">
            {title}
          </h3>
          <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">
            {titleHi}
          </p>
        </div>
        <div className="shrink-0">
          {animated ? (
            <AnimatedCounter
              value={stat}
              className="font-stat text-lg md:text-2xl font-black text-crimson-500"
            />
          ) : (
            <span className="font-stat text-lg md:text-2xl font-black text-crimson-500">
              {stat}
            </span>
          )}
        </div>
      </div>
      <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-3">
        {desc}
      </p>
    </div>
  );
}
