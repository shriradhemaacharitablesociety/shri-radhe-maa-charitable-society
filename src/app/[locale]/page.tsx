import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { AboutStrip } from "@/components/home/AboutStrip";
import { SevaGrid } from "@/components/home/SevaGrid";
import { ImpactCounter } from "@/components/home/ImpactCounter";
import { EventCards } from "@/components/home/EventCards";
import { DonateCTA } from "@/components/home/DonateCTA";
import { NewsletterStrip } from "@/components/home/NewsletterStrip";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी | मुफ्त डायलिसिस, बाढ़ राहत, दिव्यांग सेवा"
      : "Shri Radhe Maa Charitable Society | Free Dialysis, Disaster Relief, Divyang Seva",
    description: isHindi
      ? "श्री राधे गुरु माँ के मार्गदर्शन में स्थापित चैरिटेबल सोसाइटी। निःशुल्क डायलिसिस, मासिक पेंशन, बाढ़ राहत, दिव्यांग सेवा, विवाह सहायता। 80G कर छूट।"
      : "Registered charitable society under Shri Radhe Guru Maa. Free dialysis centre, monthly pensions, flood relief, divyang seva, marriage assistance. 80G tax exemption.",
    keywords: isHindi
      ? ["श्री राधे माँ", "चैरिटेबल सोसाइटी", "मुफ्त डायलिसिस", "दान", "समाज सेवा", "दिव्यांग सेवा", "बाढ़ राहत"]
      : ["Shri Radhe Maa", "charitable society", "free dialysis", "donation", "social service", "divyang seva", "disaster relief"],
    alternates: {
      languages: {
        "en-IN": "/en",
        "hi-IN": "/hi",
      },
    },
    openGraph: {
      title: "Shri Radhe Maa Charitable Society | श्री राधे माँ चैरिटेबल सोसाइटी",
      description: "Serving humanity through compassion since 2017",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Shri Radhe Maa Charitable Society",
      description: "Free dialysis, disaster relief, monthly pensions & divyang seva since 2017.",
    },
  };
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <AboutStrip />
      <SevaGrid />
      <ImpactCounter />
      <EventCards />
      <NewsletterStrip />
      <DonateCTA />
    </main>
  );
}
