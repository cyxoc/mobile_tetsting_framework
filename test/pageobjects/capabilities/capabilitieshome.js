import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Capabilities extends Page {

    get fieldTechnicialText() {
        return $('~functionsTile-field_technician-base')

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

export default new Capabilities();
