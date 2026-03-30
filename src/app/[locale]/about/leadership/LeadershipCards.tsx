"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SidebarCard } from "@/components/ui/SidebarCard";
import { Heart, Users, Shield } from "lucide-react";

export function GovernanceCards() {
  const items = [
    { icon: Heart, role: "Patron", roleHi: "संरक्षक", desc: "Shri Radhe Guru Maa provides spiritual guidance and vision for all society activities." },
    { icon: Users, role: "General Secretary", roleHi: "महासचिव", desc: "Mr. Rupendra Kashyap oversees day-to-day operations, governance, and programme implementation." },
    { icon: Shield, role: "Board of Trustees", roleHi: "न्यासी मंडल", desc: "A dedicated group of trustees ensures financial oversight and strategic direction of the society." },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
      {items.map((item, i) => (
        <ScrollReveal key={item.role} delay={250 + i * 100}>
          <SidebarCard icon={item.icon} stat={`${i + 1}`} className="h-full">
            <h3 className="font-serif text-base text-warm-900">{item.role}</h3>
            <p className="font-devanagari text-xs text-warm-600/50 mt-0.5" lang="hi">{item.roleHi}</p>
            <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3">{item.desc}</p>
          </SidebarCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
