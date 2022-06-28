import { shuffleArray, PAGE_COUNT } from "../../utils.js";

import { urls } from "../fixtures/gflgardens.ca.json";


describe("GFLGardens.ca", async () => {

  const testURLs = shuffleArray(urls).slice(0, PAGE_COUNT);

  it.each(testURLs)("Has valid HTML - %s", (testURL) => {
    cy.visit(testURL);
    cy.htmlvalidate({
      rules: {
        "valid-id": "off"
      }
    });
  });

  it.each(testURLs)("Passes axe tests - %s", (testURL) => {
    cy.visit(testURL);
    cy.injectAxe();
    cy.checkA11y();
  });
});
