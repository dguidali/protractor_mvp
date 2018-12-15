import { Given, When, Then } from 'cucumber'
import { browser } from 'protractor'
import { LoginPage } from '@pages/login.po'
import { AppPage } from '@pages/app.po';

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

Then('I should be inside the buhler insights platform',
  async function() { 
    appPage = new AppPage();
    await this.expect(appPage.title).to.eventually.equal("Bühler Insights");
  });
