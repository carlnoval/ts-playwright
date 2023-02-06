import { Page } from "@playwright/test";
import { LoginPage } from "./Login.page";

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
    return new LoginPage(this.page);
  }

  private async clickLink(linkText: string) {
    await this.page.getByRole('link', { name: linkText }).click()
  }
}
