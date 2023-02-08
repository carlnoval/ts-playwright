import { expect, testX } from '../utils/fixtures/_basePage.fixture';

testX('text does not match', async ({ _basePage }) => {
  const WRONGHEADERTEXT = 'xWelcome to the-internet';
  
  await expect(_basePage.pageHeader).toHaveText(WRONGHEADERTEXT);
});

testX.skip('element image does not match', async ({ _basePage }) => {

});
