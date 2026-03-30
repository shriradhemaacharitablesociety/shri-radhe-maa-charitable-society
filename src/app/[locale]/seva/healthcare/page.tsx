import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-900 to-crimson-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <span className="font-devanagari text-sm text-saffron-400 font-medium" lang="hi">
                स्वास्थ्य सेवा कार्यक्रम
              </span>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white tracking-tight mt-2">
                Healthcare Programmes
              </h1>
              <div className="w-12 h-1 bg-saffron-400 rounded-full mt-4" />
              <p className="text-[15px] text-white/70 mt-4 leading-relaxed max-w-xl">
                Free medical services for those who cannot afford care — because health is a human right, not a privilege.
              </p>
            </ScrollReveal>
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* 1. Dialysis */}
            <ScrollReveal delay={150}>
              <div className="relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />
                <div className="p-6 md:p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-saffron-100 text-saffron-700 text-xs font-semibold font-sans uppercase tracking-wider mb-4">Flagship Programme</span>
                  <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl mb-4" aria-hidden="true">🏥</div>
                  <h3 className="font-serif text-xl text-warm-900">Free Kidney Dialysis Centre</h3>
                  <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">निःशुल्क किडनी डायलिसिस केन्द्र</p>
                  <p className="font-sans text-sm text-warm-600 leading-relaxed mt-4 mb-5">
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
                  <div className="rounded-xl bg-crimson-50 border border-crimson-200/40 px-4 py-2.5 flex items-center gap-3">
                    <span className="font-stat text-2xl font-bold text-crimson-500">Free</span>
                    <span className="font-sans text-xs text-warm-800/60 uppercase tracking-wider">For All Patients</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Ambulance */}
            <ScrollReveal delay={200}>
              <div className="relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 to-crimson-500" />
                <div className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl mb-4" aria-hidden="true">🚑</div>
                  <h3 className="font-serif text-xl text-warm-900">Free Ambulance Service</h3>
                  <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">निःशुल्क एम्बुलेंस सेवा</p>
                  <p className="font-sans text-sm text-warm-600 leading-relaxed mt-4 mb-4">
                    The society provides a free ambulance service to <strong className="text-warm-900">Satyam Charitable Hospital</strong>, ensuring that patients in need can reach medical care without bearing transport costs.
                  </p>
                  <p className="font-sans text-sm text-warm-600 leading-relaxed mb-5">
                    The ambulance is available to serve patients who need emergency transport or scheduled hospital visits and cannot afford private ambulance fees.
                  </p>
                  <div className="rounded-xl bg-saffron-50 border border-saffron-200/60 px-4 py-3">
                    <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Doctor Contact</p>
                    <p className="font-sans text-sm font-semibold text-warm-900">Dr. Ramrao Athankar</p>
                    <a href="tel:+918959388249" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">8959388249</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 3. Blood Donation */}
            <ScrollReveal delay={250}>
              <div className="relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-500 to-saffron-500" />
                <div className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl mb-4" aria-hidden="true">🩸</div>
                  <h3 className="font-serif text-xl text-warm-900">Blood Donation Camps</h3>
                  <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">रक्तदान शिविर</p>
                  <p className="font-sans text-sm text-warm-600 leading-relaxed mt-4 mb-4">
                    Regular blood donation drives are organised across Delhi and Mumbai to maintain critical blood bank supplies and save lives. A single donation can save up to three lives.
                  </p>
                  <p className="font-sans text-sm text-warm-600 leading-relaxed mb-5">
                    The society works with accredited hospitals and blood banks to ensure all collected blood is safely processed and made available to patients in need.
                  </p>
                  <div className="rounded-xl bg-saffron-50 border border-saffron-200/60 px-4 py-3">
                    <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Stay Updated on Camps</p>
                    <a href="tel:+919560800343" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">95608 00343</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 4. Eye & Dental */}
            <ScrollReveal delay={300}>
              <div className="relative rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-500 to-crimson-500" />
                <div className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-full bg-crimson-500 flex items-center justify-center text-white text-xl mb-4" aria-hidden="true">👁️</div>
                  <h3 className="font-serif text-xl text-warm-900">Eye &amp; Dental Check-up Camps</h3>
                  <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">नेत्र और दंत जांच शिविर</p>
                  <p className="font-sans text-sm text-warm-600 leading-relaxed mt-4 mb-4">
                    Free eye examinations and dental check-up camps are held for underprivileged communities, often in areas with limited healthcare access.
                  </p>
                  <ul className="space-y-2">
                    {["Free eye examination & vision testing", "Dental check-up & consultation", "Referrals for specialist treatment", "Corrective eyewear where available"].map((item) => (
                      <li key={item} className="flex items-center gap-2 font-sans text-sm text-warm-600">
                        <span className="w-5 h-5 rounded-full bg-crimson-500 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dark FAQ section */}
      <section className="relative overflow-hidden bg-warm-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="relative py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={500}>
              <div className="text-center mb-10">
                <span className="font-devanagari text-sm text-saffron-400 font-medium" lang="hi">सामान्य प्रश्न</span>
                <h2 className="font-serif text-2xl md:text-3xl text-white tracking-tight mt-1">Frequently Asked Questions</h2>
                <div className="w-12 h-1 bg-saffron-400 rounded-full mx-auto mt-4" />
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
        </div>
      </section>
    </div>
  );
}
