import { expect, testX } from '../utils/fixtures/_basePage.fixture';

/**
 * The environment secrets/variables must be properly setup in the GitHub workflows yml file.
 * These sample tests are good for making sure that:
 * - that `local .env` and `GHA .env` has the same values
 * - sensitive keys/secrets/token are not revealed in the repo but can be used in GHA
 */
testX.describe('Github Environment Tests', () => {
  testX('Github Secrets', async () => {
    expect(process.env.DUMMY_TOKEN === "The Dummy Token").toBeTruthy();
  });
  
  testX('Github Variables', async () => {
    expect(process.env.SECRET_NUM === "455").toBeTruthy();
  });
});
