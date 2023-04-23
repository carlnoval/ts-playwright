import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

// Read environment variables from file: https://github.com/motdotla/dotenv
import * as dotenv from 'dotenv';
dotenv.config();

// For dotenv troubleshooting: npx playwright test tests/github-env.test.ts --project=chromium
// console.log(`@@@@@@@@@@@@@@@@@@@@[process.env.SECRET_NUM_GH_VAR = ${process.env.SECRET_NUM_GH_VAR}]`);
// console.log(`@@@@@@@@@@@@@@@@@@@@[process.env.DUMMY_TOKEN_GH_SECRET = ${process.env.DUMMY_TOKEN_GH_SECRET}]`);
// console.log(`@@@@@@@@@@@@@@@@@@@@[process.env.TMDB_API_V3_KEY_GH_SECRET = ${process.env.TMDB_API_V3_KEY_GH_SECRET}]`);

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests',
  testMatch: /.*\.test\.ts/,
  snapshotPathTemplate: 'test-screenshots/{testFilePath}/{arg}-{projectName}{ext}',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 3000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 0,
  /* percentage of logical CPU cores, current mac core: 8 */
  workers: process.env.CI ? '200%' : '200%',
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  /* For Allure, See https://www.npmjs.com/package/allure-playwright */
  reporter: [
    ['dot'],
    ['allure-playwright', { detail: true, outputFolder: "allure-test-results", suiteTitle: false  }],
    // enable 'html' report if needed
    // ['html', { open: 'never', outputFolder: 'playwright-report' }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('docs/intro')`. */
    baseURL: 'https://the-internet.herokuapp.com/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry',

    headless: false,
    trace: 'retain-on-failure',

    /**
     * Advantage: Full page screenshot on general failed tests.
     * Disacvantage: Takes another unecessary screenshot for visual assertions, visual assertions already have expected vs actual screenshots. 
     */
    screenshot: {
      mode: 'only-on-failure',
      fullPage: true,
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;
