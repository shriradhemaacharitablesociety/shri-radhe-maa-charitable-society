"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "srmcs-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so it slides up after page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-warm-200 bg-white shadow-lg"
      style={{
        animation: "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-warm-600 text-center sm:text-left leading-relaxed">
          We use cookies to improve your experience on our website.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/privacy-policy"
            className="text-sm text-warm-600 underline underline-offset-2 hover:text-crimson-500 transition-colors duration-200"
          >
            Learn More
          </Link>
          <button
            onClick={handleAccept}
            className="px-5 py-2 bg-crimson-500 text-white text-sm font-medium rounded-lg hover:bg-crimson-600 transition-colors duration-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
