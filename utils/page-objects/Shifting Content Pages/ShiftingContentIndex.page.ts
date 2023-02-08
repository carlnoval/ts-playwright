import { Locator, Page } from "@playwright/test";
import { ShiftingImagePage } from "./ShiftingImage.page";


export class ShiftingContentIndexPage {
  readonly page: Page;
  readonly shiftingImagePageLink: Locator;

  constructor(page: Page) {
    this.page  = page;
    this.shiftingImagePageLink = page.getByRole('link', { name: 'Example 2: An image' });
  }

  async clickShiftingImagePageLink() {
    await this.shiftingImagePageLink.click();
    return new ShiftingImagePage(this.page);
  }
}
