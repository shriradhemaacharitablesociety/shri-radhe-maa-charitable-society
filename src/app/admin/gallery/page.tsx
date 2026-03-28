"use client";

import { useState } from "react";

type Category = "Events" | "Seva" | "Spiritual";

interface GalleryItem {
  id: number;
  caption: string;
  category: Category;
  date: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, caption: "Annual Bhandara at Rohini Ashram", category: "Events", date: "2026-03-20" },
  { id: 2, caption: "Free Medical Camp — Nangloi", category: "Seva", date: "2026-03-18" },
  { id: 3, caption: "Shri Radhe Guru Maa Satsang", category: "Spiritual", date: "2026-03-15" },
  { id: 4, caption: "Gaushala Seva at Vrindavan", category: "Seva", date: "2026-03-12" },
  { id: 5, caption: "Diwali Celebration with Devotees", category: "Events", date: "2026-03-10" },
  { id: 6, caption: "Blanket Distribution Drive", category: "Seva", date: "2026-03-08" },
  { id: 7, caption: "Morning Aarti Ceremony", category: "Spiritual", date: "2026-03-05" },
  { id: 8, caption: "Janseva Bhojan — 5000 Meals Served", category: "Events", date: "2026-03-01" },
];

const categoryColors: Record<Category, string> = {
  Events: "bg-saffron-100 text-saffron-700",
  Seva: "bg-green-100 text-green-700",
  Spiritual: "bg-crimson-50 text-crimson-600",
};

type FilterTab = "All" | Category;

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filtered = activeTab === "All" ? galleryItems : galleryItems.filter((g) => g.category === activeTab);

  return (
    <div className="space-y-6 font-sans p-4 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold text-warm-900">Gallery Management</h1>
        <button className="rounded-lg bg-crimson-500 px-4 py-2 text-sm font-medium text-white hover:bg-crimson-600">
          Upload Photo
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {(["All", "Events", "Seva", "Spiritual"] as FilterTab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              activeTab === tab
                ? "bg-crimson-500 text-white"
                : "border border-warm-200 text-warm-600 hover:bg-warm-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item) => (
          <div key={item.id} className="group rounded-xl border border-warm-100 bg-white shadow-sm overflow-hidden">
            {/* Placeholder Image */}
            <div className="flex h-44 items-center justify-center bg-warm-100">
              <svg className="h-10 w-10 text-warm-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[item.category]}`}>
                  {item.category}
                </span>
                <span className="text-xs text-warm-400">{item.date}</span>
              </div>
              <p className="text-sm font-medium text-warm-800">{item.caption}</p>
              <button className="mt-3 text-xs font-medium text-red-500 opacity-0 transition group-hover:opacity-100 hover:text-red-700">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
