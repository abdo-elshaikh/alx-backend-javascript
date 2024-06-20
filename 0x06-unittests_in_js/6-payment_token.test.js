const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');
const { describe, it } = require('mocha');

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with the correct data when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch(done);
  });

  it('should do nothing when success is false', function (done) {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.equal(undefined);
    done();
  });
});
