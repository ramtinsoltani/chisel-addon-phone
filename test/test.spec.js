require('mocha');
const expect = require('chai').expect;
const path = require('path');
const phone = require(path.join(__dirname, '../index.js'));

describe('Phone', function() {

  it('should format phone number in International formatting', function() {

    expect(phone('1235556789', 'US', 'int')).to.equal('+1 123-555-6789');

  });

  it('should format phone number in National formatting', function() {

    expect(phone('1235556789', 'US', 'nat')).to.equal('(123) 555-6789');

  });

  it('should format phone number in E164 formatting', function() {

    expect(phone('1235556789', 'US', 'e164')).to.equal('+11235556789');

  });

  it('should format phone number in RCF3966 formatting', function() {

    expect(phone('1235556789', 'US', 'rfc3966')).to.equal('tel:+1-123-555-6789');

  });

});
