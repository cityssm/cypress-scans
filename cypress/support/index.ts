import "cypress-axe";

import { getSiteUrls } from "@cityssm/get-site-urls";


const MAX_DEPTH = 1;
export const CY_WAIT = 5000;


interface URLs {
  toSearch: string[];
  toInclude: string[];
  toExclude: string[];
}


const shuffleArray = (array: string[]) => {

  for (let index = array.length - 1; index > 0; index--) {
    const index2 = Math.floor(Math.random() * (index + 1));
    [array[index], array[index2]] = [array[index2], array[index]];
  }

  return array;
};


export const getRandomURLs = async (urls: URLs, limit = 100): Promise<string[]> => {

  /*
   * Build URLs
   */

  const allURLs: string[] = [...urls.toInclude, ...urls.toSearch];

  for (const url of urls.toSearch) {
    try {
      console.log("Searching URL: " + url);
      const siteURLs = await getSiteUrls(url, MAX_DEPTH);
      console.log(siteURLs);
      allURLs.push(...siteURLs.pages);
    } catch {
      console.error("Error searching URL: " + url);
    }
  }

  let distinctURLs: string[] = [...(new Set(allURLs))];

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
