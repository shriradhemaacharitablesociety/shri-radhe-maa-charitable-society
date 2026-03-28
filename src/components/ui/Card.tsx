import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: "crimson" | "gold" | "none";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, accent = "crimson", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-xl bg-white border border-saffron-200 shadow-sm shadow-warm-200/40 p-5 transition-all duration-500 hover:shadow-md",
          className
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        {...props}
      >
        {accent !== "none" && (
          <div
            className={cn(
              "absolute left-0 top-2 bottom-2 w-[2px] rounded-full",
              accent === "crimson" && "bg-gradient-to-b from-crimson-500/25 to-transparent",
              accent === "gold" && "bg-gradient-to-b from-saffron-500/25 to-transparent"
            )}
          />
        )}
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

// Simple sub-components for backward compat
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-2", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardContent };
export type { CardProps };
