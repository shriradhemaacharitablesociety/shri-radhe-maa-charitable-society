import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DonationForm } from "@/components/donate/DonationForm";
import { QRCode } from "@/components/donate/QRCode";
import { BankDetails } from "@/components/donate/BankDetails";

function DonatePage() {
  const t = useTranslations("donate");

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-2">
            <span className="font-devanagari text-sm font-medium text-crimson-500 tracking-wide">
              {t("title_hi")}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-900 leading-tight">
              {t("title")}
            </h1>
            <div className="mt-3 h-px w-16 bg-gradient-to-r from-crimson-500 to-saffron-500" />
          </div>
        </ScrollReveal>

        {/* 3-column layout: form (2 cols) + sidebar (1 col) */}
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
    </div>
  );
}

export default DonatePage;
