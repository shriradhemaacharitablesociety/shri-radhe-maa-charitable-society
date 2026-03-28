import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: "crimson" | "gold" | "none";
  variant?: "white" | "cream";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, accent = "crimson", variant = "white", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative rounded-2xl border border-black/[0.06] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5",
          variant === "white" && "bg-white",
          variant === "cream" && "bg-cream",
          className
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        {...props}
      >
        {accent !== "none" && (
          <div
            className={cn(
              "absolute left-0 top-3 bottom-3 w-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100",
              accent === "crimson" && "bg-crimson-500",
              accent === "gold" && "bg-saffron-500"
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
