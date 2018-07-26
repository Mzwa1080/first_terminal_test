let assert = require('assert');

let findItemsOver20 = require('../findItemsOver20');

describe('The findItemsOver20 function', function(){

  it('should return the number of products in the list that are over20', function(){
    assert.equal(2, findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ]));
  })
});
