const BasePage = require('./BasePage');
const selectors = require('../selectors/OrganizationSelectors');
class OrganizationPage extends BasePage {

  async clickOrganizationLink() {
    await this.waitAndClick(selectors.organizationLink);
  }

  async clickAddOrganizationButton() {
    await this.waitAndClick(selectors.addOrganizationButton);
  }

  async enterOrganizationName(name) {
    const input = this.page.getByPlaceholder("Enter your Child Organization Name");
    await input.waitFor({ state: "visible" });
    await input.click();
    await input.fill("");
    await input.type(name, { delay: 100 });
    await input.press("Tab");
  }

  async clickCreateOrganizationButton() {
    const btn = this.page.getByRole('button', { name: 'Create' });
    await btn.waitFor({ state: "visible" });
    await btn.click();
  }

  async confirmCreateOrganization() {
    const confirmBtn = this.page.getByRole('button', { name: 'Confirm' });
    await confirmBtn.waitFor({ state: 'visible' });
    await confirmBtn.click();
  }
}

module.exports = OrganizationPage;