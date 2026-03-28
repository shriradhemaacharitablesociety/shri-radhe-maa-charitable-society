"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface AmountOption {
  value: number | null;
  labelKey: string;
  labelHiKey: string;
  display: string;
}

const AMOUNTS: AmountOption[] = [
  { value: 500, labelKey: "amount_500", labelHiKey: "amount_500", display: "₹500" },
  { value: 1000, labelKey: "amount_1000", labelHiKey: "amount_1000", display: "₹1,000" },
  { value: 2500, labelKey: "amount_2500", labelHiKey: "amount_2500", display: "₹2,500" },
  { value: 5000, labelKey: "amount_5000", labelHiKey: "amount_5000", display: "₹5,000" },
  { value: 10000, labelKey: "amount_10000", labelHiKey: "amount_10000", display: "₹10,000" },
  { value: null, labelKey: "amount_custom", labelHiKey: "amount_custom", display: "Custom" },
];

interface ImpactAmountsProps {
  selected: number | null;
  onSelect: (amount: number | null) => void;
  isCustomSelected?: boolean;
  onCustomSelect?: () => void;
}

export function ImpactAmounts({ selected, onSelect, isCustomSelected, onCustomSelect }: ImpactAmountsProps) {
  const t = useTranslations("donate");

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {AMOUNTS.map((option) => {
        const isCustom = option.value === null;
        const isSelected = isCustom ? isCustomSelected : selected === option.value;

        return (
          <button
            key={option.display}
            type="button"
            onClick={() => {
              if (isCustom) {
                onCustomSelect?.();
              } else {
                onSelect(option.value);
              }
            }}
            className={cn(
              "flex flex-col items-start gap-1.5 px-4 py-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer",
              "hover:-translate-y-0.5",
              isSelected
                ? "bg-crimson-50 border-crimson-400/60 shadow-sm shadow-crimson-200/50"
                : "bg-white/45 backdrop-blur-sm border-saffron-300/60 hover:border-saffron-500/60 hover:bg-white/60"
            )}
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          >
            <span
              className={cn(
                "font-stat text-xl font-black",
                isSelected ? "text-crimson-600" : "text-saffron-600"
              )}
            >
              {option.display}
            </span>
            <span className="font-sans text-xs text-warm-800/60 leading-tight">
              {t(option.labelKey as Parameters<typeof t>[0])}
            </span>
          </button>
        );
      })}
    </div>
  );
}
