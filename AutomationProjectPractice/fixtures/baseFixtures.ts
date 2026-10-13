import {test as base} from '@playwright/test'
import { PageManager } from '../pages/common/PageManager'

type MyFixture = {
    PageM: PageManager 
}

export const test = base.extend<MyFixture>({
    PageM: async({ page }, use) => {
           const pageManager = new PageManager(page)
           await use(pageManager)
        // teardown section
        await page.close()
    }

})

