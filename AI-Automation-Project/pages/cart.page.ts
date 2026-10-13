import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  readonly items = this.page.locator('.cart_item');
  readonly cartButton = this.page.locator('[data-test="shopping-cart-link"]');

  constructor(page: Page) {
    super(page);
  }

  async removeProduct(name: string): Promise<void> {
    const item = this.items.filter({
      has: this.page.getByText(name, { exact: true }),
    });
    await item.getByRole('button', { name: 'Remove' }).click();
  }
}