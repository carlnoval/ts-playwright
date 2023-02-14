import { expect, testX } from '../utils/fixtures/_basePage.fixture';

testX.describe('API Tests', () => {
  testX('api test1', async () => {
    expect(process.env.DUMMY_TOKEN === "The Dummy Token").toBeTruthy();
    console.log(process.env.DUMMY_TOKEN);
  });
});
