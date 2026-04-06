const { test } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const OrganizationPage = require("../pages/OrganizationPage");

test("Verify organization creation", async ({ page }) => {

  const loginPage = new LoginPage(page);
  const organizationPage = new OrganizationPage(page);

  // ✅ Step 1: Login
  await loginPage.navigate("https://symtrain.io/");
  await loginPage.login("kirti.verma+superorgadmin", "123456");
  await loginPage.verifyLogin();

  // ✅ Step 2: Org creation
  const orgName = "TestOrg_" + Date.now();

  await organizationPage.clickOrganizationLink();
  await organizationPage.clickAddOrganizationButton();
  await organizationPage.enterOrganizationName(orgName);
  await organizationPage.clickCreateOrganizationButton();

// 👇 STOP HERE
await page.pause();
});