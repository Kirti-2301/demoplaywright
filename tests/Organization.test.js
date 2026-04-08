const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const OrganizationPage = require('../pages/OrganizationPage');

test('Verify organization creation', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const organizationPage = new OrganizationPage(page);

  const orgName = 'TestOrgkirti';

  // Step 1: Login
  await loginPage.navigate('https://symtrain.io/');
  await loginPage.login('kirti.verma+superorgadmin', '123456');
  await loginPage.verifyLogin();

  // Step 2: Navigate to Organization
  await organizationPage.openOrganizationPage();

  // Step 3: Create Organization
  await organizationPage.clickAddOrganizationButton();
  await organizationPage.enterOrganizationName(orgName);
  await organizationPage.clickCreateOrganizationButton();
  await organizationPage.confirmCreateOrganization();

  // Step 4: Verify
  await organizationPage.verifyOrganizationCreated(orgName);

});