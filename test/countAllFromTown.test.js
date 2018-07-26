let assert = require('assert');
let countAllFromTown = require('../countAllFromTown');

describe('The countAllFromTown function', function(){

  it('should count all registration numbers from a specific town in the list e.g(CL)', function(){
    assert.equal(3, countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CL"))
  })
  it('should count all registration numbers from a specific town in the list e.g(CJ)', function(){
    assert.equal(1, countAllFromTown("CL 00887,CK 999,CAW 877, CJ 1234,CL 341", "CJ"))
  })
  it('should return none or Zero(0) if there is no specific town in the list e.g(CAW)', function(){
    assert.equal(0, countAllFromTown("CF 56789,CEY 09876,CF 8765, CJ 987,CL 341", "CAW"))
  })
})
