import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class UserData extends Page {

    get title1() {
        return $('~privacy-title-base')
    }

    get content1() {
        return $('~privacyDataController-base')
    }

    get content2() {
        return $('~privacyPersonalData-base')
    }

    get content3() {
        return $('~privacyCategoriesOfData-base')
    }

    get content4() {
        return $('~privacyBNEW-base')
    }

    get content5() {
        return $('~privacyThirdParty-base')
    }

    get content6() {
        return $('~privacyAnonymizedStore-base')
    }

    get content7() {
        return $('~privacyRights-base')
    }

    get content8() {
        return $('~privacyDecision-base')
    }

    get okButton() {
        return $('~privacy-OK')
    }

    async pressOk() {
        await this.okButton.waitForExist()
        await this.okButton.click()
    }

  

}

export default new UserData();
