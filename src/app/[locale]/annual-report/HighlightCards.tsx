"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SidebarCard } from "@/components/ui/SidebarCard";
import { Stethoscope, IndianRupee, Users, Accessibility } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const highlightIcons: LucideIcon[] = [Stethoscope, IndianRupee, Users, Accessibility];

interface Highlight {
  value: string;
  label: string;
  labelHi: string;
}

export function HighlightCards({ highlights, isHindi }: { highlights: Highlight[]; isHindi: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {highlights.map((stat, i) => {
        const Icon = highlightIcons[i] || Users;
        return (
          <ScrollReveal key={stat.label} delay={100 + i * 100}>
            <SidebarCard icon={Icon} stat={stat.value} className="h-full">
              <p className="text-warm-600 font-sans text-sm">
                {isHindi ? stat.labelHi : stat.label}
              </p>
            </SidebarCard>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
