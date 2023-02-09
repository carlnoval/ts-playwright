import { expect, testX } from '../utils/fixtures/_basePage.fixture';

testX('text does not match', async ({ _basePage }) => {
  const WRONGHEADERTEXT = 'xWelcome to the-internet';
  await expect(_basePage.pageHeader).toHaveText(WRONGHEADERTEXT);
});

testX('element image does not match', async ({ _basePage }) => {
  const shiftingContentIndexPage = await _basePage.clickShiftingContextIndexLink();
  const shiftingImagePage = await shiftingContentIndexPage.clickShiftingImagePageLink();
  // Site was designed to shift the image position after reload
  await shiftingImagePage.page.reload();
  // Ensures that the image in the page exists before takeing screenshot
  await expect(shiftingImagePage.pageImage).toBeVisible();
  await expect(shiftingImagePage.pageContent).toHaveScreenshot();
});

testX('page image does not match', async ({ _basePage }) => {
  // page was designed to have unique visuals on every load
  const challengingDOMPage = await _basePage.clickChallengingDOMLink();
  await expect(challengingDOMPage.page).toHaveScreenshot();
});