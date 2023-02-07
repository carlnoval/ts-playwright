import { Locator, Page } from "@playwright/test";

export class KeyPressesPage {
  readonly page: Page;
  readonly textField: Locator;
  readonly resultMessageDisplay: Locator;

  constructor(page: Page) {
    this.page  = page;
    this.textField = page.locator('#target');
    this.resultMessageDisplay = page.locator('#result')
  }

  async typeKeys(str: string) {
    await this.textField.type(str);
  }
  
  async pressSpecialKey(specialKey: string) {
    await this.textField.press(specialKey);
  }
}