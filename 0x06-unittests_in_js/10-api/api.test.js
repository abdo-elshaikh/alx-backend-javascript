const request = require('request');
const { expect } = require('chai');
const { describe, it, after } = require('mocha');
const app = require('./api')

describe('Login page and payment avilable', function () {
  let server = app.listen(7865);

  after(function (done) {
    server.close();
    done();
  });

  it('Test for GET / exists', function (done) {
    request('http://localhost:7865/', function (_, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Test for POST /login with valid credentials', function (done) {
    request.post({
      url: 'http://localhost:7865/login',
      form: {
        userName: 'Betty'
      }
    }, function (_, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Test for POST /login with invalid credentials', function (done) {
    request.post({
      url: 'http://localhost:7865/login',
      form: {
        userName: ''
      }
    }, function (_, response, body) {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Please provide a username');
      done();
    });
  });

  it('Test for GET /cart/1', function (done) {
    request('http://localhost:7865/cart/1', function (_, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1');
      done();
    });
  });

  it("Test for GET /cart/:id can’t accept :id not a number", function (done) {
    request('http://localhost:7865/cart/not_a_number', function (_, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

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
