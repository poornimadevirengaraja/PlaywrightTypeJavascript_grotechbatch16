import {expect} from '@playwright/test';
import {test} from '../../fixtures/baseFixture.ts'
import TestData from '../../test-data/TestDataValues.json'

test.describe('Sauce Labs Login Page Tests', () => {
    test.beforeAll("Login to Sauce Labs", async ({ PManager }) => {
        await PManager.sauceloginPg.navigate(TestData.saucelabURL);
        await PManager.sauceloginPg.loginToSauceApp(TestData.username, TestData.password);
        expect(await PManager.sauceloginPg.verifyDashboardText()).toBeTruthy();
    });

    test.afterAll("Login Out", async ({ PManager }) => {
        await PManager.sauceloginPg.Logout();
    });

    test("Add Item to cart", async ({ PManager }) => {
        await PManager.invetoryPage.addItemsToCart(TestData.shoping_items)

    });
    test("Verify item in cart", async({ PManager })=> { 
        await PManager.invetoryPage.NaginateToShoppingCart()
        const  status = await PManager.invetoryPage.VerifyItemsAreAvailableInCart(TestData.shoping_items)
        expect(status).not.toContain(false)
    });
    test("Remove item from cart", async({PManager})=>  {
        await PManager.invetoryPage.RemoveItemsFromCart(TestData.shoping_items)
        const false_status = await PManager.invetoryPage.VerifyItemsAreNotAvailableInCart(TestData.shoping_items)
        expect(false_status).not.toContain(true)
        
    });
        

});