import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'h39r1p',
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      VALID_USERNAME: 'standard_user',
      VALID_PASSWORD: 'secret_sauce',
      INVALID_USERNAME: 'invalid_user',
      INVALID_PASSWORD: 'secret_sauce',
    },
    retries: {
      runMode: 1, // Configure retry attempts for `cypress run`
      openMode: 0, // Configure retry attempts for `cypress open`
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000
  },
});