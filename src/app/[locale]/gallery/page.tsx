"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const filters = [
  { id: "all", label: "All", labelHi: "सभी" },
  { id: "events", label: "Events", labelHi: "आयोजन" },
  { id: "seva", label: "Seva", labelHi: "सेवा" },
  { id: "spiritual", label: "Spiritual", labelHi: "आध्यात्मिक" },
];

const photoPlaceholders = [
  { id: 1, category: "seva", caption: "Wheelchair Distribution Drive", captionHi: "व्हीलचेयर वितरण" },
  { id: 2, category: "events", caption: "Bhajan Jamming Programme", captionHi: "भजन जैमिंग" },
  { id: 3, category: "seva", caption: "Free Dialysis Centre, Anand Hospital", captionHi: "निःशुल्क डायलिसिस केन्द्र" },
  { id: 4, category: "spiritual", caption: "Sukhmani Sahib Paath", captionHi: "सुखमनी साहिब पाठ" },
  { id: 5, category: "seva", caption: "Punjab Flood Relief Operations", captionHi: "पंजाब बाढ़ राहत" },
  { id: 6, category: "events", caption: "Bhagwat Katha Event", captionHi: "भागवत कथा" },
  { id: 7, category: "seva", caption: "Winter Blanket Distribution", captionHi: "कंबल वितरण" },
  { id: 8, category: "spiritual", caption: "Blood Donation Camp", captionHi: "रक्तदान शिविर" },
];

const videoPlaceholders = [
  { id: 1, title: "Wheelchair Distribution Drive — Delhi", titleHi: "व्हीलचेयर वितरण — दिल्ली" },
  { id: 2, title: "Free Dialysis Centre Inauguration", titleHi: "निःशुल्क डायलिसिस केन्द्र उद्घाटन" },
  { id: 3, title: "Punjab Flood Relief — Islampur Village", titleHi: "पंजाब बाढ़ राहत — इस्लामपुर गाँव" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? photoPlaceholders
    : photoPlaceholders.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            title="Gallery"
            titleHi="गैलरी"
            subtitle="Moments from our seva activities, events, and spiritual programmes."
            className="mb-12"
          />
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-pill font-sans text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-crimson-500 text-white shadow-sm"
                    : "border border-warm-800/20 text-warm-800/70 hover:bg-warm-100 hover:text-warm-900"
                }`}
              >
                {filter.label}
                <span className="ml-1.5 font-devanagari text-xs opacity-70" lang="hi">{filter.labelHi}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filtered.map((photo, i) => (
            <ScrollReveal key={photo.id} delay={i * 80}>
              <div className="rounded-3xl border border-saffron-300/50 bg-warm-100/50 overflow-hidden group">
                {/* Placeholder image area */}
                <div className="aspect-[4/3] flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-warm-100 to-saffron-50/50 relative">
                  <svg className="w-10 h-10 text-warm-800/20" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <span className="font-sans text-xs text-warm-800/30">Photo coming soon</span>
                </div>
                {/* Caption */}
                <div className="p-4">
                  <p className="font-sans text-sm font-medium text-warm-900">{photo.caption}</p>
                  <p className="font-devanagari text-xs text-warm-800/50 mt-0.5" lang="hi">{photo.captionHi}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Videos section */}
        <ScrollReveal delay={300}>
          <h2 className="font-serif text-2xl text-warm-900 mb-2">Videos</h2>
          <p className="font-devanagari text-sm text-crimson-500 mb-6" lang="hi">वीडियो</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {videoPlaceholders.map((video, i) => (
            <ScrollReveal key={video.id} delay={350 + i * 100}>
              <div className="rounded-3xl border border-saffron-300/50 bg-warm-100/50 overflow-hidden">
                {/* Video placeholder */}
                <div className="aspect-video flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-warm-900/5 to-saffron-900/10 relative">
                  <div className="w-12 h-12 rounded-full bg-crimson-100 border border-crimson-200 flex items-center justify-center">
                    <svg className="w-5 h-5 text-crimson-500 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="font-sans text-xs text-warm-800/40">Video coming soon</span>
                </div>
                <div className="p-4">
                  <p className="font-sans text-sm font-medium text-warm-900">{video.title}</p>
                  <p className="font-devanagari text-xs text-warm-800/50 mt-0.5" lang="hi">{video.titleHi}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* YouTube CTA */}
        <ScrollReveal delay={700}>
          <div className="mt-10 text-center">
            <a
              href="https://www.youtube.com/@ShreeRadheMaa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-warm-800/20 text-warm-800/70 text-sm font-medium rounded-pill hover:bg-warm-100 hover:text-warm-900 transition-all duration-200 font-sans"
            >
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch more on YouTube — ShreeRadheMaa
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
