const { test } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const DashboardPage = require("../pages/DashboardPage");

test("Verify dashboard navigation", async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // ✅ Login first
  await loginPage.navigate("https://symtrain.io/");
  await loginPage.login("kirti.verma+superorgadmin", "123456");
  await loginPage.verifyLogin();

  // ✅ Dashboard actions
  await dashboardPage.clickOrganization();
  await dashboardPage.clickUsers();
  await dashboardPage.clickSyms();

});