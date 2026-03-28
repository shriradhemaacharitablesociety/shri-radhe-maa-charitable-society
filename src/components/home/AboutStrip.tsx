import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutStrip() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-saffron-400/40" />
              <span className="font-devanagari text-crimson-500/60 text-xl">🪷</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-saffron-400/40" />
            </div>

            {/* English */}
            <p className="font-serif text-2xl md:text-3xl text-warm-900 leading-relaxed">
              Founded under the divine aegis of{" "}
              <span className="text-crimson-500">Shri Radhe Guru Maa</span>, the Society
              channels spiritual devotion into tangible compassion — free dialysis, flood
              relief, pensions for the elderly, aid for the differently-abled, and support for
              families in need across India.
            </p>

            {/* Hindi */}
            <p
              className="font-devanagari text-xl md:text-2xl text-warm-900/40 leading-relaxed"
              lang="hi"
            >
              श्री राधे गुरु माँ के दिव्य आशीर्वाद से स्थापित यह समाज, आध्यात्मिक भक्ति को
              व्यावहारिक करुणा में परिवर्तित करता है — निःशुल्क डायलिसिस, बाढ़ राहत, वृद्ध
              पेंशन, दिव्यांग सहायता और देशभर में जरूरतमंद परिवारों की सेवा।
            </p>

            {/* Learn more link */}
            <div className="flex items-center justify-center gap-2 mt-2">
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

            {/* Bottom decorative line */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-saffron-400/40" />
              <div className="w-2 h-2 rounded-full bg-saffron-400/50" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-saffron-400/40" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
