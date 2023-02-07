import { Locator, Page } from "@playwright/test";

export class SecurePage {
  readonly page: Page;
  readonly loginBannerMessage: Locator;

  constructor(page: Page) {
    this.page  = page;
    this.loginBannerMessage = page.getByText('You logged into a secure area! ×')
  }
}