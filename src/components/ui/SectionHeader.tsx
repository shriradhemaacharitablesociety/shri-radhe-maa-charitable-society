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
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {titleHi && (
        <span className="font-devanagari text-sm font-medium text-crimson-500 tracking-wide">
          {titleHi}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-warm-800/70 text-base md:text-lg max-w-xl mt-1">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-3 h-px w-16 bg-gradient-to-r from-crimson-500 to-saffron-500",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
