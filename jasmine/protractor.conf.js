exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './e2e/*.ts'
    ],
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: [ "--headless" ]
        }
    },
    directConnect: true,
    baseUrl: 'https://portal.uat.buhlergroup.io/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () { }
    },
    onPrepare() {

        const { SpecReporter } = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'jasmine/reports',
            filePrefix: 'summary'
        }));

        require('ts-node/register'); 
        require('tsconfig-paths/register');
        browser.waitForAngularEnabled(false);
    }
};
