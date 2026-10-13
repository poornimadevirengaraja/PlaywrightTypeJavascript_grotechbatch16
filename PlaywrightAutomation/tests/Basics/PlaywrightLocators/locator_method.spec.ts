import {test} from '@playwright/test'

test.describe("locator Method :", ()=> {
    test("Get element with tagname", async({page}) => {
        await page.goto("https://sqatools.in/dummy-booking-website/")
        for(var i=1; i<=7; i++){
            const allText = await page.locator("table#cities tbody tr").nth(i).allTextContents()
            console.log(allText)
        }
    });
    test("Get radio element with tagname", async({page}) => {
        await page.goto("https://sqatools.in/dummy-booking-website/")
        await page.locator("div[align='left'] ul li input").first().click()
    });
});