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
        './e2e/features/*.feature'
      ],

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
      require: [
        './e2e/steps/**/*.ts',
        './e2e/features/support/*.ts'
      ],
      strict: true,
      format: [
        'json:cucumber/reports/summary.json'
      ],
      dryRun: false,
      compiler: []
    },

    onPrepare() {
      require('ts-node/register');
      require('tsconfig-paths/register');
      browser.waitForAngularEnabled(false);
    }
};