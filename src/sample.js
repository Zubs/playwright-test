const { chromium } = require("playwright");

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false }); // Set headless: false to see the browser UI
  const page = await browser.newPage();

  // Go to the specified URL
  await page.goto(
    "https://zubairidrisaweda.atlassian.net/projects/KAN?selectedItem=com.atlassian.plugins.atlassian-connect-plugin:com.kanoah.test-manager__main-project-page#!/testPlayer/testExecution/KAN-E1"
  );
  await page.screenshot({ path: "step1_before_sign_in.png" });

  // Click the "Sign in" button. This assumes the button is uniquely identified by its aria-label.
  // Note: The actual selector might need to be adjusted based on the page's structure.
  await page.click('[aria-label="Sign in"]');

  // Wait for navigation or specific element to ensure the sign in page has loaded
  // Example: await page.waitForNavigation(); // Uncomment if the sign in triggers a navigation
  // Example: await page.waitForSelector('input[name="username"]'); // Uncomment if waiting for a specific element

  await page.screenshot({ path: "step2_after_sign_in_click.png" });

  // Close the browser
  await browser.close();
})();
