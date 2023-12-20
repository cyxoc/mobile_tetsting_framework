import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Certificates extends Page {

    get title() {
        return $('~MyCertificates-subHeader-left-title-base')

    }

    get contentText() {
        return $(`//android.widget.TextView[@text="There aren't any certificates yet"]`)

    }
    get backButton() {
        return $('~MyCertificates-subHeader-left-icon')

    }

    async goBack() {
        await this.backButton.waitForExist()
        await this.backButton.click()
    }

    

}

export default new Certificates();
