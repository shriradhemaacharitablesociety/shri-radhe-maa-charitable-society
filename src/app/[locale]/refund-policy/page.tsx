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
      ? "रिफंड और रद्दीकरण नीति | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "Refund & Cancellation Policy | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी की दान रिफंड और रद्दीकरण नीति। गलती से किए गए दान के लिए रिफंड प्रक्रिया।"
      : "Refund and cancellation policy for donations made to Shri Radhe Maa Charitable Society. Process for requesting refunds on erroneous donations.",
    alternates: { languages: { "en-IN": "/en/refund-policy", "hi-IN": "/hi/refund-policy" } },
    openGraph: {
      title: "Refund & Cancellation Policy | Shri Radhe Maa Charitable Society",
      description: "Donation refund and cancellation policy.",
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
    title: "General Policy",
    content: [
      "All donations made to Shri Radhe Maa Charitable Society are voluntary contributions towards charitable and social welfare activities. As donations are acts of generosity, they are generally considered non-refundable.",
      "We value every contribution and ensure that all funds are utilised transparently for the benefit of the communities we serve.",
    ],
  },
  {
    title: "Eligibility for Refund",
    content: [
      "A refund may be considered under the following circumstances:",
      "Duplicate transaction: if you have been charged more than once for the same donation due to a technical error.",
      "Incorrect amount: if an amount was debited that differs significantly from the intended donation due to a system or input error.",
      "Unauthorised transaction: if a donation was made using your payment method without your knowledge or consent.",
      "Refund requests for reasons other than the above will be reviewed on a case-by-case basis at the discretion of the society.",
    ],
  },
  {
    title: "Refund Request Timeline",
    content: [
      "All refund requests must be submitted within 30 days from the date of the donation.",
      "Requests received after 30 days may not be eligible for a refund, as the funds may have already been allocated to charitable programmes.",
      "We encourage donors to verify transaction details immediately after making a donation to ensure accuracy.",
    ],
  },
  {
    title: "How to Request a Refund",
    content: [
      "To request a refund, please contact us with the following details:",
      "Your full name as used during the donation.",
      "Date and amount of the donation.",
      "Transaction ID or payment reference number.",
      "Reason for the refund request.",
      "A copy of the payment confirmation or bank statement showing the deduction.",
      "Send your request to: shriradhemaacharitablesociety@gmail.com or call us at +91 95608 00343.",
    ],
  },
  {
    title: "Refund Processing",
    content: [
      "Once we receive your refund request, our team will review and verify the details within 7 working days.",
      "If the refund is approved, the amount will be credited back to your original payment method within 14 working days from the date of approval.",
      "Refunds will be processed through Razorpay (our payment gateway) and the exact timeline may vary depending on your bank or payment provider.",
      "You will receive an email confirmation once the refund has been processed.",
    ],
  },
  {
    title: "Cancellation of Recurring Donations",
    content: [
      "If you have set up a recurring donation and wish to cancel it, please contact us at shriradhemaacharitablesociety@gmail.com at least 7 days before the next scheduled payment.",
      "Cancellation will take effect from the next billing cycle. Any payments already processed will not be refunded unless they meet the eligibility criteria mentioned above.",
    ],
  },
  {
    title: "Non-Refundable Situations",
    content: [
      "Refunds will generally not be issued in the following cases:",
      "Change of mind after making a voluntary donation.",
      "Donations where an 80G tax receipt has already been issued and filed with the Income Tax Department.",
      "Donations that have already been utilised for charitable activities.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "For any questions or concerns regarding refunds and cancellations, please reach out to us:",
      "Email: shriradhemaacharitablesociety@gmail.com",
      "Phone: +91 95608 00343",
      "Address: Plot No. 5, Pocket-11, Sector-5, Rohini, New Delhi - 110085, India",
      "We are committed to resolving all queries in a fair and timely manner.",
    ],
  },
];

export default async function RefundPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://srmcs.org" },
    { name: "Refund & Cancellation Policy", url: "https://srmcs.org/refund-policy" },
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
              title="Refund & Cancellation Policy"
              titleHi="रिफंड और रद्दीकरण नीति"
              className="mb-14"
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-warm-500 text-sm font-sans mb-10">
              Last updated: January 2025
            </p>
            <p className="text-warm-600 text-[15px] leading-relaxed font-sans mb-12">
              This policy outlines the terms for refunds and cancellations of donations
              made to Shri Radhe Maa Charitable Society (Reg. No. S/2930/SDM/NW/2017).
              We believe in transparency and fairness in all our dealings with donors.
            </p>
          </ScrollReveal>

          {/* Key highlight */}
          <ScrollReveal delay={150}>
            <div className="mb-12 rounded-2xl border border-crimson-200 bg-crimson-50/30 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-crimson-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-crimson-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-warm-900 mb-1">
                    Important
                  </h3>
                  <p className="text-warm-600 text-sm leading-relaxed font-sans">
                    Donations are voluntary contributions and are generally non-refundable.
                    Refund requests must be submitted within <strong className="text-warm-900">30 days</strong> of
                    the donation date. Please contact us at{" "}
                    <a
                      href="mailto:shriradhemaacharitablesociety@gmail.com"
                      className="text-crimson-500 underline underline-offset-2"
                    >
                      shriradhemaacharitablesociety@gmail.com
                    </a>{" "}
                    for assistance.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {sections.map((section, i) => (
            <ScrollReveal key={i} delay={200 + i * 50}>
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
          <ScrollReveal delay={650}>
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
                  href={`/${locale}/terms`}
                  className="font-sans text-sm text-crimson-500 hover:text-crimson-700 underline underline-offset-2 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
