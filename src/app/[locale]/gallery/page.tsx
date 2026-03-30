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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">गैलरी</span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">Gallery</h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              Moments from our seva activities, events, and spiritual programmes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid on White */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
