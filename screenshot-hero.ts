import { chromium } from "playwright";
async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3000/en", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "screenshots/homepage-fixed.png", fullPage: false });
  console.log("Done");
  await browser.close();
}
run();
