import type { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductPage extends BasePage {
  readonly details = this.page.locator('.inventory_details');
  readonly name = this.details.locator('[data-test="inventory-item-name"]');
  readonly description = this.details.locator('[data-test="inventory-item-desc"]');
  readonly image = this.page.locator('.inventory_details_img');
  readonly price = this.details.locator('[data-test="inventory-item-price"]');
  readonly cartButton = this.page.locator('[data-test="shopping-cart-link"]');
  readonly addToCartButton = this.details.getByRole('button', { name: 'Add to cart' });
  readonly backButton = this.page.locator('[data-test="back-to-products"]');

  constructor(page: Page) {
    super(page);
  }

  async backToProducts(): Promise<void> {
    await this.backButton.click();
  }
}