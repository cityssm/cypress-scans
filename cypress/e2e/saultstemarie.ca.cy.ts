import { shuffleArray } from "../../utils.js";

import { urls } from "../fixtures/saultstemarie.ca.json";


describe("SaultSteMarie.ca", async () => {

  const testURLs = shuffleArray(urls).slice(0, 50);

  it.each(testURLs)("Has valid HTML - %s", (testURL) => {
    cy.visit(testURL);
    cy.htmlvalidate();
  });

  it.each(testURLs)("Passes axe tests - %s", (testURL) => {
    cy.visit(testURL);
    cy.injectAxe();
    cy.checkA11y();
  });
});
