const OrganizationSelectors = {
  organizationLink: "[data-test-id='organization-menu-link']",
  addOrganizationButton: "button[data-test-id='organization-table-btn-add']",
  organizationNameInput: "input[placeholder='Enter your Child Organization Name']",
  createOrganizationButton: "button[data-test-id='org-form-btn-save-create']",
  modalTitle: "div[role='dialog'] >> text=Create Organization",
  confirmButton: "button[data-test-id='confirm-btn-confirm']",
  searchInput: "input[placeholder='Search']"
};

module.exports = OrganizationSelectors;