import { useTranslations } from "next-intl";

export function TrustBar() {
  const t = useTranslations("trust");

  return (
    <div className="border-t border-b border-saffron-300/40 bg-saffron-50/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
          <div className="flex items-center gap-2 px-6 sm:border-r sm:border-saffron-300/40">
            <span className="text-crimson-500 text-xs font-sans font-semibold uppercase tracking-widest">
              📋
            </span>
            <span className="font-sans text-sm text-warm-800/80 font-medium">
              {t("registration")}
            </span>
          </div>
          <div className="flex items-center gap-2 px-6 sm:border-r sm:border-saffron-300/40">
            <span className="text-saffron-600 text-xs">🏛️</span>
            <span className="font-sans text-sm text-warm-800/80 font-medium">
              {t("established")}
            </span>
          </div>
          <div className="flex items-center gap-2 px-6">
            <span className="text-saffron-600 text-xs">✅</span>
            <span className="font-sans text-sm text-warm-800/80 font-medium">
              {t("certified")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
