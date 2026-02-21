import { Page } from "@playwright/test";
import { LoginPageElements } from "./login-page.elements";
import { Logger } from "../../support/logger";
export class LoginPageMethods {
  private page: Page;
  private LoginPageElements: LoginPageElements;
  constructor(page: Page) {
    this.page = page;
    this.LoginPageElements = new LoginPageElements(page);
  }

  async insertUsername(username: string) {
    await Logger.LogStep(`Insert "${username}" as username`);
    await this.LoginPageElements.textBoxes.username.fill(username);
  }
  async insertPassword(password: string) {
    await Logger.LogStep(`Insert "${password}" as password`);
    await this.LoginPageElements.textBoxes.password.fill(password);
  }

  async clickOnLoginButton() {
    await Logger.LogStep("Click on Login button");
    await this.LoginPageElements.buttons.login.click();
  }
}
