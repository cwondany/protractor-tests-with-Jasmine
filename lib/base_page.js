var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    chrome = require('selenium-webdriver/chrome');

var o = new chrome.Options();
o.addArguments('disable-infobars');

var Page = function () {
    this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(o).build();
    //driver = new webdriver.Builder().forBrowser('chrome').build();
    var driver = this.driver;

    this.visit = function (theUrl) {
        return driver.get(theUrl);
    }

    this.quit = function () {
        return driver.quit();
    }

    this.write = function (el, txt) {
        return this.find(el).sendKeys(txt);
    }

    this.waitFor = function (milliseconds) {
        return this.wait(milliseconds);
    }
}

module.exports = Page;