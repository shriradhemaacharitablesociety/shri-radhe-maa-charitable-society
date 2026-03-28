import { useTranslations } from "next-intl";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SevaGrid() {
  const t = useTranslations("seva");

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title={t("title")}
            titleHi={t("title_hi")}
            subtitle="Seven dimensions of seva — from free dialysis to disaster relief"
            className="mb-12"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Featured: Dialysis */}
          <ScrollReveal delay={100} className="md:col-span-2">
            <Card variant="featured">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl mb-3" aria-hidden="true">🏥</div>
                    <h3 className="font-serif text-2xl text-saffron-200 leading-tight">
                      {t("dialysis_title")}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <div
                      className="font-stat text-4xl font-black"
                      style={{
                        background: "linear-gradient(135deg, #FFE4B8 0%, #DAA520 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {t("dialysis_stat")}
                    </div>
                    <p className="text-saffron-400/70 text-xs font-sans mt-1 uppercase tracking-wider">
                      Free Access
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-warm-200/60 font-sans text-sm leading-relaxed">
                  {t("dialysis_desc")}
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Pensions */}
          <ScrollReveal delay={200}>
            <Card variant="default">
              <CardHeader>
                <div className="text-2xl mb-2" aria-hidden="true">🤝</div>
                <h3 className="font-serif text-xl text-warm-900 leading-tight">
                  {t("pension_title")}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <AnimatedCounter
                    value={t("pension_stat")}
                    className="font-stat text-3xl font-black text-crimson-500"
                  />
                  <p className="text-warm-800/50 font-sans text-xs mt-0.5 uppercase tracking-wider">
                    Families
                  </p>
                </div>
                <p className="text-warm-800/60 font-sans text-sm leading-relaxed">
                  {t("pension_desc")}
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Disaster Relief */}
          <ScrollReveal delay={300}>
            <Card variant="default">
              <CardHeader>
                <div className="text-2xl mb-2" aria-hidden="true">🌊</div>
                <h3 className="font-serif text-xl text-warm-900 leading-tight">
                  {t("disaster_title")}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <span className="font-stat text-3xl font-black text-saffron-600">
                    {t("disaster_stat")}
                  </span>
                  <p className="text-warm-800/50 font-sans text-xs mt-0.5 uppercase tracking-wider">
                    Deployed
                  </p>
                </div>
                <p className="text-warm-800/60 font-sans text-sm leading-relaxed">
                  {t("disaster_desc")}
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Divyang Seva */}
          <ScrollReveal delay={400}>
            <Card variant="default">
              <CardHeader>
                <div className="text-2xl mb-2" aria-hidden="true">♿</div>
                <h3 className="font-serif text-xl text-warm-900 leading-tight">
                  {t("divyang_title")}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <AnimatedCounter
                    value={t("divyang_stat")}
                    className="font-stat text-3xl font-black text-crimson-500"
                  />
                  <p className="text-warm-800/50 font-sans text-xs mt-0.5 uppercase tracking-wider">
                    Beneficiaries
                  </p>
                </div>
                <p className="text-warm-800/60 font-sans text-sm leading-relaxed">
                  {t("divyang_desc")}
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Marriage Assistance */}
          <ScrollReveal delay={500}>
            <Card variant="default">
              <CardHeader>
                <div className="text-2xl mb-2" aria-hidden="true">💒</div>
                <h3 className="font-serif text-xl text-warm-900 leading-tight">
                  {t("marriage_title")}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <span className="font-stat text-3xl font-black text-saffron-600">
                    {t("marriage_stat")}
                  </span>
                  <p className="text-warm-800/50 font-sans text-xs mt-0.5 uppercase tracking-wider">
                    Per Family
                  </p>
                </div>
                <p className="text-warm-800/60 font-sans text-sm leading-relaxed">
                  {t("marriage_desc")}
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
