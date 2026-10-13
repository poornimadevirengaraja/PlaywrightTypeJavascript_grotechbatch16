import { Page, Locator } from '@playwright/test';

export class BasePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async getTitle() {
        return await this.page.title();
    }

    async wait(milliseconds: number) {
        await this.page.waitForTimeout(milliseconds);
    }
}