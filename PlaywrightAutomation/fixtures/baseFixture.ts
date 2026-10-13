import { test as base, Page } from '@playwright/test';
import { PageManager } from '../pages/common/PageManager.ts';

type MyFixtures = {
    pageManager: PageManager;
    myPage: Page;
    workerPage: any;
    PManager: PageManager
};

export const test = base.extend<MyFixtures>({
    // fixture1 to initiate a page Manager object
    pageManager: async ({ page }, use) => {
        await use(new PageManager(page));
    },

    // fixture2 to initiate page context
    myPage : async({browser}, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://sqatools.in/dummy-booking-website/")
        await use(page);
        //teardown to close the browser context
        await context.close();
           
    },

    // fixture3 worker fixture work till execution of all test in one worker.
    workerPage : [async({browser}, use:any) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://sqatools.in/dummy-booking-website/")
        await use(page);
        //teardown to close the browser context
        await context.close();
    }, {scope: 'worker'}],

    // fixture3 worker fixture work till execution of all test in one worker.
    PManager : [async({browser}, use:any) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await use(new PageManager(page));
        await use(page);
        //teardown to close the browser context
        await context.close();
    }, {scope: 'worker'}]
});