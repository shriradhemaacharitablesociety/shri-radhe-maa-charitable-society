import { useTranslations } from "next-intl";

export function TrustBar() {
  const t = useTranslations("trust");

  const items = [
    { icon: "clipboard", label: t("registration") },
    { icon: "building", label: t("established") },
    { icon: "shield", label: t("certified") },
  ];

  return (
    <section className="bg-warm-900 pt-20 md:pt-24">
      <div className="py-4 md:py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Desktop: single row, Mobile: stack */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
            {items.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-4 md:px-8 py-1 ${
                  i < items.length - 1 ? "md:border-r md:border-white/10" : ""
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-saffron-500 shrink-0" />
                <span className="font-sans text-xs md:text-sm text-white font-semibold whitespace-nowrap tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
