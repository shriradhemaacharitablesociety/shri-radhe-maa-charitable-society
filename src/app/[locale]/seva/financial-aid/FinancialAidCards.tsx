"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SidebarCard } from "@/components/ui/SidebarCard";
import { Heart, IndianRupee, Church, Building } from "lucide-react";

export function FinancialAidCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {/* Monthly Pensions */}
      <ScrollReveal delay={150}>
        <SidebarCard icon={Heart} stat="100+" statLabel="Monthly" className="h-full">
          <h3 className="font-serif text-xl text-warm-900">Monthly Pension Programme</h3>
          <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">मासिक पेंशन कार्यक्रम</p>
          <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3 mb-4">
            The society provides regular monthly pensions to over <strong className="text-warm-900">100 families</strong> across Delhi and NCR. These are families living in poverty — often elderly individuals or households that have lost their primary earner.
          </p>
        </SidebarCard>
      </ScrollReveal>

      {/* One-time Aid */}
      <ScrollReveal delay={200}>
        <SidebarCard icon={IndianRupee} stat="Aid" statLabel="Emergency" className="h-full">
          <h3 className="font-serif text-xl text-warm-900">One-Time Financial Assistance</h3>
          <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">एकमुश्त वित्तीय सहायता</p>
          <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3 mb-3">
            For families facing sudden crises — medical emergencies, job loss, or other urgent situations — the society provides one-time financial assistance.
          </p>
          <ul className="space-y-2">
            {["Medical emergency support", "Job loss and income disruption", "Urgent household crises", "Post-disaster recovery aid"].map((item) => (
              <li key={item} className="flex items-center gap-2 font-sans text-sm text-warm-600">
                <span className="w-5 h-5 rounded-full bg-crimson-500 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </SidebarCard>
      </ScrollReveal>

      {/* Marriage Assistance */}
      <ScrollReveal delay={250} className="md:col-span-2">
        <SidebarCard icon={Church} stat="5" statLabel="Items" className="h-full">
          <h3 className="font-serif text-xl text-warm-900">Marriage Assistance</h3>
          <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">विवाह सहायता</p>
          <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3 mb-4">
            Marriages can be financially overwhelming for poor families. The society provides a package of <strong className="text-warm-900">5 essential items per family</strong> to help ease the burden.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-warm-50 border border-warm-200 px-5 py-4">
              <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-3">Assistance Package (5 items)</p>
              <ul className="space-y-1.5">
                {["Essential household items", "Clothing and textiles", "Kitchen essentials", "Religious ceremony items", "Practical utility items"].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-sans text-sm text-warm-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-3">
              <div className="rounded-xl bg-warm-50 border border-warm-200 px-4 py-3">
                <p className="font-sans text-xs text-warm-800/50 uppercase tracking-wider mb-1">Who is eligible</p>
                <p className="font-sans text-sm text-warm-900">Families from economically weaker sections facing financial hardship at time of marriage</p>
              </div>
            </div>
          </div>
        </SidebarCard>
      </ScrollReveal>
    </div>
  );
}

export function GovtContributionCards() {
  const items = [
    { fund: "PM Cares Fund", amount: "₹10 Lakh", desc: "Contribution to the Prime Minister's Citizen Assistance and Relief in Emergency Situations Fund." },
    { fund: "Delhi CM Relief Fund", amount: "₹5 Lakh", desc: "Contribution to the Chief Minister of Delhi's Relief Fund for welfare and emergency assistance." },
    { fund: "Punjab CM Relief Fund", amount: "₹5 Lakh", desc: "Contribution to the Chief Minister of Punjab's Relief Fund — including COVID-19 pandemic relief." },
    { fund: "Maharashtra CM Relief Fund", amount: "₹5 Lakh", desc: "Contribution to the Chief Minister of Maharashtra's Relief Fund for flood relief and disaster response." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {items.map((item, i) => (
        <ScrollReveal key={item.fund} delay={450 + i * 80}>
          <SidebarCard icon={Building} stat={item.amount} className="h-full">
            <h3 className="font-serif text-lg text-warm-900">{item.fund}</h3>
            <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3">{item.desc}</p>
          </SidebarCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
