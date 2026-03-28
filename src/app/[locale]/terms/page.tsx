import type { Metadata } from "next";
import Link from "next/link";
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
      ? "नियम और शर्तें | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Terms & Conditions | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी की वेबसाइट के उपयोग के नियम और शर्तें।"
      : "Terms and conditions governing the use of Shri Radhe Maa Charitable Society website and donation services.",
    alternates: { languages: { "en-IN": "/en/terms", "hi-IN": "/hi/terms" } },
    openGraph: {
      title: "Terms & Conditions | Shri Radhe Maa Charitable Society",
      description: "Terms governing website use and donations.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

interface TermsSection {
  title: string;
  content: string[];
}

const sections: TermsSection[] = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing and using this website (shriradhemasociety.org), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.",
      "These terms apply to all visitors, users, and donors who access or use the website.",
      "We reserve the right to modify these terms at any time without prior notice. Continued use of the website after any changes constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "Donations",
    content: [
      "All donations made to Shri Radhe Maa Charitable Society are voluntary contributions for charitable purposes.",
      "Donations are processed securely through Razorpay, our authorised payment gateway. By making a donation, you agree to Razorpay's terms of service and privacy policy.",
      "You confirm that you are authorised to use the payment method provided and that all information submitted is accurate and complete.",
      "The society reserves the right to allocate donated funds to any of its registered charitable activities as deemed appropriate by the governing body, unless a specific programme has been designated by the donor.",
      "Donation receipts, including 80G tax receipts, will be issued upon request. Please contact us with your donation details to obtain your receipt.",
      "For our refund and cancellation policy regarding donations, please refer to our Refund Policy page.",
    ],
  },
  {
    title: "Use of Website",
    content: [
      "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the website.",
      "You must not use the website to transmit any material that is defamatory, offensive, or otherwise objectionable.",
      "You must not attempt to gain unauthorised access to any part of the website, the server on which it is hosted, or any connected systems.",
      "We do not guarantee that the website will be available at all times or that access will be uninterrupted or error-free.",
      "We reserve the right to modify, suspend, or discontinue any aspect of the website at any time without notice.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content on this website, including but not limited to text, images, graphics, logos, and design elements, is the property of Shri Radhe Maa Charitable Society or its licensors and is protected by Indian and international copyright laws.",
      "You may view, download, and print pages from this website for personal, non-commercial use only, provided you do not modify the content and retain all copyright and proprietary notices.",
      "No part of this website may be reproduced, distributed, or transmitted in any form without prior written consent from the society.",
      "The name \"Shri Radhe Maa Charitable Society\" and associated logos are trademarks of the society and may not be used without authorisation.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    content: [
      "This website and its content are provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied.",
      "We do not warrant that the information on this website is accurate, complete, or current, though we make every effort to ensure its accuracy.",
      "We are not responsible for any errors, omissions, or for any outcomes related to the use of information provided on this website.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable Indian law, Shri Radhe Maa Charitable Society, its trustees, officers, and employees shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of or inability to use this website.",
      "This limitation applies to damages of any kind, including but not limited to loss of data, loss of revenue, or personal injury, whether in an action of contract, negligence, or other tortious action.",
      "Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded or limited under applicable law.",
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      "This website may contain links to third-party websites that are not owned or controlled by Shri Radhe Maa Charitable Society.",
      "We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.",
      "Accessing third-party links is at your own risk and subject to the terms and conditions of those websites.",
    ],
  },
  {
    title: "Governing Law & Jurisdiction",
    content: [
      "These Terms and Conditions are governed by and construed in accordance with the laws of India.",
      "Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.",
      "If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
    ],
  },
];

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "Terms & Conditions", url: "https://shriradhemasociety.org/terms" },
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
              title="Terms & Conditions"
              titleHi="नियम और शर्तें"
              className="mb-14"
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-warm-500 text-sm font-sans mb-10">
              Last updated: January 2025
            </p>
            <p className="text-warm-600 text-[15px] leading-relaxed font-sans mb-12">
              Welcome to the website of Shri Radhe Maa Charitable Society, a registered
              charitable organisation (Reg. No. S/2930/SDM/NW/2017) operating from
              Plot No. 5, Pocket-11, Sector-5, Rohini, New Delhi - 110085. Please read
              these Terms and Conditions carefully before using our website.
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

          {/* Related links */}
          <ScrollReveal delay={600}>
            <div className="mt-12 pt-8 border-t border-warm-200">
              <p className="font-sans text-warm-500 text-sm mb-3">
                Related policies:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${locale}/privacy-policy`}
                  className="font-sans text-sm text-crimson-500 hover:text-crimson-700 underline underline-offset-2 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href={`/${locale}/refund-policy`}
                  className="font-sans text-sm text-crimson-500 hover:text-crimson-700 underline underline-offset-2 transition-colors"
                >
                  Refund & Cancellation Policy
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
