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
  {
    question: "Who can attend the eye and dental check-up camps?",
    answer:
      "The eye and dental check-up camps are open to all members of the public, particularly those from underprivileged backgrounds who lack access to regular healthcare. No prior registration is typically required — just arrive at the designated venue on camp day.",
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
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-3">
            <Badge variant="crimson">Healthcare Seva</Badge>
          </div>
          <SectionHeader
            title="Healthcare Programmes"
            titleHi="स्वास्थ्य सेवा कार्यक्रम"
            subtitle="Free medical services for those who cannot afford care — because health is a human right, not a privilege."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Intro context */}
        <ScrollReveal delay={80}>
          <div className="mb-10 rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8">
            <p className="font-sans text-sm text-warm-800/70 leading-relaxed">
              The Shri Radhe Maa Charitable Society operates a range of free healthcare programmes across Mumbai and Delhi — from a dedicated kidney dialysis centre to mobile health camps. All services are provided entirely free of charge to beneficiaries. Scroll below to learn about each programme, find contact details, and read frequently asked questions.
            </p>
          </div>
        </ScrollReveal>

        {/* All 4 programmes in 2-col grid */}
        <ScrollReveal delay={100}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Our Healthcare Programmes</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">हमारे स्वास्थ्य सेवा कार्यक्रम</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* 1. Dialysis */}
          <ScrollReveal delay={150}>
            <Card accent="crimson" className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <Badge variant="gold">Flagship Programme</Badge>
                </div>
                <div className="text-3xl mb-2" aria-hidden="true">🏥</div>
                <h2 className="font-serif text-xl text-warm-900">Free Kidney Dialysis Centre</h2>
                <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">निःशुल्क किडनी डायलिसिस केन्द्र</p>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
                  In partnership with the <strong className="text-warm-900">Taramati Charitable Foundation</strong>, the society operates a free kidney dialysis centre at Anand Hospital, Dahisar, Mumbai. All dialysis sessions are provided at absolutely no cost to patients.
                </p>
                <div className="space-y-2 mb-4">
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-0.5">Location</p>
                    <address className="font-sans text-sm text-warm-800/80 not-italic leading-relaxed">
                      2nd Floor, Anand Hospital, Dahisar Village,<br />
                      Anand Nagar, Dahisar East, Mumbai – 400068
                    </address>
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-0.5">Contact</p>
                    <div className="flex flex-wrap gap-2">
                      <a href="tel:+918657067228" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">86570 67228</a>
                      <span className="text-warm-800/30">/</span>
                      <a href="tel:+919892154615" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">98921 54615</a>
                    </div>
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-0.5">Partner</p>
                    <p className="font-sans text-sm text-warm-800/80">Taramati Charitable Foundation</p>
                  </div>
                </div>
                <div className="mt-3 rounded-2xl bg-crimson-50/60 border border-crimson-200/40 px-4 py-2.5 flex items-center gap-3">
                  <span className="font-stat text-2xl font-bold text-crimson-500">Free</span>
                  <span className="font-sans text-xs text-warm-800/60 uppercase tracking-wider">For All Patients</span>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* 2. Ambulance */}
          <ScrollReveal delay={200}>
            <Card accent="gold" className="h-full">
              <CardHeader>
                <div className="text-3xl mb-2" aria-hidden="true">🚑</div>
                <h2 className="font-serif text-xl text-warm-900">Free Ambulance Service</h2>
                <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">निःशुल्क एम्बुलेंस सेवा</p>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
                  The society provides a free ambulance service to <strong className="text-warm-900">Satyam Charitable Hospital</strong>, ensuring that patients in need can reach medical care without bearing transport costs. This service removes one of the most critical barriers to timely healthcare for the poor.
                </p>
                <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
                  The ambulance is available to serve patients who need emergency transport or scheduled hospital visits and cannot afford private ambulance fees.
                </p>
                <div className="rounded-2xl bg-saffron-50/60 border border-saffron-200/60 px-4 py-3">
                  <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Doctor Contact</p>
                  <p className="font-sans text-sm font-semibold text-warm-900">Dr. Ramrao Athankar</p>
                  <a href="tel:+918959388249" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">8959388249</a>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* 3. Blood Donation */}
          <ScrollReveal delay={250}>
            <Card accent="crimson" className="h-full">
              <CardHeader>
                <div className="text-3xl mb-2" aria-hidden="true">🩸</div>
                <h2 className="font-serif text-xl text-warm-900">Blood Donation Camps</h2>
                <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">रक्तदान शिविर</p>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
                  Regular blood donation drives are organised across Delhi and Mumbai to maintain critical blood bank supplies and save lives. Blood donation is one of the most powerful acts of seva — a single donation can save up to three lives.
                </p>
                <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
                  The society works with accredited hospitals and blood banks to ensure that all collected blood is safely processed and made available to patients in need, particularly those who cannot afford blood procurement.
                </p>
                <div className="rounded-2xl bg-saffron-50/60 border border-saffron-200/60 px-4 py-3">
                  <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Stay Updated on Camps</p>
                  <a href="tel:+919560800343" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">95608 00343</a>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* 4. Eye & Dental */}
          <ScrollReveal delay={300}>
            <Card accent="gold" className="h-full">
              <CardHeader>
                <div className="text-3xl mb-2" aria-hidden="true">👁️</div>
                <h2 className="font-serif text-xl text-warm-900">Eye &amp; Dental Check-up Camps</h2>
                <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">नेत्र और दंत जांच शिविर</p>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
                  Free eye examinations and dental check-up camps are held for underprivileged communities, often in areas with limited healthcare access. Patients receive examinations, consultations, and where possible, corrective eyewear and basic treatments at no cost.
                </p>
                <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
                  Eye and dental conditions, if left untreated, can severely impact quality of life and employment. These camps provide early detection and referral for more serious conditions.
                </p>
                <ul className="space-y-1.5">
                  {["Free eye examination & vision testing", "Dental check-up & consultation", "Referrals for specialist treatment", "Corrective eyewear where available"].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-sans text-sm text-warm-800/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Impact stats */}
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-6">
            {[
              { value: "Free", label: "Dialysis for All" },
              { value: "24/7", label: "Ambulance Support" },
              { value: "Regular", label: "Blood Donation Drives" },
              { value: "Camps", label: "Eye & Dental Seva" },
            ].map((stat, i) => (
              <div key={stat.label} className={`text-center ${i < 3 ? "border-r border-saffron-300/40" : ""}`}>
                <p className="font-stat text-2xl font-bold text-crimson-500">{stat.value}</p>
                <p className="font-sans text-xs uppercase tracking-wider text-warm-800/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

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
