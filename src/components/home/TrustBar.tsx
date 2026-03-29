import { useTranslations } from "next-intl";

export function TrustBar() {
  const t = useTranslations("trust");

  return (
    <section className="relative">
      {/* Top crimson accent line */}
      <div className="h-[2px] bg-gradient-to-r from-crimson-500/0 via-crimson-500 to-crimson-500/0" />

      <div className="bg-gradient-to-b from-saffron-50 to-cream py-3 md:py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 sm:gap-0 overflow-x-auto">
            {/* Registration */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-8 py-1 sm:border-r sm:border-warm-900/10 shrink-0">
              <span className="text-xs sm:text-sm" aria-hidden="true">
                {"\uD83D\uDCCB"}
              </span>
              <span className="font-sans text-[10px] sm:text-sm text-warm-700 font-semibold whitespace-nowrap">
                {t("registration")}
              </span>
            </div>

            {/* Established */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-8 py-1 sm:border-r sm:border-warm-900/10 shrink-0">
              <span className="text-xs sm:text-sm" aria-hidden="true">
                {"\uD83C\uDFDB\uFE0F"}
              </span>
              <span className="font-sans text-[10px] sm:text-sm text-warm-700 font-semibold whitespace-nowrap">
                {t("established")}
              </span>
            </div>

            {/* 80G Certified */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-8 py-1 shrink-0">
              <span className="text-xs sm:text-sm" aria-hidden="true">
                {"\u2705"}
              </span>
              <span className="font-sans text-[10px] sm:text-sm text-warm-700 font-semibold whitespace-nowrap">
                {t("certified")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom crimson accent line */}
      <div className="h-[2px] bg-gradient-to-r from-crimson-500/0 via-crimson-500 to-crimson-500/0" />
    </section>
  );
}
