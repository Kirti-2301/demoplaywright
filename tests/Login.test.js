const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");

test("Login test", async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate("https://symtrain.io/");
  await loginPage.login("kirtisuperorgadmin", "Kirti@2301");
  await loginPage.verifyLogin();

});