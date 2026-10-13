import {expect} from '@playwright/test';
import {test} from '../../fixtures/baseFixture.ts'
import TestData from '../../test-data/TestDataValues.json'
import { Utils } from '../../utils/utilities.ts';

test.describe('Sauce Labs Login Page Tests', () => {
    test("Login to Sauce Labs with valid credentials", async ({ pageManager }) => {
        const ExcelFile = "test-data/ExcelTestData.xlsx"
        const utils = new Utils() 
        const data:any = utils.readExcelFile(ExcelFile)
        for(var values of data) {
            console.log(values)
            await pageManager.sauceloginPg.navigate(TestData.saucelabURL);
            await pageManager.sauceloginPg.loginToSauceApp(values.Username, values.Password);
            expect(await pageManager.sauceloginPg.verifyDashboardText()).toBeTruthy();
        }
    });

});