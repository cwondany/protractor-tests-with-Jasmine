exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/home.spec.js'],
    onPrepare: function () {
        browser.driver.manage().window().setSize(1680, 1050);
    },
}