let assert = require('assert');
let countAllPaarl = require('../countAllPaarl');

describe('The countAllPaarl function',  function(){

  it('should count how many registration numbers are from Paarl(CJ) in a list', function(){
    assert.equal(2, countAllPaarl("CA 123, CJ 3456, CJ 8765"))
  })
  it('should return None(0) if none of the registration numbers is from Paarl(CJ) in a list', function(){
    assert.equal(0, countAllPaarl("CA 123, CL 222349, CAW 123444"))
  })
})
