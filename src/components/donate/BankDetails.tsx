"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface BankField {
  label: string;
  value: string;
}

const BANK_FIELDS: BankField[] = [
  { label: "Account Name", value: "Shri Radhe Maa Charitable Society" },
  { label: "Bank", value: "HDFC Bank Ltd., Plot No. F 26/7, Ayodhya Chowk, Sector-7, Rohini, New Delhi" },
  { label: "Account No.", value: "50100214648162" },
  { label: "IFSC", value: "HDFC0002072" },
  { label: "Account Type", value: "Current Bank Account" },
  { label: "PAN", value: "AAUAS1740G" },
];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={copied ? "Copied!" : "Copy"}
      className={cn(
        "p-1.5 rounded-lg transition-all duration-200 cursor-pointer",
        copied
          ? "text-crimson-500 bg-crimson-50"
          : "text-warm-800/30 hover:text-warm-800/60 hover:bg-warm-100/60"
      )}
      aria-label={`Copy ${value}`}
    >
      {copied ? (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      ) : (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
        </svg>
      )}
    </button>
  );
}

export function BankDetails() {
  const t = useTranslations("donate");

  return (
    <div className="relative rounded-3xl overflow-hidden bg-white shadow-sm shadow-warm-200/40 border border-saffron-200">
      {/* Left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-crimson-500 to-saffron-500" />

      <div className="pl-8 pr-6 py-6 flex flex-col gap-4">
        <h3 className="font-serif text-lg text-warm-900">{t("bank_title")}</h3>

        <div className="flex flex-col gap-2">
          {BANK_FIELDS.map((field) => (
            <div
              key={field.label}
              className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-warm-100/50 border border-saffron-300/20"
            >
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-sans text-xs text-warm-800/45 uppercase tracking-wider">
                  {field.label}
                </span>
                <span className="font-sans text-sm text-warm-900/60 truncate">
                  {field.value}
                </span>
              </div>
              <CopyButton value={field.value} />
            </div>
          ))}
        </div>

        <p className="font-sans text-xs text-warm-800/40 text-center">
          Please mention your name &amp; phone in the payment remarks
        </p>
      </div>
    </div>
  );
}
