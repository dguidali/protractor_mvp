import { browser } from 'protractor'
import { AppPage } from '@pages/app.po';
import { LoginPage } from '@pages/login.po';

describe('app', () => {
    let loginPage: LoginPage;
    let appPage: AppPage;  

    it('should login and logout from the platform', async function() {
        loginPage = new LoginPage();
        await loginPage.login(browser.params.login.email, browser.params.login.password);

        appPage = new AppPage();
        await expect(appPage.title).toBe('Bühler Insights');      
        await browser.driver.sleep(5000);
        await appPage.logout();
        await expect(appPage.currentUrl).toContain('https://login.microsoftonline.com/');

    });
});
