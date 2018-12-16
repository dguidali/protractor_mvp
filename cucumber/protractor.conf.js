exports.config = {
  allScriptsTimeout: 11000,
  capabilities: {
    browserName: 'chrome',    
    chromeOptions: {
      args: [ "--headless" ]
    }
  },
  directConnect: true,
  baseUrl: 'https://portal.uat.buhlergroup.io/',

  specs: [
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

  params: {
    login: {
      email: '',
      password: ''
    }
  },

  onPrepare() {
    require('ts-node/register');
    require('tsconfig-paths/register');
    browser.waitForAngularEnabled(false);
  }
};