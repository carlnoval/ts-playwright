import { expect, testX } from '../utils/fixtures/_basePage.fixture';

testX('text does not match', async ({ _basePage }) => {
  const WRONGHEADERTEXT = 'xWelcome to the-internet';

  await expect(_basePage.pageHeader).toHaveText(WRONGHEADERTEXT);
});

testX('element image does not match', async ({ _basePage }) => {
  const shiftingContentIndexPage = await _basePage.clickShiftingContextIndexLink();
  const shiftingImagePage = await shiftingContentIndexPage.clickShiftingImagePageLink();

  await shiftingImagePage.page.reload();                    // Site was designed to shift the image position after reloads
  await expect(shiftingImagePage.pageImage).toBeVisible();  // Ensures that page screenshot will include the image
  await expect(shiftingImagePage.page).toHaveScreenshot();
});
