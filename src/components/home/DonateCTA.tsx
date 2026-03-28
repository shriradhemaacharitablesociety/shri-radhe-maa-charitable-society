import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const AMOUNTS = [
  { amount: "₹500", key: "amount_500" },
  { amount: "₹1,000", key: "amount_1000" },
  { amount: "₹5,000", key: "amount_5000" },
] as const;

export function DonateCTA() {
  const t = useTranslations("donate");

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative rounded-4xl overflow-hidden border border-saffron-300/30"
          style={{
            background:
              "linear-gradient(135deg, rgba(196,30,58,0.06) 0%, rgba(218,165,32,0.08) 50%, rgba(196,30,58,0.04) 100%)",
          }}
        >
          {/* Background decorative orb */}
          <div
            className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(218,165,32,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 flex flex-col items-center text-center gap-10">
            {/* Title */}
            <ScrollReveal>
              <div className="flex flex-col gap-2">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-900 leading-tight">
                  {t("title")}
                </h2>
                <p className="font-devanagari text-xl text-warm-800/40" lang="hi">
                  {t("title_hi")}
                </p>
              </div>
            </ScrollReveal>

            {/* Amount cards */}
            <ScrollReveal delay={150}>
              <div className="flex flex-wrap justify-center gap-3">
                {AMOUNTS.map(({ amount, key }) => (
                  <div
                    key={key}
                    className="flex flex-col items-center gap-1.5 px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-saffron-300/50 hover:border-saffron-500/60 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer min-w-[120px]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  >
                    <span className="font-stat text-2xl font-black text-saffron-600">
                      {amount}
                    </span>
                    <span className="font-sans text-xs text-warm-800/60 text-center leading-tight max-w-[100px]">
                      {t(key)}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA button */}
            <ScrollReveal delay={250}>
              <Link href={"/get-involved/donate" as any}>
                <Button variant="primary" size="lg">
                  {t("cta")} / दान करें
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Button>
              </Link>
            </ScrollReveal>

            {/* Trust signals */}
            <ScrollReveal delay={350}>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-saffron-600 text-sm">✅</span>
                  <span className="font-sans text-xs text-warm-800/60">
                    {t("trust_80g")}
                  </span>
                </div>
                <div className="w-px h-4 bg-saffron-300/40 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-crimson-500 text-sm">🪷</span>
                  <span className="font-sans text-xs text-warm-800/60">
                    {t("trust_100")}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
