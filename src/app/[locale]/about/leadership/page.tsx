import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function LeadershipPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-3">
            <Badge variant="gold">Governance</Badge>
          </div>
          <SectionHeader
            title="Leadership"
            titleHi="नेतृत्व"
            subtitle="The society is governed by a dedicated team of trustees committed to transparent and compassionate seva."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* General Secretary */}
        <ScrollReveal delay={100}>
          <Card variant="default" className="mb-8">
            <CardHeader>
              <Badge variant="crimson" className="mb-4 w-fit">General Secretary</Badge>
              <div className="flex gap-6 items-start">
                {/* Photo placeholder */}
                <div className="shrink-0 w-20 h-20 rounded-2xl border border-saffron-300/50 bg-warm-100/50 flex items-center justify-center text-warm-800/30">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-warm-900">Mr. Rupendra Kashyap</h2>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">श्री रुपेंद्र कश्यप</p>
                  <p className="font-sans text-sm text-saffron-600 font-medium mt-2">General Secretary</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
                Mr. Rupendra Kashyap serves as the General Secretary of Shri Radhe Maa Charitable Society. Under his stewardship, the society has expanded its reach across multiple states — from operating a free dialysis centre in Mumbai to coordinating disaster relief in Punjab, Kerala, and Nepal.
              </p>
              <p className="font-sans text-sm text-warm-800/70 leading-relaxed">
                His commitment to transparent governance and grassroots seva ensures that every rupee donated goes directly to the families and communities in need.
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Governance Structure */}
        <ScrollReveal delay={200}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Governance Structure</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">प्रशासनिक संरचना</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            {
              role: "Patron",
              roleHi: "संरक्षक",
              desc: "Shri Radhe Guru Maa provides spiritual guidance and vision for all society activities.",
            },
            {
              role: "General Secretary",
              roleHi: "महासचिव",
              desc: "Mr. Rupendra Kashyap oversees day-to-day operations, governance, and programme implementation.",
            },
            {
              role: "Board of Trustees",
              roleHi: "न्यासी मंडल",
              desc: "A dedicated group of trustees ensures financial oversight and strategic direction of the society.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.role} delay={250 + i * 100}>
              <Card variant="default" className="h-full">
                <CardHeader>
                  <h3 className="font-serif text-base text-warm-900">{item.role}</h3>
                  <p className="font-devanagari text-xs text-warm-800/40 mt-0.5" lang="hi">{item.roleHi}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Values */}
        <ScrollReveal delay={600}>
          <div className="rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">हमारे मूल्य</p>
            <h3 className="font-serif text-xl text-warm-900 mb-4">Guiding Principles</h3>
            <ul className="space-y-3">
              {[
                "Transparency in all financial matters — every donation is accounted for.",
                "Seva without discrimination — we serve regardless of religion, caste, or region.",
                "Accountability to donors and beneficiaries alike.",
                "Spiritual grounding in all our humanitarian work.",
              ].map((principle) => (
                <li key={principle} className="flex items-start gap-3 font-sans text-sm text-warm-800/70">
                  <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-crimson-500 shrink-0" />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
