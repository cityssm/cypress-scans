import "cypress-axe";
import "cypress-each";
import { shuffleArray } from "../support/index.js";
import { urls } from "../fixtures/welcometossm.com.json";
describe("WelcomeToSSM.com", async () => {
    const testURLs = shuffleArray(urls).slice(0, 50);
    it.each(testURLs)("Passes axe tests - %s", (testURL) => {
        cy.visit(testURL);
        cy.injectAxe();
        cy.checkA11y();
    });
});
