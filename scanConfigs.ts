/*
 * Main Config
 */

export const PAGE_COUNT = 25;

/*
 * HTML Validate
 */

export const HTML_VALIDATE = {
  rules: {
    "script-type": "off",
    "require-sri": "off"
  }
};

/*
 * Lighthouse
 */

export const LIGHTHOUSE_THRESHOLDS = {
  "accessibility": 95,
  "best-practices": 60,
  "seo": 50,
  "performance": 40
};
