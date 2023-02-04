import { testY, expect } from '../../utils/fixtures/base-page-fixture'

// base-page-fixture has _basePage automatically executed so no need to use it along with page
testY('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("The Internet");
});

// though base-page-fixture is automatically executed, still need to explicitly use it to access its method
testY('navigate to login page', async ({ _basePage, page }) => {
  // Click the get started link.
  await _basePage.clickFormAuthentication();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/\/login/);
});
