import { useTranslations } from "next-intl";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function ImpactCounter() {
  const t = useTranslations("impact");

  const stats = [
    { value: "500+", label: t("families") },
    { value: "₹25L+", label: t("funds") },
    { value: "7+", label: t("years") },
    { value: "15+", label: t("programs") },
  ];

  return (
    <div className="border-t border-b border-saffron-300/40 bg-saffron-50/40">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center py-6 px-4 ${
                i < stats.length - 1 ? "lg:border-r lg:border-saffron-300/40" : ""
              } ${i % 2 === 0 && i < stats.length - 1 ? "border-r border-saffron-300/40 lg:border-r-0" : ""}`}
            >
              <AnimatedCounter
                value={stat.value}
                className="font-stat text-4xl md:text-5xl font-black text-crimson-500"
              />
              <p className="font-sans text-warm-800/60 text-xs md:text-sm font-medium uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
