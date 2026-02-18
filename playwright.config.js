// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: 'html',

  use: {
    browserName: 'chromium',     // Use Chromium engine
    channel: 'chrome',           // Use real Google Chrome
    headless: false,              // Run in headless mode
    viewport: null,              // Required for maximize
    launchOptions: {
      args: ['--start-maximized'] // Start browser maximized
    },
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chrome'
    }
  ]
});