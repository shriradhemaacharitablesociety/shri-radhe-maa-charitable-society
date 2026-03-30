import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: "crimson" | "gold" | "none";
  variant?: "white" | "cream";
  /** Optional crimson sidebar content (icon, date, number) */
  sidebar?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, accent = "crimson", variant = "white", sidebar, children, ...props }, ref) => {
    // Card WITH sidebar — crimson left panel + white body (like event cards)
    if (sidebar) {
      return (
        <div
          ref={ref}
          className={cn(
            "group flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5",
            variant === "white" && "bg-white",
            variant === "cream" && "bg-cream",
            className
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          {...props}
        >
          {/* Crimson/gold sidebar */}
          <div
            className={cn(
              "shrink-0 w-24 md:w-28 flex flex-col items-center justify-center text-white p-4",
              accent === "crimson" && "bg-crimson-500",
              accent === "gold" && "bg-saffron-500",
              accent === "none" && "bg-warm-800"
            )}
          >
            {sidebar}
          </div>
          {/* Card body */}
          <div className="flex-1 p-4 md:p-5">
            {children}
          </div>
        </div>
      );
    }

    // Card WITHOUT sidebar — standard card with left accent bar on hover
    return (
      <div
        ref={ref}
        className={cn(
          "group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5",
          variant === "white" && "bg-white",
          variant === "cream" && "bg-cream",
          className
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        {...props}
      >
        {/* Top gradient band */}
        <div
          className={cn(
            "h-1",
            accent === "crimson" && "bg-gradient-to-r from-crimson-500 to-saffron-500",
            accent === "gold" && "bg-gradient-to-r from-saffron-500 to-saffron-400",
            accent === "none" && "bg-warm-200"
          )}
        />
        <div className="p-5 md:p-6">
          {children}
        </div>
      </div>
    );
  }
);
Card.displayName = "Card";

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
