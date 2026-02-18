const {test, expect} = require('@playwright/test');

test('Login test', async ({page}) => {
  await page.goto('https://new-qa.symtrain.com/');
  await page.fill('#username', 'kirti-superorgadmin');
  await page.fill('#password', 'Kirti@2301');
  await page.click('#kc-login');
  await expect(page.locator('text=Reports')).toBeVisible();
});