import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function GaushalaPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-3">
            <Badge variant="gold">Gaushala Seva</Badge>
          </div>
          <SectionHeader
            title="Gaushala Seva"
            titleHi="गौशाला सेवा"
            subtitle="Supporting cow shelters as a sacred act of cultural and spiritual service."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Context */}
        <ScrollReveal delay={100}>
          <div className="mb-10 rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8">
            <div className="text-4xl mb-4" aria-hidden="true">🐄</div>
            <p className="font-serif text-xl text-warm-900 leading-relaxed mb-3">
              The Gau Mata — Revered in Indian Tradition
            </p>
            <p className="font-devanagari text-base text-warm-800/60 leading-relaxed mb-4" lang="hi">
              गाय को भारतीय परंपरा में माता का दर्जा प्राप्त है — &ldquo;गौ माता।&rdquo;
            </p>
            <p className="font-sans text-sm text-warm-800/70 leading-relaxed">
              In Indian spiritual and cultural tradition, the cow holds a place of deep reverence — she is <em>Gau Mata</em>, the divine mother. Supporting gaushalas (cow shelters) is considered a deeply meritorious act of service, caring for animals that are central to India&apos;s agricultural and cultural heritage.
            </p>
          </div>
        </ScrollReveal>

        {/* What we do */}
        <ScrollReveal delay={200}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Our Support for Gaushalas</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">गौशालाओं के लिए हमारा सहयोग</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            {
              icon: "💰",
              title: "Financial Donations",
              desc: "The society makes regular monetary contributions to registered gaushalas to support their day-to-day operations, feeding, and medical care for cows.",
            },
            {
              icon: "🌾",
              title: "Fodder & Essentials",
              desc: "Contributions of fodder, grain, and other essential supplies help gaushalas maintain their herds through all seasons.",
            },
            {
              icon: "🏥",
              title: "Medical Support",
              desc: "Support for veterinary care and medicine for ill or injured cows in shelter facilities.",
            },
            {
              icon: "🤲",
              title: "Community Awareness",
              desc: "Encouraging devotees and community members to participate in gaushala seva as part of their spiritual practice.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={250 + i * 80}>
              <Card variant="default" className="h-full">
                <CardHeader>
                  <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Donate prompt */}
        <ScrollReveal delay={650}>
          <div className="rounded-3xl border border-saffron-300/50 bg-warm-50/60 p-8">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">गौशाला सेवा में योगदान दें</p>
            <h3 className="font-serif text-xl text-warm-900 mb-3">Support Gaushala Seva</h3>
            <p className="font-sans text-sm text-warm-800/60 leading-relaxed mb-5">
              Your donation towards gaushala seva contributes to the care of cows, supports Indian cultural traditions, and earns deep spiritual merit. Any amount helps.
            </p>
            <a
              href="/donate"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-saffron-500 to-saffron-400 text-white text-sm font-medium rounded-pill hover:from-saffron-600 hover:to-saffron-500 transition-all duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              Donate for Gaushala
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
