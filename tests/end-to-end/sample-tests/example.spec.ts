import { testX, expect } from '../../utils/fixtures/base-page-fixture'

// _basePage fixture is set to auto execute
testX('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("The Internet");
});

// tough _basePage fixture is set to auto execute, still need to explicitly call it to access its method
testX('navigate to login page', async ({ _basePage, page }) => {
  // Click the get started link.
  await _basePage.clickFormAuthentication();

  // Expects the URL to contain '/login/'.
  await expect(page).toHaveURL(/\/login/);
});
