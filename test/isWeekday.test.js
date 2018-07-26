let assert = require("assert");
let isWeekday = require("../isWeekday")

describe("The isWeekday function", function(){

  it('should return true if the user typed the weekday e.g Monday',function(){
    assert.equal(true, isWeekday("Monday"))
  })
  it('should return true if the user typed the weekday e.g Tuesday',function(){
    assert.equal(true, isWeekday("Tuesday"))
  })
  it('should return true if the user typed the weekday e.g Wednesday',function(){
    assert.equal(true, isWeekday("Wednesday"))
  })
  it('should return true if the user typed the weekday e.g Thursday',function(){
    assert.equal(true, isWeekday("Thursday"))
  })
  it('should return true if the user typed the weekday e.g Friday',function(){
    assert.equal(true, isWeekday("Friday"))
  })
  it('should return FALSE  if the user typed the WEEKEND e.g Saturday',function(){
    assert.equal(false, isWeekday("Saturday/Sunday"))
  })
})
