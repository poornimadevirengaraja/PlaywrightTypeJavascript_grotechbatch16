import {test, expect} from '@playwright/test';

test.describe("Page Assertion Methods", async() => {
    test("Page Assertions", async({page})=> {
        await page.goto("https://www.saucedemo.com/")
        await expect(page).toHaveURL("https://www.saucedemo.com/")
        await expect(page).toHaveURL(/saucedemo/)
        await expect(page).toHaveTitle("Swag Labs")
        await page.screenshot({path: "image.png", fullPage: true})
        await page.screenshot({path: "image.webp", fullPage: true})

        await page.goto("https://www.saucedemo.com/inventory.html")
        await expect(page).toHaveScreenshot('image.png');

        // Store the snapshot in the WebP format.
        await expect(page).toHaveScreenshot('image.webp');
    })
});