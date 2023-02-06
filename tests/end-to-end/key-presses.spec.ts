import { expect, testX } from '../utils/fixtures/_basePage.fixture';

testX('navigate to login page', async ({ _basePage }) => {
  const keyPressesPage = await _basePage.clickKeyPressesPage();

  await keyPressesPage.typeKeys('pi=3.14');
  expect(await keyPressesPage.getResultMessage()).toBe("You entered: 4");

  await keyPressesPage.pressSpecialKey('Delete');
  expect(await keyPressesPage.getResultMessage()).toBe("You entered: DELETE");
});
