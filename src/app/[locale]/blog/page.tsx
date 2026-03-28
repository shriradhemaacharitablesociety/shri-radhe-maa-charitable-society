import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { blogPosts, categoryLabels } from "@/data/blog";
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
      ? "समाचार और अपडेट | श्री राधे माँ चैरिटेबल सोसाइटी"
      : "News & Updates | Shri Radhe Maa Charitable Society",
    description: isHindi
      ? "श्री राधे माँ चैरिटेबल सोसाइटी के नवीनतम समाचार, शिविर रिपोर्ट, आयोजन और उपलब्धियाँ। सेवा कार्यों की ताज़ा जानकारी।"
      : "Latest news, camp reports, events, and milestones from Shri Radhe Maa Charitable Society. Stay updated on our seva activities across India.",
    keywords: isHindi
      ? ["समाचार", "अपडेट", "शिविर रिपोर्ट", "चैरिटी समाचार", "श्री राधे माँ सोसाइटी"]
      : ["news", "updates", "camp reports", "charity news", "Shri Radhe Maa Society", "NGO blog"],
    alternates: { languages: { "en-IN": "/en/blog", "hi-IN": "/hi/blog" } },
    openGraph: {
      title: "News & Updates | Shri Radhe Maa Charitable Society",
      description: "Latest news, camp reports, and milestones from our seva activities.",
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "News & Updates", url: "https://shriradhemasociety.org/blog" },
  ]);

  const featuredPost = blogPosts.find((p) => p.featured);
  const otherPosts = blogPosts.filter((p) => p !== featuredPost);

  return (
    <div style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <SectionHeader
            title="News & Updates"
            titleHi="समाचार और अपडेट"
            subtitle="Latest news, camp reports, and milestones from our seva activities across India."
            className="mb-12"
          />
        </ScrollReveal>

        {/* Featured post */}
        {featuredPost && (
          <ScrollReveal delay={100}>
            <Link href={`/blog/${featuredPost.slug}`} className="block mb-12 group">
              <div className="rounded-2xl border border-black/[0.06] bg-cream p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="gold">
                    {categoryLabels[featuredPost.category].en}
                  </Badge>
                  <span className="text-warm-400 text-xs font-sans">Featured</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-warm-900 tracking-tight leading-tight group-hover:text-crimson-600 transition-colors mb-3">
                  {featuredPost.title}
                </h2>
                <p className="font-devanagari text-warm-800/50 text-base mb-4" lang="hi">
                  {featuredPost.titleHi}
                </p>
                <p className="text-warm-600 font-sans text-[15px] leading-relaxed max-w-2xl mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-warm-500 text-xs font-sans">
                  <span>{formatDate(featuredPost.publishedAt)}</span>
                  <span className="w-1 h-1 rounded-full bg-warm-300" />
                  <span>{featuredPost.readTime} min read</span>
                  <span className="w-1 h-1 rounded-full bg-warm-300" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-crimson-500 text-sm font-semibold font-sans group-hover:gap-2.5 transition-all duration-300">
                  Read full article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        )}

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={200 + i * 120}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card variant="cream" className="h-full cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="gold">
                        {categoryLabels[post.category].en}
                      </Badge>
                    </div>
                    <h3 className="font-serif text-xl text-warm-900 leading-tight group-hover:text-crimson-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-devanagari text-warm-800/50 text-sm mt-1" lang="hi">
                      {post.titleHi}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-warm-600 font-sans text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-warm-400 text-xs font-sans">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span className="w-1 h-1 rounded-full bg-warm-300" />
                      <span>{post.readTime} min read</span>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-crimson-500 text-sm font-semibold font-sans group-hover:gap-2.5 transition-all duration-300">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
