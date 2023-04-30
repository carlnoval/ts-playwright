# Playwright End to End Automation Project
## Project Structure
- This Playwright project uses Page Object Models and Fixtures, all found under `utils` directory.
## Tests
- The expected test status for this project are Pass, Fail, and Skipped.
- The following are used for test assertions:
  - Text
  - Element / Page screenshot
    - Image testing requires initial screenshots by running image tests from the official docker container matching with the playwirght version.
  - API Test
  - Component Testing (TO DO)
## Reporting
- The following reports are enabled for this project:
  - Playwright's dot reports for quick overview of results
  - Allure reports with history for sharing via GitHub pages
## Useful tips
- See `"scripts"` in [package.json](https://github.com/carlnoval/ts-playwright/blob/master/package.json) file for some handy commands to run tests. Ensure to read the comments to be able to execute scripts properly.
## To setup this project locally
1. Install Node, at least `v19.9.0`. Use a tool like [nvm](https://github.com/nvm-sh/nvm#install--update-script) to manage node versions.
   - Install `nvm` via terminal.
     ```
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
     ```
   - Install latest Node via `nvm`, installing Node this way will also come with `npm` and `npx` installs. This may take more than 8 minutes long.
     ```
     nvm install node
     ```
   - Verify install with version checks.
     ```
     node -v
     ```
     ```
     npm -v
     ```
     ```
     npx -v
     ```
   - Below are some of the most common `nvm` commands.
     - List currently installed node versions
       ```
       nvm ls
       ```
     - Install a specific node version
       ```
       nvm install node_version
       ```
     - See more commands at https://davescripts.com/nvm-command-reference.
2. Clone the repo.
   - HTTPS: `https://github.com/carlnoval/ts-playwright.git`
   - SSH: `git@github.com:carlnoval/ts-playwright.git`
3. Go to the project's root directory.
   - Install dependencies.
     ```
     npm install
     ```
   - Check the Playwright version, should be `Version 1.30.0`.
     ```
     npx playwright --version
     ```
     - If using VSCode, restart it so that the play button on the test scripts would appear.
   - Install Playwright browsers.
     ```
     npx playwright install
     ```
   - Install [Allure Reports](https://formulae.brew.sh/formula/allure). Allure has quite a lot of dependencies so it may take more than 8 minutes to finish.
     ```
     brew install allure
     ```
     - Check Allure version.
       ```
       allure --version
       ```
   - Install Docker Desktop and ensure that it is running.
   - Spin up the docker container, this is the same container that is used for GitHub Actions.
     ```
     docker compose up -d
     ```
## Run all the test
- Ensure that the Playwright docker container should be running. See `"scripts"` in [package.json](https://github.com/carlnoval/ts-playwright/blob/master/package.json) file for some handy commands to run tests.
```
npm run dcpw test  
```
some testing will remove this in next commit