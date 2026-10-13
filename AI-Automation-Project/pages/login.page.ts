import type { Page } from '@playwright/test';
import type { TestUser } from '../test-data/users';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly loginForm = this.page.getByRole('form', { name: 'Login' });
  readonly usernameInput = this.page.locator('[data-test="username"]');
  readonly passwordInput = this.page.locator('[data-test="password"]');
  readonly loginButton = this.page.locator('[data-test="login-button"]');
  readonly acceptedUsernamesHint = this.page.locator('.login_credentials');
  readonly sharedPasswordHint = this.page.locator('.login_password');
  readonly errorMessage = this.page.getByRole('alert');

  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await super.goto('/');
  }

  async login(user: TestUser): Promise<void> {
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.submit();
  }

  async submit(): Promise<void> {
    await this.loginButton.click();
  }

  async dismissError(): Promise<void> {
    await this.page.getByRole('button', { name: 'Dismiss error' }).click();
  }
}