import { test, expect } from "@playwright/test";

// Add your e2e tests here

test("should navigate to index page and have correct title", async ({
  page,
}) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The page should contain an title element with the text "TODO 📃 App with Next.js!"
  await expect(page.getByTestId("title")).toHaveText(
    "TODO 📃 App with Next.js!"
  );
});
