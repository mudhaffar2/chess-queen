
var expect = require('expect.js');
var matrixFillText = require('../src/matrix-fill-text');
var renderPlainText = require('../src/render-plain-text');
var createMatrix = require('../src/create-matrix');
var text = 'abcdefghijklmnopqrstuvwxyz';

describe('renderPlainText', function() {
  it('is a function', function() {
    expect(renderPlainText).to.be.a('function');
  });

  it('returns a string', function() {
    var matrix = matrixFillText(createMatrix(5,2),text);
    expect(renderPlainText(matrix)).to.be.a('string');
  });

});
