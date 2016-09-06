//noinspection JSUnusedGlobalSymbols
exports.config = {
  // ----- How to setup Selenium -----
  //
  // There are three ways to specify how to use Selenium. Specify one of the
  // following:
  //
  // 1. seleniumServerJar - to start Selenium Standalone locally.
  // 2. seleniumAddress - to connect to a Selenium server which is already
  //    running.
  // 3. sauceUser/sauceKey - to use remote Selenium servers via SauceLabs.

  // The location of the selenium standalone server .jar file.
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  capabilities: {
    'tunnel-identifier' : process.env.TRAVIS_JOB_NUMBER
  },

  // Use native drivers to connect
  directConnect: true,

  // Selector for the element housing the angular app - this defaults to
  // body, but is necessary if ng-app is on a descendant of <body>
  rootElement: 'html',

  // Spec patterns are relative to the location of this config.
  specs: [
    '../../test/e2e/**/*.e2e.js'
  ],

  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    realtimeFailure: true,
    includeStackTrace: true
  }
};