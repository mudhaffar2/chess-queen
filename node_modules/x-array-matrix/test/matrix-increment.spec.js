
var expect = require('expect.js');
var matrixIncrement = require('../src/matrix-increment');
var createMatrix = require('../src/create-matrix');

describe('matrixIncrement', function() {
  it('is a function', function() {
    expect(matrixIncrement).to.be.a('function');
  });

  it('increments the values of the matrix', function() {
    var matrix = createMatrix(2, 2);
    var result = matrixIncrement(matrix);
    expect(result[0][0]).to.be(1);
    expect(result[1][1]).to.be(1);
  });
});
