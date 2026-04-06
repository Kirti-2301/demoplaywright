const { test } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const OrganizationPage = require("../pages/OrganizationPage");

test("Verify organization creation", async ({ page }) => {

  const loginPage = new LoginPage(page);
  const organizationPage = new OrganizationPage(page);

  await loginPage.navigate("https://symtrain.io/");
  await loginPage.login("kirti.verma+superorgadmin", "123456");
  await loginPage.verifyLogin();

  const orgName = "TestOrg_" + Date.now();

  await organizationPage.clickOrganizationLink();
  await organizationPage.clickAddOrganizationButton();
  await organizationPage.enterOrganizationName(orgName);
  await organizationPage.clickCreateOrganizationButton();
  await organizationPage.confirmCreateOrganization();

});