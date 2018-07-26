let assert = require('assert');
let fromWhere = require('../fromWhere');

describe('The fromWhere function', function(){

  it('should return the full name of the registration number\'s town e.g(CapeTown)', function(){
    assert.equal('Cape Town', fromWhere('CA'))
  });
	it('should return the full name of the registration number\'s town e.g(Paarl)', function(){
		assert.equal('Paarl', fromWhere('CJ'))
	});
	it('should return the full name of the registration number\'s town e.g(Bellville)', function(){
		assert.equal('Bellville', fromWhere('CY'))
	});
	it('should return the some other place if other registration number excluding(CA,CY,CJ) is typed', function(){
		assert.equal('Some other place!', fromWhere('CK'))
	});
});
