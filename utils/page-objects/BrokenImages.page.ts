import { Locator, Page } from "@playwright/test";

export class BrokenImagesPage {
  readonly page: Page;
  readonly imagesContainer: Locator;

  constructor(page: Page) {
    this.page  = page;
    this.imagesContainer = page.locator('#content div');
  }
}