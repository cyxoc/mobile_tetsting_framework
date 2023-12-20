import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class About extends Page {

    get appName() {
        return $('~aboutTitle-base')

    }

    get appVersion() {
        return $('~aboutVersion-base')

    }
    get backButton() {
        return $('~aboutScreen-subHeader-left-icon')

    }

    async goBack() {
        await this.backButton.waitForExist()
        await this.backButton.click()
    }

    

}

export default new About();
