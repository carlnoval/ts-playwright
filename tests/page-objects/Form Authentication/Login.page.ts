import { Locator, Page } from "@playwright/test";
import { SecurePage } from "./Secure.page";


export class LoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page  = page;
    this.usernameField = page.getByLabel('Username');
    this.passwordField = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: /. Login/ })
  }

  async enterLogin(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
    return new SecurePage(this.page);
  }
}
