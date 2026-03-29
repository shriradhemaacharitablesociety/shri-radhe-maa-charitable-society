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
    <section className="bg-cream">
      <div className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Saffron accent line */}
          <div className="w-10 h-[2px] bg-saffron-500 mx-auto mb-6" />

          <p
            className="font-devanagari text-sm text-saffron-600 font-medium mb-1"
            lang="hi"
          >
            {"\u091C\u0941\u0921\u093C\u0947 \u0930\u0939\u0947\u0902"}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-warm-900 tracking-tight">
            Stay Connected
          </h2>
          <p className="font-sans text-sm md:text-[15px] text-warm-600 mt-2 md:mt-3 max-w-md mx-auto leading-relaxed">
            Get monthly updates on our seva activities, upcoming events, and
            impact stories.
          </p>

          {submitted ? (
            <div className="mt-6 inline-flex items-center gap-2 bg-white border border-saffron-200 rounded-xl px-6 py-3 shadow-sm">
              <svg
                className="w-5 h-5 text-saffron-500"
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
              <span className="font-sans text-sm text-warm-800 font-medium">
                Thank you! You&apos;ll hear from us soon.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full sm:flex-1 px-5 py-3 bg-white border border-warm-200 rounded-xl font-sans text-sm text-warm-900 placeholder:text-warm-400 focus:outline-none focus:border-saffron-500 focus:ring-2 focus:ring-saffron-500/20 transition-all shadow-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-saffron-500 text-white font-sans text-sm font-bold rounded-xl hover:bg-saffron-600 transition-colors active:scale-[0.98] shadow-md cursor-pointer select-none"
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
