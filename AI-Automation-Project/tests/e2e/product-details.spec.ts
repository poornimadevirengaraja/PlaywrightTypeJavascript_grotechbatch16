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
  test('All product detail pages and return navigation', async ({ page, pageManager }) => {
    const products = await readExcelRows<ProductData>('test-data/inventory-products.xlsx', 'Products');

    // 1. Start fresh, log in as standard_user, and open each product using both its image and name link.
    await pageManager.loginPage.goto();
    await pageManager.loginPage.login(users.standard);
    await expect(page).toHaveURL(/\/inventory\.html$/);

    for (const product of products) {
      for (const opener of ['image', 'name'] as const) {
        if (opener === 'image') {
          await pageManager.inventoryPage.openProductByImage(product.name);
        } else {
          await pageManager.inventoryPage.openProduct(product.name);
        }

        await expect(page).toHaveURL(/\/inventory-item\.html\?id=\d+$/);
        await expect(pageManager.productPage.name).toHaveText(product.name);
        await expect(pageManager.productPage.description).toHaveText(product.description);
        await expect(pageManager.productPage.price).toHaveText(product.price);
        await expect(pageManager.productPage.image).toHaveAttribute('alt', product.name);
        await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
        await expect(pageManager.productPage.cartButton).toHaveAccessibleName('Cart, empty');
        await expect(pageManager.productPage.backButton).toBeVisible();
        await expect(pageManager.productPage.addToCartButton).toBeVisible();

        await pageManager.productPage.backToProducts();
        await expect(page).toHaveURL(/\/inventory\.html$/);
        await expect(pageManager.inventoryPage.sortControl).toHaveValue('az');
        await expect(pageManager.inventoryPage.cartButton).toHaveAccessibleName('Cart, empty');
      }
    }

    // 2. Use browser Back once as a separate navigation check.
    await pageManager.inventoryPage.openProduct(products[0].name);
    await page.goBack();
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(pageManager.inventoryPage.heading).toHaveText('Products');
  });
});
