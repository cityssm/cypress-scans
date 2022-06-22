import "cypress-axe";
export declare const CY_WAIT = 5000;
interface URLs {
    toSearch: string[];
    toInclude: string[];
    toExclude: string[];
}
export declare const getRandomURLs: (urls: URLs, limit?: number) => Promise<string[]>;
export {};
