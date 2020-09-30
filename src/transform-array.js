const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ('THROWN');
  }
  let newArr = arr.slice(0);
  if (String(newArr[0]).includes('prev')) newArr.splice(0, 1);
  if (String(newArr[newArr.length-1]).includes('next')) newArr.splice(newArr.length-1, 1);
  for (let i = 0; i < newArr.length; i++){
      if (newArr[i]==='--double-prev') newArr.splice(i, 1, newArr[i - 1]);
      if (newArr[i]==='--double-next') newArr.splice(i, 1, newArr[i + 1]);
      if (newArr[i]==='--discard-prev'){
        newArr.splice(i , 1);
        newArr.splice(i - 1, 1);
        i--;
      } 
      if (newArr[i]==='--discard-next'){
        newArr.splice(i + 1, 1);
        newArr.splice(i , 1);
        i--;
      } 
  } 
  return newArr;
  // remove line with error and write your code here
};
