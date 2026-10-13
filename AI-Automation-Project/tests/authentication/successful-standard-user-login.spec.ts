import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';
import { users } from '../../test-data/users';

test.describe('Authentication and Account Variants', () => {
  test('Successful standard-user login', async ({ page, loginPage, inventoryPage }) => {
    // 1. Start in a fresh browser context at https://www.saucedemo.com/.
    await loginPage.goto();
    await expect(page).toHaveTitle('Swag Labs');
    await expect(loginPage.loginForm).toBeVisible();

    // 2. Inspect the Username and Password fields, Login button, accepted-usernames hint, and shared-password hint.
    await expect(loginPage.usernameInput).toBeEditable();
    await expect(loginPage.passwordInput).toBeEditable();
    await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
    await expect(loginPage.loginButton).toBeVisible();
    await expect(loginPage.acceptedUsernamesHint).toContainText(users.standard.username);
    await expect(loginPage.acceptedUsernamesHint).toContainText(users.lockedOut.username);
    await expect(loginPage.acceptedUsernamesHint).toContainText(users.problem.username);
    await expect(loginPage.acceptedUsernamesHint).toContainText(users.performanceGlitch.username);
    await expect(loginPage.acceptedUsernamesHint).toContainText(users.error.username);
    await expect(loginPage.acceptedUsernamesHint).toContainText(users.visual.username);
    await expect(loginPage.sharedPasswordHint).toContainText(users.standard.password);

    // 3. Enter standard_user and secret_sauce, then submit Login.
    await loginPage.login(users.standard);
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(inventoryPage.heading).toHaveText('Products');
    await expect(inventoryPage.cartButton).toHaveAccessibleName('Cart, empty');
    await expect(inventoryPage.productCards).toHaveCount(6);
  });
});
