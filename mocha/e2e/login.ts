import { browser } from 'protractor'
import { AppPage } from '@pages/app.po';
import { LoginPage } from '@pages/login.po';
import { expect } from "../support/chai_exports";

describe('app', () => {
    let loginPage: LoginPage;
    let appPage: AppPage;  

    it('should login and logout from the platform', async function() {
        loginPage = new LoginPage();
        await loginPage.login(browser.params.login.email, browser.params.login.password);

        appPage = new AppPage();
        await expect(appPage.title).to.eventually.equal('Bühler Insights');  
        
        await browser.driver.sleep(5000);

        await appPage.logout();
        
        await expect(appPage.currentUrl).to.eventually.contain('https://login.microsoftonline.com/');
    });
});
