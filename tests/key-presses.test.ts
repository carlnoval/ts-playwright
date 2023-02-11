import { expect, testX } from "../utils/fixtures/_basePage.fixture";

testX.describe('Key Presses', () => {
  testX("special key press", async ({ _basePage }) => {
    const keyPressesPage = await _basePage.clickKeyPressesLink();
    await keyPressesPage.typeKeys("pi=3.14");
    await keyPressesPage.pressSpecialKey("Delete");
    await expect(keyPressesPage.resultMessageDisplay).toHaveText("You entered: DELETE");
  });

  testX("common key press", async ({ _basePage }) => {
    const keyPressesPage = await _basePage.clickKeyPressesLink();
    await keyPressesPage.pressSpecialKey("ArrowDown");
    await keyPressesPage.typeKeys("pi=3.14");
    await expect(keyPressesPage.resultMessageDisplay).toHaveText("You entered: 4");
  });
});
