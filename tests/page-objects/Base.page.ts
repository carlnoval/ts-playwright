import { Page } from "@playwright/test";
import { LoginPage } from "./Form Authentication/Login.page";
import { KeyPressesPage } from "./KeyPresses.page";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page  = page;
  }

  async clickFormAuthentication() {
    await this.clickLink("Form Authentication");
    return new LoginPage(this.page);
  }

  async clickKeyPressesPage() {
    await this.clickLink("Key Presses");
    return new KeyPressesPage(this.page);
  }

  private async clickLink(linkText: string) {
    await this.page.getByRole('link', { name: linkText }).click()
  }
}
