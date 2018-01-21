var {describe, it, after, before} = require('selenium-webdriver/testing');
var Page = require('../lib/base_page');
// var Page = require('../lib/home_page');
var page;


describe('clickmonkey scenario: Test', function () {
    //needed timeout coz it´s fast to execute
    this.timeout(5000);

    beforeEach(function () {
        page = new Page();
        page.visit("C:\\Users\\cwondany\\Desktop\\protractor-tests-with-Jasmine\\app\\index.html");

    });

    afterEach(function () {
        // page.quit();
    });

    it('should be true', function () {
        var tmp = true;

    });
})

/*
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
//.get
// driver.get('https://library-app.firebaseapp.com/');
driver.get("C:\\Users\\cwondany\\Desktop\\protractor-tests-with-Jasmine\\app\\index.html");
*/

//cmd: webdriver-manager start

/*describe('default_toBetrue ', function () {
    it('ShouldCheckSomething', function () {
        expect(true).toBe(true);
    })
});*/
// driver.quit();
