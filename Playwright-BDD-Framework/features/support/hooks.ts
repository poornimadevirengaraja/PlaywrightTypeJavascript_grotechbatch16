import {
  After,
  Before,
  BeforeAll,
  AfterAll,
  Status,
  setDefaultTimeout
} from "@cucumber/cucumber";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import {
  chromium,
  firefox,
  webkit,
  type Browser,
  type BrowserType
} from "playwright";
import { PlaywrightWorld } from "./world";

let browser: Browser;
setDefaultTimeout(30_000);

const browserTypes: Record<string, BrowserType> = {
  chromium,
  firefox,
  webkit
};

BeforeAll(async function () {
  const browserName = process.env.BROWSER ?? "chromium";
  const browserType = browserTypes[browserName];
  if (!browserType) {
    throw new Error(
      `Unsupported BROWSER "${browserName}". Choose chromium, firefox, or webkit.`
    );
  }
  browser = await browserType.launch({ headless: true });
});

Before(async function (this: PlaywrightWorld) {
  this.browser = browser;
  this.context = await browser.newContext({ acceptDownloads: true });
  this.context.setDefaultTimeout(10_000);
  await this.context.tracing.start({
    screenshots: true,
    snapshots: true,
    sources: true
  });
  this.page = await this.context.newPage();
});

After(async function (this: PlaywrightWorld, scenario) {
  if (!this.context) {
    return;
  }

  try {
    if (scenario.result?.status === Status.FAILED) {
      const resultsDir = path.resolve("test-results");
      await mkdir(resultsDir, { recursive: true });
      const safeName = scenario.pickle.name
        .replace(/[^a-z0-9-]+/gi, "-")
        .replace(/^-|-$/g, "");
      const artifactName = `${this.browserName}-${safeName}`;
      const screenshotPath = path.join(resultsDir, `${artifactName}.png`);
      const tracePath = path.join(resultsDir, `${artifactName}.zip`);

      await this.page.screenshot({ path: screenshotPath, fullPage: true });
      await this.attach(await readFile(screenshotPath), "image/png");
      await this.context.tracing.stop({ path: tracePath });
      await this.attach(await readFile(tracePath), "application/zip");
    } else {
      await this.context.tracing.stop();
    }
  } finally {
    await this.context.close();
  }
});

AfterAll(async function () {
  await browser?.close();
});
