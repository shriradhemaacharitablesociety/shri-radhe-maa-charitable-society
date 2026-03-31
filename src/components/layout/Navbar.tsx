"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Check if a nav link is active (strip locale prefix for comparison)
  const isActive = (href: string) => {
    const path = pathname.replace(/^\/(en|hi)/, "") || "/";
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  const linkClass = (href: string) =>
    cn(
      "px-3.5 py-1.5 text-sm font-sans rounded-full transition-all duration-200 whitespace-nowrap",
      isActive(href)
        ? "text-crimson-500 font-medium"
        : "text-warm-600 hover:text-crimson-500"
    );

  const leftLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: t("about") },
    { href: "/seva", label: t("seva") },
    { href: "/events", label: t("events") },
    { href: "/campaigns", label: "Campaigns" },
  ] as const;

  const rightLinks = [
    { href: "/gallery", label: t("gallery") },
    { href: "/contact", label: t("contact") },
  ] as const;

  const navLinks = [...leftLinks, ...rightLinks] as const;

  return (
    <>
      {/* ===== MOBILE NAVBAR (below md) ===== */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 pointer-events-none pt-3 px-4">
        <div className="pointer-events-auto flex items-center justify-between px-3 py-1.5 bg-white border border-warm-200/60 rounded-2xl shadow-lg shadow-warm-900/[0.08]">
            {/* Logo */}
            <Link href={"/" as any} className="shrink-0">
              <Image
                src="/logo.png"
                alt="Shri Radhe Maa Charitable Society"
                width={40}
                height={40}
                className="drop-shadow-sm"
              />
            </Link>

            <div className="flex items-center gap-3">
              {/* Login */}
              <a
                href="/login"
                className="text-crimson-500 hover:text-crimson-600 transition-colors"
                aria-label="Login"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </a>

              {/* Donate */}
              <Link
                href={"/get-involved/donate" as any}
                className="text-crimson-500 hover:text-crimson-600 transition-colors"
                aria-label="Donate"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </Link>

              {/* Hamburger */}
              <button
                className="flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <span className="block w-[20px] h-[2px] bg-warm-800 rounded-full" />
                <span className="block w-[15px] h-[2px] bg-warm-800 rounded-full" />
                <span className="block w-[20px] h-[2px] bg-warm-800 rounded-full" />
              </button>
            </div>
        </div>
      </header>

      {/* ===== DESKTOP NAVBAR (md and above) ===== */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-40 pointer-events-none pt-4 px-8">
        <div className="flex justify-center">
          <nav className="pointer-events-auto flex items-center py-1.5 px-2 bg-white/92 backdrop-blur-xl border border-warm-200/50 rounded-full shadow-lg shadow-warm-900/[0.05]">
            {/* Left links: Home | About | Our Seva | Events */}
            {leftLinks.map(({ href, label }, i) => (
              <div key={href} className="flex items-center">
                {i > 0 && <div className="h-4 w-px bg-warm-300/60" />}
                <Link href={href as any} className={linkClass(href)}>
                  {label}
                </Link>
              </div>
            ))}

            {/* Divider between Events and Gallery */}
            <div className="h-4 w-px bg-warm-300/60" />

            {/* Right links: Gallery | Contact */}
            {rightLinks.map(({ href, label }, i) => (
              <div key={href} className="flex items-center">
                {i > 0 && <div className="h-4 w-px bg-warm-300/60" />}
                <Link href={href as any} className={linkClass(href)}>
                  {label}
                </Link>
              </div>
            ))}

            {/* Divider before Login */}
            <div className="h-4 w-px bg-warm-300/60" />

            {/* Login */}
            <a
              href="/login"
              className="px-3.5 py-1.5 text-sm font-sans text-warm-600 hover:text-crimson-500 hover:bg-crimson-50 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              Login
            </a>

            {/* Divider before Donate */}
            <div className="h-4 w-px bg-warm-300/60 mr-1" />

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
