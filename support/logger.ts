import { step } from "allure-js-commons";

export class Logger {
  static async LogStep(description: string) {
    await step("STEP - " + description, () => {});
  }
  static async LogVerification(description: string) {
    await step(`VERIFICATION - ${description}`, () => {});
  }

  static async LogPreCondition(description: string) {
    await step(`PRE-CONDITION - ${description}`, () => {});
  }
  static async LogpOSTCondition(description: string) {
    await step(`POST-CONDITION - ${description}`, () => {});
  }
  static async ViewCount(val: Number) {
    await step(`The value is: ${val}`, () => {});
  }
}
