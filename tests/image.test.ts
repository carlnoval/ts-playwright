import { expect, testX } from '../utils/fixtures/_basePage.fixture';

testX.describe('Visual Test', () => {
  testX('element screenshot', async ({ _basePage }) => {
    const brokenImagePage = await _basePage.clickBrokenImagesLink();
    await expect(brokenImagePage.imagesContainer).toBeVisible();
    // Assertion can have args toHaveScreenshot(['folder1','foler2','screenshotName.png'])
    await expect(brokenImagePage.imagesContainer).toHaveScreenshot('imagesContainer.png');
  });
});
