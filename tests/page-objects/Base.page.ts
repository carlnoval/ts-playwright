import { Page } from "@playwright/test";
import { LoginPage } from "./Login.page";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page  = page;
  }

  async clickFormAuthentication() {
    await this.clickLink("Form Authentication");
    return new LoginPage(this.page);
  }

  private async clickLink(linkText: string) {
    await this.page.getByRole('link', { name: linkText }).click()
  }

  // public LoginPage clickFormAuthentication() {
  //   clickLink("Form Authentication");
  //   return new LoginPage(driver);
  // }

  // public KeyPressesPage clickKeyPressesPage() {
  //     clickLink("Key Presses");
  //     return new KeyPressesPage(driver);
  // }

  // public ChallengingDOM clickChallengingDOM() {
  //     clickLink("Challenging DOM");
  //     return new ChallengingDOM(driver);
  // }

  // // helper method prevents repetition of multiple locators
  // private void clickLink(String linkText) {
  //     driver.findElement(By.linkText(linkText)).click();
  // }
}
