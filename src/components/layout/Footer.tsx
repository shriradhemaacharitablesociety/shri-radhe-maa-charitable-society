"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");

  const linksCol1 = [
    { href: "/about", label: tn("about") },
    { href: "/seva", label: tn("seva") },
    { href: "/events", label: tn("events") },
    { href: "/gallery", label: tn("gallery") },
    { href: "/contact", label: tn("contact") },
    { href: "/stories", label: "Impact Stories" },
    { href: "/blog", label: "News & Updates" },
    { href: "/faq", label: "FAQ" },
  ] as const;

  const linksCol2 = [
    { href: "/80g", label: "80G Tax Benefits" },
    { href: "/campaigns", label: "Campaigns" },
    { href: "/impact", label: "Impact Calculator" },
    { href: "/donors", label: "Donor Wall" },
    { href: "/annual-report", label: "Annual Report" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms" },
    { href: "/refund-policy", label: "Refund Policy" },
  ] as const;

  const sevaItems = [
    { en: "Free Dialysis", hi: "निःशुल्क डायलिसिस" },
    { en: "Financial Aid", hi: "वित्तीय सहायता" },
    { en: "Disaster Relief", hi: "आपदा राहत" },
    { en: "Janseva", hi: "जनसेवा" },
    { en: "Gaushala", hi: "गौशाला" },
  ];

  return (
    <footer
      className="border-t pt-12 pb-8"
      style={{ backgroundColor: "#FAF7F2", borderColor: "#EDE8DF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 4-column grid: Logo | Quick Links (2 cols) | Our Seva */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Logo */}
          <div className="col-span-2 md:col-span-1 flex items-start">
            <Image
              src="/logo.png"
              alt="Shri Radhe Maa Charitable Society"
              width={120}
              height={120}
              className="drop-shadow-sm"
            />
          </div>

          {/* Column 2: Quick Links — first half */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-warm-800 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-0.5">
              {linksCol1.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href as any}
                    className="text-sm font-sans text-warm-600 hover:text-crimson-500 transition-colors duration-200 inline-block py-1 min-h-[36px] leading-normal"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links — second half */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-warm-800 mb-3">
              More
            </h3>
            <ul className="space-y-0.5">
              {linksCol2.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href as any}
                    className="text-sm font-sans text-warm-600 hover:text-crimson-500 transition-colors duration-200 inline-block py-1 min-h-[36px] leading-normal"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Seva */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-warm-800 mb-3">
              {t("our_seva")}
            </h3>
            <ul className="space-y-2">
              {sevaItems.map(({ en, hi }) => (
                <li key={en}>
                  <span className="text-sm font-sans text-warm-600">{en}</span>
                  <span className="block font-devanagari text-xs text-warm-500">{hi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3" style={{ borderColor: "#EDE8DF" }}>
          <p className="text-xs text-warm-600 font-sans">{t("copyright")}</p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs text-warm-600 font-sans">Regd. S/2930/SDM/NW/2017</span>
            <span className="h-3 w-px bg-warm-300" />
            <span className="inline-flex items-center gap-1 text-xs font-sans font-medium text-crimson-600 border border-crimson-300 rounded-md px-2.5 py-0.5">
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
