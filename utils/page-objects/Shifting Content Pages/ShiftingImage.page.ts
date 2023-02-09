import { Locator, Page } from "@playwright/test";

export class ShiftingImagePage {
  readonly page: Page;
  readonly pageContent: Locator;
  readonly pageImage: Locator;

  constructor(page: Page) {
    this.page  = page;
    this.pageContent = page.locator('#content');
    this.pageImage = page.locator('#content').getByRole('img');
  }
}
