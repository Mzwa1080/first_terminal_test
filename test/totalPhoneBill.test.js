let assert = require('assert');;
let totalPhoneBill = require('../totalPhoneBill');

describe('The totalPhoneBill function', function(){

  it('should return the amount of 3 calls made', function(){
    assert.equal('R' + '8.25', totalPhoneBill('call,call,call'))
  })
  it('should return the amount of 5 sms\'s made', function(){
    assert.equal('R' + '3.25', totalPhoneBill('sms,sms,sms,sms,sms'))
  })
  it('should return the amount of 3 calls and 2 sms\'s made', function(){
    assert.equal('R' + '9.55', totalPhoneBill('call,call,call,sms,sms'))
  })
})
