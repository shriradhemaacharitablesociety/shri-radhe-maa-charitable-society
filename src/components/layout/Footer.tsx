"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");

  const quickLinks = [
    { href: "/about", label: tn("about") },
    { href: "/seva", label: tn("seva") },
    { href: "/events", label: tn("events") },
    { href: "/gallery", label: tn("gallery") },
  ] as const;

  const sevaItems = [
    { en: "Free Dialysis", hi: "निःशुल्क डायलिसिस" },
    { en: "Financial Aid", hi: "वित्तीय सहायता" },
    { en: "Disaster Relief", hi: "आपदा राहत" },
    { en: "Janseva", hi: "जनसेवा" },
  ];

  const connectItems = [
    {
      label: "Instagram",
      href: "https://instagram.com/shriradhecharitablesociety",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://facebook.com/shriradhecharitablesociety",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@shriradhecharitablesociety",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:shriradhecharitablesociety@gmail.com",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "+91 96507 27772",
      href: "tel:+919650727772",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-warm-900 text-white/80 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Brand */}
        <div className="mb-12">
          <span className="font-serif text-2xl text-saffron-400">श्री राधे माँ चैरिटेबल सोसाइटी</span>
          <p className="mt-2 font-sans text-sm text-white/50 max-w-sm">
            Serving humanity with compassion — free dialysis, disaster relief, monthly pensions & divyang seva.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              {t("quick_links")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href as any}
                    className="text-sm text-white/70 hover:text-saffron-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Our Seva */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              {t("our_seva")}
            </h3>
            <ul className="space-y-2">
              {sevaItems.map(({ en, hi }) => (
                <li key={en} className="text-sm text-white/70">
                  <span>{en}</span>
                  <span className="block font-devanagari text-xs text-white/40">{hi}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              {t("connect")}
            </h3>
            <ul className="space-y-2">
              {connectItems.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-saffron-400 transition-colors duration-200"
                  >
                    {icon}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Offices */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Offices
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-saffron-500 mb-1">{t("delhi_office")}</p>
                <p className="text-sm text-white/60 leading-relaxed">{t("delhi_address")}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-saffron-500 mb-1">{t("mumbai_office")}</p>
                <p className="text-sm text-white/60 leading-relaxed">{t("mumbai_address")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-white/40 font-sans">{t("copyright")}</p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs text-white/40 font-sans">Regd. S/2930/SDM/NW/2017</span>
            <span className="h-3 w-px bg-white/20" />
            <span className="inline-flex items-center gap-1 text-xs font-medium text-saffron-500 border border-saffron-600/40 rounded-pill px-2.5 py-0.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
              80G Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
