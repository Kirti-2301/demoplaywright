const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");

test("Login test", async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate("https://symtrain.io/");
  await loginPage.login("kirti.verma+superorgadmin", "123456");
  await loginPage.verifyLogin();

});