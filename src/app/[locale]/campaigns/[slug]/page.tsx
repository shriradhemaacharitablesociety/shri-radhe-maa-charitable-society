import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { campaigns } from "@/data/campaigns";
import { breadcrumbJsonLd } from "@/lib/seo";
import { CampaignGallery } from "@/components/campaigns/CampaignGallery";
import { TopDonorsList } from "@/components/campaigns/TopDonorsList";

export async function generateStaticParams() {
  return campaigns.map((campaign) => ({ slug: campaign.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const campaign = campaigns.find((c) => c.slug === slug);
  if (!campaign) return { title: "Campaign Not Found" };

  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? `${campaign.titleHi} | श्री राधे माँ चैरिटेबल सोसाइटी`
      : `${campaign.title} | Shri Radhe Maa Charitable Society`,
    description: isHindi ? campaign.descriptionHi : campaign.description,
    alternates: {
      languages: {
        "en-IN": `/en/campaigns/${slug}`,
        "hi-IN": `/hi/campaigns/${slug}`,
      },
    },
    openGraph: {
      title: campaign.title,
      description: campaign.description,
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function getDaysRemaining(endDate: string): number {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default async function CampaignDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const campaign = campaigns.find((c) => c.slug === slug);
  if (!campaign) notFound();

  const isHindi = locale === "hi";
  const percentage = Math.round((campaign.raised / campaign.goal) * 100);
  const isCompleted = !campaign.active;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Campaigns", url: "https://shriradhemasociety.org/campaigns" },
    { name: campaign.title, url: `https://shriradhemasociety.org/campaigns/${campaign.slug}` },
  ]);

  const shareUrl = `https://shriradhemasociety.org/campaigns/${campaign.slug}`;
  const shareText = `${campaign.title} — Shri Radhe Maa Charitable Society`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return (
    <div style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <ScrollReveal>
          <Link
            href="/campaigns"
            className="inline-flex items-center gap-1.5 text-warm-500 text-sm font-sans hover:text-crimson-500 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {isHindi ? "सभी अभियान" : "All Campaigns"}
          </Link>
        </ScrollReveal>

        {/* Hero header */}
        <ScrollReveal delay={100}>
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="gold">{campaign.sevaType}</Badge>
              {isCompleted && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 text-xs font-semibold uppercase tracking-wider border border-emerald-100">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {isHindi ? "पूर्ण" : "Completed"}
                </span>
              )}
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-[2.75rem] text-warm-900 tracking-tight leading-tight mb-2">
              {isHindi ? campaign.titleHi : campaign.title}
            </h1>
            {!isHindi && (
              <p className="font-devanagari text-warm-800/50 text-lg mb-6" lang="hi">
                {campaign.titleHi}
              </p>
            )}
            <p className="text-warm-600 font-sans text-[15px] leading-[1.85] max-w-2xl">
              {isHindi ? campaign.descriptionHi : campaign.description}
            </p>
          </header>
        </ScrollReveal>

        {/* Progress bar */}
        <ScrollReveal delay={200}>
          <div className="rounded-2xl border border-black/[0.06] bg-cream p-5 sm:p-8 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-base font-sans mb-3 gap-1">
              <span className="text-warm-900 font-semibold text-base sm:text-lg">
                {formatCurrency(campaign.raised)}{" "}
                <span className="text-warm-400 font-normal text-base">
                  {isHindi ? "जुटाए गए" : "raised"} / {formatCurrency(campaign.goal)}{" "}
                  {isHindi ? "लक्ष्य" : "goal"}
                </span>
              </span>
              <span className={`font-semibold text-xl ${isCompleted ? "text-emerald-500" : "text-crimson-500"}`}>
                {percentage}%
              </span>
            </div>
            <div className="w-full h-3 rounded-full bg-warm-100 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${isCompleted ? "bg-emerald-500" : "bg-crimson-500"}`}
                style={{ width: `${Math.min(percentage, 100)}%` }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
            <div className="text-center">
              <p className="font-sans text-xl sm:text-3xl font-bold text-warm-900 mb-1">{formatCurrency(campaign.raised)}</p>
              <p className="text-warm-500 text-sm font-sans">{isHindi ? "जुटाए गए" : "Raised"}</p>
            </div>
            <div className="text-center">
              <p className="font-sans text-xl sm:text-3xl font-bold text-warm-900 mb-1">{formatCurrency(campaign.goal)}</p>
              <p className="text-warm-500 text-sm font-sans">{isHindi ? "लक्ष्य" : "Goal"}</p>
            </div>
            <div className="text-center">
              <p className="font-sans text-xl sm:text-3xl font-bold text-warm-900 mb-1">{campaign.donorCount}</p>
              <p className="text-warm-500 text-sm font-sans">{isHindi ? "दानदाता" : "Donors"}</p>
            </div>
            <div className="text-center">
              {isCompleted ? (
                <>
                  <p className="font-sans text-xl sm:text-3xl font-bold text-emerald-500 mb-1">
                    {new Date(campaign.completedDate || campaign.endDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                  </p>
                  <p className="text-warm-500 text-sm font-sans">{isHindi ? "पूर्ण" : "Completed"}</p>
                </>
              ) : (
                <>
                  <p className="font-sans text-xl sm:text-3xl font-bold text-warm-900 mb-1">{getDaysRemaining(campaign.endDate)}</p>
                  <p className="text-warm-500 text-sm font-sans">{isHindi ? "दिन शेष" : "Days Left"}</p>
                </>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* === COMPLETED CAMPAIGN SECTIONS === */}
        {isCompleted && (
          <>
            {/* Photo/Video Gallery */}
            {campaign.media && campaign.media.length > 0 && (
              <ScrollReveal delay={350}>
                <div className="mb-10">
                  <h2 className="font-serif text-xl md:text-2xl text-warm-900 mb-1">
                    {isHindi ? "अभियान गैलरी" : "Campaign Gallery"}
                  </h2>
                  <p className="font-devanagari text-xs text-warm-500 mb-4" lang="hi">
                    {isHindi ? "" : "अभियान गैलरी"}
                  </p>
                  <CampaignGallery media={campaign.media} />
                </div>
              </ScrollReveal>
            )}

            {/* Success Story */}
            {campaign.successStory && (
              <ScrollReveal delay={400}>
                <div className="rounded-2xl bg-cream border border-black/[0.06] p-5 sm:p-8 mb-10">
                  <h2 className="font-serif text-xl md:text-2xl text-warm-900 mb-1">
                    {isHindi ? "हमारा प्रभाव" : "Our Impact"}
                  </h2>
                  <p className="font-devanagari text-xs text-crimson-500 mb-4" lang="hi">
                    {isHindi ? "" : "हमारा प्रभाव"}
                  </p>
                  <div className="w-10 h-0.5 bg-crimson-500 rounded-full mb-4" />
                  <p className="text-warm-700 font-sans text-[15px] leading-[1.85]">
                    {isHindi ? campaign.successStoryHi : campaign.successStory}
                  </p>
                </div>
              </ScrollReveal>
            )}

            {/* Top Donors */}
            {campaign.topDonors && campaign.topDonors.length > 0 && (
              <ScrollReveal delay={450}>
                <div className="mb-10">
                  <TopDonorsList donors={campaign.topDonors} isHindi={isHindi} />
                </div>
              </ScrollReveal>
            )}

            {/* View Active Campaigns CTA */}
            <ScrollReveal delay={500}>
              <div className="rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-8 text-center mb-10">
                <h2 className="font-serif text-2xl text-warm-900 mb-3">
                  {isHindi ? "सक्रिय अभियान देखें" : "Support Active Campaigns"}
                </h2>
                <p className="text-warm-600 font-sans text-[15px] leading-relaxed mb-6 max-w-lg mx-auto">
                  {isHindi
                    ? "इस अभियान की सफलता से प्रेरित हों और हमारे सक्रिय अभियानों में योगदान दें।"
                    : "Inspired by this campaign's success? Browse our active campaigns and make a difference today."}
                </p>
                <Link href="/campaigns">
                  <Button variant="primary" size="lg">
                    {isHindi ? "सक्रिय अभियान देखें" : "View Active Campaigns"}
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </>
        )}

        {/* === ACTIVE CAMPAIGN CTA === */}
        {!isCompleted && (
          <ScrollReveal delay={400}>
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-8 text-center mb-10">
              <h2 className="font-serif text-2xl text-warm-900 mb-3">
                {isHindi ? "इस अभियान में योगदान दें" : "Contribute to This Campaign"}
              </h2>
              <p className="text-warm-600 font-sans text-[15px] leading-relaxed mb-6 max-w-lg mx-auto">
                {isHindi
                  ? "आपका हर योगदान मायने रखता है। दान 80G के तहत कर कटौती के पात्र हैं।"
                  : "Every contribution matters. Donations are eligible for tax deduction under Section 80G of the Income Tax Act."}
              </p>
              <Link href="/get-involved/donate">
                <Button variant="primary" size="lg">
                  {isHindi ? "अभी दान करें" : "Donate Now"}
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        )}

        {/* Share buttons */}
        <ScrollReveal delay={isCompleted ? 550 : 500}>
          <div className="border-t border-black/[0.06] pt-8">
            <p className="text-warm-500 text-sm font-sans mb-4">
              {isHindi ? "इस अभियान को साझा करें" : "Share this campaign"}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 min-h-[44px] text-sm font-sans font-medium bg-[#25D366] text-white hover:bg-[#1fb855] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 min-h-[44px] text-sm font-sans font-medium bg-[#1877F2] text-white hover:bg-[#1565c0] transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
