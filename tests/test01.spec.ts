import { test, expect } from "@playwright/test";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginPageMethods } from "../pages/login-page/login-page.methods";
import { LoginPageData } from "../pages/login-page/login-page.data";
import { ProductPageMethods } from "../pages/product-page/product-page.methods";
import { CartPageMethods } from "../pages/cart-page/cart-page.methods";

const userCredentials = LoginPageData.credentials;

test("Login", async ({ page }) => {
  const commonPageMethods = new CommonPageMethods(page);
  const loginPageMethods = new LoginPageMethods(page);
  const productPageMethods = new ProductPageMethods(page);
  const cartPageMethods = new CartPageMethods(page);
  await commonPageMethods.navigateToTheAppApplication();
  await loginPageMethods.insertUsername(userCredentials.usernames.standardUser);
  await loginPageMethods.insertPassword(userCredentials.password);
  await loginPageMethods.clickOnLoginButton();
  await productPageMethods.clickOnAddToCart("Sauce Labs Backpack");
  await productPageMethods.clickOnCartIcon();
  await cartPageMethods.clickOnCheckoutButton();
  //await cartPageMethods.clickOnContinueShoppingButton();
  //await cartPageMethods.clickOnRemoveButton("Sauce Labs Backpack");

  //await commonPageMethods.openMenu();
  await page.waitForTimeout(4000);
});
