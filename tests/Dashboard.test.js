const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

test('Verify dashboard navigation', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.navigate("https://symtrain.io/");

  await loginPage.login("kirtisuperorgadmin", "Kirti@2301");
  await loginPage.verifyLogin();

  // make sure the dashboard menu is expanded
  await dashboardPage.clickReportsLink();
  await dashboardPage.clickOrganizationLink();
  await dashboardPage.clickUsersLink();
  await dashboardPage.clickSymsLink();

});