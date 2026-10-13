import {test} from '../../fixtures/baseFixtures.ts'

test.describe("Login Page Locators", ()=> {

    test("first test case", async({ PageM })=> {
        await PageM.loginpage.navigate("https://www.saucedemo.com/")
        await PageM.loginpage.login("standard_user", "secret_sauce")

    });
});
