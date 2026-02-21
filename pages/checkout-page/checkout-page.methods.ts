import { Page } from "@playwright/test";
import { CheckoutPageElements } from "./checkout-page.elements";
import { Logger } from "../../support/logger";
export class CheckoutPageMethods {
  private page: Page;
  private checkoutPageElements: CheckoutPageElements;
  constructor(page: Page) {
    this.page = page;
    this.checkoutPageElements = new CheckoutPageElements(page);
  }

  async insertFirstName(firstName: string) {
    await Logger.LogStep(`Insert "${firstName}" as First Name`);
    await this.checkoutPageElements.inputs.firstName.fill(firstName);
  }

  async lastName(lastName: string) {
    await Logger.LogStep(`LastName "${lastName}" as Last Name`);
    await this.checkoutPageElements.inputs.lastName.fill(lastName);
  }

  async postalCode(postalCode: string) {
    await Logger.LogStep(`PostalCode "${postalCode}" as Postal Code`);
    await this.checkoutPageElements.inputs.postalCode.fill(postalCode);
  }

  async clickOnCancelButton() {
    await Logger.LogStep(`Click on Cancel button`);
    await this.checkoutPageElements.buttons.cancel.click();
  }

  async clickOnContinueButton() {
    await Logger.LogStep(`Click on Continue button`);
    await this.checkoutPageElements.buttons.continue.click();
  }
}
