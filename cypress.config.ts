import { defineConfig } from "cypress";


export default defineConfig({
  e2e: {
    "specPattern": "cypress/e2e/**/*.cy.ts",
    "supportFile": false,
    "projectId": "n7zw99",
    "defaultCommandTimeout": 10 * 60 * 1000
  }
});
