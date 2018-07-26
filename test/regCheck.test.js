let assert = require('assert');
let regCheck = require('../regCheck')

describe('The regCheck function', function(){

    it('should check if registration endswith GP and return True', function(){
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });
    it('should check if registration endswith CY and return True', function(){
        assert.equal(true, regCheck('CY189-012', 'CY'));
    });
    it('should return false if the reg keys doesn\'t match', function(){
        assert.equal(false, regCheck('CY189-012', 'ND'));
    });
    it('should return false if the reg keys doesn\'t match', function(){
        assert.equal(false, regCheck('DV 23 LP GP', 'MP'));
    });
});
