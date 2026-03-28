import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "featured";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const base =
      "relative rounded-3xl overflow-hidden transition-all duration-500 group";

    const variants = {
      default:
        "bg-white/45 backdrop-blur-sm border border-saffron-300/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-saffron-200/40",
      featured:
        "bg-warm-900 border border-saffron-600/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-crimson-900/30",
    };

    return (
      <div
        ref={ref}
        className={cn(base, variants[variant], className)}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        {...props}
      >
        {/* Left border gradient accent */}
        <div
          className={cn(
            "absolute left-0 top-0 bottom-0 w-[3px]",
            variant === "default"
              ? "bg-gradient-to-b from-crimson-500 to-saffron-500"
              : "bg-gradient-to-b from-saffron-400 to-saffron-600"
          )}
        />
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6 pl-8", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pl-8 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardContent };
