import { test as testX } from '@playwright/test';
import { BasePage } from "../../page-objects/base-page";

// Declare the types of your fixtures.
type basePageFixtures = {
  _basePage: BasePage;
};

export const testY = testX.extend<basePageFixtures>({
  _basePage: [async ({ page }, use) => {
    // Set up the fixture.
    await page.goto('');
    const todoPage = new BasePage(page);

    // Use the fixture value in the test.
    await use(todoPage);

    // Code for fixture cleanup, none needed for now

    // `auto: true` allows automatic usage of this fixture if testY is used
  }, { auto: true }]
});

export { expect } from '@playwright/test';
