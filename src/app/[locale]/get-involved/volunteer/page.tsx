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
    title: "Healthcare Support",
    titleHi: "स्वास्थ्य सेवा सहयोग",
    desc: "Assist at blood donation camps, eye and dental check-up drives, and at the free dialysis centre in Mumbai. Medical background helpful but not required.",
    accent: "crimson" as const,
  },
  {
    icon: "🎪",
    title: "Event Coordination",
    titleHi: "आयोजन समन्वय",
    desc: "Help plan, organise, and execute bhajan programmes, katha events, health camps, and annual seva drives. Skills in logistics, communication, or event management valued.",
    accent: "gold" as const,
  },
  {
    icon: "📦",
    title: "Distribution Drives",
    titleHi: "वितरण अभियान",
    desc: "Participate in wheelchair, blanket, clothing, food, and essential items distribution. Physical presence on drive days, with loading, sorting, and direct handover to beneficiaries.",
    accent: "crimson" as const,
  },
  {
    icon: "📝",
    title: "Documentation",
    titleHi: "दस्तावेज़ीकरण",
    desc: "Help document society activities through photography, video, and written reports. Maintain beneficiary records, prepare impact reports, and support audit-readiness.",
    accent: "gold" as const,
  },
  {
    icon: "📣",
    title: "Community Outreach",
    titleHi: "सामुदायिक आउटरीच",
    desc: "Identify families in need, spread awareness about programmes, build community connections, and help reach the most marginalised beneficiaries. Multilingual skills welcome.",
    accent: "crimson" as const,
  },
  {
    icon: "🖥️",
    title: "Administration & Digital",
    titleHi: "प्रशासन और डिजिटल",
    desc: "Support office administration, social media, website updates, digital outreach, and correspondence. Skills in MS Office, Canva, or social media management are a plus.",
    accent: "gold" as const,
  },
];

export default function VolunteerPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Volunteer", url: "https://shriradhemasociety.org/get-involved/volunteer" },
  ]);

  return (
    <div style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-3">
            <Badge variant="crimson">Volunteer</Badge>
          </div>
          <SectionHeader
            title="Volunteer with Us"
            titleHi="हमारे साथ स्वयंसेवा करें"
            subtitle="Join our network of dedicated volunteers and make a direct impact in the lives of those we serve. Every role matters."
            align="left"
            className="mb-12"
          />
        </ScrollReveal>

        {/* Inspirational quote */}
        <ScrollReveal delay={100}>
          <div className="mb-10 rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8">
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
        </ScrollReveal>

        {/* How to Volunteer — 3 steps */}
        <ScrollReveal delay={150}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">How to Volunteer</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">स्वयंसेवा कैसे करें</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            {
              step: "1",
              icon: "📞",
              title: "Apply",
              titleHi: "आवेदन करें",
              desc: "Call us at 95608 00343 or email shriradhemaacharitablesociety@gmail.com expressing your interest. Tell us who you are and how you'd like to help.",
              accent: "crimson" as const,
            },
            {
              step: "2",
              icon: "🗂️",
              title: "Get Assigned",
              titleHi: "भूमिका प्राप्त करें",
              desc: "Share your skills, availability, and preferred seva area. Our team will match you with the most suitable programme or drive and brief you fully.",
              accent: "gold" as const,
            },
            {
              step: "3",
              icon: "🤲",
              title: "Serve",
              titleHi: "सेवा करें",
              desc: "Attend an orientation, meet the team, and begin your seva journey. We support every volunteer with guidance, resources, and a welcoming community.",
              accent: "crimson" as const,
            },
          ].map((item) => (
            <ScrollReveal key={item.step} delay={200}>
              <Card accent={item.accent} className="h-full">
                <CardHeader>
                  <div className="w-8 h-8 rounded-full bg-crimson-100 border border-crimson-200 flex items-center justify-center mb-3">
                    <span className="font-stat text-sm font-black text-crimson-600">{item.step}</span>
                  </div>
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

        {/* Volunteer Roles */}
        <ScrollReveal delay={400}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Volunteer Roles</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">स्वयंसेवक की भूमिकाएँ</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {volunteerRoles.map((role, i) => (
            <ScrollReveal key={role.title} delay={450 + i * 80}>
              <Card accent={role.accent} className="h-full">
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

        {/* What you gain */}
        <ScrollReveal delay={870}>
          <Card accent="gold" className="mb-10">
            <CardHeader>
              <div className="text-2xl mb-2" aria-hidden="true">🌱</div>
              <h2 className="font-serif text-xl text-warm-900">What You Gain</h2>
              <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">स्वयंसेवक को क्या मिलता है</p>
            </CardHeader>
            <CardContent>
              <p className="font-sans text-sm text-warm-800/70 leading-relaxed mb-4">
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
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Contact for Volunteering */}
        <ScrollReveal delay={950}>
          <div className="rounded-3xl border border-crimson-200/50 bg-crimson-50/30 p-8">
            <p className="font-devanagari text-sm text-crimson-500 mb-1" lang="hi">आज ही जुड़ें</p>
            <h3 className="font-serif text-xl text-warm-900 mb-3">Contact for Volunteering</h3>
            <p className="font-sans text-sm text-warm-800/60 leading-relaxed mb-6 max-w-lg">
              Ready to begin your seva journey? Reach out to us today — our team will guide you through the process and help you find the role that fits you best.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl bg-white/50 border border-warm-800/[0.05] px-5 py-4">
                <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1.5">Call Us</p>
                <a href="tel:+919560800343" className="font-stat text-2xl font-bold text-crimson-500 hover:text-crimson-600 transition-colors block">
                  95608 00343
                </a>
                <p className="font-sans text-xs text-warm-800/50 mt-1">Mon – Sat, 10 AM – 6 PM</p>
              </div>
              <div className="rounded-2xl bg-white/50 border border-warm-800/[0.05] px-5 py-4">
                <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1.5">Email Us</p>
                <a
                  href="mailto:shriradhemaacharitablesociety@gmail.com"
                  className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors break-all"
                >
                  shriradhemaacharitablesociety@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919560800343"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-crimson-500 to-crimson-400 text-white text-sm font-medium rounded-pill hover:from-crimson-600 hover:to-crimson-500 transition-all duration-300"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                Call Now
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
