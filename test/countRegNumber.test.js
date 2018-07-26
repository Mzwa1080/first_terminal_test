let assert = require('assert');
let countRegNumber = require('../countRegNumber');

describe('The countRegNumber function', function(){

    it('should how many registration numbers in the list', function(){
        assert.equal(2,countRegNumber('CJ 9876, CL 54321'));
    });

    it('should how many registration numbers in the list', function(){
        assert.equal(3,countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
});
