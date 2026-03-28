export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  excerpt: string;
  content: string;
  category: "camp-report" | "event" | "milestone" | "news";
  author: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "free-dialysis-centre-completes-3-years",
    title: "Free Dialysis Centre Completes 3 Years of Service",
    titleHi: "निःशुल्क डायलिसिस केंद्र ने सेवा के 3 वर्ष पूरे किए",
    excerpt: "Our 24/7 free dialysis centre at Anand Hospital, Dahisar has provided over 5,000 free sessions to patients in need since its establishment.",
    content: "The free dialysis centre established by Shri Radhe Maa Charitable Society at Anand Hospital, Dahisar East, Mumbai has completed three years of uninterrupted service. Since its inception, the centre has provided over 5,000 free haemodialysis sessions to patients who cannot afford treatment.\n\nThe centre operates 24/7 with modern dialysis machines and trained medical staff, serving an average of 15 patients daily. Many patients travel from across Mumbai and neighbouring districts to access this life-saving service.\n\nThe initiative was launched under the divine guidance of Shri Radhe Guru Maa, who has always emphasized that healthcare should be accessible to all regardless of financial status.",
    category: "milestone",
    author: "Society Admin",
    publishedAt: "2026-03-15",
    readTime: 3,
    featured: true,
  },
  {
    id: "2",
    slug: "flood-relief-operations-punjab-2025",
    title: "Flood Relief Operations in Punjab — 500 Families Helped",
    titleHi: "पंजाब में बाढ़ राहत कार्य — 500 परिवारों की मदद",
    excerpt: "The society deployed rapid relief operations in flood-affected areas of Punjab, providing food, medicine, and shelter materials to over 500 families.",
    content: "In response to severe flooding in parts of Punjab during the monsoon season, Shri Radhe Maa Charitable Society mobilized its disaster relief team within 24 hours. The team distributed essential supplies including food packets, clean drinking water, medicines, blankets, and temporary shelter materials to over 500 affected families across multiple villages.\n\nThe society also contributed ₹5 lakh to the PM Cares Fund and ₹3 lakh to the Punjab CM Relief Fund for ongoing rehabilitation efforts. Our volunteers spent three weeks on the ground, coordinating with local authorities and ensuring aid reached the most vulnerable families.\n\nThis operation was part of the society's ongoing commitment to disaster relief, having previously assisted flood-affected communities in Delhi, Maharashtra, and Uttarakhand.",
    category: "camp-report",
    author: "Society Admin",
    publishedAt: "2025-09-20",
    readTime: 4,
    featured: true,
  },
  {
    id: "3",
    slug: "wheelchair-distribution-drive-march-2026",
    title: "Wheelchair Distribution Drive — 50 Wheelchairs Distributed",
    titleHi: "व्हीलचेयर वितरण अभियान — 50 व्हीलचेयर वितरित",
    excerpt: "The society organised a distribution drive providing 50 wheelchairs and mobility aids to differently-abled individuals in Delhi NCR.",
    content: "Shri Radhe Maa Charitable Society organised a wheelchair and mobility aid distribution drive at the Delhi office, providing 50 wheelchairs, 20 hearing aids, and 15 walking sticks to differently-abled individuals from across Delhi NCR.\n\nThe beneficiaries were identified through the society's outreach programme and local community health workers. Each recipient was individually assessed to ensure they received the most suitable mobility aid for their needs.\n\nThe event was attended by society trustees and volunteers who helped with the distribution and provided guidance on wheelchair maintenance and mobility exercises.",
    category: "event",
    author: "Society Admin",
    publishedAt: "2026-03-01",
    readTime: 2,
    featured: false,
  },
  {
    id: "4",
    slug: "society-receives-80g-renewal",
    title: "Society Receives 80G Certificate Renewal for 2026-2031",
    titleHi: "सोसाइटी को 2026-2031 के लिए 80G प्रमाणपत्र नवीनीकरण प्राप्त",
    excerpt: "The Income Tax Department has renewed our 80G certification, ensuring donors continue to receive tax benefits on their contributions.",
    content: "We are pleased to announce that the Income Tax Department has renewed the 80G certification for Shri Radhe Maa Charitable Society for the period 2026-2031. This renewal means that all donations made to the society continue to be eligible for tax deduction under Section 80G of the Income Tax Act.\n\nDonors can claim up to 50% of their donation amount as a tax deduction. For example, a donation of ₹10,000 can result in a tax saving of up to ₹3,000 (depending on the donor's tax bracket).\n\nWe thank all our donors for their continued trust and support. Official donation receipts are available upon request.",
    category: "news",
    author: "Society Admin",
    publishedAt: "2026-02-10",
    readTime: 2,
    featured: false,
  },
];

export const categoryLabels: Record<BlogPost["category"], { en: string; hi: string }> = {
  "camp-report": { en: "Camp Report", hi: "शिविर रिपोर्ट" },
  event: { en: "Event", hi: "आयोजन" },
  milestone: { en: "Milestone", hi: "उपलब्धि" },
  news: { en: "News", hi: "समाचार" },
};
