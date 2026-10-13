import { test as base, expect } from '@playwright/test';
import { CartPage } from '../pages/cart.page';
import { InventoryPage } from '../pages/inventory.page';
import { LoginPage } from '../pages/login.page';
import { PageManager } from '../pages/page-manager';
import { ProductPage } from '../pages/product.page';

interface PageFixtures {
  readonly cartPage: CartPage;
  readonly inventoryPage: InventoryPage;
  readonly loginPage: LoginPage;
  readonly pageManager: PageManager;
  readonly productPage: ProductPage;
}

export const test = base.extend<PageFixtures>({
  pageManager: async ({ page }, use) => use(new PageManager(page)),
  cartPage: async ({ pageManager }, use) => use(pageManager.cartPage),
  inventoryPage: async ({ pageManager }, use) => use(pageManager.inventoryPage),
  loginPage: async ({ pageManager }, use) => use(pageManager.loginPage),
  productPage: async ({ pageManager }, use) => use(pageManager.productPage),
});

export { expect };