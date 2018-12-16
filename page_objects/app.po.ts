import { browser, by, element, ElementArrayFinder, ElementFinder, promise, protractor } from 'protractor';

export class AppPage {
    private timeout = 10000;

    private get dropdownButton(): ElementFinder {
        const elementRef = element(by.css('.overflowMenu .dropdown-button'));
        browser.wait(protractor.ExpectedConditions.visibilityOf(elementRef), this.timeout);
        return elementRef;
    }

    private get logoutButton(): ElementFinder {
        const elementRef = element(by.css('.icon--logout'));
        browser.wait(protractor.ExpectedConditions.visibilityOf(elementRef), this.timeout);
        return elementRef;
    }

    public get title(): promise.Promise<string> {
        return browser.getTitle();
    }

    public get currentUrl(): promise.Promise<string> {
        return browser.getCurrentUrl();
    }

    public get sidenavItems(): ElementArrayFinder {
        const elementRef = element.all(by.css('sidenav-item'));
        browser.wait(protractor.ExpectedConditions.visibilityOf(elementRef.last()), this.timeout);
        return elementRef;
    }

    public getSidenavItemByText(text: string): ElementFinder {
        const elementRef = element(by.cssContainingText('.sidenav-main sidenav-item .icon-text', text));
        browser.wait(protractor.ExpectedConditions.visibilityOf(elementRef), this.timeout);
        return elementRef;
    }

    public getSidenavSubmenuItemByText(text: string): ElementFinder {
        const elementRef = element(by.cssContainingText('.sidenav-submenu .submenu-item div', text));
        browser.wait(protractor.ExpectedConditions.visibilityOf(elementRef), this.timeout);
        return elementRef;
    }

    public getWidgetTitles(): ElementArrayFinder {
        const elementRef = element.all(by.css('widget-container .card-titlebar h4'));
        browser.wait(protractor.ExpectedConditions.visibilityOf(elementRef.last()), this.timeout);
        return elementRef;
    }

    public logout(): promise.Promise<boolean> {
        const dropdownButton = this.dropdownButton;

        return dropdownButton.click().then(() => {
            const logoutButton = this.logoutButton;

            return logoutButton.click().then(() => {
                return true;
            }).catch(() => {
                return false;
            });
        });
    }
}
