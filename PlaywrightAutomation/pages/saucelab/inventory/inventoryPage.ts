import {Page, Locator, expect} from '@playwright/test';
import {InventoryPageLocators} from './inventoryPageLocators.ts';

export class InventoryPage extends InventoryPageLocators {


    constructor(page: Page) {
        super(page);
    }

    async addItemsToCart(itemsName: string[]) {
        for (const item of itemsName) {
            const itemLocator = this.page.locator(`.inventory_item:has-text("${item}")`);
            const addToCartButton = itemLocator.locator('button:has-text("Add to cart")');
            await this.click(addToCartButton);
        }
    }

    async NaginateToShoppingCart() {
        this.shopingCartlink.click()
    }

    async RemoveItemsFromCart(ItemsName: string[]) {
        for (const item of ItemsName) {
            const itemLocator = this.page.locator(`.cart_item:has-text("${item}")`);
            const RemoveBtn = itemLocator.locator('button:has-text("Remove")');
            await this.click(RemoveBtn);
        }

    }

    async VerifyItemsAreAvailableInCart(ItemsName: string[]): Promise<any> {
        var status:any = []
        for (const item of ItemsName) {
            const itemLocator = this.page.locator(`.cart_item:has-text("${item}")`);
            var itemStatus = await itemLocator.isVisible()
            status.push()
        }
        return status
    }

    async VerifyItemsAreNotAvailableInCart(ItemsName: string[]) :Promise<any>{
        const statusArr: any =[]
        for (const item of ItemsName) {
            const itemLocator = this.page.locator(`.cart_item:has-text("${item}")`);
            var st = await itemLocator.isVisible()
            statusArr.push(st)
        }
        console.log(statusArr)
        return statusArr
    }

}