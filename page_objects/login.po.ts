import { browser, by, element, ElementFinder, promise, protractor } from 'protractor';

export class LoginPage {
    private timeout = 10000;

    private get emailInput(): ElementFinder {
        const elementRef = element(by.css('input[name="loginfmt"]'));
        this.waitTillElementToBeClickable(elementRef);
        return elementRef;
    }

    private get passwordInput(): ElementFinder {
        const elementRef = element(by.css('input[name="passwd"]'));
        this.waitTillElementToBeClickable(elementRef);
        return elementRef;
    }

    private get keepLoginInput(): ElementFinder {
        const elementRef = element(by.css('input[name="DontShowAgain"]'));
        this.waitTillElementToBeClickable(elementRef);
        return elementRef;
    }

    private waitTillElementToBeClickable(elementRef: ElementFinder): promise.Promise<any> {
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementRef), this.timeout);
    }

    private waitTillUrlChanged(): promise.Promise<boolean> {
        const condition = browser.getCurrentUrl()
            .then((url) => {
                return true;
            });

        return browser.wait(condition, this.timeout);
    }

    private navigateTo(): promise.Promise<any> {
        return browser.get('/');
    }

    private simulateEnter(elementRef: ElementFinder) {
        elementRef.sendKeys(protractor.Key.ENTER);
    }

    public login(email: string, password: string): promise.Promise<boolean> {
        if (email && password) {
            this.navigateTo();

            this.emailInput.sendKeys(email);
            this.simulateEnter(this.emailInput);

            this.passwordInput.sendKeys(password);
            this.simulateEnter(this.passwordInput);

            this.simulateEnter(this.keepLoginInput);

            return this.waitTillUrlChanged().then(() => {
                return true;
            });
        } else {
            return promise.Promise.resolve(false);
        }
    }
}
