const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sum = 0;
  for (let string of matrix){
    for (let item of string){
      if (item == '^^') sum++;
    }
  }
  return sum;
 }
