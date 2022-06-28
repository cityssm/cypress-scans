import { shuffleArray, PAGE_COUNT } from "../../utils.js";
import { urls } from "../fixtures/welcometossm.com.json";
describe("WelcomeToSSM.com", async () => {
    const testURLs = shuffleArray(urls).slice(0, PAGE_COUNT);
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
