import { defineConfig } from "cypress";

import * as scanConfigs from "./scanConfigs.js";

import htmlvalidate from "cypress-html-validate/plugin";
import { lighthouse, prepareAudit as lighthouse_prepareAudit } from "@cypress-audit/lighthouse";
import { pa11y, prepareAudit as pa11y_prepareAudit } from "@cypress-audit/pa11y";

export default defineConfig({
  e2e: {
    "specPattern": "cypress/e2e/**/*.cy.ts",
    "supportFile": "cypress/support/e2e.ts",
    "projectId": "n7zw99",
    "defaultCommandTimeout": 10 * 60 * 1000,
    "setupNodeEvents": (on) => {

      htmlvalidate.install(on, scanConfigs.HTML_VALIDATE);

      on("before:browser:launch", (browser = {}, launchOptions) => {
        lighthouse_prepareAudit(launchOptions);
        pa11y_prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y()
      });
    }
  }
});
