class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async waitAndClick(selector) {
    await this.page.waitForSelector(selector, { state: "visible" });
    await this.page.click(selector);
  }

  async fillInput(selector, value) {
    await this.page.waitForSelector(selector, { state: "visible" });
    await this.page.fill(selector, value);
  }

  async getText(selector) {
    await this.page.waitForSelector(selector);
    return await this.page.textContent(selector);
  }

  async waitForElement(selector) {
    await this.page.waitForSelector(selector, { state: "visible" });
  }

  async clearSessionData() {
    await this.page.context().clearCookies();
    await this.page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  }
}

module.exports = BasePage;