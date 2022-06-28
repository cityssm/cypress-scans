interface SitemapConfig {
  toInclude: string[];
  toExclude: string[];
  toSearch: string[];
}

// Apps.SaultSteMarie.ca
const appsSaultstemarieCa: SitemapConfig = {
  toInclude: [
    "https://apps.saultstemarie.ca/cityapps/builderServices-blankChecklist.asp?c=115"
  ],
  toSearch: [
    "https://apps.saultstemarie.ca/cityapps/",
    "https://apps.saultstemarie.ca/cityapps/shop/products"
  ],
  toExclude: []
};

// ArtsAndCultureSSM.ca
const artsandculturessmCa: SitemapConfig = {
  toInclude: [
    "https://artsandculturessm.ca"
  ],
  toSearch: [
    "https://artsandculturessm.ca/sitemap/"
  ],
  toExclude: []
};

// CitySSM.GitHub.io
const cityssmGithubIo: SitemapConfig = {
  toInclude: [
    "https://cityssm.github.io",
    "https://cityssm.github.io/municipal-github-rankings/",
    "https://cityssm.github.io/property-tax-rate-data/",
    "https://cityssm.github.io/ward-finder/"
  ],
  toSearch: [
    "https://cityssm.github.io/contract-expiration-tracker/",
    "https://cityssm.github.io/corporate-records-manager/",
    "https://cityssm.github.io/general-licence-manager/",
    "https://cityssm.github.io/lottery-licence-manager/",
    "https://cityssm.github.io/parking-ticket-system/"
  ],
  toExclude: []
};

// CWASSM.ca
const cwassmCa: SitemapConfig = {
  toInclude: [],
  toSearch: [
    "https://cwassm.ca/"
  ],
  toExclude: [""]
};

// GFLGardens.ca
const gflgardensCa: SitemapConfig = {
  toInclude: [
    "http://gflgardens.ca",
    "http://gflgardens.ca/webapps-gardens/eventCalendar_home/index.asp",
    "http://gflgardens.ca/webapps-gardens/eventCalendar/index.asp",
    "http://gflgardens.ca/webapps-gardens/seatingMap_hockey/index.asp",
    "http://gflgardens.ca/webapps-gardens/seatingMap_concert/index.asp"
  ],
  toSearch: [
    "http://gflgardens.ca"
  ],
  toExclude: []
};

// SaultSteMarie.ca
const saultstemarieCa: SitemapConfig = {

  toInclude: ["https://saultstemarie.ca",
    "https://saultstemarie.ca/Search.aspx?searchtext=parks",
    "https://saultstemarie.ca/webapps/meetingMinutes.asp?type=council",
    "https://saultstemarie.ca/webapps/corporateCalendar.asp?e=true",
    "https://saultstemarie.ca/webapps/parabusCalendar.asp",
    "https://saultstemarie.ca/webapps/parksAndPlaygrounds.asp"],

  toSearch: [
    "https://saultstemarie.ca/Site-Map.aspx"
  ],

  toExclude: []
};

// SaultTogether.ca
const saulttogetherCa: SitemapConfig = {
  toInclude: [
    "https://www.saulttogether.ca/app/bf28b40646b041a294679ce243ad5dc8",
    "https://www.saulttogether.ca/pages/information-for-reopening-ontario",
    "https://www.saulttogether.ca/search",
    "https://survey123.arcgis.com/share/c814ea481f7b411b898ef90bfb795ace",
    "https://www.soomaps.com/archubpages/hub-embed-table.html?feature=5&featureName=Restaurants&returnAddress=https://www.saulttogether.ca/"
  ],
  toSearch: [
    "https://www.saulttogether.ca/"
  ],
  toExclude: []
};

// SaultTourism.com
const saulttourismCom: SitemapConfig = {
  toInclude: [],
  toSearch: [
    "https://www.saulttourism.com/"
  ],
  toExclude: []
};

// ShapeTheSault.ca
const shapethesaultCa: SitemapConfig = {
  toInclude: [
    "https://shapethesault.ca/",
    "https://shapethesault.ca/focus-areas",
    "https://shapethesault.ca/events-%26-news",
    "https://shapethesault.ca/faq",
    "https://shapethesault.ca/openhouse",
  ],
  toSearch: [
    "https://shapethesault.ca/home"
  ],
  toExclude: []
};

// WelcomeToSSM.com
const welcometossmCom: SitemapConfig = {
  toInclude: [
    "https://welcometossm.com/?s=transportation"
  ],
  toSearch: [
    "https://welcometossm.com/"
  ],
  toExclude: []
}


export const sitemapConfigs: { [website: string]: SitemapConfig } = {
  "apps.saultstemarie.ca": appsSaultstemarieCa,
  "artsandculturessm.ca": artsandculturessmCa,
  "cityssm.github.io": cityssmGithubIo,
  "cwassm.ca": cwassmCa,
  "gflgardens.ca": gflgardensCa,
  "saultstemarie.ca": saultstemarieCa,
  "saulttogether.ca": saulttogetherCa,
  "saulttourism.com": saulttourismCom,
  "shapethesault.ca": shapethesaultCa,
  "welcometossm.com": welcometossmCom
};


export default sitemapConfigs;
