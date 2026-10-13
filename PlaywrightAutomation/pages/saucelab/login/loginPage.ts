import { Page, Locator, expect } from '@playwright/test';
import { LoginPageLocators } from './loginPageLocators';

export class SauceLoginPage extends LoginPageLocators {

    constructor(page: Page) {
        super(page);
    }

    async loginToSauceApp(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.LoginButton.click();
    }

    async verifyDashboardText() {
        return await this.dashBoardHeading.isVisible();
    }

    async Logout(){
        await this.OpenMenu.click()
        await this.LogOutButton.click()
    }



}