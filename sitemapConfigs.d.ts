interface SitemapConfig {
    toInclude: string[];
    toExclude: string[];
    toSearch: string[];
}
export declare const sitemapConfigs: {
    [website: string]: SitemapConfig;
};
export default sitemapConfigs;
