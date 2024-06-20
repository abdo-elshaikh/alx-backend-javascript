const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');
const { describe, it } = require('mocha');

describe('calculateNumber', function () {
  it('should return 4 when inputs are 1 and 3', function () {
    expect(calculateNumber(1, 3)).to.equal(4);
  });

  it('should return 5 when inputs are 1 and 3.7', function () {
    expect(calculateNumber(1, 3.7)).to.equal(5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', function () {
    expect(calculateNumber(1.2, 3.7)).to.equal(5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', function () {
    expect(calculateNumber(1.5, 3.7)).to.equal(6);
  });
});
