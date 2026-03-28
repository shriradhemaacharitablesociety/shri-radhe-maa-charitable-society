import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "crimson" | "gold";
}

function Badge({ className, variant = "crimson", ...props }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wider font-sans transition-colors";

  const variants = {
    crimson: "bg-crimson-50 text-crimson-500 border border-crimson-100",
    gold: "bg-saffron-100 text-saffron-600 border border-saffron-200",
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props} />
  );
}

export { Badge };
