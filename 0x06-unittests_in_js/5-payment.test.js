const sinon = require('sinon');
const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.equal(true);
    expect(spy.calledWith('SUM', 100, 20)).to.equal(true);
  });

  it('should call Utils.calculateNumber with "SUM", 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnce).to.equal(true);
    expect(spy.calledWith('SUM', 10, 10)).to.equal(true);
  });
});
