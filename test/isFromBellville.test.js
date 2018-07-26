//Go Fetch
let assert = require("assert");
let isFromBellville = require("../isFromBellville")

describe('The isFromBellville function', function(){

    it('should return TRUE if registration startsWith CY', function(){
        assert.equal(true, isFromBellville('CY 123456'));
    });
    it('should return FALSE if registration startsWith CJ', function(){
        assert.equal(false, isFromBellville('CJ 1010'));
    });
    it('should return TRUE if registration startsWith CY', function(){
        assert.equal(true, isFromBellville('CY 23398'));
    });
});
