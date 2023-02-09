import { Locator, Page } from "@playwright/test";
import { BrokenImagesPage } from "./BrokenImages.page";
import { ChallengingDOMPage } from "./ChallengingDOM.page";
import { LoginPage } from "./Form Authentication Pages/Login.page";
import { KeyPressesPage } from "./KeyPresses.page";
import { ShiftingContentIndexPage } from "./Shifting Content Pages/ShiftingContentIndex.page";

export class BasePage {
  readonly page: Page;
  readonly pageHeader: Locator;

  constructor(page: Page) {
    this.page  = page;
    this.pageHeader = page.getByRole('heading', { name: 'Welcome to the-internet' });
  }

  async clickFormAuthenticationLink() {
    await this.clickLink("Form Authentication");
    return new LoginPage(this.page);
  }

  async clickKeyPressesLink() {
    await this.clickLink("Key Presses");
    return new KeyPressesPage(this.page);
  }

  async clickBrokenImagesLink() {
    await this.clickLink("Broken Images");
    return new BrokenImagesPage(this.page);
  }

  async clickShiftingContextIndexLink() {
    await this.clickLink("Shifting Content");
    return new ShiftingContentIndexPage(this.page);
  }

  async clickChallengingDOMLink() {
    await this.clickLink("Challenging DOM");
    return new ChallengingDOMPage(this.page);
  }

  private async clickLink(linkText: string) {
    await this.page.getByRole('link', { name: linkText }).click()
  }
}
