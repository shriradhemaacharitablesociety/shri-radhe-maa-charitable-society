import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const faqs = [
  {
    question: "How can I avail free dialysis at the centre?",
    answer:
      "Visit Anand Hospital, 2nd Floor, Dahisar Village, Anand Nagar, Dahisar East, Mumbai – 400068. You can also call 86570 67228 or 98921 54615 to inquire about availability and eligibility. The service is completely free of charge for all patients.",
  },
  {
    question: "Where is the dialysis centre located?",
    answer:
      "The free dialysis centre is located at the 2nd Floor of Anand Hospital, Dahisar Village, Anand Nagar, Dahisar East, Mumbai – 400068. It operates in partnership with the Taramati Charitable Foundation.",
  },
  {
    question: "How do I access the free ambulance service?",
    answer:
      "The free ambulance service is available to Satyam Charitable Hospital. Please contact Dr. Ramrao Athankar at 8959388249 for more information and to coordinate transport.",
  },
  {
    question: "When are the blood donation camps held?",
    answer:
      "Blood donation camps are organised periodically across Delhi and Mumbai. Follow our social media or contact the society at 95608 00343 to stay updated on upcoming camps.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "स्वास्थ्य सेवा | निःशुल्क डायलिसिस | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Healthcare Programmes | Free Dialysis Centre | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "मुंबई के अनंद अस्पताल में निःशुल्क किडनी डायलिसिस केन्द्र, मुफ्त एम्बुलेंस सेवा, रक्तदान शिविर और नेत्र-दंत जांच।"
      : "Free kidney dialysis centre at Anand Hospital Mumbai, free ambulance service, blood donation camps, eye and dental check-up drives for the underprivileged.",
    keywords: isHindi
      ? ["निःशुल्क डायलिसिस", "मुफ्त किडनी उपचार", "रक्तदान", "एम्बुलेंस सेवा", "मुंबई"]
      : ["free dialysis Mumbai", "free kidney dialysis India", "blood donation camp Delhi", "free ambulance NGO"],
    alternates: { languages: { "en-IN": "/en/seva/healthcare", "hi-IN": "/hi/seva/healthcare" } },
    openGraph: {
      title: "Free Dialysis Centre & Healthcare — Shri Radhe Maa Charitable Society",
      description: "Free kidney dialysis at Anand Hospital, Dahisar, Mumbai — no cost to patients.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function HealthcarePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Seva", url: "https://shriradhemasociety.org/seva" },
    { name: "Healthcare", url: "https://shriradhemasociety.org/seva/healthcare" },
  ]);
  const faqSchema = faqJsonLd(faqs);

  return (
    <div className="pt-28 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-3">
            <Badge variant="crimson">Healthcare Seva</Badge>
          </div>
          <SectionHeader
            title="Healthcare Programmes"
            titleHi="स्वास्थ्य सेवा कार्यक्रम"
            subtitle="Free medical services for those who cannot afford care — because health is a human right."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Featured: Dialysis */}
        <ScrollReveal delay={100}>
          <div className="relative rounded-xl bg-white/50 border border-warm-800/[0.05] overflow-hidden mb-6 p-6">
            <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-saffron-500/25 to-transparent" />
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <Badge variant="gold" className="mb-4">Flagship Programme</Badge>
                <div className="text-3xl mb-3" aria-hidden="true">🏥</div>
                <h2 className="font-serif text-2xl text-warm-900 mb-2">Free Kidney Dialysis Centre</h2>
                <p className="font-devanagari text-warm-800/50 text-base mb-4" lang="hi">निःशुल्क किडनी डायलिसिस केन्द्र</p>
                <p className="font-sans text-warm-800/70 text-sm leading-relaxed mb-4">
                  In partnership with the <strong className="text-warm-900">Taramati Charitable Foundation</strong>, the society operates a free kidney dialysis centre at Anand Hospital, Dahisar, Mumbai. All dialysis sessions are provided at absolutely no cost to patients.
                </p>
                <address className="font-sans text-sm text-warm-800/60 not-italic leading-relaxed">
                  2nd Floor, Anand Hospital, Dahisar Village,<br />
                  Anand Nagar, Dahisar East, Mumbai – 400068
                </address>
              </div>
              <div className="shrink-0 text-right">
                <div className="font-stat text-5xl font-black text-crimson-500">
                  Free
                </div>
                <p className="text-saffron-600 text-xs font-sans mt-1 uppercase tracking-wider">
                  For All
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-saffron-300/30 flex flex-wrap gap-4">
              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-0.5">Contact</p>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+918657067228" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">86570 67228</a>
                  <span className="text-warm-800/30">/</span>
                  <a href="tel:+919892154615" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">98921 54615</a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Ambulance */}
        <ScrollReveal delay={200}>
          <Card className="mb-6">
            <CardHeader>
              <div className="text-2xl mb-2" aria-hidden="true">🚑</div>
              <h2 className="font-serif text-xl text-warm-900">Free Ambulance Service</h2>
              <p className="font-devanagari text-sm text-warm-800/50 mt-1" lang="hi">निःशुल्क एम्बुलेंस सेवा</p>
            </CardHeader>
            <CardContent>
              <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-3">
                The society provides a free ambulance service to <strong>Satyam Charitable Hospital</strong>, ensuring that patients in need can reach medical care without bearing the burden of transport costs.
              </p>
              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Doctor Contact</p>
                <p className="font-sans text-sm text-warm-800/80">Dr. Ramrao Athankar</p>
                <a href="tel:+918959388249" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">8959388249</a>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Other healthcare */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            {
              icon: "🩸",
              title: "Blood Donation Camps",
              titleHi: "रक्तदान शिविर",
              desc: "Regular blood donation drives organised across Delhi and Mumbai to maintain critical blood bank supplies and save lives.",
            },
            {
              icon: "👁️",
              title: "Eye & Dental Check-ups",
              titleHi: "नेत्र और दंत जांच",
              desc: "Free eye examinations and dental check-up camps for underprivileged communities, often in areas with limited healthcare access.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={300 + i * 100}>
              <Card className="h-full">
                <CardHeader>
                  <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">{item.titleHi}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQ */}
        <ScrollReveal delay={500}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Frequently Asked Questions</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">सामान्य प्रश्न</p>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-saffron-300/50 bg-white/40 backdrop-blur-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-sans text-sm font-medium text-warm-900 hover:bg-saffron-50/40 transition-colors list-none">
                  {faq.question}
                  <svg className="w-4 h-4 text-warm-800/40 shrink-0 ml-3 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 font-sans text-sm text-warm-800/70 leading-relaxed border-t border-saffron-300/30 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
