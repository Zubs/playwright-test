import { test, expect } from "@playwright/test";
import * as path from "path";
let screenshot_count = 1;

// Take screenshot of various steps for tracking
const takeScreenshot = async ({ page }) => {
  await page.screenshot({ path: `screenshot_${screenshot_count}.png` });
  screenshot_count++;
};

test("has title", async ({ page }) => {
  // Open JIRA
  await page.goto(
    "https://zubairidrisaweda.atlassian.net/projects/KAN?selectedItem=com.atlassian.plugins.atlassian-connect-plugin:com.kanoah.test-manager__main-project-page#!/testPlayer/testExecution/KAN-E1"
  );

  await takeScreenshot({ page });

  // Click on 'Sign in' button
  await page.locator('[aria-label="Sign in"]').first().click();

  await takeScreenshot({ page });

  // Fill in the input
  await page
    .locator('input[name="username"]')
    .fill("zubairidrisaweda@gmail.com");

  // Click submit
  await page.locator("#login-submit").click();

  await takeScreenshot({ page });

  // Type password
  await page.locator('input[name="password"]').fill("*****");

  // Click login
  await page.locator("#login-submit").click();

  // the page takes so long to load
  // setTimeout(async () => {
  //   await takeScreenshot({ page });
  // }, 120000);

  await takeScreenshot({ page });

  // await page.getByLabel('select files').setInputFiles(path.join(__dirname, 'screenshot_4.png'));

  console.log("Progress till file upload");

  // Start waiting for file chooser before clicking. Note no await.
  const fileChooserPromise = page.waitForEvent("filechooser");

  await page.getByText("select files").click();

  console.log("clicked select files");

  const fileChooser = await fileChooserPromise;

  await fileChooser.setFiles(path.join(__dirname, "screenshot_4.png"));

  console.log("selected file");

  await takeScreenshot({ page });

  await expect(page).toHaveTitle(/- Jira/, { timeout: 10000 });
});

test.afterEach(async ({ page }) => {
  await takeScreenshot({ page });
});
