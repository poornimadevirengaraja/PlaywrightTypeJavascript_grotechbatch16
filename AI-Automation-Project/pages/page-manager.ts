import type { Page } from '@playwright/test';
import { CartPage } from './cart.page';
import { InventoryPage } from './inventory.page';
import { LoginPage } from './login.page';
import { ProductPage } from './product.page';

export class PageManager {
  readonly cartPage: CartPage;
  readonly inventoryPage: InventoryPage;
  readonly loginPage: LoginPage;
  readonly productPage: ProductPage;

  constructor(page: Page) {
    this.cartPage = new CartPage(page);
    this.inventoryPage = new InventoryPage(page);
    this.loginPage = new LoginPage(page);
    this.productPage = new ProductPage(page);
  }
}