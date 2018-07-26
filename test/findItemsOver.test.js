let assert = require('assert');
let findItemsOver = require('../findItemsOver');

describe('The findItemsOver function', function(){

  it('should return the items over', function(){
    assert.equal(0, findItemsOver([

    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
      ]))
  })
})
