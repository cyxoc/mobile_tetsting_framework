import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Setting extends Page {

    get title() {
        return $('~settingsScreen-subHeader-left-title-base')

    }

    get ProjectSourceLable() {
        return $('~settingsLinkProjectSource-subtitle-link')

    }

    get languageLable() {
        return $('~settingsLinkLanguage-subtitle-link')

    }


    get switchThemeLable() {
        return $('~settingsLinkSwitchTheme-subtitle-link')

    }

    get resetPinLable() {
        return $('~settingsLinkResetPin-subtitle-link')

    }

    get ProjectSourceDropdown() {
        return $('~projectSource-select')

    }

    get LanguageDropdown() {

        return $('~settingsLanguageDropdown')

    }

    get currentSource() {
        return $('~settingsLinkSwitchTheme-subtitle-link')

    }

    get spanishRadioButton() {
        return $('(//android.view.ViewGroup[@content-desc="LanguageModal-option-radiobutton-radio"])[9]')

    }

    get englishRadioButton() {
        return $('(//android.view.ViewGroup[@content-desc="LanguageModal-option-radiobutton-radio"])[3]')

    }

    get applyLanguageButton() {
        return $('~LanguageModal-button-apply')

    }

    get resetPINButtonText() {
        return $('~settingsResetPin-text-base')

    }

    get resetPINButton() {
        return $('~settingsResetPin')

    }

    get resetPINTitle() {
        return $('~resetOfflinePinScreen-subHeader-left-title-base')

    }

    get resetPINTinputText() {
        return $('~resetOfflinePinInputTitle-base')

    }

    get resetPINTinput1() {
        return $('~resetOfflinePinInputPassword-text-input')

    }

    get resetPINTinput2() {
        return $('~resetOfflinePinInputPasswordConfirmation-text-input')

    }

    get savePinButton() {
        return $('~resetOfflinePinInputSave')

    }

    get closeButton() {
        return $('~settingsScreen-subHeader-right-icon') 
    }

    get currentTheme() {
        return $('~settingsThemeName-base') 
    }

    get switchThemeToggle() {
        return $('~settingsSwitchTheme-toggle') 
    }



    async closeUserMenu() {
        await this.closeButton.waitForExist()
        await this.closeButton.click()
    }

    
    async goBack() {
        await this.backButton.waitForExist()
        await this.backButton.click()
    }

    async selectSpanish() {
        await this.spanishRadioButton.waitForExist()
        await this.spanishRadioButton.click()
        await this.applyLanguageButton.click()
    }

    async selectEnglish() {
        await this.englishRadioButton.waitForExist()
        await this.englishRadioButton.click()
        await this.applyLanguageButton.click()
    }

    async resetOfflinePIN() {
        await this.resetPINButton.waitForExist()
        await this.resetPINButton.click()
    }

    async savePIN() {
        await this.savePinButton.waitForExist()
        await this.savePinButton.click()
    }

    async switchTheme() {
        await this.switchThemeToggle.waitForExist()
        await this.switchThemeToggle.click()
    }

    

}

export default new Setting();
