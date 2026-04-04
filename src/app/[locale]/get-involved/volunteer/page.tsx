import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd } from "@/lib/seo";
import { VolunteerStepCards, VolunteerRoleCards } from "./VolunteerCards";
import { Quote, Sprout, Phone, Mail } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "स्वयंसेवा करें | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Volunteer | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "स्वास्थ्य सेवा, वितरण अभियान, आपदा राहत, और डिजिटल स्वयंसेवा के अवसर। आज ही जुड़ें।"
      : "Volunteer opportunities in healthcare, distribution drives, disaster relief, event support, and digital outreach. Join our seva network today.",
    keywords: isHindi
      ? ["स्वयंसेवक", "एनजीओ स्वयंसेवा", "समाज सेवा दिल्ली", "सेवा अवसर"]
      : ["volunteer NGO India", "volunteer Delhi", "charity volunteer", "seva volunteer opportunities"],
    alternates: { languages: { "en-IN": "/en/get-involved/volunteer", "hi-IN": "/hi/get-involved/volunteer" } },
    openGraph: {
      title: "Volunteer — Shri Radhe Maa Charitable Society",
      description: "Join our volunteer network for healthcare, distribution, and relief seva.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function VolunteerPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://srmcs.org" },
    { name: "Volunteer", url: "https://srmcs.org/get-involved/volunteer" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">हमारे साथ स्वयंसेवा करें</span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">Volunteer with Us</h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              Join our network of dedicated volunteers and make a direct impact in the lives of those we serve. Every role matters.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Inspirational quote on White */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Inspirational quote */}
        <ScrollReveal delay={100}>
          <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white mb-10">
            <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
              <Quote className="w-5 h-5" />
              <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>SEVA</span>
            </div>
            <div className="flex-1 p-4 md:p-5">
              <p className="font-serif text-xl text-warm-900 leading-relaxed mb-3">
                &ldquo;The best way to find yourself is to lose yourself in the service of others.&rdquo;
              </p>
              <p className="font-devanagari text-base text-warm-800/60 leading-relaxed mb-4" lang="hi">
                &ldquo;दूसरों की सेवा में खुद को खोना ही स्वयं को पाने का सबसे अच्छा तरीका है।&rdquo;
              </p>
              <p className="font-sans text-sm text-warm-800/60 leading-relaxed">
                Volunteering with the Shri Radhe Maa Charitable Society is an opportunity to serve the community, grow personally, and be part of a mission that creates real, tangible change in people&apos;s lives — from the streets of Delhi to the villages of Punjab.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* How to Volunteer — 3 steps */}
        <ScrollReveal delay={150}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">How to Volunteer</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">स्वयंसेवा कैसे करें</p>
        </ScrollReveal>

        <VolunteerStepCards />

        {/* Volunteer Roles */}
        <ScrollReveal delay={400}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Volunteer Roles</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">स्वयंसेवक की भूमिकाएँ</p>
        </ScrollReveal>

        <VolunteerRoleCards />

        {/* What you gain */}
        <ScrollReveal delay={870}>
          <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white mb-10">
            <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
              <Sprout className="w-5 h-5" />
              <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>GAIN</span>
            </div>
            <div className="flex-1 p-4 md:p-5">
              <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">What You Gain</h3>
              <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">स्वयंसेवक को क्या मिलता है</p>
              <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-2 mb-4">
                Volunteering with the society is not just an act of giving — it is also a deeply enriching personal experience. Our volunteers consistently report:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Sense of Purpose", desc: "Direct connection to meaningful work that changes lives." },
                  { label: "Skill Development", desc: "Practical experience in coordination, outreach, and logistics." },
                  { label: "Spiritual Growth", desc: "Seva as a path to personal and spiritual development." },
                  { label: "Community", desc: "Becoming part of a warm, mission-driven network of seva workers." },
                  { label: "Volunteer Certificate", desc: "Formal recognition of your service and contributions." },
                  { label: "Real Impact", desc: "See the direct result of your efforts in beneficiaries' lives." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-saffron-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>
                      <span className="font-sans text-sm font-semibold text-warm-900">{item.label}</span>
                      <span className="font-sans text-sm text-warm-800/60"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={950}>
            <p className="font-devanagari text-sm text-crimson-500 mb-2" lang="hi">आज ही जुड़ें</p>
            <h3 className="font-serif text-2xl md:text-3xl text-warm-900 mb-3">Contact for Volunteering</h3>
            <p className="font-sans text-sm text-warm-600 leading-relaxed mb-6 max-w-lg">
              Ready to begin your seva journey? Reach out to us today — our team will guide you through the process and help you find the role that fits you best.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-lg">
              <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
                <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                  <Phone className="w-5 h-5" />
                  <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>CALL</span>
                </div>
                <div className="flex-1 p-4 md:p-5">
                  <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">Call Us</h3>
                  <a href="tel:+919560800343" className="font-stat text-2xl font-bold text-crimson-500 hover:text-crimson-600 transition-colors block mt-1">
                    95608 00343
                  </a>
                  <p className="font-sans text-xs text-warm-500 mt-1">Mon – Sat, 10 AM – 6 PM</p>
                </div>
              </div>
              <div className="group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
                <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                  <Mail className="w-5 h-5" />
                  <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>EMAIL</span>
                </div>
                <div className="flex-1 p-4 md:p-5">
                  <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">Email Us</h3>
                  <a
                    href="mailto:shriradhemaacharitablesociety@gmail.com"
                    className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors break-all mt-1 block"
                  >
                    shriradhemaacharitablesociety@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919560800343"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-crimson-500 text-white text-sm font-medium rounded-lg hover:bg-crimson-600 transition-all duration-300"
              >
                Call Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-warm-100 text-warm-900 text-sm font-medium rounded-lg hover:bg-warm-50 transition-all duration-200 font-sans"
              >
                Send a Message
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
