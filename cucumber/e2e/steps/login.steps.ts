import { Given, When, Then } from 'cucumber'
import { browser } from 'protractor'
import { LoginPage } from '@pages/login.po'
import { AppPage } from '@pages/app.po'

let appPage: AppPage;
let loginPage: LoginPage;

Given('I am on the buhler insights platform login page',
  async function() {
    loginPage = new LoginPage();
  });

When('I have logged in with a valid username and password',
  async function() {
    await loginPage.login(browser.params.login.email, browser.params.login.password);
  });

Then('I should be inside the platform',
  async function() { 
    appPage = new AppPage();
    await this.expect(appPage.title).to.eventually.equal("Bühler Insights");
  });

When('I wait for five seconds and logout from the platform',
  async function() {
    await browser.driver.sleep(5000);
    await appPage.logout();
  });

Then('I should be on the microsoft website',
  async function() { 
    await this.expect(appPage.currentUrl).to.eventually.contain('https://login.microsoftonline.com/');
  });
