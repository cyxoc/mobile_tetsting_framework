import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Installation extends Page {

    get installTitle() {
        return $('~wizardScreen-subHeader-left-title-base')
    }

    get installButton() {
        return $('~start-install')
    }

    get cancleButton() {
        return $('~start-cancel')
        
    }

    async installApps() {
        await this.installButton.waitForExist()
        await this.installButton.click()
    }

    async clickCancle() {
        await this.cancleButton.waitForExist()
        await this.cancleButton.click()
    }

  

}

export default new Installation();
