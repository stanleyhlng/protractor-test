exports.config = {
    framework: 'mocha',
    mochaOpts: {
        reporter: 'spec',
        timeout: 300000
    },
    // seleniumAddress: 'http://10.73.137.215:4444/wd/hub',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['stanleyn.spec.js'],
    multiCapabilities: [
    //   {
    //       browserName: 'firefox'
    //   },
    // {
    //     browserName: 'Safari',
    //     platformName: 'iOS',
    //     platformVersion: '8.0',
    //     deviceName: 'iPhone 5'
    // }

    // {
    //     browserName: 'firefox'
    // }

    // {
    //     appiumVersion: '1.3.1',
    //     browserName: 'Safari',
    //     platformName: 'iOS',
    //     platformVersion: '6.1',
    //     deviceName: 'iPhone Simulator'
    // }

    {
        appiumVersion: '1.3.3',
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '5.0',
        deviceName: 'Android Emulator',
        'device-orientation': 'portrait'
    }

    // {
    //     'browserName': 'phantomjs',
    //     'version': '',
    //     'platform': 'ANY',
    //     'phantomjs.binary.path': './node_modules/.bin/phantomjs',
    //     'phantomjs.cli.args': [
    //         '--logfile=phantom.log',
    //         '--loglevel=DEBUG'
    //     ]
    // }
    ],
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    }
};
