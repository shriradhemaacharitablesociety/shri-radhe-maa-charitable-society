import { Instrument_Serif, Space_Grotesk, Noto_Sans_Devanagari, Fraunces } from "next/font/google";

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-fraunces",
  display: "swap",
});
