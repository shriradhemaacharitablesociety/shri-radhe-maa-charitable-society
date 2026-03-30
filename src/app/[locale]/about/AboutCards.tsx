"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Heart, FileText, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const aboutSections: {
  href: string;
  icon: LucideIcon;
  stat: string;
  title: string;
  titleHi: string;
  description: string;
}[] = [
  {
    href: "/about/maa",
    icon: Heart,
    stat: "30+ YRS",
    title: "Shri Radhe Guru Maa",
    titleHi: "श्री राधे गुरु माँ",
    description:
      "The spiritual force behind the society — 30+ years of humanitarian work across India and abroad, serving the poor and distressed.",
  },
  {
    href: "/about/society",
    icon: FileText,
    stat: "EST. 2017",
    title: "The Society",
    titleHi: "सोसाइटी के बारे में",
    description:
      "Registered under The Societies Registration Act, 1860 (Reg. No. S/2930/SDM/NW/2017). Our mission, activities, and commitment to transparent seva.",
  },
  {
    href: "/about/leadership",
    icon: Users,
    stat: "7+ MEMBERS",
    title: "Leadership",
    titleHi: "नेतृत्व",
    description:
      "Led by General Secretary Mr. Rupendra Kashyap, the society operates with a dedicated team of trustees committed to the welfare of all.",
  },
];

export function AboutSectionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {aboutSections.map((section, i) => (
        <ScrollReveal key={section.href} delay={i * 150}>
          <Link href={section.href} className="block h-full group">
            <div className="group flex h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white">
              <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
                <section.icon className="w-5 h-5" />
                <span className="font-stat font-bold text-sm md:text-base uppercase tracking-wider" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>
                  {section.stat}
                </span>
              </div>
              <div className="flex-1 p-4 md:p-5">
                <h3 className="font-sans text-sm md:text-base font-semibold text-warm-900">
                  {section.title}
                </h3>
                <p
                  className="font-devanagari text-warm-500 text-xs mt-0.5"
                  lang="hi"
                >
                  {section.titleHi}
                </p>
                <p className="text-warm-600 font-sans text-xs md:text-sm leading-relaxed mt-2">
                  {section.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-crimson-500 text-xs md:text-sm font-semibold font-sans group-hover:gap-2.5 transition-all duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}
