"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { stories, sevaTypeLabels, type Story } from "@/data/stories";

const filterTabs: { key: Story["sevaType"] | "all"; en: string; hi: string }[] = [
  { key: "all", en: "All", hi: "सभी" },
  { key: "dialysis", en: "Dialysis", hi: "डायलिसिस" },
  { key: "pension", en: "Pension", hi: "पेंशन" },
  { key: "divyang", en: "Divyang", hi: "दिव्यांग" },
  { key: "disaster", en: "Disaster", hi: "आपदा" },
  { key: "marriage", en: "Marriage", hi: "विवाह" },
];

export function StoriesClient() {
  const [activeFilter, setActiveFilter] = useState<Story["sevaType"] | "all">("all");

  const filtered =
    activeFilter === "all"
      ? stories
      : stories.filter((s) => s.sevaType === activeFilter);

  return (
    <>
      {/* Filter tabs */}
      <ScrollReveal delay={100}>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`
                inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-sans font-medium
                transition-all duration-300 cursor-pointer select-none
                ${
                  activeFilter === tab.key
                    ? "bg-crimson-500 text-white shadow-sm"
                    : "border border-warm-200 text-warm-600 hover:border-warm-300 hover:bg-cream"
                }
              `}
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              {tab.en}
              <span className="font-devanagari text-xs opacity-70">{tab.hi}</span>
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Stories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((story, i) => (
          <ScrollReveal key={story.id} delay={i * 120}>
            <Link href={`/stories/${story.id}`} className="block h-full">
              <Card className="h-full cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="crimson">
                      {sevaTypeLabels[story.sevaType].en}
                    </Badge>
                  </div>
                  <h3 className="font-serif text-xl text-warm-900 leading-tight group-hover:text-crimson-600 transition-colors">
                    {story.name}
                  </h3>
                  <p className="font-devanagari text-warm-800/50 text-sm mt-0.5" lang="hi">
                    {story.nameHi}
                  </p>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-warm-600 font-sans text-sm leading-relaxed italic border-l-2 border-crimson-200 pl-4 my-3">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-1.5 text-warm-500 text-xs font-sans mt-4">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {story.location}
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-crimson-500 text-sm font-semibold font-sans group-hover:gap-2.5 transition-all duration-300">
                    Read full story
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <ScrollReveal>
          <div className="text-center py-16">
            <p className="text-warm-500 font-sans text-sm">
              No stories found for this category yet.
            </p>
          </div>
        </ScrollReveal>
      )}
    </>
  );
}
