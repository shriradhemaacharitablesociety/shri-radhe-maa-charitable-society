"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SidebarCard } from "@/components/ui/SidebarCard";
import { Stethoscope, Accessibility, GraduationCap, Droplets, Heart, Wheat } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const csrOpportunities: { icon: LucideIcon; title: string; titleHi: string; desc: string }[] = [
  { icon: Stethoscope, title: "Healthcare Sponsorship", titleHi: "स्वास्थ्य सेवा प्रायोजन", desc: "Sponsor dialysis sessions, blood donation camps, or eye and dental check-up drives for underprivileged communities." },
  { icon: Accessibility, title: "Divyang Welfare", titleHi: "दिव्यांग कल्याण", desc: "Fund wheelchair procurement, assistive devices, and livelihood support for specially-abled individuals." },
  { icon: GraduationCap, title: "Education & Skill Development", titleHi: "शिक्षा और कौशल विकास", desc: "Support educational initiatives and skill development programmes for underprivileged youth and families." },
  { icon: Droplets, title: "Disaster Relief Fund", titleHi: "आपदा राहत कोष", desc: "Contribute to our disaster relief reserve to enable rapid response when calamities strike across India." },
  { icon: Heart, title: "Pension & Financial Aid", titleHi: "पेंशन और वित्तीय सहायता", desc: "Sponsor monthly pensions for elderly or destitute families — an ongoing, high-impact contribution." },
  { icon: Wheat, title: "Gaushala & Environment", titleHi: "गौशाला और पर्यावरण", desc: "Support cow shelter (gaushala) operations as a culturally meaningful and eco-conscious CSR activity." },
];

export function CSROpportunityCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
      {csrOpportunities.map((item, i) => (
        <ScrollReveal key={item.title} delay={250 + i * 80}>
          <SidebarCard icon={item.icon} className="h-full">
            <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
            <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">{item.titleHi}</p>
            <p className="font-sans text-sm text-warm-800/60 leading-relaxed mt-2">{item.desc}</p>
          </SidebarCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
