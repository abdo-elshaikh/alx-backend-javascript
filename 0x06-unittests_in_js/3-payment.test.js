const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');
const sinon = require('sinon');
const { describe, it, beforeEach, afterEach } = require('mocha');

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
});
