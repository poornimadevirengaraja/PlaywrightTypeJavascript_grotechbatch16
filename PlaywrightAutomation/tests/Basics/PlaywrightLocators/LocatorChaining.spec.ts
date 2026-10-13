import {test} from '@playwright/test'

test.describe("Locator Chaining", ()=> {
    test("First Test Cases", async({page})=> {
        await page.goto("https://sqatools.in/dummy-booking-website/")
         await page.setViewportSize({width: 2000, height: 1080})
        await page.locator("table#cities").locator("tr").locator("input").nth(0).check()

        //select the row with the help of getByRole.
        await page.getByRole("row", {name : "Kolkata 5000"}).getByRole("checkbox").click()

        // get row value with the help filter.
        await page.locator("tr").filter({hasText: "Hyderabad"}).getByRole("checkbox").click()

        await page.getByRole("listitem").filter({hasText: "Dummy return ticket – $300"}).getByRole("radio").check()
    })

    test("Add items to the list", async({page})=> {
        await page.setViewportSize({width: 2000, height: 1080})
        await page.goto("https://www.saucedemo.com/")
        await page.getByPlaceholder("Username").fill("standard_user")
        await page.getByPlaceholder("Password").fill("secret_sauce")
        await page.getByRole("button", {name: "Login"}).click()

        const itemdiv = page.locator(".inventory_item").filter({hasText: "Sauce Labs Backpack"})
        await itemdiv.getByRole("button", {name: "Add to cart"}).click()

        const itemdiv2 = page.locator(".inventory_item").filter({hasText: "Sauce Labs Bike Light"})
        await itemdiv2.getByRole("button", {name: "Add to cart"}).click()

        // user locator as filter.
        const itemdiv3 = page.locator(".inventory_item").filter({has: page.locator("//div[contains(text(), 'Sauce Labs Bolt T-Shirt')]")})
        await itemdiv3.getByRole("button", {name: "Add to cart"}).click()

        // Use multiple filter
        const itemdiv4 = page.locator(".inventory_item").filter({hasText: "Sauce Labs Fleece Jacket"}).filter({has: page.locator(".inventory_item_price")})
        await itemdiv4.getByRole("button", {name: "Add to cart"}).click()

    })
})