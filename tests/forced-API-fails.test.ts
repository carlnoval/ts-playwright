import { expect, testY } from '../utils/fixtures/_tmdb.fixture';

testY.describe('API Tests - forced to fail', () => {
  testY('status does not match', async ({ _tmdbMovieEndpoint}) => {
    const requestedMovie = await _tmdbMovieEndpoint.GetMovie(315162);
    expect(requestedMovie.status()).toBe(201);
  });
  
  // Invalid movie id api response is: { success: false, status_code: 34, status_message: 'The resource you requested could not be found.' }
  testY('non matching key value pair - array & toContainEqual', async ({ _tmdbMovieEndpoint }) => {
    const requestedMovie = await _tmdbMovieEndpoint.GetMovie(9999999999);
    expect([await requestedMovie.json()]).toContainEqual(expect.objectContaining({
      success: true
    }));
  });
  
  testY('key does not exist - json & toEqual', async ({ _tmdbMovieEndpoint }) => {
    const requestedMovie = await _tmdbMovieEndpoint.GetMovie(9999999999);
    expect(await requestedMovie.json()).toEqual(expect.objectContaining({
      success: false,
      status_code: 34,
      status_message: "The resource you requested could not be found.",
      non_existing_key: true
    }));
  });
});
