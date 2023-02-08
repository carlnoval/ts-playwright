import { expect, testX } from '../../utils/fixtures/_basePage.fixture';

// _basePage fixture is set to auto execute
testX.skip('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("The Internet");
});

// tough _basePage fixture is set to auto execute, still need to explicitly call it to access its method
testX.skip('navigate to login page', async ({ _basePage, page }) => {
  // Click the get started link.
  await _basePage.clickFormAuthenticationLink();

  // Expects the URL to contain '/login/'.
  await expect(page).toHaveURL(/\/login/);
});
