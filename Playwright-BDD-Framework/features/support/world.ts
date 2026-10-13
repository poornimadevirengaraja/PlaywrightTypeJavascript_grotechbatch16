import { IWorldOptions, World, setWorldConstructor } from "@cucumber/cucumber";
import type { Browser, BrowserContext, Dialog, Page } from "playwright";

export interface DialogResult {
  type: ReturnType<Dialog["type"]>;
  message: string;
  defaultValue: string;
}

export class PlaywrightWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  baseUrl: string;
  browserName: string;
  dialogResult?: DialogResult;

  constructor(options: IWorldOptions) {
    super(options);
    this.baseUrl =
      process.env.BASE_URL ??
      "https://sqatools.in/automation-practice-page/";
    this.browserName = process.env.BROWSER ?? "chromium";
  }
}

setWorldConstructor(PlaywrightWorld);
