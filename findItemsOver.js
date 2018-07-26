module.exports = function(products, threshold){
	console.log(threshold);
  		var newThresh =[];
	for(var i=0; i<products.length; i++){

      		if(products[i].qty > threshold){
            	newThresh.push(products[i])
            }
    }
  		return newThresh.length;
}
