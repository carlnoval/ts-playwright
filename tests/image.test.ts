import { expect, testX } from '../utils/fixtures/_basePage.fixture';

testX('element screenshot', async ({ _basePage }) => {
  const brokenImagePage = await _basePage.clickBrokenImagesLink();
  // await expect(brokenImagePage.imagesContainer).toHaveScreenshot(['foo','bar','jag.png'])
  await expect(brokenImagePage.imagesContainer).toHaveScreenshot();
});
