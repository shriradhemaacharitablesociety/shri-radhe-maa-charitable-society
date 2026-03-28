"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: t("about") },
    { href: "/seva", label: t("seva") },
    { href: "/events", label: t("events") },
    { href: "/gallery", label: t("gallery") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <>
      {/* ===== MOBILE NAVBAR (below md) ===== */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-warm-200/50 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2.5">
          {/* Logo + brand */}
          <Link href={"/" as any} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="Shri Radhe Maa Charitable Society"
                width={60}
                height={60}
                className="w-[48px] h-auto -mt-0.5 mx-auto"
              />
            </div>
          </Link>

          <div className="flex items-center gap-2">
            {/* Donate button — compact on mobile */}
            <Link
              href={"/get-involved/donate" as any}
              className="inline-flex items-center gap-1 px-4 py-2 bg-crimson-500 text-white text-xs font-sans font-medium rounded-full hover:bg-crimson-600 transition-colors"
            >
              {t("donate")}
            </Link>

            {/* Hamburger */}
            <button
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-warm-100 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-5 h-0.5 bg-warm-800 rounded-full" />
              <span className="block w-3.5 h-0.5 bg-warm-800 rounded-full" />
            </button>
          </div>
        </div>
      </header>

      {/* ===== DESKTOP NAVBAR (md and above) ===== */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-40 pointer-events-none pt-4 px-8">
        <div className="flex justify-center">
          <nav className="pointer-events-auto flex items-center gap-1 pl-2 pr-2 py-2 bg-white/92 backdrop-blur-xl border border-warm-200/50 rounded-full shadow-lg shadow-warm-900/[0.05]">
            {/* Logo inside pill */}
            <Link href={"/" as any} className="shrink-0 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Shri Radhe Maa Charitable Society"
                  width={60}
                  height={60}
                  className="w-[48px] h-auto -mt-0.5 mx-auto"
                />
              </div>
            </Link>

            {/* Divider */}
            <div className="h-6 w-px bg-warm-200/60 mx-1" />

            {/* Nav links */}
            <div className="flex items-center gap-0.5">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href as any}
                  className="px-3.5 py-1.5 text-sm font-sans text-warm-600 hover:text-crimson-500 hover:bg-crimson-50 rounded-full transition-all duration-200 whitespace-nowrap"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Donate button */}
            <Link
              href={"/get-involved/donate" as any}
              className="inline-flex items-center gap-1.5 ml-1 px-5 py-2.5 bg-crimson-500 text-white text-sm font-sans font-medium rounded-full hover:bg-crimson-600 transition-all duration-200 shadow-sm"
            >
              {t("donate")}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </nav>
        </div>
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
