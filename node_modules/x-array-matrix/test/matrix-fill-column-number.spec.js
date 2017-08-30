
var expect = require('expect.js');
var matrixFillColNum = require('../src/matrix-fill-column-number');
var createMatrix = require('../src/create-matrix');

describe('matrixFillColNum', function() {
  it('is a function', function() {
    expect(matrixFillColNum).to.be.a('function');
  });
  
  it('returns an array', function() {
    var result = matrixFillColNum(createMatrix(5,2));
    expect(result).to.be.an('array');
  });
  
  it('cells contain column number', function() {
    var result = matrixFillColNum(createMatrix(5,2));
    expect(result[2][0]).to.be(0);
    expect(result[4][1]).to.be(1);
  });

});