import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DonationForm } from "@/components/donate/DonationForm";
import { QRCode } from "@/components/donate/QRCode";
import { BankDetails } from "@/components/donate/BankDetails";
import { breadcrumbJsonLd, donateActionJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "दान करें | 80G कर छूट | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Donate | 80G Tax Exemption | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "UPI, नेट बैंकिंग या चेक द्वारा दान करें। 80G कर छूट उपलब्ध। आपका दान मुफ्त डायलिसिस, बाढ़ राहत और मासिक पेंशन को सीधे निधि देता है।"
      : "Donate via UPI, net banking, or cheque. 80G tax exemption available. Your donation directly funds free dialysis, disaster relief, and monthly pensions.",
    keywords: isHindi
      ? ["दान", "80G कर छूट", "NGO दान", "ऑनलाइन दान", "चैरिटेबल दान भारत"]
      : ["donate NGO India", "80G tax exemption donation", "charity donation online", "Shri Radhe Maa donate"],
    alternates: { languages: { "en-IN": "/en/get-involved/donate", "hi-IN": "/hi/get-involved/donate" } },
    openGraph: {
      title: "Donate — Shri Radhe Maa Charitable Society",
      description: "Support free dialysis, disaster relief, and pensions. 80G tax benefit.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

function DonatePage() {
  const t = useTranslations("donate");
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Donate", url: "https://shriradhemasociety.org/get-involved/donate" },
  ]);
  const donateAction = donateActionJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donateAction) }}
      />

      {/* Hero */}
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">
              {t("title_hi")}
            </span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">
              {t("title")}
            </h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Sidebar on White */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Donation Form — takes 2 columns */}
            <ScrollReveal className="lg:col-span-2" delay={100}>
              <DonationForm />
            </ScrollReveal>

            {/* Sidebar — QR Code + Bank Details */}
            <div className="flex flex-col gap-6">
              <ScrollReveal delay={200}>
                <QRCode />
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <BankDetails />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DonatePage;
