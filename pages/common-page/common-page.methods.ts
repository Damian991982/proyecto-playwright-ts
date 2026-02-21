import { Page } from "@playwright/test";
import { CommonPageElements } from "./common-page.elements";
import { Logger } from "../../support/logger";
export class CommonPageMethods {
  private page: Page;
  private commonPageElements: CommonPageElements;
  constructor(page: Page) {
    this.page = page;
    this.commonPageElements = new CommonPageElements(page);
  }
  async navigateToTheAppApplication() {
    await Logger.LogStep("Navigate to the application");
    await this.page.goto("https://www.saucedemo.com/");
  }
  async openMenu() {
    await Logger.LogStep("Click on Open Mneu icon");
    await this.commonPageElements.buttons.openMenu.click();
  }

  async clickOnAllItemsOption() {
    await Logger.LogStep("Click on All Items option");
    await this.commonPageElements.leftMenu.allItems.click();
  }
  async clickOnAboutOption() {
    await Logger.LogStep("Click on About option");
    await this.commonPageElements.leftMenu.about.click();
  }
  async clickOnLogOutOption() {
    await Logger.LogStep("Click on Logout option");
    await this.commonPageElements.leftMenu.logout.click();
  }
  async clickOnResetAppStateOption() {
    await Logger.LogStep("Click on Reset App State");
    await this.commonPageElements.leftMenu.resetAppState.click();
  }
}
