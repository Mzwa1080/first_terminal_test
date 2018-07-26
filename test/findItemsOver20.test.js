let assert = require('assert');
<<<<<<< HEAD
let findItemsOver20 = require('../findItemsOver20')
=======
let findItemsOver20 = require('../findItemsOver20');
>>>>>>> 1161fdd730e86b8a2fa99519fa1d13e86ba26229

describe('The findItemsOver20 function', function(){

  it('should return the number of products in the list that are over20', function(){
    assert.equal(2, findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
      ]))
  })
<<<<<<< HEAD
=======

  // it('should return the names of products in the list that are over20', function(){
  //   assert.equal("bananas, pears", findItemsOver20([
  //   {name : 'apples', qty : 10},
  //   {name : 'pears', qty : 37},
  //   {name : 'bananas', qty : 27},
  //   {name : 'apples', qty : 3},
  //     ]))
  // })
>>>>>>> 1161fdd730e86b8a2fa99519fa1d13e86ba26229
})
