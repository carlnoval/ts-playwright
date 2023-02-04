import { Page } from "@playwright/test";

export class FormAuthPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page  = page;
  }
}