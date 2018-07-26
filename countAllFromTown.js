module.exports = function(regNum,locNum){
	var allRegNum = regNum.split(',');
  	var regNumStr = [];
  //console.log(regNum);
  //console.log(allRegNum);

 for (var i=0; i<allRegNum.length; i++)
   	if(allRegNum[i].trim().startsWith(locNum)){
      regNumStr.push(allRegNum[i])

    }
  return regNumStr.length;
}
