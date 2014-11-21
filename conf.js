exports.config = {
  framework: 'mocha',
  mochaOpts: {
      reporter: 'spec',
      timeout: 30000
  },
  // seleniumAddress: 'http://10.73.137.215:4444/wd/hub',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['stanleyn.spec.js'],
  multiCapabilities: [
  // {
  //     browserName: 'firefox'
  // },
  {
      browserName: 'chrome'
  }],
  onPrepare: function() {
      browser.ignoreSynchronization = true;
  }
};
