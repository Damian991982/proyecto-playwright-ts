import { Page, test, expect } from "@playwright/test";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginPageMethods } from "../pages/login-page/login-page.methods";
import { LoginPageData } from "../pages/login-page/login-page.data";
import { ProductPageMethods } from "../pages/product-page/product-page.methods";
import * as interfaces from "../pages/login-page/login-page.interfaces";

const credentials = LoginPageData.credentials;

test.describe("login", () => {
  test("Login with valid credentials", async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page);
    const loginPageMethods = new LoginPageMethods(page);
    const productPageMethods = new ProductPageMethods(page);

    await commonPageMethods.navigateToTheAppApplication();

    await loginPageMethods.insertUsername(credentials.usernames.standardUser);
    await loginPageMethods.insertPassword(credentials.password);
    await loginPageMethods.clickOnLoginButton();

    await productPageMethods.verifyProductsPageIsDisplayed();
  });

  test("login with invalid credentials", async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page);
    const loginPageMethods = new LoginPageMethods(page);

    await commonPageMethods.navigateToTheAppApplication();

    await loginPageMethods.insertUsername("anything");
    await loginPageMethods.insertPassword("anything");
    await loginPageMethods.clickOnLoginButton();

    await loginPageMethods.verifyMessage("Epic sadface: Username and password do not match any user in this service");
  });

  /*test.only("login", async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page);
    const loginPageMethods = new LoginPageMethods(page);

    await commonPageMethods.navigateToTheAppApplication();
    await loginPageMethods.login(interfaces.lokedOutUser);
  });*/
  test("login with blank credentials", async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page);
    const loginPageMethods = new LoginPageMethods(page);
    await commonPageMethods.navigateToTheAppApplication();
    await loginPageMethods.clickOnLoginButton();
    await loginPageMethods.verifyMessage("Username is required");
  });
});
