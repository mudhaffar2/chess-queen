
var expect = require('expect.js');
var matrixFillText = require('../src/matrix-fill-text');
var createMatrix = require('../src/create-matrix');
var text = 'abcdefghijklmnopqrstuvwxyz';

describe('matrixFillText', function() {
  it('is a function', function() {
    expect(matrixFillText).to.be.a('function');
  });
  
  it('returns an array', function() {
    var result = matrixFillText(createMatrix(5,2),text);
    expect(result).to.be.an('array');
  });
  
  it('cells contain letters a-->z', function() {
    var result = matrixFillText(createMatrix(5,2),text);
    expect(result[0][0]).to.be('a');
    expect(result[4][1]).to.be('j');
  });

});












