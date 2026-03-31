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
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      {/* Header row */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <Image
          src="/logo.png"
          alt="Shri Radhe Maa Charitable Society"
          width={48}
          height={48}
          className="rounded-full"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-warm-200 text-warm-700 hover:text-warm-900 hover:border-warm-300 transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Nav links with staggered reveal */}
      <nav className="flex flex-col px-6 pt-4 gap-0 flex-1">
        {navLinks.map(({ href, label }, i) => (
          <Link
            key={href}
            href={href as any}
            onClick={onClose}
            className="py-2.5 text-base font-serif text-warm-900 hover:text-crimson-600 border-b border-warm-100 transition-colors duration-200"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${80 + i * 60}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${80 + i * 60}ms`,
            }}
          >
            {label}
          </Link>
        ))}

        {/* Login */}
        <a
          href="/login"
          onClick={onClose}
          className="mt-4 inline-flex items-center justify-center gap-2 py-3 border border-warm-200 text-warm-800 text-sm font-sans font-medium rounded-lg hover:border-crimson-300 hover:text-crimson-600 transition-all duration-200"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${80 + navLinks.length * 60}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${80 + navLinks.length * 60}ms`,
          }}
        >
          Login / Sign Up
        </a>

        {/* Donate button */}
        <Link
          href={"/get-involved/donate" as any}
          onClick={onClose}
          className="mt-2 inline-flex items-center justify-center gap-2 py-3 bg-crimson-600 text-white text-sm font-sans font-medium rounded-lg hover:bg-crimson-700 active:scale-[0.98] transition-all duration-200"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${80 + navLinks.length * 60}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${80 + navLinks.length * 60}ms`,
          }}
        >
          {donateLabel}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </nav>

      {/* Bottom note */}
      <p className="px-6 pb-8 text-warm-500 text-xs font-sans">
        Regd. S/2930/SDM/NW/2017 &middot; 80G Certified
      </p>
    </div>
  );
}
