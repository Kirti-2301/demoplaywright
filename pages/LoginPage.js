const loginSelectors = require("../selectors/loginSelectors");

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://symtrain.io/");
  }

  async login(username, password) {
    await this.page.fill(loginSelectors.usernameInput, username);
    await this.page.fill(loginSelectors.passwordInput, password);
    await this.page.click(loginSelectors.loginButton);
  }
  
  async verifyLogin() {
  await this.page.locator(loginSelectors.reportsText).waitFor({
    state: "visible",
    timeout: 100000 
  });
}
}

module.exports = LoginPage;