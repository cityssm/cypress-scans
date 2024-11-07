import * as scanConfigs from '../../scanConfigs.js'
import { shuffleArray } from '../../utils.js'
import { urls } from '../fixtures/apps.saultstemarie.ca.json'

describe('Apps.SaultSteMarie.ca', async () => {
  const testURLs = shuffleArray(urls).slice(0, scanConfigs.PAGE_COUNT)

  /*
  it.each(testURLs)('Has valid HTML - %s', (testURL) => {
    cy.visit(testURL)
    cy.htmlvalidate()
  })
    */

  it.each(testURLs)('Passes lighthouse tests - %s', (testURL) => {
    cy.visit(testURL)
    cy.lighthouse(scanConfigs.LIGHTHOUSE_THRESHOLDS)
  })

  it.each(testURLs)('Passes pa11y tests - %s', (testURL) => {
    cy.visit(testURL)
    cy.pa11y()
  })

  it.each(testURLs)('Passes axe tests - %s', (testURL) => {
    cy.visit(testURL)
    cy.injectAxe()
    cy.checkA11y()
  })
})
