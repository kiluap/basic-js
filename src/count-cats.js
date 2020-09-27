const CustomError = require("../extensions/custom-error");

module.exports = function countCats(str) {
  let sum = 0;
  let pos = 0;
  while(true){
     if (str.indexOf('^^', pos) == -1) break;
     sum++;
     pos +=2; 
  }
}