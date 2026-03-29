"use client";

import { useState } from "react";

export function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: Wire to Supabase subscribers table
    setSubmitted(true);
  }

  return (
    <section className="bg-gradient-to-b from-saffron-50 to-cream">
      {/* Top accent */}
      <div className="h-[2px] bg-gradient-to-r from-saffron-500/0 via-saffron-500/50 to-saffron-500/0" />

      <div className="py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="font-devanagari text-xs md:text-sm text-crimson-500 font-medium mb-0.5"
            lang="hi"
          >
            {"\u091C\u0941\u0921\u093C\u0947 \u0930\u0939\u0947\u0902"}
          </p>
          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-warm-900 tracking-tight">
            Stay Connected
          </h2>
          <p className="font-sans text-xs md:text-[15px] text-warm-600 mt-1.5 md:mt-2 max-w-md mx-auto leading-relaxed">
            Get monthly updates on our seva activities, upcoming events, and
            impact stories.
          </p>

          {submitted ? (
            <div className="mt-5 inline-flex items-center gap-2 bg-white border border-black/[0.06] rounded-lg px-5 py-2.5">
              <svg
                className="w-4 h-4 text-crimson-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <span className="font-sans text-sm text-warm-800">
                Thank you! You&apos;ll hear from us soon.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full sm:flex-1 px-4 py-2.5 md:py-3 bg-white border border-warm-200 rounded-lg font-sans text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500/20 transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 md:py-3 bg-crimson-500 text-white font-sans text-sm font-semibold rounded-lg hover:bg-crimson-600 transition-colors active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
