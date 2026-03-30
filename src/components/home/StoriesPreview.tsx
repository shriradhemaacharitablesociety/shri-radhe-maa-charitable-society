"use client";

import { stories, sevaTypeLabels } from "@/data/stories";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/Badge";
import {
  Stethoscope,
  Heart,
  Droplets,
  HeartHandshake,
  Church,
} from "lucide-react";
import type { Story } from "@/data/stories";

const sevaIcons: Record<Story["sevaType"], React.ReactNode> = {
  dialysis: <Stethoscope className="w-5 h-5 md:w-6 md:h-6" />,
  pension: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
  disaster: <Droplets className="w-5 h-5 md:w-6 md:h-6" />,
  divyang: <HeartHandshake className="w-5 h-5 md:w-6 md:h-6" />,
  marriage: <Church className="w-5 h-5 md:w-6 md:h-6" />,
  gaushala: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
};

export function StoriesPreview() {
  const featuredStories = stories.filter((story) => story.featured);

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-14">
            <span className="font-devanagari text-sm text-crimson-500 font-medium">
              प्रभाव की कहानियाँ
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 tracking-tight mt-1">
              Stories of Impact
            </h2>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 leading-relaxed max-w-xl mx-auto">
              Real lives transformed through compassion and seva
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredStories.map((story, i) => (
            <ScrollReveal key={story.id} delay={100 + i * 80} className="h-full">
              <div className="group flex h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
                <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                  {sevaIcons[story.sevaType]}
                  <span
                    className="font-stat font-bold text-sm md:text-base uppercase tracking-wider"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "mixed",
                    }}
                  >
                    {story.location}
                  </span>
                </div>
                <div className="flex-1 p-4 md:p-5">
                  <Badge variant="crimson">
                    {sevaTypeLabels[story.sevaType].en}
                  </Badge>
                  <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900 mt-2">
                    {story.name}
                  </h3>
                  <p className="font-devanagari text-warm-500 text-xs mt-0.5" lang="hi">
                    {story.nameHi}
                  </p>
                  <blockquote className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-2 italic">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <Link
                    href={`/stories/${story.id}`}
                    className="inline-block text-crimson-500 font-sans text-xs md:text-sm font-semibold mt-3 hover:text-crimson-600 transition-colors"
                  >
                    Read Story &rarr;
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-8 md:mt-12">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-crimson-500 text-white font-sans text-sm font-semibold hover:bg-crimson-600 transition-colors"
            >
              View All Stories &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
