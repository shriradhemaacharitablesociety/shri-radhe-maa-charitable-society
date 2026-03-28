"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: t("about") },
    { href: "/seva", label: t("seva") },
    { href: "/events", label: t("events") },
    { href: "/gallery", label: t("gallery") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 px-4 pointer-events-none">
        <nav className="pointer-events-auto flex items-center gap-4 px-5 py-2.5 bg-white/45 backdrop-blur-xl border border-warm-200/60 rounded-pill shadow-sm shadow-warm-200/30 max-w-3xl w-full">
          {/* Brand */}
          <Link href={"/" as any} className="font-serif text-xl text-saffron-600 shrink-0 hover:text-saffron-700 transition-colors">
            श्री राधे माँ
          </Link>

          {/* Divider */}
          <div className="h-5 w-px bg-warm-800/15 shrink-0" />

          {/* Nav links — desktop */}
          <div className="hidden md:flex items-center gap-0.5 flex-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href as any}
                className="px-3 py-1.5 rounded-pill text-sm text-warm-800/80 hover:text-warm-900 hover:bg-warm-100/60 transition-all duration-200 font-sans whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex-1 md:hidden" />

          {/* Donate button */}
          <Link
            href={"/get-involved/donate" as any}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-crimson-500 to-crimson-400 text-white text-sm font-medium rounded-pill hover:from-crimson-600 hover:to-crimson-500 transition-all duration-300 active:scale-[0.98] shadow-sm"
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          >
            {t("donate")}
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden shrink-0 flex flex-col justify-center items-center w-8 h-8 gap-1.5 rounded-lg hover:bg-warm-100 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-warm-800 rounded-full" />
            <span className="block w-4 h-0.5 bg-warm-800 rounded-full self-start ml-0.5" />
          </button>
        </nav>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        donateLabel={t("donate")}
      />
    </>
  );
}
