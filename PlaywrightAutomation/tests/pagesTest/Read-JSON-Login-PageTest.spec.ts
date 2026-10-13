import {expect} from '@playwright/test';
import {test} from '../../fixtures/baseFixture.ts'
import TestData from '../../test-data/TestDataValues.json'

test.describe('Sauce Labs Login Page Tests', () => {
    test("Login to Sauce Labs with valid credentials", async ({ pageManager }) => {
        await pageManager.sauceloginPg.navigate(TestData.saucelabURL);
        await pageManager.sauceloginPg.loginToSauceApp(TestData.username, TestData.password);
        expect(await pageManager.sauceloginPg.verifyDashboardText()).toBeTruthy();
    });

    test("Add and Remove Item from Cart and Verify", async ({ pageManager }) => {
        await pageManager.sauceloginPg.navigate(TestData.saucelabURL);
        await pageManager.sauceloginPg.loginToSauceApp(TestData.username, TestData.password);
        expect(await pageManager.sauceloginPg.verifyDashboardText()).toBeTruthy();
        await pageManager.invetoryPage.addItemsToCart(TestData.shoping_items)
        await pageManager.invetoryPage.NaginateToShoppingCart()
        const  status = await pageManager.invetoryPage.VerifyItemsAreAvailableInCart(TestData.shoping_items)
        expect(status).not.toContain(false)
        await pageManager.invetoryPage.RemoveItemsFromCart(TestData.shoping_items)
        const false_status = await pageManager.invetoryPage.VerifyItemsAreNotAvailableInCart(TestData.shoping_items)
        expect(false_status).not.toContain(true)
        
    });

    test("Read json data", ()=> {
        console.log(TestData)
    });

});