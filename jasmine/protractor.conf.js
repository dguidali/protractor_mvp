exports.config = {
    directConnect: true,
    baseUrl: 'https://portal.uat.buhlergroup.io/',

    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ["--headless"]
        }
    },

    specs: [
        './e2e/*.ts'
    ],

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        print: function () { }
    },

    onPrepare() {

        const { SpecReporter } = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

        const jasmineReporters = require('jasmine-reporters');
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
