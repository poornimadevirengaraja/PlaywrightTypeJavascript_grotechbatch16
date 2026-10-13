import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';
import { users } from '../../test-data/users';

test.describe('Authentication and Account Variants', () => {
  test('Login validation and invalid credentials', async ({ page, loginPage }) => {
    // 1. Start from a fresh login page and submit with both fields empty.
    await loginPage.goto();
    await loginPage.submit();
    await expect(loginPage.errorMessage).toContainText('Username is required');
    await expect(page).toHaveURL(/saucedemo\.com\/$/);

    // 2. Enter a valid username with an empty password and submit.
    await loginPage.usernameInput.fill(users.standard.username);
    await loginPage.submit();
    await expect(loginPage.errorMessage).toContainText('Password is required');

    // 3. Enter an unknown username and arbitrary password, then submit.
    await loginPage.usernameInput.fill('unknown_user');
    await loginPage.passwordInput.fill('incorrect_password');
    await loginPage.submit();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
    await expect(page).toHaveURL(/saucedemo\.com\/$/);

    // 4. Dismiss the error using its close control and retry with incorrect credentials.
    await loginPage.dismissError();
    await expect(loginPage.errorMessage).toBeHidden();
    await loginPage.usernameInput.fill(users.standard.username);
    await loginPage.passwordInput.fill('wrong_password');
    await loginPage.submit();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
    await expect(page).toHaveURL(/saucedemo\.com\/$/);
  });
});
