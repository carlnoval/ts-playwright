import { expect, testY } from '../utils/fixtures/_tmdb.fixture';

testY.describe('API Tests', () => {
  testY('can fetch ', async ({ request, _tmdbV3API, _tmdbV3APIKey }) => {
    // const requestURL = 'https://api.themoviedb.org/3/movie/315162?api_key='
    const requestURL = _tmdbV3API + 'movie/315162?api_key=' + _tmdbV3APIKey;

    const movie = await request.get(requestURL);
    expect(movie.ok()).toBeTruthy();
  });
});
