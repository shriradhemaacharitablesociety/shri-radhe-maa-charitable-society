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
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Impact Stories", url: "https://shriradhemasociety.org/stories" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Dark Hero */}
      <section className="bg-gradient-to-br from-warm-900 via-warm-800 to-crimson-900 py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-devanagari text-sm text-saffron-400 mb-3" lang="hi">प्रभाव की कहानियाँ</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">Impact Stories</h1>
            <p className="font-sans text-base text-white/70 max-w-2xl leading-relaxed">
              Real stories of lives transformed through seva. Every story is a testament to the power of compassion.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stories on White */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <StoriesClient />
        </div>
      </section>
    </>
  );
}
