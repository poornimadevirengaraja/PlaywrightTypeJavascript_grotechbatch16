import {expect} from '@playwright/test';
import {test} from '../../fixtures/baseFixture.ts'
import * as TestData from '../../test-data/test_data.ts'

test.describe('Sauce Labs Login Page Tests', () => {
    test("Login to Sauce Labs with valid credentials", async ({ pageManager }) => {
        //let pageManage = new PageManager(page);
        await pageManager.sauceloginPg.navigate(TestData.SAUCELAB_URL);
        await pageManager.sauceloginPg.loginToSauceApp(TestData.SAUCELAB_USERNAME, TestData.SAUCELAB_PASSWORD);
        expect(await pageManager.sauceloginPg.verifyDashboardText()).toBeTruthy();
    });


    test("Add and Remove Item from Cart and Verify", async ({ pageManager }) => {
        //let pageManage = new PageManager(page);
        await pageManager.sauceloginPg.navigate(TestData.SAUCELAB_URL);
        await pageManager.sauceloginPg.loginToSauceApp(TestData.SAUCELAB_USERNAME, TestData.SAUCELAB_PASSWORD);
        expect(await pageManager.sauceloginPg.verifyDashboardText()).toBeTruthy();
        await pageManager.invetoryPage.addItemsToCart(TestData.saucelab_shoping_items)
        await pageManager.invetoryPage.NaginateToShoppingCart()
        const  status = await pageManager.invetoryPage.VerifyItemsAreAvailableInCart(TestData.saucelab_shoping_items)
        expect(status).not.toContain(false)
        await pageManager.invetoryPage.RemoveItemsFromCart(TestData.saucelab_shoping_items)
        const false_status = await pageManager.invetoryPage.VerifyItemsAreNotAvailableInCart(TestData.saucelab_shoping_items)
        expect(false_status).not.toContain(true)
        
    });

});