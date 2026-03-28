import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { breadcrumbJsonLd } from "@/lib/seo";

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

const volunteerRoles = [
  {
    icon: "🏥",
    title: "Healthcare Volunteer",
    titleHi: "स्वास्थ्य सेवा स्वयंसेवक",
    desc: "Assist at blood donation camps, eye and dental check-up drives, and at the free dialysis centre in Mumbai.",
  },
  {
    icon: "📦",
    title: "Distribution Volunteer",
    titleHi: "वितरण स्वयंसेवक",
    desc: "Help organise and participate in wheelchair, blanket, clothing, and food distribution drives.",
  },
  {
    icon: "🌊",
    title: "Disaster Relief Volunteer",
    titleHi: "आपदा राहत स्वयंसेवक",
    desc: "Be part of our rapid response team for disaster relief operations across India.",
  },
  {
    icon: "🎵",
    title: "Event Volunteer",
    titleHi: "आयोजन स्वयंसेवक",
    desc: "Support the organisation of bhajan programmes, katha events, and other spiritual gatherings.",
  },
  {
    icon: "💻",
    title: "Digital Volunteer",
    titleHi: "डिजिटल स्वयंसेवक",
    desc: "Help with social media, photography, documentation, and digital outreach for the society's activities.",
  },
  {
    icon: "🤝",
    title: "Community Outreach",
    titleHi: "सामुदायिक आउटरीच",
    desc: "Help identify families in need, spread awareness about our programmes, and build community connections.",
  },
];

export default function VolunteerPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Volunteer", url: "https://shriradhemasociety.org/get-involved/volunteer" },
  ]);

  return (
    <div className="pt-32 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-3">
            <Badge variant="crimson">Volunteer</Badge>
          </div>
          <SectionHeader
            title="Volunteer with Us"
            titleHi="हमारे साथ स्वयंसेवा करें"
            subtitle="Join our network of dedicated volunteers and make a direct impact in the lives of those we serve."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Why volunteer */}
        <ScrollReveal delay={100}>
          <div className="mb-10 rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8">
            <p className="font-serif text-xl text-warm-900 leading-relaxed mb-3">
              &ldquo;The best way to find yourself is to lose yourself in the service of others.&rdquo;
            </p>
            <p className="font-devanagari text-base text-warm-800/60 leading-relaxed" lang="hi">
              &ldquo;दूसरों की सेवा में खुद को खोना ही स्वयं को पाने का सबसे अच्छा तरीका है।&rdquo;
            </p>
            <p className="font-sans text-sm text-warm-800/60 mt-4">
              Volunteering with the Shri Radhe Maa Charitable Society is an opportunity to serve the community, grow personally, and be part of a mission that creates real, tangible change.
            </p>
          </div>
        </ScrollReveal>

        {/* Volunteer roles */}
        <ScrollReveal delay={150}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Volunteer Roles</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">स्वयंसेवक की भूमिकाएँ</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {volunteerRoles.map((role, i) => (
            <ScrollReveal key={role.title} delay={200 + i * 80}>
              <Card variant="default" className="h-full">
                <CardHeader>
                  <div className="text-2xl mb-2" aria-hidden="true">{role.icon}</div>
                  <h3 className="font-serif text-lg text-warm-900">{role.title}</h3>
                  <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">{role.titleHi}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{role.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* How to sign up */}
        <ScrollReveal delay={700}>
          <h2 className="font-serif text-2xl text-warm-900 mb-6">How to Get Involved</h2>
        </ScrollReveal>

        <div className="space-y-4 mb-10">
          {[
            { step: "1", title: "Reach Out", desc: "Call us at 95608 00343 or email shriradhemaacharitablesociety@gmail.com expressing your interest in volunteering." },
            { step: "2", title: "Tell Us About Yourself", desc: "Share your skills, availability, and the type of seva you'd like to do. We'll match you with the right programme." },
            { step: "3", title: "Join the Team", desc: "Attend an orientation session, meet our team, and begin your seva journey with the society." },
          ].map((item, i) => (
            <ScrollReveal key={item.step} delay={750 + i * 100}>
              <div className="flex gap-4 rounded-2xl border border-saffron-300/50 bg-white/40 px-5 py-4">
                <div className="w-8 h-8 rounded-full bg-crimson-100 border border-crimson-200 flex items-center justify-center shrink-0">
                  <span className="font-stat text-sm font-black text-crimson-600">{item.step}</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-warm-900 mb-1">{item.title}</p>
                  <p className="font-sans text-sm text-warm-800/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={1050}>
          <div className="rounded-3xl border border-crimson-200/50 bg-crimson-50/30 p-8 text-center">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">आज ही जुड़ें</p>
            <h3 className="font-serif text-xl text-warm-900 mb-3">Ready to Volunteer?</h3>
            <p className="font-sans text-sm text-warm-800/60 leading-relaxed mb-5 max-w-sm mx-auto">
              Contact us today and take your first step towards meaningful seva.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+919560800343"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-crimson-500 to-crimson-400 text-white text-sm font-medium rounded-pill hover:from-crimson-600 hover:to-crimson-500 transition-all duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                Call: 95608 00343
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-warm-800/20 text-warm-800/70 text-sm font-medium rounded-pill hover:bg-warm-100 hover:text-warm-900 transition-all duration-200 font-sans"
              >
                Send a Message
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
