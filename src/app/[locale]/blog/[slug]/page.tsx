import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { blogPosts, categoryLabels } from "@/data/blog";
import { breadcrumbJsonLd, articleJsonLd as articleJsonLdSchema } from "@/lib/seo";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  const isHindi = locale === "hi";
  return {
    title: isHindi
      ? `${post.titleHi} | श्री राधे माँ चैरिटेबल सोसाइटी`
      : `${post.title} | Shri Radhe Maa Charitable Society`,
    description: post.excerpt,
    alternates: {
      languages: {
        "en-IN": `/en/blog/${slug}`,
        "hi-IN": `/hi/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://shriradhemasociety.org" },
    { name: "News & Updates", url: "https://shriradhemasociety.org/blog" },
    { name: post.title, url: `https://shriradhemasociety.org/blog/${post.slug}` },
  ]);

  const articleJsonLd = articleJsonLdSchema({
    title: post.title,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    author: post.author,
    slug: post.slug,
  });

  const shareUrl = `https://shriradhemasociety.org/blog/${post.slug}`;
  const shareText = `${post.title} — Shri Radhe Maa Charitable Society`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  // Split content into paragraphs for proper rendering
  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <div style={{ paddingTop: "24px", paddingBottom: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <ScrollReveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-warm-500 text-sm font-sans hover:text-crimson-500 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            All Posts
          </Link>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal delay={100}>
          <header className="mb-10">
            <Badge variant="gold" className="mb-4">
              {categoryLabels[post.category].en}
            </Badge>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-[2.75rem] text-warm-900 tracking-tight leading-tight mb-2">
              {post.title}
            </h1>
            <p className="font-devanagari text-warm-800/50 text-lg mb-6" lang="hi">
              {post.titleHi}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-warm-500 text-sm font-sans pb-8 border-b border-black/[0.06]">
              <span>{formatDate(post.publishedAt)}</span>
              <span className="w-1 h-1 rounded-full bg-warm-300" />
              <span>{post.readTime} min read</span>
              <span className="w-1 h-1 rounded-full bg-warm-300" />
              <span>{post.author}</span>
            </div>
          </header>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal delay={200}>
          <article className="mb-12">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-warm-600 font-sans text-[15px] leading-[1.85] mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </article>
        </ScrollReveal>

        {/* Share buttons */}
        <ScrollReveal delay={300}>
          <div className="border-t border-black/[0.06] pt-8">
            <p className="text-warm-500 text-sm font-sans mb-4">Share this article</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 min-h-[44px] text-sm font-sans font-medium bg-[#25D366] text-white hover:bg-[#1fb855] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 min-h-[44px] text-sm font-sans font-medium bg-[#1877F2] text-white hover:bg-[#1565c0] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
