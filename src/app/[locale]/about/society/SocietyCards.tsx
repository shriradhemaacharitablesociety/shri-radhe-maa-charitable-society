"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SidebarCard } from "@/components/ui/SidebarCard";
import { Stethoscope, IndianRupee, Droplets, Accessibility, Wheat, Music, MapPin, Phone, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const activities: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Stethoscope, title: "Healthcare", desc: "Free dialysis centre, ambulance service, blood donation camps, eye and dental check-ups." },
  { icon: IndianRupee, title: "Financial Aid", desc: "Monthly pensions, one-time assistance, and marriage support for 100+ families." },
  { icon: Droplets, title: "Disaster Relief", desc: "Rapid response to floods, earthquakes, and the COVID-19 pandemic across multiple states." },
  { icon: Accessibility, title: "Janseva Abhiyan", desc: "Wheelchair and instrument distribution, clothing, food, and essential items for the specially abled." },
  { icon: Wheat, title: "Gaushala Seva", desc: "Donations and support to cow shelters (gaushalas) as an act of cultural and spiritual service." },
  { icon: Music, title: "Spiritual Events", desc: "Bhajan programmes, Sukhmani Sahib Paath, and Bhagwat Katha for community upliftment." },
];

export function SocietyActivityCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {activities.map((item, i) => (
        <ScrollReveal key={item.title} delay={350 + i * 80}>
          <SidebarCard icon={item.icon} className="h-full">
            <h3 className="font-serif text-base text-warm-900">{item.title}</h3>
            <p className="font-sans text-sm text-warm-600 leading-relaxed mt-2">{item.desc}</p>
          </SidebarCard>
        </ScrollReveal>
      ))}
    </div>
  );
}

export function SocietyContactCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ScrollReveal delay={800}>
        <SidebarCard icon={MapPin} stat="Delhi" statLabel="Office">
          <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Office Address</p>
          <address className="font-sans text-sm text-warm-800 not-italic leading-relaxed">
            Plot No. 5, Pocket-11, Sector-5,<br />
            Rohini, New Delhi – 110085
          </address>
        </SidebarCard>
      </ScrollReveal>
      <ScrollReveal delay={850}>
        <SidebarCard icon={Phone} className="h-full">
          <div className="space-y-4">
            <div>
              <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Phone</p>
              <a href="tel:+919560800343" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">
                95608 00343
              </a>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Email</p>
              <a href="mailto:shriradhemaacharitablesociety@gmail.com" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors break-all">
                shriradhemaacharitablesociety@gmail.com
              </a>
            </div>
          </div>
        </SidebarCard>
      </ScrollReveal>
    </div>
  );
}
