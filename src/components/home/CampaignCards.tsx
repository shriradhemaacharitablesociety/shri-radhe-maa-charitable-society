"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { campaigns } from "@/data/campaigns";
import { Target, HeartHandshake, Droplets } from "lucide-react";

function formatINR(amount: number): string {
  return amount.toLocaleString("en-IN");
}

function getIcon(sevaType: string) {
  switch (sevaType) {
    case "Healthcare":
      return <Target className="w-5 h-5" />;
    case "Divyang Seva":
      return <HeartHandshake className="w-5 h-5" />;
    case "Disaster Relief":
      return <Droplets className="w-5 h-5" />;
    default:
      return <Target className="w-5 h-5" />;
  }
}

export function CampaignCards() {
  const t = useTranslations("campaigns");

  const activeCampaigns = campaigns.filter((c) => c.active);

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-14">
            <span className="font-devanagari text-sm text-crimson-500 font-medium">
              सक्रिय अभियान
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">
              Active Campaigns
            </h2>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-[15px] text-warm-600 mt-4 leading-relaxed max-w-xl mx-auto">
              Support our ongoing campaigns and make a direct impact on lives
              across India
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activeCampaigns.map((campaign, i) => {
            const percent = Math.round(
              (campaign.raised / campaign.goal) * 100
            );

            return (
              <ScrollReveal key={campaign.id} delay={i * 150}>
                <div className="group flex h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
                  {/* Crimson sidebar */}
                  <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                    {getIcon(campaign.sevaType)}
                    <span
                      className="font-stat font-bold text-sm md:text-base uppercase tracking-wider"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "mixed",
                      }}
                    >
                      {percent}%
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 md:p-5">
                    <h3 className="font-serif text-base md:text-lg text-warm-900 leading-tight">
                      {campaign.title}
                    </h3>
                    <p
                      className="font-devanagari text-warm-500 text-xs md:text-sm mt-0.5"
                      lang="hi"
                    >
                      {campaign.titleHi}
                    </p>

                    {/* Progress bar */}
                    <div className="mt-3">
                      <div className="h-1.5 rounded-full bg-warm-100">
                        <div
                          className="h-full rounded-full bg-crimson-500 transition-all duration-500"
                          style={{ width: `${Math.min(percent, 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span className="text-warm-600 font-medium">
                          ₹{formatINR(campaign.raised)}
                        </span>
                        <span className="text-warm-500">
                          ₹{formatINR(campaign.goal)}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-warm-500 mt-2">
                      {campaign.donorCount} donors
                    </p>

                    <Link
                      href={`/campaigns/${campaign.slug}` as any}
                      className="inline-block text-sm font-semibold text-crimson-500 hover:text-crimson-600 mt-3 transition-colors duration-200"
                    >
                      Donate Now →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View All CTA */}
        <ScrollReveal delay={350}>
          <div className="flex justify-center mt-10 md:mt-12">
            <Link
              href={"/campaigns" as any}
              className="inline-flex items-center justify-center gap-2 rounded-xl font-sans font-bold px-8 py-3.5 text-sm bg-crimson-500 text-white shadow-md hover:bg-crimson-600 hover:shadow-lg active:scale-[0.98] transition-all duration-300 cursor-pointer select-none"
            >
              View All Campaigns →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
