import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class UserMenu extends Page {

    get userIcon() {
        return $('.android.widget.ImageView')

    }

    get signum() {
        return $('~userMenuSignum-base') 
    }

    get email() {
        return $('~userMenuEmail-base') 
    }

    get helpButton() {
        return $(`//android.widget.TextView[@content-desc="navigation-undefined-base" and @text="Help"]`) 
    }

    get aboutButton() {
        return $('~navigation-Core/about-base') 
    }

    get certificateButton() {
        return $('~navigation-Core/myCertificates-base') 
    }

    get settingButton() {
        return $('~navigation-Core/settings-base') 
    }

    get supportButton() {
        return $('//android.widget.TextView[@content-desc="navigation-undefined-base" and @text="Support"]') 
    }

    get reportIssueButton() {
        return $('~navigation-Core/reportIssue-base') 
    }

    get provideFeedbackButton() {
        return $('~navigation-Core/feedback-base') 
    }

    get reportIssueTitle() {
        return $('~reportIssueScreen-subHeader-left-title-base') 
    }

    get reportIssueContent() {
        return $('~reportIssueText-base') 
    }

    get reportIssueContinueButton() {
        return $('~reportIssueContinue') 
    }


    get closeButton() {
        return $('~userMenu-subHeader-right-icon') 
    }

    get gmailComposeTitle() {
        return $('//android.widget.TextView[@text="Compose"]') 
    }

    get gmailSenderEmail() {
        return $('#com.google.android.gm:id/peoplekit_chip') 
    }



    async openUserMenu() {
        await this.userIcon.waitForExist()
        await this.userIcon.click()
    }

    async closeUserMenu() {
        await this.closeButton.waitForExist()
        await this.closeButton.click()
    }

    async openHelp() {
        await this.helpButton.waitForExist()
        await this.helpButton.click()
    }

    async openAbout() {
        await this.aboutButton.waitForExist()
        await this.aboutButton.click()
    }

    async openMyCertificates() {
        await this.certificateButton.waitForExist()
        await this.certificateButton.click()
    }

    async openSetting() {
        await this.settingButton.waitForExist()
        await this.settingButton.click()
    }

    async openSupport() {
        await this.supportButton.waitForExist()
        await this.supportButton.click()
    }

    async openReportIssue() {
        await this.reportIssueButton.waitForExist()
        await this.reportIssueButton.click()
    }

    async continueReportIssue() {
        await this.reportIssueContinueButton.waitForExist()
        await this.reportIssueContinueButton.click()
    }

    async openFeedback() {
        await this.provideFeedbackButton.waitForExist()
        await this.provideFeedbackButton.click()
    }


}

export default new UserMenu();
