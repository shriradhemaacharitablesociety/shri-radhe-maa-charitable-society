/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://shriradhemasociety.org",
  generateRobotsTxt: true,
  alternateRefs: [
    { href: "https://shriradhemasociety.org/en", hreflang: "en-IN" },
    { href: "https://shriradhemasociety.org/hi", hreflang: "hi-IN" },
  ],
  exclude: ["/api/*"],
};
