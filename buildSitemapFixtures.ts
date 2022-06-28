import * as fs from "fs";
import minimist from "minimist";
import { getSiteUrls } from "@cityssm/get-site-urls";

import { sitemapConfigs } from "./sitemapConfigs.js";


const MAX_DEPTH = 2;


const argv = minimist(process.argv.slice(2));

// Get --website parameter

const website = argv.website as string;

if (!website) {
  console.log("--website parameter missing");
  process.exitCode = 1;
}

// Get URLs

const sitemapConfig = sitemapConfigs[website];

if (!sitemapConfig) {
  console.log("No URLs to build fixture file.");
  process.exitCode = 1;
}

// Search URLs

const allURLs = [...sitemapConfig.toInclude, ...sitemapConfig.toSearch];

for (const url of sitemapConfig.toSearch) {
  try {
    console.log("Searching URL: " + url);
    const siteURLs = await getSiteUrls(url, MAX_DEPTH);
    console.log(siteURLs);
    allURLs.push(...siteURLs.pages);
  } catch {
    console.error("Error searching URL: " + url);
  }
}

// Filter out exclusions

const distinctURLs: string[] = [...(new Set(allURLs))];

for (let index = 0; index < distinctURLs.length; index += 1) {
  const url = distinctURLs[index];
  if (url.endsWith(".pdf") || sitemapConfig.toExclude.includes(url)) {
    console.warn("Removing URL: " + url);
    distinctURLs.splice(index, 1);
    index -= 1;
  }
}

// Write the JSON file

distinctURLs.sort();

if (website) {

  try {
    fs.writeFile("./cypress/fixtures/" + website + ".json",
      JSON.stringify({
        urls: distinctURLs
      }),
      {}, () => {
        console.log("Config written with " + distinctURLs.length.toString() + " URLs.");
      });
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}
