import { Locator, Page } from "@playwright/test";


export class ShiftingImagePage {
  readonly page: Page;
  readonly pageImage: Locator;

  constructor(page: Page) {
    this.page  = page;
    this.pageImage = page.locator('#content').getByRole('img');
  }
}
