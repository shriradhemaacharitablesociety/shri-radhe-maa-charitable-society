import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutStrip() {
  return (
    <section className="relative bg-warm-900 overflow-hidden">
      {/* Subtle radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,30,58,0.1),transparent_60%)]" />

      <div className="relative py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative saffron line */}
          <ScrollReveal>
            <div className="w-12 h-[2px] bg-saffron-500 mx-auto mb-8" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-serif text-xl md:text-3xl lg:text-4xl text-white leading-relaxed">
              Founded under the divine aegis of{" "}
              <Link
                href={"/about" as any}
                className="text-saffron-400 hover:text-saffron-300 transition-colors font-semibold"
              >
                Shri Radhe Guru Maa
              </Link>
              , the Society channels spiritual devotion into tangible
              compassion — free dialysis, flood relief, pensions for the
              elderly, aid for the differently-abled, and support for families
              in need across India.
            </p>
          </ScrollReveal>

          {/* Hindi text */}
          <ScrollReveal delay={200}>
            <p
              className="font-devanagari text-saffron-400/70 text-base md:text-xl leading-relaxed mt-6 md:mt-8"
              lang="hi"
            >
              {"\u0936\u094D\u0930\u0940 \u0930\u093E\u0927\u0947 \u0917\u0941\u0930\u0941 \u092E\u093E\u0901 \u0915\u0947 \u0926\u093F\u0935\u094D\u092F \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0938\u0947 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u092F\u0939 \u0938\u092E\u093E\u091C, \u0906\u0927\u094D\u092F\u093E\u0924\u094D\u092E\u093F\u0915 \u092D\u0915\u094D\u0924\u093F \u0915\u094B \u0935\u094D\u092F\u093E\u0935\u0939\u093E\u0930\u093F\u0915 \u0915\u0930\u0941\u0923\u093E \u092E\u0947\u0902 \u092A\u0930\u093F\u0935\u0930\u094D\u0924\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948"}
            </p>
          </ScrollReveal>

          {/* Learn more link */}
          <ScrollReveal delay={300}>
            <div className="mt-8">
              <Link
                href={"/about" as any}
                className="font-sans text-sm font-semibold text-saffron-400 hover:text-saffron-300 transition-colors inline-flex items-center gap-2 group"
              >
                Learn more about our society
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
