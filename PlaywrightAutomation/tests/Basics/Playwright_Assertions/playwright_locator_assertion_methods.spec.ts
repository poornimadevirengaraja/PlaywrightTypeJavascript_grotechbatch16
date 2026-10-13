import {test, expect} from '@playwright/test';

test.describe("Locator Assertion Methods", async() => { 
    test("Locator Assertions", async({page})=> {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.waitForLoadState("load")
        const UsernameField = page.getByPlaceholder("Username")
        await expect(UsernameField).toBeAttached()
        await expect(UsernameField).toBeEditable()
        await expect(UsernameField).not.toBeDisabled()
        await expect(UsernameField).toBeFocused()
        await expect(UsernameField).not.toBeHidden()
        await expect(UsernameField).toBeVisible()
        await expect(UsernameField).toContainClass("oxd-input")

        const LoginBtn = page.locator("button[type='submit']")
        await expect(LoginBtn).toContainText("Login")
        await expect(LoginBtn).toHaveAttribute("class")
    });
});