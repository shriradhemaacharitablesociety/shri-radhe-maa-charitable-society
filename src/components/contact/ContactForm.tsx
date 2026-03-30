"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to send message. Please try again.");
        setLoading(false);
        return;
      }

      setLoading(false);
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-saffron-300/50 bg-saffron-50/40 p-8 text-center">
        <div className="text-3xl mb-3" aria-hidden="true">🙏</div>
        <h3 className="font-serif text-xl text-warm-900 mb-2">Message Received</h3>
        <p className="font-devanagari text-sm text-warm-800/50 mb-3" lang="hi">संदेश प्राप्त हुआ</p>
        <p className="font-sans text-sm text-warm-800/70 leading-relaxed">
          Thank you for reaching out. Our team will respond to your message within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-sans text-xs uppercase tracking-wider text-warm-800/60 mb-1.5">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ramesh Kumar"
            className="w-full rounded-2xl border border-saffron-200 bg-saffron-50/30 px-4 py-3 font-sans text-sm text-warm-900 placeholder:text-warm-800/30 focus:outline-none focus:ring-2 focus:ring-crimson-400/50 focus:border-crimson-400/60 transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-sans text-xs uppercase tracking-wider text-warm-800/60 mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-saffron-200 bg-saffron-50/30 px-4 py-3 font-sans text-sm text-warm-900 placeholder:text-warm-800/30 focus:outline-none focus:ring-2 focus:ring-crimson-400/50 focus:border-crimson-400/60 transition-all duration-200"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block font-sans text-xs uppercase tracking-wider text-warm-800/60 mb-1.5">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="How can we help you?"
          className="w-full rounded-2xl border border-saffron-200 bg-saffron-50/30 px-4 py-3 font-sans text-sm text-warm-900 placeholder:text-warm-800/30 focus:outline-none focus:ring-2 focus:ring-crimson-400/50 focus:border-crimson-400/60 transition-all duration-200"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-xs uppercase tracking-wider text-warm-800/60 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Write your message here..."
          className="w-full rounded-2xl border border-saffron-200 bg-saffron-50/30 px-4 py-3 font-sans text-sm text-warm-900 placeholder:text-warm-800/30 focus:outline-none focus:ring-2 focus:ring-crimson-400/50 focus:border-crimson-400/60 transition-all duration-200 resize-none"
        />
      </div>

      {error && (
        <p className="font-sans text-sm text-red-600">{error}</p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending..." : "Send Message"}
        {!loading && (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        )}
      </Button>
    </form>
  );
}
