import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import * as dotenv from 'dotenv' 
dotenv.config()

import UserMenu from '../pageobjects/UserMenu/usermenu.js'
import About from '../pageobjects/UserMenu/about.js'
import Certificates from '../pageobjects/UserMenu/certificates.js'
import Setting from '../pageobjects/UserMenu/setting.js'
import Capabilitieshome from '../pageobjects/capabilities/capabilitieshome.js'

describe('User Menu', () => {

  it('User Menu contents', async () => {

    await UserMenu.openUserMenu()
    await UserMenu.signum.waitForDisplayed()
    await expect(UserMenu.signum).toHaveText(process.env.SIGNUM)
    await expect(UserMenu.email).toHaveText(process.env.EMAIL)

  })


  it('User Menu > Help', async () => {
    await UserMenu.openHelp()
    const webview = $('//android.webkit.WebView');
    await webview.waitForDisplayed();
    await driver.switchContext('WEBVIEW_chrome');
    await expect(browser).toHaveTitle('***************************')
    await expect(browser).toHaveUrl('***************************')
    await driver.pause(500)
    await browser.switchContext('NATIVE_APP');
    await browser.back();
    await browser.waitUntil(async function () {
      return (await browser.getContext()) === 'NATIVE_APP'
    }, {
      timeout: 5000,
      timeoutMsg: 'expected text to be different after 5s'
    })
    

  })

  it('User Menu > About', async () => {
    
    await UserMenu.openAbout()
    await About.appName.waitForDisplayed()
    await expect(About.appName).toHaveText('*********************')
    await expect(About.appVersion).toHaveText('*******************')
    await About.goBack()

    
  })

  it('User Menu > Certificates', async () => {
    await expect(UserMenu.certificateButton).toHaveText('My Certificates')
    await UserMenu.openMyCertificates()
    await Certificates.title.waitForDisplayed()
    await expect(Certificates.title).toHaveText('My Certificates')
    await expect(Certificates.contentText).toHaveText(`There aren't any certificates yet`)
    await Certificates.goBack()


    
  })

  it('User Menu > Setting > Project Source', async () => {
    await expect(UserMenu.settingButton).toHaveText('Settings')
    await UserMenu.openSetting()
    await Setting.title.waitForDisplayed()
    await expect(Setting.title).toHaveText('Settings')
    await expect(Setting.ProjectSourceLable).toHaveText('Project source')
    await Setting.ProjectSourceDropdown.click();
    await driver.touchAction({action: 'tap', x: 764, y:801})
    await Setting.closeUserMenu()
    await expect(Capabilitieshome.fieldTechnicialText).toHaveText('Work Plans')
    
  })

  it('User Menu > Setting > Language', async () => {
    await UserMenu.openUserMenu()
    await UserMenu.openSetting()
    await Setting.title.waitForDisplayed()
    await expect(Setting.languageLable).toHaveText('Language')
    await Setting.LanguageDropdown.click();
    await Setting.selectSpanish()
    await expect(Setting.ProjectSourceLable).toHaveText('Fuente del proyecto')
    await expect(Setting.languageLable).toHaveText('Idioma')
    await expect(Setting.switchThemeLable).toHaveText('Cambiar tema')
    await expect(Setting.resetPinLable).toHaveText('Restablecer PIN sin conexión')
    await expect(Setting.title).toHaveText('Configuración')
    //More test cases for localization to be added later 
    await Setting.LanguageDropdown.click();
    await Setting.selectEnglish()
    await expect(Setting.ProjectSourceLable).toHaveText('Project source')
    await expect(Setting.languageLable).toHaveText('Language')
    await expect(Setting.switchThemeLable).toHaveText('Switch theme')
    await expect(Setting.resetPinLable).toHaveText('Reset offline PIN')
    await expect(Setting.title).toHaveText('Settings')
    
  })

  it('User Menu > Setting > Reset Offline PIN', async () => {
    await expect(Setting.resetPINButtonText).toHaveText('Reset')
    await Setting.resetOfflinePIN()
    await Setting.resetPINTitle.waitForDisplayed()
    await expect(Setting.resetPINTitle).toHaveText('Reset offline PIN')
    await expect(Setting.resetPINTinputText).toHaveText('Reset offline PIN')
    await expect(Setting.resetPINTinput1).toHaveText('PIN code')
    const isEnabled = await Setting.resetPINButton
    await expect(Setting.resetPINTinput2).toHaveText('PIN confirmation')
    await Setting.resetPINTinput1.setValue(5678)
    await Setting.resetPINTinput2.setValue(5678)
    await Setting.savePIN()
  })

  it('User Menu > Setting > Theme', async () => {
    await Setting.switchTheme()
    await expect(Setting.currentTheme).toHaveText('Light')
    await Setting.closeUserMenu()
    // await driver.pause(500)
    // await browser.saveFullPageScreen('capabilitiesscreen', {})
    // await expect(await browser.checkScreen('capabilitiesscreen', {})).toEqual(0)
    // await driver.pause(5000)
  })

  it('User Menu > Provide feedback', async () => {
    
  })

  it('User Menu > Report Issue', async () => {
    await UserMenu.openUserMenu()
    await UserMenu.openReportIssue()
    await expect(UserMenu.reportIssueTitle).toHaveText('Report Issue')
    await expect(UserMenu.reportIssueContent).toHaveText('By pressing the “Continue” button the ******************** Logs stored on your device will automatically be uploaded to the login servers to help support troubleshooting the issue. Also, an email window will open to support service desk where you can describe the issue you are experiencing.')
    await UserMenu.continueReportIssue()
    await driver.pause(3000)
    // console.log(await driver.getContexts())
    // await browser.switchContext('WEBVIEW_chrome');
    // await UserMenu.gmailComposeTitle.waitForDisplayed()
    // console.log(await driver.getContexts())
    // await expect(UserMenu.gmailComposeTitle).toHaveText('Compose')
    // await expect(UserMenu.gmailSenderEmail).toHaveText('*********************')
    // await driver.pause(500)
    // await browser.switchContext(null);

    // await browser.switchContext('NATIVE_APP');
    // await browser.back();  
    // await browser.waitUntil(async function () {
    //   return (await browser.getContext()) === 'NATIVE_APP'
    // }, {
    //   timeout: 5000,
    //   timeoutMsg: 'expected text to be different after 5s'
    // })
    const mainApp = await driver.getContexts()
    await driver.switchContext(mainApp[0]);
    // await driver.back()
    await driver.pause(10000)


  })

  it('User Menu > Support', async () => {
    await UserMenu.openSupport()
    const webview = $('//android.webkit.WebView');
    await webview.waitForDisplayed();
    await driver.switchContext('WEBVIEW_chrome');
    await expect(browser).toHaveUrl('************')
    await driver.back()
    await driver.pause(3000)
    
  })

  

})

