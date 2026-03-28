import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shri Radhe Maa Charitable Society | श्री राधे माँ चैरिटेबल सोसाइटी",
  description:
    "Serving humanity through compassion — free dialysis, disaster relief, monthly pensions, divyang seva.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
