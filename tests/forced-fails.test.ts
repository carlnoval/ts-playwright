import { expect, testX } from '../utils/fixtures/_basePage.fixture';
import { testY } from '../utils/fixtures/_tmdb.fixture';

testX.describe('Tests that are expected to fail', () => {
  testX.describe('E2E Automation', () => {
    testX('text does not match', async ({ _basePage }) => {
      const WRONGHEADERTEXT = 'xWelcome to the-internet';
      await expect(_basePage.pageHeader).toHaveText(WRONGHEADERTEXT);
    });
  
    testX('element image does not match', async ({ _basePage }) => {
      const shiftingContentIndexPage = await _basePage.clickShiftingContextIndexLink();
      const shiftingImagePage = await shiftingContentIndexPage.clickShiftingImagePageLink();
      // Site was designed to shift the image position after reload
      // Comment reload step when retaking screenshots
      await shiftingImagePage.page.reload();
      // Ensures that the image in the page exists before takeing screenshot
      await expect(shiftingImagePage.pageImage).toBeVisible();
      await expect(shiftingImagePage.pageContent).toHaveScreenshot('pageContent.png');
    });
  
    testX('page image does not match', async ({ _basePage }) => {
      // page was designed to have unique visuals on every load
      const challengingDOMPage = await _basePage.clickChallengingDOMLink();
      await expect(challengingDOMPage.page).toHaveScreenshot('page.png');
    });
  });

  testX.describe('API Automation', () => {
    testY('status does not match', async ({request, _tmdbV3API, _tmdbV3APIKey}) => {
      const validID = '315162'
      const requestURL = `${_tmdbV3API}movie/${validID}?api_key=${_tmdbV3APIKey}` ;
      const movie = await request.get(requestURL);
      expect(movie.status()).toBe(201);
    });
    
    testY('key value pair does not match - array & toContainEqual', async ({request, _tmdbV3API, _tmdbV3APIKey}) => {
      const invalidID = '999999999999';
      const requestURL = `${_tmdbV3API}movie/${invalidID}?api_key=${_tmdbV3APIKey}`;
      const movie = await request.get(requestURL);
      expect([await movie.json()]).toContainEqual(expect.objectContaining({
        success: true
      }));
    });
    
    testY('key does not exist - json & toEqual', async ({request, _tmdbV3API, _tmdbV3APIKey}) => {
      const invalidID = '999999999999';
      const requestURL = `${_tmdbV3API}movie/${invalidID}?api_key=${_tmdbV3APIKey}`;
      const movie = await request.get(requestURL);
      expect(await movie.json()).toEqual(expect.objectContaining({
        success: false,
        status_code: 34,
        status_message: "The resource you requested could not be found.",
        non_existing_key: true
      }));
    });
  });
});
