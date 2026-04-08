const BasePage = require('./BasePage');

class OrganizationPage extends BasePage {

  async openOrganizationPage() {
    await this.page.locator('[data-test-id="organization-menu-link"]').click();
  }

  async clickAddOrganizationButton() {
    await this.page.locator('button[data-test-id="organization-table-btn-add"]').click();
  }

  async enterOrganizationName(name) {
    const input = this.page.getByPlaceholder('Enter your Child Organization Name');

    await input.waitFor({ state: 'visible' });
    await input.click();

    // clear + type like real user
    await input.fill('');
    await input.type(name, { delay: 100 });

    // trigger validation
    await input.press('Tab');
  }

  async clickCreateOrganizationButton() {
    const createBtn = this.page.getByRole('button', { name: 'Create' });

    await createBtn.waitFor({ state: 'visible' });
    await createBtn.click();
  }

  async confirmCreateOrganization() {
    await this.page.locator('button[data-test-id="confirm-btn-confirm"]').click();
  }

  async verifyOrganizationCreated(name) {
    // wait for UI update
    await this.page.waitForTimeout(3000);

    // search if available
    const searchBox = this.page.locator('input[placeholder*="Search"]');

    if (await searchBox.count() > 0) {
      await searchBox.fill(name);
      await this.page.keyboard.press('Enter');
      await this.page.waitForTimeout(2000);
    }

    // verify in table
    await this.page.locator(`text=${name}`).waitFor({
      state: 'visible',
      timeout: 10000
    });
  }
}

module.exports = OrganizationPage;