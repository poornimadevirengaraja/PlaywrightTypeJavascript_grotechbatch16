import {test} from '@playwright/test'

test.describe("handle iframe elements", ()=>{
    test("Get value from iframe element", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        await page.getByRole("heading", {name: "Iframe"}).scrollIntoViewIfNeeded()
        const FrameElement = page.frameLocator("#sampleIframe") 
        console.log("Heading", await FrameElement.getByRole("heading").textContent())
        console.log("Para :", await FrameElement.locator("p").first().textContent())
    })
})