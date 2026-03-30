"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Stethoscope, Ambulance, Droplets, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function SidebarCard({
  icon: Icon,
  stat,
  statLabel,
  children,
  delay = 0,
  className = "",
}: {
  icon: LucideIcon;
  stat: string;
  statLabel: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className={`flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white h-full ${className}`}>
        <div className="shrink-0 w-20 md:w-24 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500">
          <Icon className="w-7 h-7" />
          <div className="text-center">
            <span className="font-stat text-lg md:text-xl font-black block">{stat}</span>
            <span className="text-[9px] uppercase tracking-wider font-semibold opacity-80">{statLabel}</span>
          </div>
        </div>
        <div className="flex-1 p-4 md:p-5">
          {children}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function HealthcareCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {/* 1. Dialysis */}
      <SidebarCard icon={Stethoscope} stat="Free" statLabel="For All" delay={150}>
        <span className="inline-block px-3 py-1 rounded-full bg-saffron-100 text-saffron-700 text-xs font-semibold font-sans uppercase tracking-wider mb-3">Flagship Programme</span>
        <h3 className="font-serif text-xl text-warm-900">Free Kidney Dialysis Centre</h3>
        <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">निःशुल्क किडनी डायलिसिस केन्द्र</p>
        <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3 mb-4">
          In partnership with the <strong className="text-warm-900">Taramati Charitable Foundation</strong>, the society operates a free kidney dialysis centre at Anand Hospital, Dahisar, Mumbai. All dialysis sessions are provided at absolutely no cost to patients.
        </p>
        <div className="space-y-2 mb-3">
          <div>
            <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-0.5">Location</p>
            <address className="font-sans text-sm text-warm-800/80 not-italic leading-relaxed">
              2nd Floor, Anand Hospital, Dahisar Village,<br />
              Anand Nagar, Dahisar East, Mumbai – 400068
            </address>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-0.5">Contact</p>
            <div className="flex flex-wrap gap-2">
              <a href="tel:+918657067228" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">86570 67228</a>
              <span className="text-warm-800/30">/</span>
              <a href="tel:+919892154615" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">98921 54615</a>
            </div>
          </div>
          <div>
            <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-0.5">Partner</p>
            <p className="font-sans text-sm text-warm-800/80">Taramati Charitable Foundation</p>
          </div>
        </div>
      </SidebarCard>

      {/* 2. Ambulance */}
      <SidebarCard icon={Ambulance} stat="24/7" statLabel="Service" delay={200}>
        <h3 className="font-serif text-xl text-warm-900">Free Ambulance Service</h3>
        <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">निःशुल्क एम्बुलेंस सेवा</p>
        <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3 mb-3">
          The society provides a free ambulance service to <strong className="text-warm-900">Satyam Charitable Hospital</strong>, ensuring that patients in need can reach medical care without bearing transport costs.
        </p>
        <p className="font-sans text-sm text-warm-600 leading-relaxed mb-4">
          The ambulance is available to serve patients who need emergency transport or scheduled hospital visits and cannot afford private ambulance fees.
        </p>
        <div className="rounded-xl bg-saffron-50 border border-saffron-200/60 px-4 py-3">
          <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Doctor Contact</p>
          <p className="font-sans text-sm font-semibold text-warm-900">Dr. Ramrao Athankar</p>
          <a href="tel:+918959388249" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">8959388249</a>
        </div>
      </SidebarCard>

      {/* 3. Blood Donation */}
      <SidebarCard icon={Droplets} stat="Regular" statLabel="Drives" delay={250}>
        <h3 className="font-serif text-xl text-warm-900">Blood Donation Camps</h3>
        <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">रक्तदान शिविर</p>
        <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3 mb-3">
          Regular blood donation drives are organised across Delhi and Mumbai to maintain critical blood bank supplies and save lives. A single donation can save up to three lives.
        </p>
        <p className="font-sans text-sm text-warm-600 leading-relaxed mb-4">
          The society works with accredited hospitals and blood banks to ensure all collected blood is safely processed and made available to patients in need.
        </p>
        <div className="rounded-xl bg-saffron-50 border border-saffron-200/60 px-4 py-3">
          <p className="font-sans text-xs uppercase tracking-wider text-warm-800/50 mb-1">Stay Updated on Camps</p>
          <a href="tel:+919560800343" className="font-sans text-sm text-crimson-500 hover:text-crimson-600 transition-colors">95608 00343</a>
        </div>
      </SidebarCard>

      {/* 4. Eye & Dental */}
      <SidebarCard icon={Eye} stat="Camps" statLabel="Free" delay={300}>
        <h3 className="font-serif text-xl text-warm-900">Eye &amp; Dental Check-up Camps</h3>
        <p className="font-devanagari text-sm text-warm-600/60 mt-0.5" lang="hi">नेत्र और दंत जांच शिविर</p>
        <p className="font-sans text-sm text-warm-600 leading-relaxed mt-3 mb-3">
          Free eye examinations and dental check-up camps are held for underprivileged communities, often in areas with limited healthcare access.
        </p>
        <ul className="space-y-2">
          {["Free eye examination & vision testing", "Dental check-up & consultation", "Referrals for specialist treatment", "Corrective eyewear where available"].map((item) => (
            <li key={item} className="flex items-center gap-2 font-sans text-sm text-warm-600">
              <span className="w-5 h-5 rounded-full bg-crimson-500 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </SidebarCard>
    </div>
  );
}
