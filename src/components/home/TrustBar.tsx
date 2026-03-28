import { useTranslations } from "next-intl";

export function TrustBar() {
  const t = useTranslations("trust");

  return (
    <section className="section-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
          {/* Registration */}
          <div className="flex items-center gap-2.5 px-8 py-3 sm:border-r sm:border-warm-900/10">
            <span className="text-sm" aria-hidden="true">
              {"\uD83D\uDCCB"}
            </span>
            <span className="font-sans text-sm text-warm-700 font-medium">
              {t("registration")}
            </span>
          </div>

          {/* Established */}
          <div className="flex items-center gap-2.5 px-8 py-3 sm:border-r sm:border-warm-900/10">
            <span className="text-sm" aria-hidden="true">
              {"\uD83C\uDFDB\uFE0F"}
            </span>
            <span className="font-sans text-sm text-warm-700 font-medium">
              {t("established")}
            </span>
          </div>

          {/* 80G Certified */}
          <div className="flex items-center gap-2.5 px-8 py-3">
            <span className="text-sm" aria-hidden="true">
              {"\u2705"}
            </span>
            <span className="font-sans text-sm text-warm-700 font-medium">
              {t("certified")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
