/* jshint -W030 */

var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

describe('standalone universal header page', function() {

    beforeEach(function() {
        browser.driver.get('http://phpfe1.int.netsvs.corp.gq1.yahoo.com/tests/ucs_client/?abc=def');
    });

    it('should have non-empty src in the <script> tags', function() {
        browser.driver.getCurrentUrl().then(function (url) {

            // Get tags using either by.css('script['src]') or by.tagName('script')
            browser.driver.findElements(by.css('script[src]')).then(function (items) {
                console.log(url);
                console.log(items.length);

                var count = 1;
                items.forEach(function (item) {
                    item.getAttribute('src').then(function (text) {
                        console.log('====> ' + count + '. ' + text);
                        count++;

                        expect(text).to.not.equal(url);
                    });
                });
                
            });

        });
    });

    // it('should have non-empty href in the <link> tags', function() {
    //     expect(true).to.be.true;
    // });

});
