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
    this.clearTextField();
    await this.textField.type(str);
  }
  
  async pressSpecialKey(specialKey: string) {
    this.clearTextField();
    await this.textField.press(specialKey);
  }

  async getResultMessage() {
    return await this.resultMessageDisplay.textContent();
  }

  private async clearTextField() {
    await this.textField.fill("");
  }
}