import "cypress-axe";
import { getSiteUrls } from "@cityssm/get-site-urls";
const MAX_DEPTH = 1;
export const CY_WAIT = 5000;
const shuffleArray = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
        const index2 = Math.floor(Math.random() * (index + 1));
        [array[index], array[index2]] = [array[index2], array[index]];
    }
    return array;
};
export const getRandomURLs = async (urls, limit = 100) => {
    const allURLs = [...urls.toInclude, ...urls.toSearch];
    for (const url of urls.toSearch) {
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
    let distinctURLs = [...(new Set(allURLs))];
    for (let index = 0; index < distinctURLs.length; index += 1) {
        const url = distinctURLs[index];
        if (url.endsWith(".pdf") || urls.toExclude.includes(url)) {
            console.warn("Removing URL: " + url);
            distinctURLs.splice(index, 1);
            index -= 1;
        }
    }
    if (distinctURLs.length > limit) {
        console.log("Reducing " + distinctURLs.length + " URLs.");
        distinctURLs = shuffleArray(distinctURLs).slice(0, limit);
    }
    return distinctURLs;
};
