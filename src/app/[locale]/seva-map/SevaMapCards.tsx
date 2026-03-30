"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SidebarCard } from "@/components/ui/SidebarCard";
import { MapPin, Building, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const statIcons: LucideIcon[] = [MapPin, Building, Users];

interface Stat {
  value: string;
  label: string;
  labelHi: string;
}

export function SevaMapStatCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 max-w-lg mx-auto">
      {stats.map((stat, i) => {
        const Icon = statIcons[i] || MapPin;
        return (
          <SidebarCard key={stat.label} icon={Icon} stat={stat.value}>
            <p className="font-sans text-sm text-warm-600">{stat.label}</p>
            <p className="font-devanagari text-xs text-warm-500 mt-0.5" lang="hi">{stat.labelHi}</p>
          </SidebarCard>
        );
      })}
    </div>
  );
}
