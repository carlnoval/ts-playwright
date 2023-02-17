import { expect, testY } from '../utils/fixtures/_tmdb.fixture';

/**
 * Sensitive key/secrets are not tracked on the repo.
 * However, key/secrets will still be revealed in playwright/allure report and trace.
 * Issue that was closed: https://github.com/microsoft/playwright/issues/19992
 * RequestURL = 'https://api.themoviedb.org/3/movie/315162?api_key='
 */
testY.describe('API Tests', () => {
  testY('fetch valid movie ', async ({ request, _tmdbV3API, _tmdbV3APIKey }) => {
    const validID = '315162';
    const requestURL = `${_tmdbV3API}movie/${validID}?api_key=${_tmdbV3APIKey}`;
    const movie = await request.get(requestURL);
    expect(movie.ok()).toBeTruthy();
    // The 'await movie.json()' needs to be inside an array '[]' because 'toContainEqual' expects an array
    // From the official doc 'await issues.json()' resolves to an array
    // Official doc link: https://playwright.dev/docs/test-api-testing#writing-tests
    expect([await movie.json()]).toContainEqual(expect.objectContaining({
      original_title: 'Puss in Boots: The Last Wish',
      production_countries: [{ iso_3166_1: "US", name: "United States of America" }],
      release_date: '2022-12-07'
    }));
  });

  
  // Invalid movie id api response is: { success: false, status_code: 34, status_message: 'The resource you requested could not be found.' }
  testY('invalid movie id - array & toContainEqual', async ({ request, _tmdbV3API, _tmdbV3APIKey }) => {
    const invalidID = '9999999999';
    const requestURL = `${_tmdbV3API}movie/${invalidID}?api_key=${_tmdbV3APIKey}`;
    const movie = await request.get(requestURL);
    expect(movie.status()).toBe(404);
    // The 'await movie.json()' needs to be inside an array '[]' because 'toContainEqual' expects an array
    // From the official doc 'await issues.json()' resolves to an array
    // Official doc link: https://playwright.dev/docs/test-api-testing#writing-tests
    expect([await movie.json()]).toContainEqual(expect.objectContaining({
      success: false,
      status_code: 34,
      status_message: "The resource you requested could not be found."
    }));
    // Also passes if 'objectContaining' contains key-value pairs that are matching
    expect([await movie.json()]).toContainEqual(expect.objectContaining({
      status_message: "The resource you requested could not be found."
    }));
    // Also passes if 'objectContaining' is empty
    expect([await movie.json()]).toContainEqual(expect.objectContaining({
    }));
  });

  testY('invalid movie id - json & ', async ({ request, _tmdbV3API, _tmdbV3APIKey }) => {
    const invalidID = '9999999999';
    const requestURL = `${_tmdbV3API}movie/${invalidID}?api_key=${_tmdbV3APIKey}`;
    const movie = await request.get(requestURL);
    expect(movie.status()).toBe(404);
    // The 'await movie.json()' does not need to be inside an array '[]' because 'toEqual' expects a json and 'movie.json()' resolves to a json
    expect(await movie.json()).toEqual(expect.objectContaining({
      success: false,
      status_code: 34,
      status_message: "The resource you requested could not be found."
    }));
    // Also passes if 'objectContaining' is empty
    expect([await movie.json()]).toContainEqual(expect.objectContaining({
    }));
    // Also passes if 'objectContaining' contains key-value pairs that are matching
    expect([await movie.json()]).toContainEqual(expect.objectContaining({
      status_message: "The resource you requested could not be found."
    }));
  });
});
