import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutStrip() {
  return (
    <section className="bg-cream">
      <div className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="w-10 h-[2px] bg-gradient-to-r from-crimson-500 to-saffron-500 mx-auto mb-6 md:mb-8 rounded-full" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-serif text-lg md:text-2xl lg:text-3xl text-warm-900 leading-relaxed">
              Founded under the divine aegis of{" "}
              <Link
                href={"/about" as any}
                className="text-crimson-500 hover:text-crimson-600 transition-colors font-semibold"
              >
                Shri Radhe Guru Maa
              </Link>
              , the Society channels spiritual devotion into tangible
              compassion — free dialysis, flood relief, pensions for the
              elderly, aid for the differently-abled, and support for families
              in need across India.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p
              className="font-devanagari text-crimson-400 text-sm md:text-lg leading-relaxed mt-4 md:mt-6"
              lang="hi"
            >
              श्री राधे गुरु माँ के दिव्य आशीर्वाद से स्थापित यह समाज, आध्यात्मिक भक्ति को व्यावहारिक करुणा में परिवर्तित करता है
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-6">
              <Link
                href={"/about" as any}
                className="font-sans text-sm font-semibold text-crimson-500 hover:text-crimson-600 transition-colors inline-flex items-center gap-2 group"
              >
                Learn more about our society
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
