"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Stethoscope, Heart, Droplets, Accessibility, Wheat } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SevaProgram {
  href: string;
  icon: LucideIcon;
  title: string;
  titleHi: string;
  stat: string;
  statLabel: string;
  desc: string;
  featured: boolean;
}

const sevaPrograms: SevaProgram[] = [
  {
    href: "/seva/healthcare",
    icon: Stethoscope,
    title: "Healthcare",
    titleHi: "स्वास्थ्य सेवा",
    stat: "Free",
    statLabel: "Dialysis",
    desc: "Free dialysis centre, ambulance service, blood donation camps, eye and dental check-ups.",
    featured: true,
  },
  {
    href: "/seva/financial-aid",
    icon: Heart,
    title: "Financial Aid",
    titleHi: "वित्तीय सहायता",
    stat: "100+",
    statLabel: "Families",
    desc: "Monthly pensions, one-time aid, and marriage assistance for families in need.",
    featured: false,
  },
  {
    href: "/seva/disaster-relief",
    icon: Droplets,
    title: "Disaster Relief",
    titleHi: "आपदा राहत",
    stat: "5+",
    statLabel: "Operations",
    desc: "Punjab, Kerala, Nepal, Maharashtra floods and COVID-19 relief.",
    featured: false,
  },
  {
    href: "/seva/janseva",
    icon: Accessibility,
    title: "Janseva Abhiyan",
    titleHi: "जनसेवा अभियान",
    stat: "500+",
    statLabel: "Beneficiaries",
    desc: "Wheelchairs, instruments, clothing, food, and essential items for the specially abled.",
    featured: false,
  },
  {
    href: "/seva/gaushala",
    icon: Wheat,
    title: "Gaushala Seva",
    titleHi: "गौशाला सेवा",
    stat: "∞",
    statLabel: "Compassion",
    desc: "Donations and support to cow shelters as a sacred act of service.",
    featured: false,
  },
];

export function SevaCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {sevaPrograms.map((program, i) => {
        const Icon = program.icon;
        return (
          <ScrollReveal
            key={program.href}
            delay={i * 100}
            className={program.featured ? "md:col-span-2" : ""}
          >
            <Link href={program.href} className="block group h-full">
              <div className="flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white h-full">
                {/* Crimson sidebar */}
                <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                  <Icon className="w-6 h-6" />
                  <span
                    className="font-stat font-bold text-sm md:text-base uppercase tracking-wider"
                    style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
                  >
                    {program.stat}
                  </span>
                </div>
                {/* White body */}
                <div className="flex-1 p-4 md:p-5">
                  <h2 className="font-serif leading-tight text-xl md:text-2xl text-warm-900 group-hover:text-crimson-600 transition-colors">
                    {program.title}
                  </h2>
                  <p className="font-devanagari text-sm mt-0.5 text-warm-600/60" lang="hi">
                    {program.titleHi}
                  </p>
                  <p className="font-sans text-sm leading-relaxed text-warm-600 mt-3">
                    {program.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold font-sans text-crimson-500 group-hover:gap-2.5 transition-all duration-300">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
