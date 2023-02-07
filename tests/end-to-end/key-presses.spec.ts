import { expect, testX } from '../utils/fixtures/_basePage.fixture';

testX('special key press', async ({ _basePage }) => {
  const keyPressesPage = await _basePage.clickKeyPressesPage();

  await keyPressesPage.typeKeys('pi=3.14');
  await keyPressesPage.pressSpecialKey('Delete');
  expect(await keyPressesPage.getResultMessage()).toBe("You entered: DELETE");
});

testX('common key press', async ({ _basePage }) => {
  const keyPressesPage = await _basePage.clickKeyPressesPage();

  await keyPressesPage.pressSpecialKey('Delete');
  await keyPressesPage.typeKeys('pi=3.14');
  expect(await keyPressesPage.getResultMessage()).toBe("You entered: 4");
});