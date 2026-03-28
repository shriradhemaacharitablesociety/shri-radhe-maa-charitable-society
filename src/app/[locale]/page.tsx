import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("hero");

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-5xl text-warm-900 tracking-tight">
          {t("title_1")}{" "}
          <em className="text-crimson-500 italic">{t("title_3")}</em>{" "}
          <span className="text-saffron-600">{t("title_4")}</span>
        </h1>
        <p className="font-devanagari text-saffron-600/50 text-lg mt-3">
          {t("sanskrit")}
        </p>
        <p className="text-base mt-4 max-w-xl mx-auto text-warm-700">
          {t("description")}
        </p>
      </div>
    </main>
  );
}
