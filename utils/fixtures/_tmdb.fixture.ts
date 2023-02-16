import { test } from '@playwright/test';

type TestFixtures = {
  _tmdbV3APIKey: string,
  _tmdbV3API: string,
};

export const testY = test.extend<TestFixtures>({
  // Variable fixtures does not need 'use', functional fixtures needs it.
  _tmdbV3APIKey: process.env.TMDB_API_V3_KEY || 'key_not_detected',
  _tmdbV3API: 'https://api.themoviedb.org/3/',
});

export { expect } from '@playwright/test';

