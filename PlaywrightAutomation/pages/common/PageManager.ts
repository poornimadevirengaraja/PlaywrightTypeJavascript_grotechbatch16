import {Page} from '@playwright/test'
import { SauceLoginPage } from '../saucelab/login/loginPage'
import { InventoryPage } from '../saucelab/inventory/inventoryPage'

export class PageManager {
    readonly page: Page
    readonly sauceloginPg : SauceLoginPage
    readonly invetoryPage : InventoryPage

    constructor(page: Page) {
       this.page = page
       this.sauceloginPg = new SauceLoginPage(this.page)
       this.invetoryPage = new InventoryPage(this.page)
    }
}