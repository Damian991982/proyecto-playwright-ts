import { test } from "@playwright/test";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginPageMethods } from "../pages/login-page/login-page.methods";
import { LoginPageData } from "../pages/login-page/login-page.data";

const credentials = LoginPageData.credentials;

test.describe("login", () => {
  test("Login with valid credentials", async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page);
    const loginPageMethods = new LoginPageMethods(page);

    await commonPageMethods.navigateToTheAppApplication();
    await loginPageMethods.insertPassword(credentials.usernames.standardUser);
    await loginPageMethods.insertPassword(credentials.password);
    await loginPageMethods.clickOnLoginButton();
  });
});
