let assert = require('assert');
let transportFee = require('../transportFee');

describe('The transportFee function', function(){

  it('should return R20 if the shift is in the morning', function(){
    assert.equal("R20", transportFee("morning"))
  })
  it('should return R10 if the shift is in the afternoon', function(){
    assert.equal("R10", transportFee("afternoon"))
  })
  it('should return Free if the shift is nightshift', function(){
    assert.equal("free", transportFee("nightshift"))
  })
  it('should return nothing if the user is not in', function(){
    assert.equal("nothing", transportFee("nothing"))
  })
})
