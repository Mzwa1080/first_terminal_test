module.exports = function(sales){
  //console.log(sales);

  var newDepartment = {};
  var departmentName = ' ';
  var max = 0;
  for(var i=0; i<sales.length; i++){

    var currentDepartment = sales[i];

    if(newDepartment[currentDepartment.department] === undefined){
      newDepartment[currentDepartment.department] = 0;
    }
     //Incrementing the currentDepartment
      newDepartment[currentDepartment.department] += currentDepartment.sales;
    }
  console.log(newDepartment);

  //Loop through the department list using the for in Loop...
for(var departments in newDepartment){
    if(newDepartment[departments] > max){
      max = newDepartment[departments];
      departmentName = departments;
      console.log(departmentName);
    }
  }
  return departmentName;
}
