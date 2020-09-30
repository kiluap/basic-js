const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let message ='';
  if (getSeason.arguments.length === 0){ 
    return 'Unable to determine the time of year!';
  }
  let month = -1;
  if (Object.prototype.toString.call(date)==="[object Date]"){
    month = date.getMonth();
  } 
  if ( isNaN( date.getTime() )){ 
    message = 'THROWN';
  }
  switch (month){
    case 0:
    case 1:
    case 11: 
      message ="winter";
      break;
    case 2:
    case 3:
    case 4:
      message = "spring";
      break;
    case 5:
    case 6:
    case 7:
      message = "summer";
      break
    case 8:
    case 9:
    case 10:
      message = " autumn";
      break
    default: 
      message = 'Unable to determine the time of year!';
 }
return message;
  // remove line with error and write your code here
};
