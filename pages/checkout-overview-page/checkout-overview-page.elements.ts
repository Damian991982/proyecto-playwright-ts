import { Page } from "@playwright/test";
export class CheckoutOverviewPageElements {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  get buttons() {
    return {
      cancel: this.page.locator("#cancel"),
      finish: this.page.locator(".cart_button"),
    };
  }

  get otherElements() {
    return {
      pageTitle: this.page.locator(".title"),
    };
  }
}
