import * as fs from 'node:fs';
import { getSiteUrls } from '@cityssm/get-site-urls';
import minimist from 'minimist';
import { sitemapConfigs } from './sitemapConfigs.js';
const MAX_DEPTH = 2;
const argv = minimist(process.argv.slice(2));
const website = argv.website;
if (!website) {
    console.log('--website parameter missing');
    process.exitCode = 1;
}
const sitemapConfig = sitemapConfigs[website];
if (!sitemapConfig) {
    console.log('No URLs to build fixture file.');
    process.exitCode = 1;
}
const allURLs = [...sitemapConfig.toInclude, ...sitemapConfig.toSearch];
for (const url of sitemapConfig.toSearch) {
    try {
        console.log('Searching URL: ' + url);
        const siteURLs = await getSiteUrls(url, MAX_DEPTH);
        console.log(siteURLs);
        allURLs.push(...siteURLs.pages);
    }
    catch (_a) {
        console.error('Error searching URL: ' + url);
    }
}
const distinctURLs = [...new Set(allURLs)];
for (let index = 0; index < distinctURLs.length; index += 1) {
    const url = distinctURLs[index];
    if (url.endsWith('.pdf') || sitemapConfig.toExclude.includes(url)) {
        console.warn('Removing URL: ' + url);
        distinctURLs.splice(index, 1);
        index -= 1;
    }
}
distinctURLs.sort();
if (website) {
    try {
        fs.writeFile('./cypress/fixtures/' + website + '.json', JSON.stringify({
            urls: distinctURLs
        }), {}, () => {
            console.log('Config written with ' + distinctURLs.length.toString() + ' URLs.');
        });
    }
    catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
}
