import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { HealthcareCards } from "./HealthcareCards";

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
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">
              स्वास्थ्य सेवा कार्यक्रम
            </span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              Healthcare Programmes
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              Free medical services for those who cannot afford care — because health is a human right, not a privilege.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Crimson stats bar */}
      <section className="relative overflow-hidden bg-gradient-to-r from-crimson-600 to-crimson-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative py-6 md:py-8 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { value: "Free", label: "Dialysis for All" },
                { value: "24/7", label: "Ambulance Support" },
                { value: "Regular", label: "Blood Donation Drives" },
                { value: "Camps", label: "Eye & Dental Seva" },
              ].map((stat, i) => (
                <div key={stat.label} className={`flex flex-col items-center text-center py-3 px-3 ${i < 3 ? "border-r border-white/20" : ""}`}>
                  <p className="font-stat text-2xl md:text-3xl font-black text-saffron-400">{stat.value}</p>
                  <p className="font-sans text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cream intro */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-warm-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={80}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-sans text-sm md:text-base text-warm-700 leading-relaxed">
                The Shri Radhe Maa Charitable Society operates a range of free healthcare programmes across Mumbai and Delhi — from a dedicated kidney dialysis centre to mobile health camps. All services are provided entirely free of charge to beneficiaries.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* White section: Programme cards */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="text-center mb-10 md:mb-16">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">हमारे स्वास्थ्य सेवा कार्यक्रम</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">
                Our Healthcare Programmes
              </h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <HealthcareCards />
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={500}>
            <div className="text-center mb-10">
              <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">सामान्य प्रश्न</span>
              <h2 className="font-serif text-2xl md:text-3xl text-warm-900 tracking-tight mt-1">Frequently Asked Questions</h2>
              <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            </div>
          </ScrollReveal>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-white shadow-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-sans text-sm font-medium text-warm-900 hover:bg-warm-50 transition-colors list-none">
                    {faq.question}
                    <svg className="w-4 h-4 text-crimson-500 shrink-0 ml-3 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 font-sans text-sm text-warm-600 leading-relaxed border-t border-warm-100 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
      </section>
    </div>
  );
}
