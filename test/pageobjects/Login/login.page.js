import { $ } from '@wdio/globals'
import Page from '../page.js';
import TOTP from 'totp-generator'
import * as dotenv from 'dotenv' 
dotenv.config()


/**
 * sub page containing specific selectors and methods for a specific page
 */


class LoginPage extends Page {

    get signInButtonText() {
        return $('~onlineLoginSignIn-text-base')
    }

    get signInButton() {
        return $('~onlineLoginSignIn')
    }

    async signIn() {
        await this.signInButton.waitForExist({ timeout: 90000 })
        await expect(this.signInButtonText).toHaveText('Sign In')
        await this.signInButton.click()
    }

    get emailLoginInput() {
        return $('[type="email"]');
    }

    get title() {
        // return $('.ext-title');
        return $('#loginHeader > div')
    }

    get $tilesHolder() {
        return $('#tilesHolder');
    }

    get continueButton() {
        return $('//input[@name="ContinueAuth"]');
    }

    async loginWithWxistingAccount() {
        const anyTile = await this.$tilesHolder.$('.table');
        await anyTile.waitForClickable();
        await anyTile.click();
    }

    async continuteWithExistingAccount() {
        await this.continueButton.waitForClickable()
        await this.continueButton.click()
    }


    get nextBtn() {
        return $("#idSIButton9");
    }

    get passwordInput() {
        return $("#i0118");
    }

    get signInBtn() {

        return $(`//*[@id="idSIButton9"]`);
    }

    get signInAnotherWay() {
        return $("#signInAnotherWay");
    }

    get useVerificationCode() {
        return $("#idDiv_SAOTCS_Proofs > div.tile:last-child");
    }

    get useVerificationCode() {
        return $("#idDiv_SAOTCS_Proofs > div.tile:last-child");
    }

    get mfaCodeInput() {
        return $("#idTxtBx_SAOTCC_OTC");
    }

    get mfaCodeSubmit() {
        return $("#idSubmit_SAOTCC_Continue");
    }

    get offlinePinTitle() {
        return $('~firstAppRunTitle-base');
    }

    get offlinePin() {
        return $('~firstAppRunInputPassword-text-input');
    }

    get offlinePinConfirm() {
        return $('~firstAppRunInputPasswordConfirmation-text-input');
    }

    get submitOfflinePin() {
        return $('~firstAppRunInputSave');
    }

    async setOfflinePin(pin) {
        await this.offlinePin.waitForEnabled({ timeout: 30000 })
        await expect(this.offlinePinTitle).toHaveText('Offline PIN')
        await this.offlinePin.setValue(pin)
        await this.offlinePinConfirm.setValue(pin)
        await this.submitOfflinePin.click()
    }



    async setErcEmail(email) {
        const input = await this.emailLoginInput;
        const submitButton = await this.nextBtn
        await input.waitForEnabled()
        await input.setValue(email)
        await submitButton.click()
    }

    async setErcPass(pass) {
        const input = await this.passwordInput;
        const passwordButton = await this.signInBtn
        await input.waitForEnabled();
        await browser.pause(500)
        await input.setValue(pass);
        await passwordButton.waitForClickable()
        await passwordButton.click()
    }

    async setMfa(mfacode) {
        const signInAnotherway = await this.signInAnotherWay
        const useVerificationCode = await this.useVerificationCode
        const input = await this.mfaCodeInput;
        const submitButton = await this.mfaCodeSubmit
        await signInAnotherway.waitForEnabled()
        await signInAnotherway.click()
        await useVerificationCode.waitForEnabled()
        await useVerificationCode.click()
        await input.setValue(mfacode)
        await submitButton.click()
        await this.ecoHeader.waitForExist({ timeout: 30000 })
    }

    async microsoftSignIn() {
        await this.title.waitForExist()
        const title = await this.title.getText();
        switch (title) {
            case 'Pick an account':
                await this.loginWithWxistingAccount()
                await driver.pause(1000)
                const KEYCODE_ENTER = 66;
                await driver.pressKeyCode(KEYCODE_ENTER)
                await driver.pause(1000)
                await driver.switchContext('NATIVE_APP');
                await driver.pause(1000)
                break;

            case 'Sign in':
                // logger.info('Enter email and click next');
                await this.setErcEmail(process.env.EMAIL)
                await this.setErcPass(process.env.PASWORD)
                await this.setMfa(TOTP(process.env.MFA_SECRET))
                await expect(this.signInButton).toBeClickable()
                await expect(this.signInButtonText).toHaveText('Sign In')
                break;

            default:
                throw new Error("Login flow said: 'Sorry, I am lost :( I think we should be on Sign In or Pick an account page'"); // prettier-ignore
        }
    }

}

export default new LoginPage();
