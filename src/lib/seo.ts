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
    logo: `${BASE_URL}/logo.png`,
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
      "https://twitter.com/ShriRadheMaa",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
      sameAs: "https://en.wikipedia.org/wiki/India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Seva Programmes",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Dialysis Centre (24/7)", description: "Free haemodialysis at Anand Hospital, Dahisar East, Mumbai" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Disaster Relief", description: "Rapid response flood and natural disaster relief across India" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Monthly Pension for Widows & Elderly", description: "Regular financial support for widows, elderly, and destitute families" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Divyang Seva", description: "Wheelchairs, prosthetics, and assistive devices for persons with disabilities" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marriage Assistance", description: "Financial support for marriages of underprivileged families" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gaushala Support", description: "Care and shelter for abandoned and injured cows" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blood Donation Camps", description: "Regular blood donation drives across Delhi and Mumbai" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Janseva Distribution", description: "Blankets, food, ration kits, and essentials for underprivileged communities" } },
      ],
    },
    knowsAbout: [
      "Free dialysis",
      "Disaster relief",
      "Monthly pension",
      "Divyang seva",
      "Marriage assistance",
      "Gaushala support",
      "Blood donation",
      "Charitable work in India",
      "80G tax deduction for donations",
      "Widow pension scheme",
      "Flood relief operations",
      "Healthcare for underprivileged",
      "NGO in Delhi",
      "Charitable society in India",
      "Seva and social service",
      "Ration distribution",
      "Blanket distribution",
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

/** Article schema — for blog posts and news updates */
export function articleJsonLd(post: {
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  slug: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Shri Radhe Maa Charitable Society",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    ...(post.image ? { image: post.image } : {}),
  };
}

/** LocalBusiness schema — both Delhi and Mumbai offices */
export function localBusinessJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#delhi-office`,
      name: "Shri Radhe Maa Charitable Society — Delhi Office",
      image: `${BASE_URL}/logo.png`,
      telephone: "+91-9560800343",
      email: "shriradhemaacharitablesociety@gmail.com",
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 5, Pocket-11, Sector-5, Rohini",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110085",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.7325,
        longitude: 77.1088,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "Shri Radhe Maa Charitable Society",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#mumbai-office`,
      name: "Shri Radhe Maa Charitable Society — Mumbai Office",
      image: `${BASE_URL}/logo.png`,
      telephone: "+91-9560800343",
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shree Ram Trade Centre, 6th Floor, Borivali (W)",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400092",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.2307,
        longitude: 72.8567,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "Shri Radhe Maa Charitable Society",
      },
    },
  ];
}

/** VolunteerAction schema — signals volunteer opportunities to AI engines */
export function volunteerActionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VolunteerAction",
    name: "Volunteer with Shri Radhe Maa Charitable Society",
    description:
      "Join our volunteer network to help with distribution drives, medical camps, disaster relief operations, and community seva events across India.",
    agent: {
      "@type": "Organization",
      name: "Shri Radhe Maa Charitable Society",
      url: BASE_URL,
    },
    location: {
      "@type": "Country",
      name: "India",
    },
    url: `${BASE_URL}/get-involved/volunteer`,
  };
}
