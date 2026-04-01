const BasePage = require("./BasePage");
const DashboardSelectors = require("../selectors/DashboardSelectors");

class DashboardPage extends BasePage {
  async clickReportsLink() {
    await this.waitAndClick(DashboardSelectors.reportsLink);
  }

  async clickOrganizationLink() {
    await this.waitAndClick(DashboardSelectors.organizationLink);
  }

  async clickUsersLink() {
    await this.waitAndClick(DashboardSelectors.usersLink);
  }

  async clickSymsLink() {
    await this.waitAndClick(DashboardSelectors.symsLink);
  }
}

module.exports = DashboardPage;