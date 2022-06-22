import * as supportFunctions from "../support/index.js";
describe("SaultSteMarie.ca", async () => {
    let randomURLs = [];
    before(async () => {
        randomURLs = await supportFunctions.getRandomURLs({
            toInclude: ["https://saultstemarie.ca",
                "https://saultstemarie.ca/Search.aspx?searchtext=parks",
                "https://saultstemarie.ca/webapps/meetingMinutes.asp?type=council",
                "https://saultstemarie.ca/webapps/corporateCalendar.asp?e=true",
                "https://saultstemarie.ca/webapps/parabusCalendar.asp",
                "https://saultstemarie.ca/webapps/parksAndPlaygrounds.asp"],
            toSearch: [
                "https://saultstemarie.ca"
            ],
            toExclude: [
                "https://saultstemarie.ca/Government/City-Departments/Community-Development-Enterprise-Services/FutureSSM/Film-Office.aspx",
                "https://saultstemarie.ca/Newsroom/April-2020/Messages-of-encouragement-from-notable-community-m.aspx",
                "https://saultstemarie.ca/Newsroom/November-2019/Celebrate-the-season-with-the-annual-Community-Tre.aspx",
                "https://saultstemarie.ca/Newsroom/October-2019/Mayor-for-a-Day-contest-winner-announced.aspx",
                "https://saultstemarie.ca/Government/City-Council/Council-Chambers.aspx",
                "https://saultstemarie.ca/Visitors.aspx"
            ]
        }, 5);
    });
    it("Passes axe tests", () => {
        for (const testURL of randomURLs) {
            console.log("Testing " + testURL + " ...");
            cy.visit(testURL);
            cy.injectAxe();
            cy.checkA11y();
        }
    });
});
