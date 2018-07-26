module.exports = function(regNo, loc){
  var location = regNo.indexOf(loc);
  return location!= -1;
}
