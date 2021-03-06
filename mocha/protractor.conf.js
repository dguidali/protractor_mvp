exports.config = {
    directConnect: true,
    baseUrl: 'https://portal.uat.buhlergroup.io/',

    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ["--headless"]
      }
    },
    specs:
      [
        './e2e/*.ts'
      ],

    framework: 'mocha',

    mochaOpts: {
      reporter: 'spec',
      timeout: 60000,
      reporter: 'mocha-junit-reporter',
      reporterOptions: {
        mochaFile: 'mocha/reports/summary.xml'
      }    
    },

    onPrepare() {
      require('ts-node/register');
      require('tsconfig-paths/register');
      
      browser.waitForAngularEnabled(false);
    }
};