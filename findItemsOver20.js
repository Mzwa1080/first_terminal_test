module.exports = function(products){
  //console.log(products);
  	var newProducts = [ ];

  for(var i=0; i<products.length; i++){
  	var givenProducts = products[i];
    //console.log(givenProducts);
  	if(givenProducts.qty > 20){
    	newProducts.push(givenProducts);
      		//console.log(newProducts);
    }


  }
  	return newProducts.length;
}
