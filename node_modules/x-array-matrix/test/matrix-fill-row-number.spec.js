
var expect = require('expect.js');
var matrixFillRowNum = require('../src/matrix-fill-row-number');
var createMatrix = require('../src/create-matrix');

describe('matrixFillRowNum', function() {
  it('is a function', function() {
    expect(matrixFillRowNum).to.be.a('function');
  });
  
  it('returns an array', function() {
    var result = matrixFillRowNum(createMatrix(5,2));
    expect(result).to.be.an('array');
  });

  it('cells contain row number', function() {
    var result = matrixFillRowNum(createMatrix(5,2));
    expect(result[2][0]).to.be(2);
    expect(result[4][1]).to.be(4);
  });
  
});
