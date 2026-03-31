import type { Metadata } from "next";
import { instrumentSerif, spaceGrotesk, notoDevanagari, fraunces } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shriradhemasociety.org"),
  title: "Shri Radhe Maa Charitable Society | श्री राधे माँ चैरिटेबल सोसाइटी",
  description:
    "Serving humanity through compassion — free dialysis, disaster relief, monthly pensions, divyang seva.",
  category: "charity",
  manifest: "/manifest.json",
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${spaceGrotesk.variable} ${notoDevanagari.variable} ${fraunces.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
