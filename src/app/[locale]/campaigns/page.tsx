import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { campaigns } from "@/data/campaigns";
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
      ? "एक कारण का समर्थन करें | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Support a Cause | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "सक्रिय सेवा अभियानों को ब्राउज़ करें और श्री राधे माँ चैरिटेबल सोसाइटी के माध्यम से योगदान दें। डायलिसिस, दिव्यांग सेवा, आपदा राहत।"
      : "Browse active seva campaigns and contribute to causes through Shri Radhe Maa Charitable Society. Free dialysis, divyang seva, disaster relief.",
    keywords: isHindi
      ? ["दान अभियान", "सेवा", "योगदान", "चैरिटी अभियान", "श्री राधे माँ सोसाइटी"]
      : ["donation campaigns", "seva", "contribute", "charity campaigns", "NGO India", "Shri Radhe Maa Society"],
    alternates: { languages: { "en-IN": "/en/campaigns", "hi-IN": "/hi/campaigns" } },
    openGraph: {
      title: "Support a Cause | Shri Radhe Maa Charitable Society",
      description: "Browse active seva campaigns and contribute to meaningful causes.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

function getDaysRemaining(endDate: string): number {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default async function CampaignsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHindi = locale === "hi";

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Campaigns", url: "https://shriradhemasociety.org/campaigns" },
  ]);

  const activeCampaigns = campaigns.filter((c) => c.active);

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
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">
              {isHindi ? "एक कारण का समर्थन करें" : "एक कारण का समर्थन करें"}
            </span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              {isHindi ? "एक कारण का समर्थन करें" : "Support a Cause"}
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              {isHindi
                ? "सक्रिय सेवा अभियानों को ब्राउज़ करें और अपने योगदान से जीवन बदलें।"
                : "Browse active seva campaigns and transform lives with your contribution."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Campaign grid on White */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeCampaigns.map((campaign, i) => {
            const percentage = Math.round(
              (campaign.raised / campaign.goal) * 100
            );
            const daysLeft = getDaysRemaining(campaign.endDate);

            return (
              <ScrollReveal key={campaign.id} delay={100 + i * 120}>
                <div
                  className="rounded-2xl bg-white shadow-md p-5 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 relative overflow-hidden"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Seva type badge */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="gold">{campaign.sevaType}</Badge>
                    {daysLeft > 0 && (
                      <span className="text-warm-400 text-xs font-sans">
                        {daysLeft} {isHindi ? "दिन शेष" : "days left"}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-warm-900 tracking-tight leading-tight mb-1">
                    {isHindi ? campaign.titleHi : campaign.title}
                  </h3>
                  {!isHindi && (
                    <p
                      className="font-devanagari text-warm-800/50 text-sm mb-4"
                      lang="hi"
                    >
                      {campaign.titleHi}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-warm-600 font-sans text-[15px] leading-relaxed mb-6">
                    {isHindi ? campaign.descriptionHi : campaign.description}
                  </p>

                  {/* Progress bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-sm font-sans mb-2">
                      <span className="text-warm-900 font-semibold">
                        {formatCurrency(campaign.raised)}{" "}
                        <span className="text-warm-400 font-normal">
                          / {formatCurrency(campaign.goal)}
                        </span>
                      </span>
                      <span className="text-crimson-500 font-semibold">
                        {percentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-warm-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-crimson-500 transition-all duration-700"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center gap-4 text-warm-500 text-xs font-sans mb-6">
                    <span>
                      {campaign.donorCount} {isHindi ? "दानदाता" : "donors"}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-warm-300" />
                    <span>
                      {daysLeft} {isHindi ? "दिन शेष" : "days remaining"}
                    </span>
                  </div>

                  {/* CTA */}
                  <Link href={`/campaigns/${campaign.slug}`}>
                    <Button variant="primary" size="md" className="w-full">
                      {isHindi ? "योगदान दें" : "Contribute"}
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
      </section>
    </>
  );
}
