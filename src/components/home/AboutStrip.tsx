import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutStrip() {
  return (
    <section className="section-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            {/* Decorative crimson gradient line */}
            <div className="flex items-center justify-center">
              <div className="h-[2px] w-16 rounded-full bg-gradient-to-r from-crimson-500/0 via-crimson-500 to-crimson-500/0" />
            </div>

            {/* English */}
            <p className="font-serif text-2xl md:text-3xl text-warm-900 leading-relaxed">
              Founded under the divine aegis of{" "}
              <Link
                href={"/about" as any}
                className="text-crimson-500 hover:text-crimson-600 transition-colors"
              >
                Shri Radhe Guru Maa
              </Link>
              , the Society channels spiritual devotion into tangible compassion
              — free dialysis, flood relief, pensions for the elderly, aid for the
              differently-abled, and support for families in need across India.
            </p>

            {/* Hindi translation */}
            <p
              className="font-devanagari text-xl md:text-2xl text-warm-600 opacity-60 leading-relaxed"
              lang="hi"
            >
              {"\u0936\u094D\u0930\u0940 \u0930\u093E\u0927\u0947 \u0917\u0941\u0930\u0941 \u092E\u093E\u0901 \u0915\u0947 \u0926\u093F\u0935\u094D\u092F \u0906\u0936\u0940\u0930\u094D\u0935\u093E\u0926 \u0938\u0947 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u092F\u0939 \u0938\u092E\u093E\u091C, \u0906\u0927\u094D\u092F\u093E\u0924\u094D\u092E\u093F\u0915 \u092D\u0915\u094D\u0924\u093F \u0915\u094B \u0935\u094D\u092F\u093E\u0935\u0939\u093E\u0930\u093F\u0915 \u0915\u0930\u0941\u0923\u093E \u092E\u0947\u0902 \u092A\u0930\u093F\u0935\u0930\u094D\u0924\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948 \u2014 \u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915 \u0921\u093E\u092F\u0932\u093F\u0938\u093F\u0938, \u092C\u093E\u0922\u093C \u0930\u093E\u0939\u0924, \u0935\u0943\u0926\u094D\u0927 \u092A\u0947\u0902\u0936\u0928, \u0926\u093F\u0935\u094D\u092F\u093E\u0902\u0917 \u0938\u0939\u093E\u092F\u0924\u093E \u0914\u0930 \u0926\u0947\u0936\u092D\u0930 \u092E\u0947\u0902 \u091C\u0930\u0942\u0930\u0924\u092E\u0902\u0926 \u092A\u0930\u093F\u0935\u093E\u0930\u094B\u0902 \u0915\u0940 \u0938\u0947\u0935\u093E\u0964"}
            </p>

            {/* Learn more link */}
            <div className="flex items-center justify-center gap-2 mt-1">
              <Link
                href={"/about" as any}
                className="font-sans text-sm font-semibold text-crimson-500 hover:text-crimson-600 transition-colors inline-flex items-center gap-1.5 group"
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Bottom decorative crimson gradient line */}
            <div className="flex items-center justify-center">
              <div className="h-[2px] w-16 rounded-full bg-gradient-to-r from-crimson-500/0 via-crimson-500 to-crimson-500/0" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
