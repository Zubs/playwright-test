const { chromium, firefox, webkit } = require("playwright");
let screenshot_count = 1;

const UploadToScale = async () => {
  const browser = await chromium.launch(); // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  // await page.goto(
  //   "https://zubairidrisaweda.atlassian.net/projects/KAN?selectedItem=com.atlassian.plugins.atlassian-connect-plugin:com.kanoah.test-manager__main-project-page#!/testPlayer/testExecution/KAN-E1"
  // );
  // await page.goto(
  //   "https://id.atlassian.com/login?continue=https%3A%2F%2Fid.atlassian.com%2Fjoin%2Fuser-access%3Fresource%3Dari%253Acloud%253Ajira%253A%253Asite%252Fb6bfbf8f-9a04-47a8-a3e4-7ca4d63def3d%26continue%3Dhttps%253A%252F%252Fzubairidrisaweda.atlassian.net%252Fprojects%252FKAN%253FselectedItem%253Dcom.atlassian.plugins.atlassian-connect-plugin%253Acom.kanoah.test-manager__main-project-page%2523!%252FtestPlayer%252FtestExecution%252FKAN-E1&application=jira"
  // );
  await page.goto(
    "https://zubairidrisaweda.atlassian.net/projects/KAN?selectedItem=com.atlassian.plugins.atlassian-connect-plugin:com.kanoah.test-manager__main-project-page#!/testPlayer/testExecution/KAN-E1"
  );
  await page.screenshot({ path: `screenshot_${screenshot_count}.png` });
  screenshot_count++;

  const tweets = await page
    .locator('[aria-label="Sign in"]')
    .first()
    .innerHTML();

  console.log(tweets);

  await page.locator('[aria-label="Sign in"]').first().click();

  // Check if logged in

  // If not logged in, try log in
  // await page.getByText("Sign in").click();
  // const button = page.getByRole('button').and(page.getByTitle('Subscribe'));
  await page.screenshot({ path: `screenshot_${screenshot_count}.png` });
  screenshot_count++;

  // other actions...
  await browser.close();
};

// UploadToScale();

// const { chromium } = require("playwright");
// let screenshot_count = 1;

// const UploadToScale = async () => {
//   const browser = await chromium.launch(); // Or 'firefox' or 'webkit'.
//   const page = await browser.newPage();
//   await page.goto(
//     "https://youtube.com"
//   );
//   await page.screenshot({ path: `screenshot_${screenshot_count}.png` });
//   screenshot_count++;

//   // const tweets = await page
//   //   .locator('[aria-label="Sign in"]')
//   //   .first()
//   //   .innerHTML();

//   // console.log(tweets);

//   // await page.locator('[aria-label="Sign in"]').first().click();

//   // // Check if logged in

//   // // If not logged in, try log in
//   // // await page.getByText("Sign in").click();
//   // // const button = page.getByRole('button').and(page.getByTitle('Subscribe'));
//   // await page.screenshot({ path: `screenshot_${screenshot_count}.png` });
//   // screenshot_count++;

//   // other actions...
//   await browser.close();
// };

UploadToScale();
