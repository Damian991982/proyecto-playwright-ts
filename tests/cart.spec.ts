import { test } from "@playwright/test";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginPageMethods } from "../pages/login-page/login-page.methods";
import { ProductPageMethods } from "../pages/product-page/product-page.methods";
import { Logger } from "../support/logger";
import { standardUser } from "../pages/login-page/login-page.interfaces";
import { CartPageMethods } from "../pages/cart-page/cart-page.methods";

test.describe("Cart test cases", async () => {
  test("Add intem to cart", async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page);
    const loginPageMethods = new LoginPageMethods(page);
    const productPageMethods = new ProductPageMethods(page);
    const cartPageMehods = new CartPageMethods(page);
    const productName = "Sauce Labs Bolt T-Shirt";

    Logger.LogPreCondition("User is logged in");
    await commonPageMethods.navigateToTheAppApplication();
    await loginPageMethods.login(standardUser);
    await productPageMethods.verifyProductsPageIsDisplayed();

    await productPageMethods.clickOnAddToCart(productName);
    await productPageMethods.clickOnCartIcon();
    await cartPageMehods.verifyProductIsDisplayed(productName);
  });

  test("Romove item from cart", async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page);
    const loginPageMethods = new LoginPageMethods(page);
    const productPageMethods = new ProductPageMethods(page);
    const cartPageMehods = new CartPageMethods(page);
    const productName = "Sauce Labs Bolt T-Shirt";

    Logger.LogPreCondition("Item is in the cart");
    await commonPageMethods.navigateToTheAppApplication();
    await loginPageMethods.login(standardUser);

    await productPageMethods.clickOnAddToCart(productName);
    await productPageMethods.clickOnCartIcon();
    await cartPageMehods.clickOnRemoveButton(productName);
    await cartPageMehods.verifyProductIsNotDisplayed(productName);
  });
});
