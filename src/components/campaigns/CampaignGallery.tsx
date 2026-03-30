"use client";

import { useState } from "react";
import { Camera, PlayCircle, X, ChevronLeft, ChevronRight } from "lucide-react";

interface MediaItem {
  id: string;
  type: "photo" | "video";
  url: string;
  caption?: string;
  captionHi?: string;
  order: number;
}

interface CampaignGalleryProps {
  media: MediaItem[];
}

export function CampaignGallery({ media }: CampaignGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const sorted = [...media].sort((a, b) => a.order - b.order);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % sorted.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + sorted.length) % sorted.length);
    }
  };

  const current = selectedIndex !== null ? sorted[selectedIndex] : null;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {sorted.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => openLightbox(index)}
            className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-500 rounded-xl"
          >
            <div className="aspect-[4/3] bg-warm-100 rounded-xl relative flex items-center justify-center overflow-hidden">
              <Camera className="w-8 h-8 text-warm-300" aria-hidden="true" />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-10 h-10 text-warm-400/80 drop-shadow-sm" aria-hidden="true" />
                </div>
              )}
            </div>
            {item.caption && (
              <p className="text-xs text-warm-600 mt-1.5 line-clamp-2">{item.caption}</p>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && current && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Media lightbox"
        >
          <div
            className="relative w-full max-w-3xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Media placeholder */}
            <div className="aspect-[4/3] bg-warm-100 rounded-xl flex items-center justify-center relative">
              <Camera className="w-16 h-16 text-warm-300" aria-hidden="true" />
              {current.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-warm-400/80" aria-hidden="true" />
                </div>
              )}
            </div>

            {/* Caption */}
            {(current.caption || current.captionHi) && (
              <div className="mt-3 text-center">
                {current.caption && (
                  <p className="text-white text-sm">{current.caption}</p>
                )}
                {current.captionHi && (
                  <p className="text-white/70 text-xs font-devanagari mt-0.5" lang="hi">
                    {current.captionHi}
                  </p>
                )}
              </div>
            )}

            {/* Navigation arrows */}
            {sorted.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute top-1/2 -left-12 md:-left-14 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute top-1/2 -right-12 md:-right-14 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
                  aria-label="Next"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
