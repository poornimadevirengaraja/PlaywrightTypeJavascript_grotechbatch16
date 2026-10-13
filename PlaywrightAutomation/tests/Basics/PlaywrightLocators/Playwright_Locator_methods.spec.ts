/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import {test, expect} from '@playwright/test'

test.describe("Playwright Locator Methods", ()=> {
    test("getByRole Method", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const PrimaryButton =  page.getByRole("button", {name: "Primary Action"})
        expect(PrimaryButton).toBeEnabled()
        expect(PrimaryButton).not.toBeDisabled()
        expect(PrimaryButton).toBeAttached()
        expect(PrimaryButton).not.toBeHidden()
        await PrimaryButton.click()

        await page.getByRole("textbox", {name: "Username"}).fill("Rahul")
        await page.getByRole("checkbox", {name: "Accept terms"}).click()

    });

    test("getByText() Method", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await expect(page.getByText("colored text")).toBeVisible()
        const btn = page.getByText("Submit Form")
        console.log("check button is visible:", await btn.isEnabled(), await btn.isVisible())
        await expect(page.getByText("Submit Form")).toBeEnabled()
    });

    test("getByLabel() Method", async({page})=> {
        //<label for="email">Email Address:</label>
        //in this method label could a tagname or it could be attribute as well.
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const email = page.getByLabel("Email Address:")
        await email.scrollIntoViewIfNeeded()
        await email.fill("rahul@gmail.com")
        const val = await email.inputValue()
        console.log("Value entered:", val)
        expect(val).toEqual("rahul@gmail.com")

        await page.getByLabel("Password:").fill("P@ssword123")
        await page.getByLabel("Your Age:").fill("25")
        await page.getByLabel("Standard").check()
        await page.getByLabel("Express").check()

    });

    test("getByPlaceholder()  Method", async({page})=> {
        // we can indetify the element with placeholder when element has placeholder attribute.
        // <input type="text" placeholder="Enter your full name" class="full-width">
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.getByPlaceholder("Enter your full name").fill("Rahul Gupta")
        await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("7897897686")
        await page.getByPlaceholder("Type your message here...").fill("We are learning Playwright Locators")
        await page.getByPlaceholder("Search products...").fill("abc")
        
    });

    test("getByAltText()  Method", async({page})=> {
        //<img alt="logo image" src="https://playwright.dev/img/playwright-logo.svg">
        //getByAltText() only works with alt attribute of images and videos
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const image = page.getByAltText("logo image")
        await expect(image).toBeVisible()
        
    });

    test("getByTitle()  Method", async({page})=> {
        //<a href="#" title="Home page link">Home</a>>
        //getByTitle() only works title attribute of the the elements.
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const homelink = page.getByTitle("Home page link")
        console.log(await homelink.textContent())

        const lnk2 = page.getByTitle("HyperText Markup Language")
        console.log(await lnk2.textContent())
        
    });

    test("getByTestId()  Method", async({page})=> {
        //<h3 data-testid="profile-name">John Doe</h3>
        //Locate elements by their data-testid attribute (or other configured attribute).
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        console.log(await page.getByTestId("profile-name").textContent())
        console.log(await page.getByTestId("profile-email").textContent())
        console.log(await page.getByTestId("edit-profile-btn").textContent())
        console.log(await page.getByTestId("product-card-1").textContent())
        console.log(await page.getByTestId("product-card-2").textContent())
        console.log(await page.getByTestId("product-card-3").textContent())
    });

    test("Combine All Methods", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        await page.getByPlaceholder("Enter username").fill("Virat")
        await page.getByPlaceholder("Enter password").fill("user@12345")
        const TextArea =  page.locator("#address")
        await TextArea.clear()
        await TextArea.fill("Learning Playwright Fundamentals")
    });
})