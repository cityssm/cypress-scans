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

// SaultTourism.com
const saulttourismCom: SitemapConfig = {
  toInclude: [],
  toSearch: [
    "https://www.saulttourism.com/"
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
  "gflgardens.ca": gflgardensCa,
  "saultstemarie.ca": saultstemarieCa,
  "saulttourism.com": saulttourismCom,
  "welcometossm.com": welcometossmCom
};


export default sitemapConfigs;
