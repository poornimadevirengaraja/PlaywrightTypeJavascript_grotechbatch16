import { test as base, Page } from '@playwright/test';
import { APIManager } from '../api/common/APIManager'; 

type MyFixtures = {
    apiManager: APIManager;
};

export const test = base.extend<MyFixtures>({
    // fixture1 to initiate a page Manager object
    apiManager: async ({ request }, use) => {
        await use(new APIManager(request));
    }
});