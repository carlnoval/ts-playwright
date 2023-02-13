import { expect, testX } from '../utils/fixtures/_basePage.fixture';

testX.describe.skip('API Tests', () => {
  // _basePage fixture is set to auto execute
  testX('api test1', async () => {
    expect(process.env.S3_BUCKET === "YOURS3BUCKET").toBeTruthy();
  });
});
