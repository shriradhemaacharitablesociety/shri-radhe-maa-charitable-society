"use client";

import { useTranslations } from "next-intl";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SevaGrid() {
  const t = useTranslations("seva");

  return (
    <section className="py-10 md:py-20 px-4 sm:px-6">
      {/* Section header with cream background band */}
      <div className="bg-gradient-to-b from-cream to-white -mx-4 sm:-mx-6 px-4 sm:px-6 pt-6 pb-8 md:pt-0 md:pb-0 md:bg-none">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              title={t("title")}
              titleHi={t("title_hi")}
              subtitle="Seven dimensions of seva — from free dialysis to disaster relief"
              className="mb-6 md:mb-12"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* Featured: Dialysis - spans 2 cols + 2 rows on desktop */}
          <ScrollReveal delay={100} className="md:col-span-2 md:row-span-2">
            <div
              className="group relative h-full rounded-xl md:rounded-2xl bg-gradient-to-br from-crimson-50 via-crimson-50/50 to-white border border-crimson-100 p-4 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Always-visible left accent bar */}
              <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-crimson-500" />

              <div className="flex items-start justify-between gap-3">
                <div>
                  <div
                    className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-crimson-500 flex items-center justify-center text-white text-base md:text-lg mb-3 md:mb-4"
                    aria-hidden="true"
                  >
                    {"\uD83C\uDFE5"}
                  </div>
                  <h3 className="font-serif text-lg md:text-2xl text-warm-900 leading-tight">
                    {t("dialysis_title")}
                  </h3>
                  <p
                    className="font-devanagari text-warm-600/60 text-xs md:text-sm mt-0.5"
                    lang="hi"
                  >
                    {"\u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915 \u0921\u093E\u092F\u0932\u093F\u0938\u093F\u0938 \u0938\u0947\u0935\u093E"}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-stat text-xl md:text-4xl font-black text-crimson-500">
                    {t("dialysis_stat")}
                  </div>
                  <p className="text-saffron-500 text-[10px] md:text-xs font-sans mt-0.5 uppercase tracking-wider">
                    Free Access
                  </p>
                </div>
              </div>
              <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-3 md:mt-4">
                {t("dialysis_desc")}
              </p>
            </div>
          </ScrollReveal>

          {/* Pensions */}
          <ScrollReveal delay={200}>
            <SevaCard
              icon={"\uD83E\uDD1D"}
              iconBg="bg-saffron-100"
              borderColor="border-l-saffron-500"
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
              iconBg="bg-crimson-50"
              borderColor="border-l-crimson-500"
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
              iconBg="bg-crimson-50"
              borderColor="border-l-crimson-500"
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
              iconBg="bg-saffron-100"
              borderColor="border-l-saffron-500"
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
              iconBg="bg-saffron-50"
              borderColor="border-l-saffron-500"
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
  iconBg,
  borderColor,
  title,
  titleHi,
  stat,
  desc,
  animated,
}: {
  icon: string;
  iconBg: string;
  borderColor: string;
  title: string;
  titleHi: string;
  stat: string;
  desc: string;
  animated?: boolean;
}) {
  return (
    <div
      className={`group relative rounded-xl md:rounded-2xl bg-white border border-black/[0.06] border-l-[3px] ${borderColor} p-4 md:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-9 h-9 md:w-10 md:h-10 rounded-lg ${iconBg} flex items-center justify-center text-base md:text-lg shrink-0`}
          aria-hidden="true"
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900 leading-tight">
            {title}
          </h3>
          <p
            className="font-devanagari text-warm-600/60 text-xs mt-0.5"
            lang="hi"
          >
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
      <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-2 md:mt-3">
        {desc}
      </p>
    </div>
  );
}
