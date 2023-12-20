import { expect } from '@wdio/globals'
import installation from '../pageobjects/Login/installation.js';
import LoginPage from '../pageobjects/Login/login.page.js'
import userData from '../pageobjects/Login/userData.js';



describe('ECO Login', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.signIn()
    const webview = $('//android.webkit.WebView');
    await webview.waitForDisplayed();
    await driver.switchContext('WEBVIEW_chrome');
    await LoginPage.microsoftSignIn()
    await LoginPage.setOfflinePin(1234)
  })

  it('User data Collection Match contects and Accept', async () => {
    await (await userData.title1).waitForDisplayed()
    await expect(userData.title1).toHaveText('User Data Collection')
    await expect(userData.content1).toHaveText(`Data controller for the system is *************************** The Data Protection Officer can be contacted by email *************************`)
    await expect(userData.content2).toHaveText('Your personal data is processed for performing tools usage analysis to improve our tools.')
    await expect(userData.content3).toHaveText('The categories of data which is processed is the tool usage together with the anonymized user id and so cannot be used for a particular user tracking as the data is only related to the relevant BA/MA and country.')
    await expect(userData.content4).toHaveText('The data is processed by ****************')
    await expect(userData.content5).toHaveText('The data is not transferred to any other third party.')
    await expect(userData.content6).toHaveText('The data will be stored anonymized for a maximum of 2 years.')
    await expect(userData.content7).toHaveText('You have the right to complain on the data processing with a data protection supervisory authority.')
    await expect(userData.content8).toHaveText('There is no automated decision making nor profiling involved in the processing.')
    await userData.pressOk()
    await installation.installTitle.waitForDisplayed()
    await expect(installation.installTitle).toHaveText('Installation')
    // await installation.installApps()
    await installation.clickCancle()
  })
})

