import { Page } from "@playwright/test";

export class KeyPresses {
  readonly page: Page;

  constructor(page: Page) {
    this.page  = page;
  }
}