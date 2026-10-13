import {Page} from '@playwright/test'
import { LoginPage } from "../sauceslab/login/loginPage";

export class PageManager {
    readonly page: Page
    readonly loginpage : LoginPage
    constructor(page: Page) {
        this.page = page
        this.loginpage = new LoginPage(page)
    }

}