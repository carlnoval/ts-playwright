import { test } from '@playwright/test';
import { TMDBMovieAPI } from '../api-objects/tmdb/tmdbMovie.api';

type TestFixtures = {
  _tmdbMovieEndpoint: TMDBMovieAPI
};

export const testY = test.extend<TestFixtures>({
  _tmdbMovieEndpoint: async ({ request }, use) => {
    await use(new TMDBMovieAPI(request));
  }
});

export { expect } from '@playwright/test';

