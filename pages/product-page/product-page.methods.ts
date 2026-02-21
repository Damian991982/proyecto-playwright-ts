import { Page } from "@playwright/test";
import { ProductPageElements } from "./product-page.elements";
import { Logger } from "../../support/logger";
export class ProductPageMethods {
  private page: Page;
  private productPageElements: ProductPageElements;

  constructor(page: Page) {
    this.page = page;
    this.productPageElements = new ProductPageElements(page);
  }

  async clickOnAddToCart(productName: string) {
    await Logger.LogStep(`Click on Add To Cart button corresponding to "${productName}"`);
    await this.productPageElements.addCartButton(productName).click();
  }

  async clickOnCartIcon() {
    await Logger.LogStep("Click on Cart icon");
    await this.productPageElements.icons.cart.click();
  }
}
