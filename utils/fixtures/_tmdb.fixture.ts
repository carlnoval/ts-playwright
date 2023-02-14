import { test } from '@playwright/test';

export const testY = test.extend<{ _tmdbV3APIKey : string, _tmdbV3API : string }>({
  _tmdbV3APIKey : process.env.TMDB_API_V3_KEY || 'key_not_detected',
  _tmdbV3API : 'https://api.themoviedb.org/3/'
});

export { expect } from '@playwright/test';

