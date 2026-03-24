import { Page, expect } from "@playwright/test";
import { LoginPageElements } from "./login-page.elements";
import { Logger } from "../../support/logger";
import { User } from "./login-page.interfaces";

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
  async verifyMessage(expectedText: string) {
    const text = await this.LoginPageElements.otherElements.errorMessage.textContent();
    expect(text).toContain(expectedText);
  }

  async login(user: User) {
    await this.insertUsername(user.username);
    await this.insertPassword(user.password);
    await this.clickOnLoginButton();
  }
}
