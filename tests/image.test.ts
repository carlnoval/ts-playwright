import { expect, testX } from '../utils/fixtures/_basePage.fixture';

testX.describe('Visual Test', () => {
  testX('element screenshot', async ({ _basePage }) => {
    const brokenImagePage = await _basePage.clickBrokenImagesLink();
    await expect(brokenImagePage.imagesContainer).toBeVisible();
    // Assertion can have args toHaveScreenshot(['folder1','foler2','screenshotName.png'])
    await expect(brokenImagePage.imagesContainer).toHaveScreenshot('imagesContainer.png');
  });

  testX('page screenshot',async ({ _basePage }) => {
    const largeDeepDOMPage = await _basePage.clickLargeDeepDOMLink();
    await expect(largeDeepDOMPage.largeTable).toBeVisible();
    await expect(largeDeepDOMPage.siblingDivs).toBeVisible();
    // Capturing the entire table is flaky so only capturing the header part which have been stable
    const screenshotOptions = {
      fullPage: true,
      clip: {
        x: 0,
        y: 0,
        width: 2700,
        height: 2750
      }
    }
    await expect(largeDeepDOMPage.page).toHaveScreenshot('entire-page.png', screenshotOptions);
  })
});
