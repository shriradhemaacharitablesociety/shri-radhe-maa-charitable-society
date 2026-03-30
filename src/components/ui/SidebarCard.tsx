"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lucide icon component */
  icon: LucideIcon;
  /** Stat number/value displayed in sidebar */
  stat?: string;
  /** Label below stat */
  statLabel?: string;
  /** Icon size class, defaults to "w-7 h-7" */
  iconSize?: string;
}

const SidebarCard = React.forwardRef<HTMLDivElement, SidebarCardProps>(
  ({ icon: Icon, stat, statLabel, iconSize = "w-7 h-7", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-white",
          className
        )}
        {...props}
      >
        {/* Crimson sidebar */}
        <div className="shrink-0 w-16 md:w-20 flex flex-col items-center justify-center text-white gap-2 bg-crimson-500 py-4">
          <Icon className={iconSize} aria-hidden="true" />
          {stat && (
            <span
              className="font-stat text-sm md:text-base font-bold uppercase tracking-wider"
              style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
            >
              {stat}
            </span>
          )}
          {statLabel && (
            <span
              className="text-[10px] md:text-xs uppercase tracking-wider font-semibold opacity-80"
              style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
            >
              {statLabel}
            </span>
          )}
        </div>
        {/* White body */}
        <div className="flex-1 p-4 md:p-5">
          {children}
        </div>
      </div>
    );
  }
);

SidebarCard.displayName = "SidebarCard";

export { SidebarCard };
export type { SidebarCardProps };
