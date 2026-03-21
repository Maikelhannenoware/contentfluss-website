import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const BASE = 'http://127.0.0.1:4321';
const SCREENSHOT_DIR = new URL('../screenshots/', import.meta.url);

async function ensureScreenshotDir() {
  await mkdir(SCREENSHOT_DIR, { recursive: true });
}

async function run() {
  await ensureScreenshotDir();
  const browser = await chromium.launch();

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);

    await page.screenshot({
      path: new URL(`refine-${vp.name}-hero.png`, SCREENSHOT_DIR).pathname,
    });

    const sections = [
      '.home-hero',
      '.home-signature',
      '.home-industries',
      '.home-workflows',
      '.home-process',
      '.home-final',
    ];

    for (const selector of sections) {
      const el = await page.$(selector);
      if (!el) continue;

      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1200);
      await page.screenshot({
        path: new URL(`refine-${vp.name}-${selector.replace('.', '')}.png`, SCREENSHOT_DIR).pathname,
      });
    }

    await page.screenshot({
      path: new URL(`refine-${vp.name}-full.png`, SCREENSHOT_DIR).pathname,
      fullPage: true,
    });

    const perf = await page.evaluate(() => {
      const entry = performance.getEntriesByType('navigation')[0];
      if (!entry) return null;

      return {
        domComplete: entry.domComplete,
        loadEventEnd: entry.loadEventEnd,
      };
    });

    console.log(`${vp.name} performance:`, perf);
    await context.close();
  }

  await browser.close();
  console.log('Refinement screenshots saved.');
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
