import { expect, testY } from '../utils/fixtures/_tmdb.fixture';

testY.describe('API Tests', () => {
  testY('fetch valid movie ', async ({ _tmdbMovieEndpoint }) => {
    const requestedMovie = await _tmdbMovieEndpoint.GetMovie(315162);
    expect(requestedMovie.ok()).toBeTruthy();
    // The 'await requestedMovie.json()' needs to be inside an array '[]' because 'toContainEqual' expects an array
    // From the official doc 'await issues.json()' resolves to an array
    // Official doc link: https://playwright.dev/docs/test-api-testing#writing-tests
    expect([await requestedMovie.json()]).toContainEqual(expect.objectContaining({
      original_title: 'Puss in Boots: The Last Wish',
      production_countries: [{ iso_3166_1: "US", name: "United States of America" }],
      release_date: '2022-12-07'
    }));
  });

  // Invalid movie id api response is: { success: false, status_code: 34, status_message: 'The resource you requested could not be found.' }
  testY('invalid movie id - array & toContainEqual', async ({ _tmdbMovieEndpoint }) => {
    const requestedMovie = await _tmdbMovieEndpoint.GetMovie(9999999999);
    expect(requestedMovie.status()).toBe(404);
    expect([await requestedMovie.json()]).toContainEqual(expect.objectContaining({
      success: false,
      status_code: 34,
      status_message: "The resource you requested could not be found."
    }));
    // Also passes if 'objectContaining' contains key-value pairs that are matching
    expect([await requestedMovie.json()]).toContainEqual(expect.objectContaining({
      status_message: "The resource you requested could not be found."
    }));
    // Also passes if 'objectContaining' is empty
    expect([await requestedMovie.json()]).toContainEqual(expect.objectContaining({
    }));
  });

  testY('invalid movie id - json & toEqual', async ({ _tmdbMovieEndpoint }) => {
    const requestedMovie = await _tmdbMovieEndpoint.GetMovie(9999999999);
    expect(requestedMovie.status()).toBe(404);
    // The 'await requestedMovie.json()' does not need to be inside an array '[]' because 'toEqual' expects a json and 'requestedMovie.json()' resolves to a json
    expect(await requestedMovie.json()).toEqual(expect.objectContaining({
      success: false,
      status_code: 34,
      status_message: "The resource you requested could not be found."
    }));
    // Also passes if 'objectContaining' is empty
    expect(await requestedMovie.json()).toEqual(expect.objectContaining({
    }));
    // Also passes if 'objectContaining' contains key-value pairs that are matching
    expect(await requestedMovie.json()).toEqual(expect.objectContaining({
      status_message: "The resource you requested could not be found."
    }));
  });
});
