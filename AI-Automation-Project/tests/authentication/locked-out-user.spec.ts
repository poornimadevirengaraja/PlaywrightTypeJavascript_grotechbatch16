import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';
import { users } from '../../test-data/users';

test.describe('Authentication and Account Variants', () => {
  test('Locked-out user is denied access', async ({ page, loginPage }) => {
    // 1. Start fresh and submit locked_out_user with secret_sauce.
    await loginPage.goto();
    await loginPage.login(users.lockedOut);
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out');
    await expect(page).toHaveURL(/saucedemo\.com\/$/);
    await expect(loginPage.loginForm).toBeVisible();
  });
});
