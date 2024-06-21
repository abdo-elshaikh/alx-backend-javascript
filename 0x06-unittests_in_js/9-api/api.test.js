const request = require('request');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Card page', function () {

  it('Test for GET / exists', function (done) {
    request('http://localhost:7865/', function (_, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return 200 and the payment methods for cart 1', function (done) {
    request('http://localhost:7865/cart/1', function (_, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1');
      done();
    });
  });

  it('should return 200 and the payment methods for cart 2', function (done) {
    request('http://localhost:7865/cart/2', function (_, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 2');
      done();
    });
  });

  it('should return 404 for cart "not_a_number"', function (done) {
    request('http://localhost:7865/cart/not_a_number', function (_, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
