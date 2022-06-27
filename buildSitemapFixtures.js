import * as fs from "fs";
import minimist from "minimist";
import { getSiteUrls } from "@cityssm/get-site-urls";
const MAX_DEPTH = 2;
const argv = minimist(process.argv.slice(2));
const website = argv.website;
if (!website) {
    console.log("--website parameter missing");
    process.exitCode = 1;
}
let toInclude = [];
let toSearch = [];
let toExclude = [];
switch (website) {
    case "saultstemarie.ca":
        toInclude = ["https://saultstemarie.ca",
            "https://saultstemarie.ca/Search.aspx?searchtext=parks",
            "https://saultstemarie.ca/webapps/meetingMinutes.asp?type=council",
            "https://saultstemarie.ca/webapps/corporateCalendar.asp?e=true",
            "https://saultstemarie.ca/webapps/parabusCalendar.asp",
            "https://saultstemarie.ca/webapps/parksAndPlaygrounds.asp"];
        toSearch = [
            "https://saultstemarie.ca"
        ];
        toExclude = [
            "https://saultstemarie.ca/Visitors.aspx"
        ];
        break;
}
if (toInclude.length === 0 && toSearch.length === 0 && toExclude.length === 0) {
    console.log("No URLs to build fixture file.");
    process.exitCode = 1;
}
const allURLs = [...toInclude, ...toSearch];
for (const url of toSearch) {
    try {
        console.log("Searching URL: " + url);
        const siteURLs = await getSiteUrls(url, MAX_DEPTH);
        console.log(siteURLs);
        allURLs.push(...siteURLs.pages);
    }
    catch (_a) {
        console.error("Error searching URL: " + url);
    }
}
const distinctURLs = [...(new Set(allURLs))];
for (let index = 0; index < distinctURLs.length; index += 1) {
    const url = distinctURLs[index];
    if (url.endsWith(".pdf") || toExclude.includes(url)) {
        console.warn("Removing URL: " + url);
        distinctURLs.splice(index, 1);
        index -= 1;
    }
}
distinctURLs.sort();
if (website) {
    try {
        fs.writeFile("./cypress/fixtures/" + website + ".json", JSON.stringify({
            urls: distinctURLs
        }), {}, () => {
            console.log("Config written with " + distinctURLs.length.toString() + " URLs.");
        });
    }
    catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
}
