import { Page, test, expect } from "@playwright/test";

test.describe("Ingreso", () => {
  test("Verificar que el título principal sea visible", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await page.fill('[data-test="username"]', "standard_user");
    await page.fill('[data-test="password"]', "secret_sauce");
    await page.click('[data-test="login-button"]');

    const titulo = page.locator(".title");

    await expect(titulo).toBeVisible();
    await expect(titulo).toHaveText("Products");
  });
});
