"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SidebarCard } from "@/components/ui/SidebarCard";
import { Phone, FolderOpen, HandHeart, Stethoscope, CalendarDays, Package, FileText, Megaphone, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stepData = [
  { step: "1", icon: Phone, title: "Apply", titleHi: "आवेदन करें", desc: "Call us at 95608 00343 or email shriradhemaacharitablesociety@gmail.com expressing your interest. Tell us who you are and how you'd like to help." },
  { step: "2", icon: FolderOpen, title: "Get Assigned", titleHi: "भूमिका प्राप्त करें", desc: "Share your skills, availability, and preferred seva area. Our team will match you with the most suitable programme or drive and brief you fully." },
  { step: "3", icon: HandHeart, title: "Serve", titleHi: "सेवा करें", desc: "Attend an orientation, meet the team, and begin your seva journey. We support every volunteer with guidance, resources, and a welcoming community." },
];

export function VolunteerStepCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      {stepData.map((item) => (
        <ScrollReveal key={item.step} delay={200}>
          <SidebarCard icon={item.icon} stat={item.step} className="h-full">
            <h3 className="font-serif text-lg text-warm-900">{item.title}</h3>
            <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">{item.titleHi}</p>
            <p className="font-sans text-sm text-warm-800/60 leading-relaxed mt-2">{item.desc}</p>
          </SidebarCard>
        </ScrollReveal>
      ))}
    </div>
  );
}

const roleIcons: Record<string, LucideIcon> = {
  "Healthcare Support": Stethoscope,
  "Event Coordination": CalendarDays,
  "Distribution Drives": Package,
  "Documentation": FileText,
  "Community Outreach": Megaphone,
  "Administration & Digital": Monitor,
};

const volunteerRoles = [
  { title: "Healthcare Support", titleHi: "स्वास्थ्य सेवा सहयोग", desc: "Assist at blood donation camps, eye and dental check-up drives, and at the free dialysis centre in Mumbai. Medical background helpful but not required." },
  { title: "Event Coordination", titleHi: "आयोजन समन्वय", desc: "Help plan, organise, and execute bhajan programmes, katha events, health camps, and annual seva drives. Skills in logistics, communication, or event management valued." },
  { title: "Distribution Drives", titleHi: "वितरण अभियान", desc: "Participate in wheelchair, blanket, clothing, food, and essential items distribution. Physical presence on drive days, with loading, sorting, and direct handover to beneficiaries." },
  { title: "Documentation", titleHi: "दस्तावेज़ीकरण", desc: "Help document society activities through photography, video, and written reports. Maintain beneficiary records, prepare impact reports, and support audit-readiness." },
  { title: "Community Outreach", titleHi: "सामुदायिक आउटरीच", desc: "Identify families in need, spread awareness about programmes, build community connections, and help reach the most marginalised beneficiaries. Multilingual skills welcome." },
  { title: "Administration & Digital", titleHi: "प्रशासन और डिजिटल", desc: "Support office administration, social media, website updates, digital outreach, and correspondence. Skills in MS Office, Canva, or social media management are a plus." },
];

export function VolunteerRoleCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
      {volunteerRoles.map((role, i) => {
        const Icon = roleIcons[role.title] || Stethoscope;
        return (
          <ScrollReveal key={role.title} delay={450 + i * 80}>
            <SidebarCard icon={Icon} className="h-full">
              <h3 className="font-serif text-lg text-warm-900">{role.title}</h3>
              <p className="font-devanagari text-sm text-warm-800/50 mt-0.5" lang="hi">{role.titleHi}</p>
              <p className="font-sans text-sm text-warm-800/60 leading-relaxed mt-2">{role.desc}</p>
            </SidebarCard>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
