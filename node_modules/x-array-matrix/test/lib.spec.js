
var expect = require('expect.js');
var library = require('../src/lib');

describe('library', function() {

  it('is an object', function() {
    expect(library).to.be.an('object');
    // console.info(Object.keys(library));
  });

  Object.keys(library).forEach(function(property) {
    it('has a ' + property + ' function', function() {
      expect(library[property]).to.be.a('function');
    })
  });

});
