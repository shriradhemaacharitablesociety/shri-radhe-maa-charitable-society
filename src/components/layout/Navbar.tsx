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
    { href: "/about", label: t("about") },
    { href: "/seva", label: t("seva") },
    { href: "/events", label: t("events") },
    { href: "/gallery", label: t("gallery") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-warm-200/50">
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* Left side: Logo + Brand text */}
          <Link href={"/" as any} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Shri Radhe Maa Charitable Society"
              width={44}
              height={44}
              className="rounded-full"
            />
            <span className="flex flex-col">
              <span className="font-serif text-lg leading-tight text-warm-900">
                श्री राधे माँ
              </span>
              <span className="font-sans text-[11px] text-warm-600 tracking-wide">
                Charitable Society
              </span>
            </span>
          </Link>

          {/* Right side: Nav links + Donate */}
          <div className="flex items-center gap-1">
            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1 mr-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href as any}
                  className="px-3 py-2 text-sm font-sans text-warm-700 hover:text-crimson-600 transition-colors duration-200 whitespace-nowrap"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Donate button */}
            <Link
              href={"/get-involved/donate" as any}
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 bg-crimson-600 text-white text-sm font-sans font-medium rounded-lg hover:bg-crimson-700 transition-colors duration-200"
            >
              {t("donate")}
              <span aria-hidden="true">&rarr;</span>
            </Link>

            {/* Hamburger — mobile */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-warm-100 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-5 h-0.5 bg-warm-800 rounded-full" />
              <span className="block w-4 h-0.5 bg-warm-800 rounded-full" />
            </button>
          </div>
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
