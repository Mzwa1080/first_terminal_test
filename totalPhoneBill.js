module.exports = function(Bills) {
  var totalbill = Bills.split(',');
  var requiredBill = 0;
  for (var i = 0; i < totalbill.length; i++) {
  	if (totalbill[i] == "call") {
    	requiredBill += 2.75;
    } else if (totalbill[i] == "sms"){
    	requiredBill += 0.65;
    }
  }
  // toFixed - rounds down to 2 decimal places
  return  "R" + requiredBill.toFixed(2);
}
