# Playwright End to End Automation Project
## Project Structure
- Uses Page Object Models and Fixtures, all found under `utils` directory
## Tests
- Passing/Failing/Skipped Tests
- Assertions
  - Text
  - Image - requires screenshots by running image tests from the official docker container matching with the playwirght version
    - Element
    - Page
  - API Test (Refactoring)
  - Component Testing (WIP)
## Reporting
- T following reports are enabled for this project
  - Dot reports for quick logs
  - Allure reports with history for sharing via GitHub pages
## Useful tips
- Check package.json scripts for handy commands, ensure to read comments to be able to execute scripts properly
## Run the test
1. Preconditions to install
    - Node version...
    - etc...
2. Clone the repo
3. Local test runs must be done through docker container, playwright docker container should be running, use aliases to run commands easier
x. WIP
