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

const priceValue = (price: string): number => Number(price.replace('$', ''));

test.describe('Inventory, Product Details, and Sorting', () => {
  test('All inventory sort options', async ({ page, pageManager }) => {
    const products = await readExcelRows<ProductData>('test-data/inventory-products.xlsx', 'Products');

    // 1. Start fresh, log in as standard_user, and choose all four inventory sort options.
    await pageManager.loginPage.goto();
    await pageManager.loginPage.login(users.standard);
    await expect(page).toHaveURL(/\/inventory\.html$/);

    const sortOptions = [
      { value: 'az', products: [...products].sort((left, right) => left.name.localeCompare(right.name)) },
      { value: 'za', products: [...products].sort((left, right) => right.name.localeCompare(left.name)) },
      {
        value: 'lohi',
        products: [...products].sort((left, right) => priceValue(left.price) - priceValue(right.price) || left.name.localeCompare(right.name)),
      },
      {
        value: 'hilo',
        products: [...products].sort((left, right) => priceValue(right.price) - priceValue(left.price) || left.name.localeCompare(right.name)),
      },
    ];

    for (const option of sortOptions) {
      await pageManager.inventoryPage.sortControl.selectOption(option.value);
      await expect(pageManager.inventoryPage.sortControl).toHaveValue(option.value);
      await expect(pageManager.inventoryPage.productCards.locator('[data-test="inventory-item-name"]'))
        .toHaveText(option.products.map(({ name }) => name));
      await expect(pageManager.inventoryPage.productCards.locator('[data-test="inventory-item-price"]'))
        .toHaveText(option.products.map(({ price }) => price));
      await expect(pageManager.inventoryPage.productCards).toHaveCount(products.length);
      await expect(page).toHaveURL(/\/inventory\.html$/);
      await expect(pageManager.inventoryPage.cartButton).toHaveAccessibleName('Cart, empty');
    }
  });
});
