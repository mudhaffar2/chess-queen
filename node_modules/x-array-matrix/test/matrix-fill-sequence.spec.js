
var expect = require('expect.js');
var matrixFillSequence = require('../src/matrix-fill-sequence');
var createMatrix = require('../src/create-matrix');

describe('matrixFillSequence', function() {
  it('is a function', function() {
    expect(matrixFillSequence).to.be.a('function');
  });
  
  it('returns an array', function() {
    var result = matrixFillSequence(createMatrix(5,2));
    expect(result).to.be.an('array');
  });
  
  it('cells contain sequence 0-->', function() {
    var result = matrixFillSequence(createMatrix(5,2));
    expect(result[0][0]).to.be(0);
    expect(result[4][1]).to.be(9);
  });

});
