import { Page } from "@playwright/test";
import { ProductPageElements } from "./product-page.elements";
export class ProductPageMethods {
  private page: Page;
  private productPageElements: ProductPageElements;

  constructor(page: Page) {
    this.page = page;
    this.productPageElements = new ProductPageElements(page);
  }

  async clickOnAddToCart(productName: string) {
    await this.productPageElements.addCartButton(productName).click();
  }

  async clickOnCartIcon() {
    await this.productPageElements.icons.cart.click();
  }
}
