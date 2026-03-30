"use client";

import { SidebarCard } from "@/components/ui/SidebarCard";
import { IndianRupee, FileText, Upload } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stepIcons: LucideIcon[] = [IndianRupee, FileText, Upload];

interface Step {
  number: string;
  title: string;
  description: string;
}

export function StepCards({ steps }: { steps: Step[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, i) => {
        const Icon = stepIcons[i] || FileText;
        return (
          <SidebarCard key={i} icon={Icon} stat={step.number} className="h-full">
            <h4 className="font-serif text-lg text-warm-900 mb-2">{step.title}</h4>
            <p className="font-sans text-warm-600 text-sm leading-relaxed">{step.description}</p>
          </SidebarCard>
        );
      })}
    </div>
  );
}
