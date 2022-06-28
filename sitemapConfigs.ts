interface SitemapConfig {
  toInclude: string[];
  toExclude: string[];
  toSearch: string[];
}

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
  "gflgardens.ca": gflgardensCa,
  "saultstemarie.ca": saultstemarieCa,
  "welcometossm.com": welcometossmCom
};


export default sitemapConfigs;
