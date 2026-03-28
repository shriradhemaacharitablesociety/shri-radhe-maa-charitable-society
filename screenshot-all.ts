import { chromium } from "playwright";

const BASE = "http://localhost:3000";

const pages = [
  { path: "/en", name: "homepage" },
  { path: "/en/about", name: "about" },
  { path: "/en/about/maa", name: "about-maa" },
  { path: "/en/about/society", name: "about-society" },
  { path: "/en/about/leadership", name: "about-leadership" },
  { path: "/en/seva", name: "seva" },
  { path: "/en/seva/healthcare", name: "seva-healthcare" },
  { path: "/en/seva/financial-aid", name: "seva-financial-aid" },
  { path: "/en/seva/disaster-relief", name: "seva-disaster-relief" },
  { path: "/en/seva/janseva", name: "seva-janseva" },
  { path: "/en/seva/gaushala", name: "seva-gaushala" },
  { path: "/en/events", name: "events" },
  { path: "/en/gallery", name: "gallery" },
  { path: "/en/transparency", name: "transparency" },
  { path: "/en/contact", name: "contact" },
  { path: "/en/get-involved/donate", name: "donate" },
  { path: "/en/get-involved/volunteer", name: "volunteer" },
  { path: "/en/get-involved/csr", name: "csr" },
];

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

  for (const pg of pages) {
    const page = await context.newPage();
    try {
      await page.goto(`${BASE}${pg.path}`, { waitUntil: "networkidle", timeout: 15000 });
      await page.waitForTimeout(1000);
      await page.screenshot({
        path: `screenshots/${pg.name}.png`,
        fullPage: true,
      });
      console.log(`✓ ${pg.name}`);
    } catch (e: any) {
      console.log(`✗ ${pg.name}: ${e.message}`);
    }
    await page.close();
  }

  await browser.close();
  console.log("\nDone! Screenshots in ./screenshots/");
}

run();
