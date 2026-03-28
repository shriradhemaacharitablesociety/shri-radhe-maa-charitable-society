import type { Metadata } from "next";
import AdminShell from "./AdminShell";

export const metadata: Metadata = {
  title: {
    default: "SRMCS Admin",
    template: "%s | SRMCS Admin",
  },
  description: "Admin dashboard for Shri Radhe Maa Charitable Society",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminShell>{children}</AdminShell>;
}
