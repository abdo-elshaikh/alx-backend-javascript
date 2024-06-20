const request = require('request');
const { expect } = require('chai');
const { describe, it } = request('mocha');

describe('Login page and payment avilable', function () {
  it('check payments available?', (done) => {
    request('http://localhost:7865/available_payments', function (_, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });

  it('check login page', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      body: {
        userName: 'Betty'
      },
      json: true
    }, function (_, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome :Betty');
      done();
    });
  });

  it('check login page', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      body: {
        userName: 'Bob'
      },
      json: true
    }, function (_, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome :Bob');
      done();
    });
  });

  it('check login username?', (done) => {
    request.post('http://localhost:7865/login', function (_, response, body) {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Please provide a username');
      done();
    });
  });
});
