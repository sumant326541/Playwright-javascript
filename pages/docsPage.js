const { expect } = require('@playwright/test')
exports.DocsPage = class DocsPage {
    constructor(page) {
        this.page = page
        this.gettingStartedLink = page.locator('a', { hasText: 'Getting Started' })
        this.gettingStarted_installationLink = page.locator('a', { haveText: 'Installation' })
        this.gettingStarted_installationLink_Header = page.locator('h1', { haveText: 'Installation' })
    }

}