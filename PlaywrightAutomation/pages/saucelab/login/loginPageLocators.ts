import {Page, Locator} from '@playwright/test'
import { BasePage } from '../../common/BasePage'

export class LoginPageLocators extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    get usernameField() {
        return this.page.getByPlaceholder("Username")
    }

    get passwordField() {
        return this.page.getByPlaceholder("Password")
    }

    get LoginButton() {
        return this.page.locator("#login-button")
    }

    get dashBoardHeading(){
        return this.page.locator(".app_logo")
    }

    get OpenMenu() {
        return this.page.getByRole("button", {name: "Open Menu"})
    }

    get LogOutButton(){
        return this.page.locator("#logout_sidebar_link")
    }
}