import { useTranslations } from "next-intl";

export function TrustBar() {
  const t = useTranslations("trust");

  const items = [
    { label: t("registration") },
    { label: t("established") },
    { label: t("certified") },
  ];

  return (
    <section className="bg-crimson-50 border-y border-crimson-100">
      <div className="py-3 md:py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
            {items.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-4 sm:px-8 py-1 ${
                  i < items.length - 1 ? "sm:border-r sm:border-crimson-200" : ""
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-crimson-500 shrink-0" />
                <span className="font-sans text-xs md:text-sm text-crimson-700 font-semibold whitespace-nowrap tracking-wide">
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
