import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
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
      ? "गैलरी | सेवा गतिविधियाँ और आयोजन"
      : "Gallery | Seva Activities & Events | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "व्हीलचेयर वितरण, बाढ़ राहत, रक्तदान, भजन जैमिंग और सेवा गतिविधियों की तस्वीरें और वीडियो।"
      : "Photos and videos from wheelchair distribution drives, flood relief, blood donation camps, bhajan programmes, and seva activities.",
    keywords: isHindi
      ? ["गैलरी", "सेवा तस्वीरें", "व्हीलचेयर वितरण", "भजन", "राहत शिविर"]
      : ["gallery", "seva photos", "wheelchair distribution", "bhajan programme", "NGO activities India"],
    alternates: { languages: { "en-IN": "/en/gallery", "hi-IN": "/hi/gallery" } },
    openGraph: {
      title: "Gallery — Shri Radhe Maa Charitable Society",
      description: "Moments from our seva activities, events, and spiritual programmes.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

export default function GalleryPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Gallery", url: "https://shriradhemasociety.org/gallery" },
  ]);

  return (
    <div className="pt-28 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Gallery"
            titleHi="गैलरी"
            subtitle="Moments from our seva activities, events, and spiritual programmes."
            className="mb-12"
          />
        </ScrollReveal>

        <GalleryGrid />
      </div>
    </div>
  );
}
