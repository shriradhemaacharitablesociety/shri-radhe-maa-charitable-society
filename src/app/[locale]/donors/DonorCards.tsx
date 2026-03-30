"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SidebarCard } from "@/components/ui/SidebarCard";
import { Users, Heart, Star, Accessibility } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const statIcons: LucideIcon[] = [Users, Heart, Star, Accessibility];

interface CommunityStat {
  value: string;
  label: string;
  labelHi: string;
}

export function DonorStatCards({ stats }: { stats: CommunityStat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10">
      {stats.map((stat, i) => {
        const Icon = statIcons[i] || Users;
        return (
          <ScrollReveal key={stat.label} delay={150 + i * 80}>
            <SidebarCard icon={Icon} stat={stat.value} className="h-full">
              <span className="font-sans text-xs uppercase tracking-wider text-warm-600 block">
                {stat.label}
              </span>
            </SidebarCard>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
