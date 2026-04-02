const OrganizationSelectors = {
  organizationLink: "[data-test-id='organization-menu-link']",
  addOrganizationButton: "[data-test-id='organization-table-btn-add']",

  // correct input
  organizationNameInput: "input[placeholder='Enter your Child Organization Name']",

  // create button (stable)
  createOrganizationButton: "button:has-text('Create')",

  // modal title (for validation)
  modalTitle: "text=Create Organization",

  // search input (for later verification)
  searchInput: "input[placeholder='Search']"
};

module.exports = OrganizationSelectors;