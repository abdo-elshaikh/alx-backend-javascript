const request = require('request');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Index page', function () {
  it('Correct status code?', function (done) {
    request.get('http://localhost:7865', function (_, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', function (done) {
    request.get('http://localhost:7865', function (_, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
