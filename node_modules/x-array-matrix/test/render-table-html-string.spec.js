
var expect = require('expect.js');
var matrixFillText = require('../src/matrix-fill-text');
var renderTableHTMLString = require('../src/render-table-html-string');
var createMatrix = require('../src/create-matrix');
var text = 'abcdefghijklmnopqrstuvwxyz';

describe('renderTableHTMLString', function() {
  it('is a function', function() {
    expect(renderTableHTMLString).to.be.a('function');
  });

  it('returns a string contains tr and td tags', function() {
    var matrix = matrixFillText(createMatrix(5,2),text);
    expect(renderTableHTMLString(matrix)).to.contain('<tr>');
    expect(renderTableHTMLString(matrix)).to.contain('</tr>');
    expect(renderTableHTMLString(matrix)).to.contain('<td>');
    expect(renderTableHTMLString(matrix)).to.contain('</td>');
  });

});
