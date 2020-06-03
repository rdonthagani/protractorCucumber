// An example configuration file.
require('babel-register')({
  presets: [ 'es2015' ]
})
exports.config = {
  baseUrl: 'https://angular.io/',
  directConnect: true,
  allScriptsTimeout: 15000,
  getPageTimeout: 3000,
  onPrepare: function(){
    browser.manage().window().maximize()

  },
  cucumberOpts: {
    require: ['./src/support/hooks.js'],
    keepalive: false, //if exception occurs process will continue to run so that case some thing goes worng browser closes.
      'fail-sase': true, // out of 10 scenioes one is failed execution will stop and fail all the scenarios.
    strict: true//to maintain cucumber guidlines
  },


  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['disable-infobar', "--disable-gpu", "--window-size=1920,1080", '--no-sandbox']
    }},

    // Framework to use. Jasmine is recommended.
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Spec patterns are relative to the current working directory when
    // protractor is called.

    suites: {
      test: ['./feature']
    },



    onComplete: function(){
      //oncomplete used to perform operation after execution.
    }

  }
