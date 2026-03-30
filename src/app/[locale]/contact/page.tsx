import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { OfficeCards } from "./ContactCards";
import { Send } from "lucide-react";

const faqs = [
  {
    question: "How do I apply for financial assistance or pension?",
    answer:
      "Please call our Delhi office at 95608 00343 or send an email to shriradhemaacharitablesociety@gmail.com. Our team will guide you through the application process.",
  },
  {
    question: "How can I volunteer with the society?",
    answer:
      "We welcome volunteers for distribution drives, event organisation, and seva camps. Visit our Volunteer page or contact us directly to register your interest.",
  },
  {
    question: "Is my donation eligible for tax deduction?",
    answer:
      "Donations may be eligible under Section 80G of the Income Tax Act. Contact us to receive your official receipt and the current 80G certificate.",
  },
  {
    question: "How do I reach the free dialysis centre in Mumbai?",
    answer:
      "The dialysis centre is at Anand Hospital, 2nd Floor, Dahisar Village, Anand Nagar, Dahisar East, Mumbai – 400068. Call 86570 67228 or 98921 54615 for details.",
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
      ? "संपर्क करें | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Contact Us | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "दिल्ली कार्यालय: प्लॉट 5, पॉकेट-11, सेक्टर-5, रोहिणी – 110085। फोन: 95608 00343। सहायता, दान या स्वयंसेवा के लिए संपर्क करें।"
      : "Delhi office: Plot 5, Pocket-11, Sector-5, Rohini – 110085. Phone: 95608 00343. Contact us for assistance, donations, or volunteering.",
    keywords: isHindi
      ? ["संपर्क", "दिल्ली चैरिटेबल सोसाइटी", "सहायता", "स्वयंसेवा"]
      : ["contact Shri Radhe Maa Society", "NGO Delhi contact", "charitable society Rohini", "volunteer contact"],
    alternates: { languages: { "en-IN": "/en/contact", "hi-IN": "/hi/contact" } },
    openGraph: {
      title: "Contact — Shri Radhe Maa Charitable Society",
      description: "Reach us at our Delhi or Mumbai offices. Phone: 95608 00343.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function ContactPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Contact", url: "https://shriradhemasociety.org/contact" },
  ]);
  const faqSchema = faqJsonLd(faqs);
  const localBusiness = localBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {localBusiness.map((office, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(office) }}
        />
      ))}

      {/* Hero */}
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">संपर्क करें</span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">Get in Touch</h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              Whether you&apos;d like to donate, volunteer, seek assistance, or simply know more — we&apos;re here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Sidebar on White */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Contact Form — 2 cols */}
            <ScrollReveal delay={100} className="lg:col-span-2 h-full">
              <div className="group flex h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
                <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                  <Send className="w-5 h-5" />
                  <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>MESSAGE</span>
                </div>
                <div className="flex-1 p-4 md:p-5">
                  <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">हमें लिखें</p>
                  <h2 className="font-serif text-2xl md:text-3xl text-warm-900 mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>

            {/* Sidebar */}
            <OfficeCards />
          </div>
        </div>
      </section>

      {/* FAQ on Cream */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={600}>
            <h2 className="font-serif text-2xl md:text-3xl text-warm-900 mb-2">Common Questions</h2>
            <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">सामान्य प्रश्न</p>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
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
      </section>
    </>
  );
}
