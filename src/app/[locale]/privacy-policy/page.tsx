import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { breadcrumbJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? "गोपनीयता नीति | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Privacy Policy | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी की गोपनीयता नीति। हम आपकी व्यक्तिगत जानकारी की सुरक्षा कैसे करते हैं।"
      : "Privacy Policy of Shri Radhe Maa Charitable Society. Learn how we collect, use, and protect your personal information.",
    alternates: { languages: { "en-IN": "/en/privacy-policy", "hi-IN": "/hi/privacy-policy" } },
    openGraph: {
      title: "Privacy Policy | Shri Radhe Maa Charitable Society",
      description: "How we handle and protect your personal data.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

interface PolicySection {
  title: string;
  content: string[];
}

const sections: PolicySection[] = [
  {
    title: "Information We Collect",
    content: [
      "When you visit our website, make a donation, or contact us, we may collect the following information:",
      "Personal identification information: name, email address, phone number, and postal address.",
      "Financial information: payment details processed securely through Razorpay. We do not store your credit/debit card numbers or bank account details on our servers.",
      "Technical information: IP address, browser type, device information, and pages visited, collected automatically through cookies and similar technologies.",
      "Communication data: any information you provide when contacting us via email, phone, or our contact form.",
    ],
  },
  {
    title: "Use of Data",
    content: [
      "We use the information we collect for the following purposes:",
      "To process your donations and issue 80G tax receipts.",
      "To communicate with you about our programmes, events, and impact reports.",
      "To respond to your enquiries and provide support.",
      "To improve our website, services, and user experience.",
      "To comply with legal obligations, including tax reporting and regulatory requirements under Indian law.",
      "We will never sell, rent, or share your personal information with third parties for their marketing purposes.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience.",
      "Essential cookies: required for the website to function properly, including session management and security.",
      "Analytics cookies: help us understand how visitors interact with our website so we can improve it. We use privacy-respecting analytics tools.",
      "You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "We use the following third-party services that may collect data:",
      "Razorpay: our payment gateway for processing online donations. Razorpay's privacy policy governs the handling of your payment information. Visit razorpay.com/privacy for details.",
      "Vercel: our website hosting provider. Vercel may collect basic analytics and performance data.",
      "We ensure that all third-party service providers adhere to appropriate data protection standards.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.",
      "All data transmitted between your browser and our website is encrypted using SSL/TLS technology.",
      "Payment transactions are processed through Razorpay's PCI-DSS compliant infrastructure.",
      "While we strive to protect your personal information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to maintaining the highest practicable standards.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the following rights regarding your personal data:",
      "Right to access: you can request a copy of the personal data we hold about you.",
      "Right to correction: you can request that we correct any inaccurate or incomplete data.",
      "Right to deletion: you can request that we delete your personal data, subject to legal retention requirements.",
      "Right to withdraw consent: you can withdraw your consent for receiving communications at any time.",
      "To exercise any of these rights, please contact us at the email address provided below.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Any updates will be posted on this page with the revised date.",
      "We encourage you to review this page periodically for the latest information on our privacy practices.",
    ],
  },
  {
    title: "Contact",
    content: [
      "If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:",
      "Email: shriradhemaacharitablesociety@gmail.com",
      "Phone: +91 95608 00343",
      "Address: Plot No. 5, Pocket-11, Sector-5, Rohini, New Delhi - 110085, India",
    ],
  },
];

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Privacy Policy", url: "https://shriradhemasociety.org/privacy-policy" },
  ]);

  return (
    <div className="section-white" style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              title="Privacy Policy"
              titleHi="गोपनीयता नीति"
              className="mb-14"
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-warm-500 text-sm font-sans mb-10">
              Last updated: January 2025
            </p>
            <p className="text-warm-600 text-[15px] leading-relaxed font-sans mb-12">
              Shri Radhe Maa Charitable Society (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), registered under
              the Societies Registration Act (Reg. No. S/2930/SDM/NW/2017), is committed
              to protecting your privacy. This Privacy Policy explains how we collect, use,
              and safeguard your personal information when you visit our website or interact
              with our services.
            </p>
          </ScrollReveal>

          {sections.map((section, i) => (
            <ScrollReveal key={i} delay={150 + i * 50}>
              <div className="mb-10">
                <h3 className="font-serif text-xl text-warm-900 mb-4">
                  {i + 1}. {section.title}
                </h3>
                <div className="space-y-3">
                  {section.content.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-warm-600 text-[15px] leading-relaxed font-sans"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
