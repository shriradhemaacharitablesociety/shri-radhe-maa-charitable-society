import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Donor Portal — SRMCS",
    template: "%s | Donor Portal — SRMCS",
  },
  description:
    "Donor portal for Shri Radhe Maa Charitable Society — view donations, download receipts, manage your profile.",
  robots: { index: false, follow: false },
};

export default function DonorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
