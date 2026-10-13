import {Page} from '@playwright/test'
import { LoginPageLocators } from './loginPageLocators'

export class LoginPage extends LoginPageLocators {
    constructor(page: Page) {
        super(page)
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }
}