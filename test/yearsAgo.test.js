let assert = require('assert');
let yearsAgo = require('../yearsAgo');

describe('The yearsAgo function', function(){

  it('should return True if the user typed the current year', function(){
    assert.equal('19', yearsAgo('1999'))
  })
})
