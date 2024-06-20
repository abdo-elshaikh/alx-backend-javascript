const sinon = require('sinon');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call calculateNumber with 100, 20', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnce).to.equal(true);
    expect(stub.calledWith('SUM', 100, 20)).to.equal(true);
    expect(spy.calledOnce).to.equal(true);
    expect(spy.calledWith('The total is: 10')).to.equal(true);
    stub.restore();
    spy.restore();
  });
});
