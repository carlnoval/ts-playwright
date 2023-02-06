import { test } from '@playwright/test';
import { BasePage } from "../../page-objects/Base.page";

export const testX = test.extend<{ _basePage: BasePage }>({
  _basePage: [async ({ page }, use) => {
    // Set up the fixture.
    await page.goto('');
    const todoPage = new BasePage(page);

    // Use the fixture value in the test.
    await use(todoPage);

    // Code for fixture cleanup, none needed for now since pages are auto closed by Playwright

    // `auto: true` allows automatic usage of this fixture if testY is used
  }, { auto: true }]
});

export { expect } from '@playwright/test';
