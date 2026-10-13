import {Page} from '@playwright/test'
import { BasePage } from '../../common/BasePage'

export class InventoryPageLocators extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    get shopingCartlink() {
        return  this.page.locator(".shopping_cart_link")
    }
}