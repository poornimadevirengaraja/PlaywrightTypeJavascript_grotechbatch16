import {test} from '@playwright/test';

test('xpath and css example', async ({page}) => {
    await page.goto('https://www.goibibo.com/')
    await page.waitForLoadState("load")

    await page.locator(".logSprite.icClose").waitFor({"state": "visible", "timeout": 15000})
    await page.locator(".logSprite.icClose").click()

    await page.locator("#fromCity").click()
    await page.locator("[placeholder='From']").fill("Mumbai")
    await page.locator("//span[text()='Mumbai, India']//ancestor::div[@class='revampedSearchSuggestionMain']").click()

});

test("Add to cart examples", async({page})=> {
    await page.goto("https://www.saucedemo.com/")
    await page.waitForLoadState("load")
    await page.locator("//input[@data-test='username']").fill("standard_user")
    await page.locator("//input[@data-test='password']").fill("secret_sauce")
    await page.locator("//input[@data-test='login-button']").click()

    // const AllElements = await page.locator("//*[text()='Add to cart']").all()
    // console.log(AllElements.length)
    // for(var Element of AllElements) {
    //     await Element.click()
    //     await page.waitForTimeout(2000)
    // }
    const ProductArray = [
        "Sauce Labs Backpack",
        "Sauce Labs Bike Light",
        "Sauce Labs Bolt T-Shirt",
        "Sauce Labs Fleece Jacket",
        "Sauce Labs Onesie",
    ]

    for (var item of ProductArray) {
        await page.locator(`//div[text()='${item}']/ancestor::div[contains(@class, 'description')]//button`).click()
        await page.waitForTimeout(2000)
    }
});

test("Get College Names ", async({page})=> {
    await page.goto("https://www.nirfindia.org/Rankings/2025/CollegeRanking.html")
    await page.waitForLoadState("load")
    const allrows = await page.locator("//table[@id='tbl_overall']/tbody/tr").all()

    for (var i=1; i<=allrows.length; i++) {
        const collegeName: any = await page.locator(`//table[@id='tbl_overall']/tbody/tr[${i}]/td[2]`).textContent()
        console.log(collegeName.split("|")[0])
    }
})

test("select all checkbox using city name:", async({page})=> {
    await page.goto("https://sqatools.in/dummy-booking-website/")
    await page.waitForLoadState("load")

    const CityArray = ["Indore", "Pune", "Mumbai", "Kolkata", "Hyderabad", "Orangabad", "Delhi"]
    for (var city of CityArray) {
        await page.locator(`//td[text()='${city}']/preceding-sibling::td/input`).click()
        await page.waitForTimeout(2000)
    }
})