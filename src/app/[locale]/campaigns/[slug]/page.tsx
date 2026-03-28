import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { campaigns } from "@/data/campaigns";
import { breadcrumbJsonLd } from "@/lib/seo";

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
  const daysLeft = getDaysRemaining(campaign.endDate);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Campaigns", url: "https://shriradhemasociety.org/campaigns" },
    {
      name: campaign.title,
      url: `https://shriradhemasociety.org/campaigns/${campaign.slug}`,
    },
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
      <div className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <ScrollReveal>
          <Link
            href="/campaigns"
            className="inline-flex items-center gap-1.5 text-warm-500 text-sm font-sans hover:text-crimson-500 transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            {isHindi ? "सभी अभियान" : "All Campaigns"}
          </Link>
        </ScrollReveal>

        {/* Hero header */}
        <ScrollReveal delay={100}>
          <header className="mb-10">
            <Badge variant="gold" className="mb-4">
              {campaign.sevaType}
            </Badge>
            <h1 className="font-serif text-4xl md:text-[2.75rem] text-warm-900 tracking-tight leading-tight mb-2">
              {isHindi ? campaign.titleHi : campaign.title}
            </h1>
            {!isHindi && (
              <p
                className="font-devanagari text-warm-800/50 text-lg mb-6"
                lang="hi"
              >
                {campaign.titleHi}
              </p>
            )}
            <p className="text-warm-600 font-sans text-[15px] leading-[1.85] max-w-2xl">
              {isHindi ? campaign.descriptionHi : campaign.description}
            </p>
          </header>
        </ScrollReveal>

        {/* Large progress bar */}
        <ScrollReveal delay={200}>
          <div className="rounded-2xl border border-black/[0.06] bg-cream p-8 mb-10">
            <div className="flex items-center justify-between text-base font-sans mb-3">
              <span className="text-warm-900 font-semibold text-lg">
                {formatCurrency(campaign.raised)}{" "}
                <span className="text-warm-400 font-normal text-base">
                  {isHindi ? "जुटाए गए" : "raised"} / {formatCurrency(campaign.goal)}{" "}
                  {isHindi ? "लक्ष्य" : "goal"}
                </span>
              </span>
              <span className="text-crimson-500 font-semibold text-xl">
                {percentage}%
              </span>
            </div>
            <div className="w-full h-3 rounded-full bg-warm-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-crimson-500 transition-all duration-700"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <p className="font-sans text-3xl font-bold text-warm-900 mb-1">
                {formatCurrency(campaign.raised)}
              </p>
              <p className="text-warm-500 text-sm font-sans">
                {isHindi ? "जुटाए गए" : "Raised"}
              </p>
            </div>
            <div className="text-center">
              <p className="font-sans text-3xl font-bold text-warm-900 mb-1">
                {formatCurrency(campaign.goal)}
              </p>
              <p className="text-warm-500 text-sm font-sans">
                {isHindi ? "लक्ष्य" : "Goal"}
              </p>
            </div>
            <div className="text-center">
              <p className="font-sans text-3xl font-bold text-warm-900 mb-1">
                {campaign.donorCount}
              </p>
              <p className="text-warm-500 text-sm font-sans">
                {isHindi ? "दानदाता" : "Donors"}
              </p>
            </div>
            <div className="text-center">
              <p className="font-sans text-3xl font-bold text-warm-900 mb-1">
                {daysLeft}
              </p>
              <p className="text-warm-500 text-sm font-sans">
                {isHindi ? "दिन शेष" : "Days Left"}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Donate CTA */}
        <ScrollReveal delay={400}>
          <div className="rounded-2xl border border-black/[0.06] bg-white p-8 text-center mb-10">
            <h2 className="font-serif text-2xl text-warm-900 mb-3">
              {isHindi
                ? "इस अभियान में योगदान दें"
                : "Contribute to This Campaign"}
            </h2>
            <p className="text-warm-600 font-sans text-[15px] leading-relaxed mb-6 max-w-lg mx-auto">
              {isHindi
                ? "आपका हर योगदान मायने रखता है। दान 80G के तहत कर कटौती के पात्र हैं।"
                : "Every contribution matters. Donations are eligible for tax deduction under Section 80G of the Income Tax Act."}
            </p>
            <Link href="/seva">
              <Button variant="primary" size="lg">
                {isHindi ? "अभी दान करें" : "Donate Now"}
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        {/* Share buttons */}
        <ScrollReveal delay={500}>
          <div className="border-t border-black/[0.06] pt-8">
            <p className="text-warm-500 text-sm font-sans mb-4">
              {isHindi ? "इस अभियान को साझा करें" : "Share this campaign"}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-sans font-medium bg-[#25D366] text-white hover:bg-[#1fb855] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-sans font-medium bg-[#1877F2] text-white hover:bg-[#1565c0] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
