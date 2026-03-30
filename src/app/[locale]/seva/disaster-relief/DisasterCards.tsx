"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SidebarCard } from "@/components/ui/SidebarCard";
import { Droplets, CloudRain, Mountain, Bug, Zap, Search, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "Punjab": Droplets,
  "Kerala": CloudRain,
  "Nepal": Mountain,
  "COVID-19": Bug,
  "Maharashtra": Droplets,
};

const reliefOperations = [
  {
    badge: "Punjab",
    title: "Punjab Floods — Islampur Village",
    titleHi: "पंजाब बाढ़ — इस्लामपुर गांव",
    desc: "When devastating floods struck Punjab, the society adopted Islampur village in its entirety. Teams were deployed to assess damage, and the society funded the rebuilding of homes for all affected families.",
    highlight: "Adopted entire village",
    details: [
      "Complete village adoption and needs assessment",
      "Funded home rebuilding for all affected families",
      "Distributed essential relief supplies and food",
      "Provided clothing and blankets to displaced residents",
    ],
  },
  {
    badge: "Kerala",
    title: "Kerala Flood Relief",
    titleHi: "केरल बाढ़ राहत",
    desc: "During Kerala's catastrophic floods, the society mobilised relief material, essential supplies, and financial aid to affected communities.",
    highlight: "On-ground relief",
    details: [
      "Rapid deployment of relief materials and essential supplies",
      "Financial aid to affected families",
      "Food and drinking water distribution",
      "Coordination with local NGOs and relief agencies",
    ],
  },
  {
    badge: "Nepal",
    title: "Nepal Earthquake Relief",
    titleHi: "नेपाल भूकंप राहत",
    desc: "Following the devastating Nepal earthquake, the society extended its humanitarian work beyond India's borders with emergency relief kits, food, clothing, and financial contributions.",
    highlight: "Cross-border aid",
    details: [
      "Emergency relief kits to earthquake survivors",
      "Food, clothing, and essential supplies",
      "Financial contributions towards reconstruction",
      "Cross-border coordination of humanitarian aid",
    ],
  },
  {
    badge: "Maharashtra",
    title: "Maharashtra Flood Relief",
    titleHi: "महाराष्ट्र बाढ़ राहत",
    desc: "Maharashtra's flood-affected families received direct aid including food, clothing, essential items, and financial support to rebuild their lives.",
    highlight: "Direct aid delivery",
    details: [
      "Direct food and clothing distribution",
      "Essential household item kits",
      "Financial support for rebuilding livelihoods",
      "Post-flood follow-up care",
    ],
  },
  {
    badge: "COVID-19",
    title: "COVID-19 Relief",
    titleHi: "कोविड-19 राहत",
    desc: "During the COVID-19 pandemic, the society contributed ₹5 lakh to the Punjab CM Relief Fund and distributed food and essential items to affected families across Delhi.",
    highlight: "₹5L to Punjab CM Fund",
    details: [
      "₹5 lakh contributed to Punjab CM Relief Fund",
      "Food distribution to affected Delhi families",
      "Essential items provided to those who lost income",
      "Support for migrant workers and daily wage earners",
    ],
  },
];

export function DisasterReliefCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {reliefOperations.map((op, i) => {
        const Icon = iconMap[op.badge] || Droplets;
        return (
          <ScrollReveal key={op.title} delay={200 + i * 100}>
            <SidebarCard icon={Icon} stat={op.badge} className="h-full">
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-saffron-100 text-saffron-700 text-xs font-medium font-sans">{op.highlight}</span>
              </div>
              <h3 className="font-serif text-xl text-warm-900">{op.title}</h3>
              <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">{op.titleHi}</p>
              <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3 mb-3">{op.desc}</p>
              <ul className="space-y-2">
                {op.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 font-sans text-sm text-warm-600">
                    <span className="w-5 h-5 rounded-full bg-crimson-500 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </SidebarCard>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

export function ApproachCards() {
  const items = [
    { step: "1", icon: Zap, title: "Rapid Response", titleHi: "त्वरित प्रतिक्रिया", desc: "We mobilise within days of a disaster, deploying teams and resources to affected areas before conditions worsen." },
    { step: "2", icon: Search, title: "Needs Assessment", titleHi: "आवश्यकता आकलन", desc: "Ground teams assess actual needs before distributing aid — ensuring maximum impact and no duplication." },
    { step: "3", icon: HeartHandshake, title: "Sustained Support", titleHi: "निरंतर सहयोग", desc: "We don't just respond — we follow up to help communities rebuild over time, not just survive the immediate crisis." },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
      {items.map((item) => (
        <ScrollReveal key={item.step} delay={900}>
          <SidebarCard icon={item.icon} stat={item.step} className="h-full">
            <h3 className="font-sans text-base font-semibold text-warm-900 mb-0.5">{item.title}</h3>
            <p className="font-devanagari text-xs text-warm-600/50 mb-3" lang="hi">{item.titleHi}</p>
            <p className="font-sans text-sm text-warm-600 leading-relaxed">{item.desc}</p>
          </SidebarCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
