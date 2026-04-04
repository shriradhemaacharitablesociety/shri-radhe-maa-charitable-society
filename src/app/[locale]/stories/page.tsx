import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd } from "@/lib/seo";
import { StoriesClient } from "./StoriesClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "प्रभाव की कहानियाँ | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Impact Stories | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी की सेवा से बदले जीवन की प्रेरणादायक कहानियाँ। निःशुल्क डायलिसिस, मासिक पेंशन, दिव्यांग सेवा और आपदा राहत।"
      : "Inspiring stories of lives transformed through Shri Radhe Maa Charitable Society. Free dialysis, monthly pension, divyang seva, and disaster relief beneficiaries share their experiences.",
    keywords: isHindi
      ? ["प्रभाव कहानियाँ", "लाभार्थी", "सेवा कहानियाँ", "चैरिटी प्रभाव", "श्री राधे माँ सोसाइटी"]
      : ["impact stories", "beneficiary stories", "charity impact", "NGO stories", "Shri Radhe Maa Society"],
    alternates: { languages: { "en-IN": "/en/stories", "hi-IN": "/hi/stories" } },
    openGraph: {
      title: "Impact Stories | Shri Radhe Maa Charitable Society",
      description: "Real stories of lives transformed through seva and compassion.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function StoriesPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://srmcs.org" },
    { name: "Impact Stories", url: "https://srmcs.org/stories" },
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
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">प्रभाव की कहानियाँ</span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">Impact Stories</h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              Real stories of lives transformed through seva. Every story is a testament to the power of compassion.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stories on White */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <StoriesClient />
        </div>
      </section>
    </>
  );
}
