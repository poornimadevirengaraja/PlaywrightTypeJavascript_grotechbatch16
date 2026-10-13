// spec: specs/saucedemo-e2e-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '../../fixtures/test.fixture';
import { users } from '../../test-data/users';
import { readExcelRows } from '../../utils/excel-reader';

interface ProductData {
  readonly name: string;
  readonly price: string;
  readonly description: string;
}

test.describe('Inventory, Product Details, and Sorting', () => {
  test('Inventory displays complete catalog and card controls', async ({ page, pageManager }) => {
    const products = await readExcelRows<ProductData>('test-data/inventory-products.xlsx', 'Products');

    // 1. Start fresh and log in as standard_user with secret_sauce.
    await pageManager.loginPage.goto();
    await pageManager.loginPage.login(users.standard);
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
    await expect(pageManager.inventoryPage.heading).toHaveText('Products');
    await expect(pageManager.inventoryPage.cartButton).toHaveAccessibleName('Cart, empty');
    await expect(pageManager.inventoryPage.sortControl).toBeVisible();

    // 2. Inspect the six catalog cards in default Name (A to Z) order.
    await expect(pageManager.inventoryPage.productCards).toHaveCount(products.length);
    await expect(pageManager.inventoryPage.productCards.locator('[data-test="inventory-item-name"]'))
      .toHaveText(products.map(({ name }) => name));
    await expect(pageManager.inventoryPage.sortControl).toHaveValue('az');

    for (const product of products) {
      const card = pageManager.inventoryPage.productCard(product.name);
      await expect(card.locator('img')).toHaveAttribute('alt', product.name);
      await expect(card.locator('[data-test="inventory-item-desc"]')).toHaveText(product.description);
      await expect(card.locator('[data-test="inventory-item-price"]')).toHaveText(product.price);
      await expect(card.getByRole('button', { name: 'Add to cart' })).toBeVisible();
      await expect(card.locator('[data-test="inventory-item-name"]')).toBeVisible();
      await expect(card.locator('img')).toBeVisible();
    }

    // 3. Scroll through the entire inventory and inspect the footer.
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.getByRole('link', { name: 'X' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Facebook' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
    await expect(page.locator('footer')).toContainText('Terms of Service');
    await expect(page.locator('footer')).toContainText('Privacy Policy');
    await expect(page.locator('footer')).toContainText('All Rights Reserved');
  });
});
