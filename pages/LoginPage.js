const BasePage = require("./BasePage");
const loginSelectors = require("../selectors/loginSelectors");
class LoginPage extends BasePage {

  async login(username, password) {
    await this.fillInput(loginSelectors.usernameInput, username);
    await this.fillInput(loginSelectors.passwordInput, password);
    await this.waitAndClick(loginSelectors.loginButton);
  }

  async verifyLogin() {
    await this.waitForElement(loginSelectors.reportsText);
  }
}

module.exports = LoginPage;