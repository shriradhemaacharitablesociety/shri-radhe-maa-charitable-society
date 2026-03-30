/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://shriradhemasociety.org",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  alternateRefs: [
    { href: "https://shriradhemasociety.org/en", hreflang: "en-IN" },
    { href: "https://shriradhemasociety.org/hi", hreflang: "hi-IN" },
  ],
  exclude: ["/api/*", "/admin/*", "/login", "/donor"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api", "/donor", "/login"] },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
    ],
    additionalSitemaps: [],
  },
  additionalPaths: async (config) => {
    const paths = [];

    // Blog posts
    const blogSlugs = [
      "free-dialysis-centre-completes-3-years",
      "flood-relief-operations-punjab-2025",
    ];
    for (const slug of blogSlugs) {
      paths.push({
        loc: `/en/blog/${slug}`,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
      });
      paths.push({
        loc: `/hi/blog/${slug}`,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
      });
    }

    // Key pages with higher priority
    const highPriorityPages = [
      { path: "", priority: 1.0, changefreq: "daily" },
      { path: "/get-involved/donate", priority: 0.9, changefreq: "weekly" },
      { path: "/about/society", priority: 0.8, changefreq: "monthly" },
      { path: "/about/maa", priority: 0.8, changefreq: "monthly" },
      { path: "/seva/healthcare", priority: 0.8, changefreq: "monthly" },
      { path: "/contact", priority: 0.8, changefreq: "monthly" },
      { path: "/faq", priority: 0.7, changefreq: "monthly" },
      { path: "/80g", priority: 0.7, changefreq: "monthly" },
      { path: "/transparency", priority: 0.7, changefreq: "monthly" },
    ];

    for (const page of highPriorityPages) {
      for (const locale of ["en", "hi"]) {
        paths.push({
          loc: `/${locale}${page.path}`,
          changefreq: page.changefreq,
          priority: page.priority,
          lastmod: new Date().toISOString(),
        });
      }
    }

    return paths;
  },
};
