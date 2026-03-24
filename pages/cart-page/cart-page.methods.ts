import { Page, expect } from "@playwright/test";
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
    await Logger.LogStep(`Click on remove button for ${productName}`);
    await this.cartPageElements.removeButton(productName).click();
  }
  async verifyProductIsDisplayed(productName: string) {
    await Logger.LogVerification(`The product "${productName}" should be shown`);
    const productCount = await this.cartPageElements.removeButton(productName).count();
    expect(productCount).toEqual(1);
  }
  async verifyProductIsNotDisplayed(productName: string) {
    await Logger.LogVerification(`The product "${productName}" should not be shown`);
    const productCount = await this.cartPageElements.removeButton(productName).count();
    expect(productCount).toEqual(0);
  }
}
