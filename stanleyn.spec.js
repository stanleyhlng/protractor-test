/* jshint -W030 */

var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect;

chai.use(chaiAsPromised);

describe('mocha-test #1', function() {

    it('sample test #1.1', function() {
        expect(true).to.be.true;
    });

    it('sample test #1.2', function() {
        expect(true).to.be.true;
    });
});

describe('mocha-test #2', function() {

    it('sample test #2.1', function() {
        expect(true).to.be.true;
    });

    it.skip('sample test #2.2', function() {
        expect(true).to.be.true;
    });
});
