import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "crimson" | "gold";
}

function Badge({ className, variant = "crimson", ...props }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-pill px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest font-sans transition-colors";

  const variants = {
    crimson: "bg-crimson-100 text-crimson-600 border border-crimson-200",
    gold: "bg-saffron-100 text-saffron-700 border border-saffron-300",
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props} />
  );
}

export { Badge };
