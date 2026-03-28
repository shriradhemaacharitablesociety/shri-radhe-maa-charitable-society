import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const offices = [
  {
    city: "Delhi",
    cityHi: "दिल्ली",
    address: "Plot No. 5, Pocket-11, Sector-5,\nRohini, New Delhi – 110085",
    phone: "95608 00343",
    phoneFull: "+919560800343",
    type: "Head Office",
  },
  {
    city: "Mumbai",
    cityHi: "मुंबई",
    address: "Shree Ram Trade Centre, 6th Floor,\nS.V.P. Road, Nr. Chamunda Circle,\nBorivali (W), Mumbai – 400092",
    phone: "98209 69020",
    phoneFull: "+919820969020",
    type: "Branch Office",
  },
];

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

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "64px" }}>
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
          <SectionHeader
            title="Get in Touch"
            titleHi="संपर्क करें"
            subtitle="Whether you'd like to donate, volunteer, seek assistance, or simply know more — we're here to help."
            className="mb-10"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Form — 2 cols */}
          <ScrollReveal delay={100} className="lg:col-span-2">
            <div className="rounded-3xl border border-saffron-300/60 bg-white/45 backdrop-blur-sm p-8">
              <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">हमें लिखें</p>
              <h2 className="font-serif text-2xl text-warm-900 mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            {/* Offices */}
            {offices.map((office, i) => (
              <ScrollReveal key={office.city} delay={200 + i * 100}>
                <div className="rounded-3xl border border-saffron-300/50 bg-white/40 backdrop-blur-sm p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={i === 0 ? "crimson" : "gold"}>{office.type}</Badge>
                  </div>
                  <h3 className="font-serif text-lg text-warm-900">{office.city}</h3>
                  <p className="font-devanagari text-xs text-warm-800/50 mt-0.5 mb-3" lang="hi">{office.cityHi}</p>
                  <address className="font-sans text-sm text-warm-800/70 not-italic leading-relaxed whitespace-pre-line mb-3">
                    {office.address}
                  </address>
                  <a
                    href={`tel:${office.phoneFull}`}
                    className="flex items-center gap-2 font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    {office.phone}
                  </a>
                </div>
              </ScrollReveal>
            ))}

            {/* Email */}
            <ScrollReveal delay={400}>
              <div className="rounded-3xl border border-saffron-300/50 bg-white/40 backdrop-blur-sm p-6">
                <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-2">Email</p>
                <a
                  href="mailto:shriradhemaacharitablesociety@gmail.com"
                  className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors break-all leading-relaxed"
                >
                  shriradhemaacharitablesociety@gmail.com
                </a>
              </div>
            </ScrollReveal>

            {/* Social */}
            <ScrollReveal delay={500}>
              <div className="rounded-3xl border border-saffron-300/50 bg-white/40 backdrop-blur-sm p-6">
                <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-3">Follow Us</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Instagram", handle: "@shreeradhemaa", href: "https://www.instagram.com/shreeradhemaa" },
                    { label: "Facebook", handle: "ShriRadheMaa", href: "https://www.facebook.com/ShriRadheMaa" },
                    { label: "YouTube", handle: "ShreeRadheMaa", href: "https://www.youtube.com/@ShreeRadheMaa" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between font-sans text-sm text-warm-800/70 hover:text-warm-900 transition-colors group"
                    >
                      <span>{social.label}</span>
                      <span className="text-warm-800/40 group-hover:text-crimson-500 transition-colors text-xs">{social.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* FAQ */}
        <ScrollReveal delay={600}>
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-warm-900 mb-2">Common Questions</h2>
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
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
