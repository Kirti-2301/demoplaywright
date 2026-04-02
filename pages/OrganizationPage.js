const BasePage = require('./BasePage');
const selectors = require('../selectors/OrganizationSelectors');

class OrganizationPage extends BasePage {

  async clickOrganizationLink() {
    await this.waitAndClick(selectors.organizationLink);
  }

  async clickAddOrganizationButton() {
    await this.waitAndClick(selectors.addOrganizationButton);

    // 👇 ensure modal open
    await this.page.waitForSelector(selectors.modalTitle);
  }

  async enterOrganizationName(name) {
    const input = this.page.locator(selectors.organizationNameInput);

    await input.waitFor({ state: "visible" });
    await input.fill(name);

    // 👇 IMPORTANT: trigger validation
    await input.press("Tab");
  }

  async clickCreateOrganizationButton() {
    const btn = this.page.locator(selectors.createOrganizationButton);

    await btn.waitFor({ state: "visible" });

    // optional: ensure enabled
    await btn.click();
  }

  async waitForCreationSuccess() {
    // 👇 modal should close after success
    await this.page.waitForSelector(selectors.modalTitle, {
      state: "hidden",
      timeout: 10000
    });
  }

  async searchOrganization(name) {
    await this.page.fill(selectors.searchInput, name);
  }

  async verifyOrganizationCreated(name) {
    await this.page.waitForLoadState("networkidle");

    await this.searchOrganization(name);

    await this.page.locator(`text=${name}`).waitFor({
      state: "visible",
      timeout: 15000
    });
  }
}

module.exports = OrganizationPage;