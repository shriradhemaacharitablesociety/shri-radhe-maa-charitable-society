"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SidebarCard } from "@/components/ui/SidebarCard";
import { IndianRupee, Wheat, Stethoscope, Users, Wrench, Megaphone, Landmark, Heart, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const supportTypes = [
  { icon: IndianRupee, title: "Financial Donations", titleHi: "वित्तीय दान", desc: "The society makes regular monetary contributions to registered gaushalas to fund their day-to-day operations — covering food, shelter maintenance, and the care of hundreds of cows." },
  { icon: Wheat, title: "Fodder & Grain Supply", titleHi: "चारा और अनाज आपूर्ति", desc: "Seasonal contributions of fodder, green grass, grain, and dry feed ensure that gaushalas can sustain their herds through summer scarcity and winter months alike." },
  { icon: Stethoscope, title: "Veterinary & Medical Aid", titleHi: "पशु चिकित्सा सहायता", desc: "Support for veterinary care, medicines, and treatment of injured or ill cows at shelter facilities — because every life in a gaushala deserves dignified care." },
  { icon: Users, title: "Volunteer Seva Days", titleHi: "सेवा दिवस", desc: "Organising group visits and seva days where volunteers clean, feed, and spend time with the cows — connecting community members with the practice of Gau Seva directly." },
  { icon: Wrench, title: "Infrastructure Support", titleHi: "ढाँचागत सहायता", desc: "Contributing towards shelter repairs, roofing, water facilities, and basic infrastructure improvements to ensure gaushalas can house their animals safely year-round." },
  { icon: Megaphone, title: "Awareness & Outreach", titleHi: "जागरूकता अभियान", desc: "Encouraging devotees, community members, and the broader public to participate in gaushala seva — spreading the cultural and spiritual significance of Gau Mata in Indian tradition." },
];

export function GaushalaSupportCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {supportTypes.map((item, i) => (
        <ScrollReveal key={item.title} delay={200 + i * 80}>
          <SidebarCard icon={item.icon} className="h-full">
            <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
            <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">{item.titleHi}</p>
            <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3">{item.desc}</p>
          </SidebarCard>
        </ScrollReveal>
      ))}
    </div>
  );
}

export function WhyMattersCards() {
  const whyMatters = [
    { icon: Landmark, title: "Cultural Heritage", titleHi: "सांस्कृतिक विरासत", desc: "The cow has been central to Indian civilisation for millennia — providing milk, supporting agriculture, and occupying a sacred place in religious practice." },
    { icon: Heart, title: "Spiritual Merit", titleHi: "आध्यात्मिक पुण्य", desc: "In Hindu tradition, serving Gau Mata is considered one of the highest acts of merit — directly aligned with the ideals of compassion, non-violence, and devotion." },
    { icon: Shield, title: "Saving Abandoned Cows", titleHi: "परित्यक्त गायों की देखभाल", desc: "Gaushalas rescue abandoned, injured, and elderly cows that would otherwise face neglect. Supporting them is a direct act of animal welfare and compassion." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {whyMatters.map((item, i) => (
        <ScrollReveal key={item.title} delay={750 + i * 80}>
          <SidebarCard icon={item.icon} className="h-full">
            <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
            <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">{item.titleHi}</p>
            <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3">{item.desc}</p>
          </SidebarCard>
        </ScrollReveal>
      ))}
    </div>
  );
}

export function DonationUsageCard() {
  return (
    <SidebarCard icon={IndianRupee} stat="100%" statLabel="Transparent">
      <div className="flex items-center gap-4 mb-4">
        <div>
          <h2 className="font-serif text-xl text-warm-900">How Your Donation Is Used</h2>
          <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">आपका दान कैसे उपयोग होता है</p>
        </div>
      </div>
      <p className="font-sans text-sm text-warm-600 leading-relaxed mb-6">
        Every rupee donated towards Gaushala Seva is directed transparently to the registered gaushalas we support. Here is how contributions are typically allocated:
      </p>
      <div className="space-y-4">
        {[
          { category: "Feed & Fodder for Cows", percent: 50, color: "bg-saffron-500" },
          { category: "Veterinary Care & Medicines", percent: 25, color: "bg-crimson-500" },
          { category: "Shelter Maintenance & Infrastructure", percent: 15, color: "bg-warm-400" },
          { category: "Operational Support", percent: 10, color: "bg-warm-300" },
        ].map((item) => (
          <div key={item.category}>
            <div className="flex justify-between mb-1.5">
              <span className="font-sans text-sm text-warm-700">{item.category}</span>
              <span className="font-stat text-sm font-bold text-crimson-500">{item.percent}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-warm-100">
              <div className={`h-2.5 rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="font-sans text-xs text-warm-500 mt-5">
        * Approximate figures based on typical gaushala support distributions.
      </p>
    </SidebarCard>
  );
}
