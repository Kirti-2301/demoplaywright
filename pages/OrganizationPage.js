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

    // clear previous value
    await input.fill("");

    // type like real user
    await input.type(name, { delay: 100 });

    // trigger validation
    await input.press("Tab");
  }

  async clickCreateOrganizationButton() {
    const btn = this.page.getByRole('button', { name: 'Create' });

    await btn.waitFor({ state: "visible" });

    // optional debug
    console.log("Button enabled:", await btn.isEnabled());

    await btn.click();
  }

}

module.exports = OrganizationPage;