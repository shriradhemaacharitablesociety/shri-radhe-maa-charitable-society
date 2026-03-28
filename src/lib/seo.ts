// ─── JSON-LD Schema Generators ────────────────────────────────────────────────
// Used for SEO, GEO (AI search engines), and AEO (featured snippets / voice).

const BASE_URL = "https://shriradhemasociety.org";

/** NonProfit / NGO Organisation schema — rendered on every page via root layout */
export function nonprofitJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Shri Radhe Maa Charitable Society",
    alternateName: "श्री राधे माँ चैरिटेबल सोसाइटी",
    url: BASE_URL,
    description:
      "Registered charitable society serving humanity through free dialysis, disaster relief, monthly pensions, and divyang seva since 2017. समाज सेवा, मुफ्त डायलिसिस, बाढ़ राहत, मासिक पेंशन।",
    foundingDate: "2017-08-21",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 5, Pocket-11, Sector-5, Rohini",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110085",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9560800343",
        email: "shriradhemaacharitablesociety@gmail.com",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/shreeradhemaa",
      "https://www.facebook.com/ShriRadheMaa",
      "https://www.youtube.com/ShreeRadheMaa",
    ],
    knowsAbout: [
      "Free dialysis",
      "Disaster relief",
      "Monthly pension",
      "Divyang seva",
      "Marriage assistance",
      "Gaushala support",
      "Blood donation",
      "Charitable work in India",
    ],
  };
}

/** FAQPage schema — pass an array of {question, answer} pairs */
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Event schema */
export function eventJsonLd(event: {
  name: string;
  date: string;
  location: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    startDate: event.date,
    location: {
      "@type": "Place",
      name: event.location,
    },
    description: event.description,
    organizer: {
      "@type": "Organization",
      name: "Shri Radhe Maa Charitable Society",
    },
  };
}

/** BreadcrumbList schema */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** DonateAction schema — signals donation intent to AI / GEO engines */
export function donateActionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    recipient: {
      "@type": "Organization",
      name: "Shri Radhe Maa Charitable Society",
    },
    description:
      "Donate to support free dialysis, disaster relief, pensions, and more. 80G tax deduction available.",
  };
}
