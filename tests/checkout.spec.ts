import { test } from "@playwright/test";
import { Logger } from "../support/logger";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginPageMethods } from "../pages/login-page/login-page.methods";
import { ProductPageMethods } from "../pages/product-page/product-page.methods";
import { CartPageMethods } from "../pages/cart-page/cart-page.methods";
import { standardUser } from "../pages/login-page/login-page.interfaces";
import { CheckoutPageMethods } from "../pages/checkout-page/checkout-page.methods";
import { CheckoutOverviewPageMethods } from "../pages/checkout-overview-page/checkout-overview-page.methods";

test.describe("Checkout", async () => {
  test("Checkout process", async ({ page }) => {
    const commonPageMethod = new CommonPageMethods(page);
    const loginPageMethods = new LoginPageMethods(page);
    const productPageMethods = new ProductPageMethods(page);
    const cartPageMethods = new CartPageMethods(page);
    const checkoutPageMethods = new CheckoutPageMethods(page);
    const checkoutOverviewPageMethods = new CheckoutOverviewPageMethods(page);
    const productName = "Sauce Labs Onesie";

    Logger.LogPreCondition("User has items in cart");
    await commonPageMethod.navigateToTheAppApplication();
    await loginPageMethods.login(standardUser);
    await productPageMethods.clickOnAddToCart(productName);

    await productPageMethods.clickOnCartIcon();
    await cartPageMethods.clickOnCheckoutButton();
    await checkoutPageMethods.insertFirstName("Damian");
    await checkoutPageMethods.insertLastName("Almada");
    await checkoutPageMethods.insertPostalCode("1832");
    await checkoutPageMethods.clickOnContinueButton();
    await checkoutOverviewPageMethods.verifyCheckoutOverviewPageIsDisplayed();
  });
});
