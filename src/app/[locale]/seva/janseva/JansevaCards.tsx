"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SidebarCard } from "@/components/ui/SidebarCard";
import { Accessibility, Music, Shirt, Package, UtensilsCrossed, Box, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "Wheelchair Distribution": Accessibility,
  "Instruments for Specially Abled": Music,
  "Blanket Distribution": Shirt,
  "Clothing Distribution": Shirt,
  "Ann Seva — Food Distribution": UtensilsCrossed,
  "Essential Items Distribution": Box,
};

const activities = [
  { title: "Wheelchair Distribution", titleHi: "व्हीलचेयर वितरण", desc: "Wheelchairs are provided free of charge to differently-abled individuals who cannot afford mobility aids. Each wheelchair restores independence, dignity, and the ability to participate in community life.", detail: "For divyang individuals" },
  { title: "Instruments for Specially Abled", titleHi: "दिव्यांगों के लिए उपकरण", desc: "Musical instruments and assistive devices are distributed to specially-abled individuals as a means of livelihood, therapy, and creative expression — enabling them to earn with dignity.", detail: "Livelihood & therapy" },
  { title: "Blanket Distribution", titleHi: "कंबल वितरण", desc: "During winter months, blankets are distributed to the homeless and poor to protect them from the cold — a simple but life-saving act of seva.", detail: "Winter relief drives" },
  { title: "Clothing Distribution", titleHi: "वस्त्र वितरण", desc: "New and quality clothing is distributed to families and individuals in need, especially during festive seasons and after disaster events.", detail: "Festive & year-round" },
  { title: "Ann Seva — Food Distribution", titleHi: "अन्न सेवा — भोजन वितरण", desc: "Regular food distribution (Ann Seva) ensures that no one in our community goes hungry. Nutritious meals and food packets are distributed at regular intervals.", detail: "Regular distributions" },
  { title: "Essential Items Distribution", titleHi: "आवश्यक वस्तुओं का वितरण", desc: "Essential household items — toiletries, grocery staples, medicines, and daily necessities — are provided to families in need.", detail: "Daily necessities" },
];

export function JansevaActivityCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {activities.map((activity, i) => {
        const Icon = iconMap[activity.title] || Package;
        return (
          <ScrollReveal key={activity.title} delay={250 + i * 80}>
            <SidebarCard icon={Icon} stat={activity.detail.split(" ")[0]} statLabel={activity.detail.split(" ").slice(1).join(" ")} className="h-full">
              <h3 className="font-serif text-lg text-warm-900">{activity.title}</h3>
              <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">{activity.titleHi}</p>
              <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3">{activity.desc}</p>
            </SidebarCard>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

export function DivyangSevaCards() {
  const items = [
    { icon: Accessibility, label: "Wheelchairs", desc: "Free mobility aids to restore independence" },
    { icon: Music, label: "Instruments", desc: "Tools for livelihood and creative expression" },
    { icon: HeartHandshake, label: "Ongoing Support", desc: "Continued follow-up and community care" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
      {items.map((item) => (
        <SidebarCard key={item.label} icon={item.icon} className="h-full">
          <p className="font-sans text-sm font-semibold text-warm-900">{item.label}</p>
          <p className="font-sans text-xs text-warm-600 mt-1">{item.desc}</p>
        </SidebarCard>
      ))}
    </div>
  );
}
