"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SidebarCard } from "@/components/ui/SidebarCard";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Mail, Share2 } from "lucide-react";

const offices = [
  {
    city: "Delhi",
    cityHi: "दिल्ली",
    address: "Plot No. 5, Pocket-11, Sector-5,\nRohini, New Delhi – 110085",
    phone: "95608 00343",
    phoneFull: "+919560800343",
    type: "Head Office",
  },
  {
    city: "Mumbai",
    cityHi: "मुंबई",
    address: "Shree Ram Trade Centre, 6th Floor,\nS.V.P. Road, Nr. Chamunda Circle,\nBorivali (W), Mumbai – 400092",
    phone: "98209 69020",
    phoneFull: "+919820969020",
    type: "Branch Office",
  },
];

export function OfficeCards() {
  return (
    <div className="flex flex-col gap-5">
      {offices.map((office, i) => (
        <ScrollReveal key={office.city} delay={200 + i * 100}>
          <SidebarCard icon={MapPin} stat={office.city}>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant={i === 0 ? "crimson" : "gold"}>{office.type}</Badge>
            </div>
            <p className="font-devanagari text-xs text-warm-800/50 mt-0.5 mb-2" lang="hi">{office.cityHi}</p>
            <address className="font-sans text-sm text-warm-800/70 not-italic leading-relaxed whitespace-pre-line mb-3">
              {office.address}
            </address>
            <a
              href={`tel:${office.phoneFull}`}
              className="flex items-center gap-2 font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              {office.phone}
            </a>
          </SidebarCard>
        </ScrollReveal>
      ))}

      {/* Email */}
      <ScrollReveal delay={400}>
        <SidebarCard icon={Mail} stat="EMAIL">
          <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-2">Email</p>
          <a
            href="mailto:shriradhemaacharitablesociety@gmail.com"
            className="font-sans text-[11px] md:text-sm text-crimson-500 hover:text-crimson-600 transition-colors break-all leading-relaxed"
          >
            shriradhemaacharitablesociety@gmail.com
          </a>
        </SidebarCard>
      </ScrollReveal>

      {/* Social */}
      <ScrollReveal delay={500}>
        <SidebarCard icon={Share2} stat="SOCIAL">
          <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-3">Follow Us</p>
          <div className="flex flex-col gap-2">
            {[
              { label: "Instagram", handle: "@shreeradhemaa", href: "https://www.instagram.com/shreeradhemaa" },
              { label: "Facebook", handle: "ShriRadheMaa", href: "https://www.facebook.com/ShriRadheMaa" },
              { label: "YouTube", handle: "ShreeRadheMaa", href: "https://www.youtube.com/@ShreeRadheMaa" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between font-sans text-sm text-warm-800/70 hover:text-warm-900 transition-colors group"
              >
                <span>{social.label}</span>
                <span className="text-warm-800/40 group-hover:text-crimson-500 transition-colors text-xs">{social.handle}</span>
              </a>
            ))}
          </div>
        </SidebarCard>
      </ScrollReveal>
    </div>
  );
}
