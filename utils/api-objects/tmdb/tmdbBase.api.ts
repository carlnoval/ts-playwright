import { APIRequestContext } from "@playwright/test";

export class TMDBBaseAPI {
  readonly request: APIRequestContext;
  readonly tmdbAPIURL: string;
  readonly tmdbV3APIKey: string;

  /**
   * Sensitive key/secrets are not tracked on the repo.
   * However, key/secrets will still be revealed in playwright/allure report and trace.
   * Issue that was closed: https://github.com/microsoft/playwright/issues/19992
   */
  constructor(request: APIRequestContext) {
    this.request = request;
    this.tmdbAPIURL = "https://api.themoviedb.org/3";
    this.tmdbV3APIKey = `?api_key=${process.env.TMDB_API_V3_KEY_GH_SECRET}`
  }
}
