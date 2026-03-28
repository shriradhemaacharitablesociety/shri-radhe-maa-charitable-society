"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  navLinks: readonly NavLink[];
  donateLabel: string;
}

export function MobileNav({ open, onClose, navLinks, donateLabel }: MobileNavProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "rgba(26,15,8,0.92)", backdropFilter: "blur(20px)" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <span className="flex items-center gap-2">
          <Image src="/logo.png" alt="Shri Radhe Maa Charitable Society" width={36} height={36} className="rounded-full" />
          <span className="font-serif text-xl text-saffron-400">श्री राधे माँ</span>
        </span>
        <button
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Nav links with staggered reveal */}
      <nav className="flex flex-col px-6 pt-6 gap-1 flex-1">
        {navLinks.map(({ href, label }, i) => (
          <Link
            key={href}
            href={href as any}
            onClick={onClose}
            className="py-4 text-2xl font-serif text-white/90 hover:text-saffron-400 border-b border-white/10 transition-colors duration-200"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${80 + i * 60}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${80 + i * 60}ms`,
            }}
          >
            {label}
          </Link>
        ))}

        {/* Donate link */}
        <Link
          href={"/get-involved/donate" as any}
          onClick={onClose}
          className="mt-8 inline-flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-crimson-500 to-crimson-400 text-white text-base font-medium rounded-pill active:scale-[0.98] transition-transform"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${80 + navLinks.length * 60}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${80 + navLinks.length * 60}ms`,
          }}
        >
          {donateLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </nav>

      {/* Bottom note */}
      <p className="px-6 pb-8 text-white/30 text-xs font-sans">
        Regd. S/2930/SDM/NW/2017 · 80G Certified
      </p>
    </div>
  );
}
