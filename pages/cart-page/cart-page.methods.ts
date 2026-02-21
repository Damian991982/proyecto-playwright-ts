import { Page } from "@playwright/test";
import { CartPageElements } from "./cart-page.elements";
import { Logger } from "../../support/logger";

export class CartPageMethods {
  private page: Page;
  private cartPageElements: CartPageElements;

  constructor(page: Page) {
    this.page = page;
    this.cartPageElements = new CartPageElements(page);
  }

  async clickOnContinueShoppingButton() {
    await Logger.LogStep("Click on Continue Shopping button");
    await this.cartPageElements.buttons.ContinueShopping.click();
  }
  async clickOnCheckoutButton() {
    await Logger.LogStep("Click on Checkout button");
    await this.cartPageElements.buttons.Checkout.click();
  }

  async clickOnRemoveButton(productName: string) {
    `Click on remove button for ${productName}`;
    await this.cartPageElements.removeButton(productName).click();
  }
}
