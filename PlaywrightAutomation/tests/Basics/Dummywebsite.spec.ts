import {test} from '@playwright/test'

test("Dummy Booking Website", async({page}) => {
    await page.goto("https://sqatools.in/dummy-booking-website/")
    await page.locator("#firstname").nth(0).fill("Rahul")
    await page.locator("#firstname").nth(1).fill("Gupta")
    await page.screenshot({path: "dummywebsite.png"})

})