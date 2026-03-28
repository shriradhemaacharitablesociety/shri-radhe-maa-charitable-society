import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { instrumentSerif, spaceGrotesk, notoDevanagari, fraunces } from "@/lib/fonts";
import { nonprofitJsonLd } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SocietyBanner } from "@/components/layout/SocietyBanner";
import { LenisProvider } from "@/components/layout/LenisProvider";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Shri Radhe Maa Charitable Society | श्री राधे माँ चैरिटेबल सोसाइटी",
    template: "%s | Shri Radhe Maa Charitable Society",
  },
  description:
    "Serving humanity through compassion — free dialysis, disaster relief, monthly pensions, divyang seva. समाज सेवा, मुफ्त डायलिसिस, बाढ़ राहत, मासिक पेंशन, दिव्यांग सेवा।",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "hi")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${instrumentSerif.variable} ${spaceGrotesk.variable} ${notoDevanagari.variable} ${fraunces.variable}`}
    >
      <body className="font-sans">
        {/* NonProfit / NGO JSON-LD — present on every page for GEO & SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(nonprofitJsonLd()) }}
        />
        <NextIntlClientProvider messages={messages}>
          <LenisProvider>
            <Navbar />
            <SocietyBanner />
            <main>{children}</main>
            <Footer />
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
