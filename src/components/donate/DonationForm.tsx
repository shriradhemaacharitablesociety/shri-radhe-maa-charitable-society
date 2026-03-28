"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { ImpactAmounts } from "./ImpactAmounts";

type Frequency = "onetime" | "monthly";

export function DonationForm() {
  const t = useTranslations("donate");
  const [frequency, setFrequency] = useState<Frequency>("onetime");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pan, setPan] = useState("");

  const displayAmount = isCustom
    ? customAmount
      ? parseInt(customAmount, 10)
      : null
    : selectedAmount;

  const formatAmount = (val: number | null) => {
    if (!val) return "";
    return new Intl.NumberFormat("en-IN").format(val);
  };

  const handleAmountSelect = (amount: number | null) => {
    setSelectedAmount(amount);
    setIsCustom(false);
  };

  const handleCustomSelect = () => {
    setIsCustom(true);
    setSelectedAmount(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Razorpay integration coming soon! Please add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to your .env.local file to enable payments."
    );
  };

  const inputClass =
    "w-full bg-white/45 border border-saffron-500/[0.06] rounded-2xl px-5 py-4 font-sans text-sm text-warm-900 placeholder:text-warm-800/40 focus:outline-none focus:border-saffron-400/40 focus:bg-white/60 transition-all duration-300";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 p-8 rounded-3xl bg-white/30 backdrop-blur-sm border border-saffron-300/40"
    >
      {/* Frequency Toggle */}
      <div className="flex items-center gap-1 p-1 rounded-pill bg-white/50 border border-saffron-300/40 self-start">
        {(["onetime", "monthly"] as Frequency[]).map((freq) => (
          <button
            key={freq}
            type="button"
            onClick={() => setFrequency(freq)}
            className={cn(
              "px-5 py-2 rounded-pill font-sans text-sm font-medium transition-all duration-300 cursor-pointer",
              frequency === freq
                ? "bg-gradient-to-r from-crimson-500 to-crimson-400 text-white shadow-sm"
                : "text-warm-800/60 hover:text-warm-900"
            )}
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          >
            {t(freq)}
          </button>
        ))}
      </div>

      {/* Impact Amounts */}
      <div className="flex flex-col gap-3">
        <p className="font-sans text-xs font-medium text-warm-800/50 uppercase tracking-wider">
          Select Amount
        </p>
        <ImpactAmounts
          selected={selectedAmount}
          onSelect={handleAmountSelect}
          isCustomSelected={isCustom}
          onCustomSelect={handleCustomSelect}
        />
      </div>

      {/* Custom Amount Input */}
      {isCustom && (
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-medium text-warm-800/50 uppercase tracking-wider">
            Enter Amount (₹)
          </label>
          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 font-stat text-lg text-saffron-600 pointer-events-none">
              ₹
            </span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount"
              min="1"
              className={cn(inputClass, "pl-10")}
            />
          </div>
        </div>
      )}

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-medium text-warm-800/50 uppercase tracking-wider">
            {t("name")}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("name")}
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-medium text-warm-800/50 uppercase tracking-wider">
            {t("email")}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("email")}
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-medium text-warm-800/50 uppercase tracking-wider">
            {t("phone")}
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t("phone")}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs font-medium text-warm-800/50 uppercase tracking-wider flex items-center gap-2">
            {t("pan")}
            <span className="text-warm-800/30 normal-case font-normal tracking-normal">
              ({t("pan_optional")})
            </span>
          </label>
          <input
            type="text"
            value={pan}
            onChange={(e) => setPan(e.target.value.toUpperCase())}
            placeholder="ABCDE1234F"
            maxLength={10}
            className={inputClass}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-crimson-500 to-crimson-400 text-white font-sans font-semibold text-base shadow-sm hover:shadow-md hover:from-crimson-600 hover:to-crimson-500 active:scale-[0.99] transition-all duration-300 cursor-pointer"
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      >
        {displayAmount
          ? `${t("cta")} — ₹${formatAmount(displayAmount)}`
          : t("cta")}
      </button>

      {/* Trust Signals */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
        <div className="flex items-center gap-2">
          <span className="text-saffron-600 text-sm" aria-hidden="true">✅</span>
          <span className="font-sans text-xs text-warm-800/55">80G Certified</span>
        </div>
        <div className="w-px h-4 bg-saffron-300/40 hidden sm:block" />
        <div className="flex items-center gap-2">
          <span className="text-crimson-500 text-sm" aria-hidden="true">🪷</span>
          <span className="font-sans text-xs text-warm-800/55">100% goes to seva</span>
        </div>
        <div className="w-px h-4 bg-saffron-300/40 hidden sm:block" />
        <div className="flex items-center gap-2">
          <span className="text-saffron-600 text-sm" aria-hidden="true">🔒</span>
          <span className="font-sans text-xs text-warm-800/55">Razorpay Secured</span>
        </div>
      </div>
    </form>
  );
}
