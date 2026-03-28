import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  titleHi?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  titleHi,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {titleHi && (
        <span className="font-devanagari text-sm text-crimson-500 font-medium mb-1">
          {titleHi}
        </span>
      )}
      <h2 className="font-serif text-4xl text-warm-900 tracking-tight">
        {title}
      </h2>
      <div
        className={cn(
          "w-8 h-[3px] rounded-full bg-crimson-500 mt-3",
          align === "center" && "mx-auto"
        )}
      />
      {subtitle && (
        <p className="text-[15px] text-warm-600 mt-3 leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
