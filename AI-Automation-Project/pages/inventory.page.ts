import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  readonly heading = this.page.locator('.title');
  readonly productCards = this.page.locator('.inventory_item');
  readonly cartButton = this.page.locator('[data-test="shopping-cart-link"]');
  readonly sortControl = this.page.locator('[data-test="product-sort-container"]');

  constructor(page: Page) {
    super(page);
  }

  productCard(name: string): Locator {
    return this.productCards.filter({
      has: this.page.getByText(name, { exact: true }),
    });
  }

  async openProduct(name: string): Promise<void> {
    await this.productCard(name).locator('[data-test="inventory-item-name"]').click();
  }

  async openProductByImage(name: string): Promise<void> {
    await this.productCard(name).locator('img').click();
  }

  async addProduct(name: string): Promise<void> {
    await this.productCard(name).getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart(): Promise<void> {
    await this.cartButton.click();
  }
}