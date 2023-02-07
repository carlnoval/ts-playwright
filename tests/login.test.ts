import { expect, testX } from '../utils/fixtures/_basePage.fixture';

testX('login - valid credentials', async ({ _basePage }) => {
  // From: console.log(JSON.stringify(await securePage.loginBannerMessage.textContent()))
  const RAWBANNERMESSAGE = "\n            You logged into a secure area!\n            ×\n          ";
  const USERNMAE = "tomsmith";
  const PASSWORD = "SuperSecretPassword!";

  const loginPage = await _basePage.clickFormAuthenticationLink();                // Navigate to form auth page
  await loginPage.enterLogin(USERNMAE, PASSWORD);                             // Provide credentials
  const securePage = await loginPage.clickLoginButton();                      // Proceed to login
  await expect(securePage.loginBannerMessage).toHaveText(RAWBANNERMESSAGE)    // Verify that the right success 
});
