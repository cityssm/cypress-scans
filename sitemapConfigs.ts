interface SitemapConfig {
  toInclude: string[];
  toExclude: string[];
  toSearch: string[];
}


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
  "saultstemarie.ca": saultstemarieCa,
  "welcometossm.com": welcometossmCom
};


export default sitemapConfigs;
