module.exports = function(year){
  var currentYear = new Date();
  var fullYear = currentYear.getFullYear();
  var diffYear = fullYear - year;

  return diffYear;

}
