import { Page } from "@playwright/test";
export class CartPageElements {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  removeButton(productName: string) {
    return this.page.locator(`//div[.="${productName}"]//ancestor::div[@class="cart_item_label"]//button`);
  }

  get buttons() {
    return {
      ContinueShopping: this.page.locator('//button[.="Continue Shopping"]'),
      Checkout: this.page.locator('//button[.="Checkout"]'),
    };
  }
}
