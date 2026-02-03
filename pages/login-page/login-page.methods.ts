import { Page } from "@playwright/test";
import { LoginPageElements } from "./login-page.elements";
export class LoginPageMethods {
  private page: Page;
  private LoginPageElements: LoginPageElements;
  constructor(page: Page) {
    this.page = page;
    this.LoginPageElements = new LoginPageElements(page);
  }

  async insertUsername(username: string) {
    await this.LoginPageElements.textBoxes.username.fill(username);
  }
  async insertPassword(password: string) {
    await this.LoginPageElements.textBoxes.password.fill(password);
  }

  async clickOnLoginButton() {
    await this.LoginPageElements.buttons.login.click();
  }
}
