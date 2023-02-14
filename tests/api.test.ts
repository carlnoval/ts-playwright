import { expect, testX } from '../utils/fixtures/_basePage.fixture';

testX.describe('API Tests', () => {
  testX('api test1', async () => {
    expect(process.env.DUMMY_TOKEN === "The Dummy Token").toBeTruthy();
  });

  testX('api test2', async () => {
    expect(process.env.SECRET_NUM === "455").toBeTruthy();
  });
});
