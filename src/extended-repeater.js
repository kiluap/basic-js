const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  if (options.separator == undefined) options.separator = '+';
  let additions = String(options.addition);
  if (options.additionSeparator == undefined) options.additionSeparator = '|';
  if (options.addition == undefined) additions = ''
  else {
    for ( let j = 0; j < options.additionRepeatTimes-1; j++){
      additions += options.additionSeparator + String(options.addition);

    }
  }
  str = String(str)+additions;
  let rez = str;
  for (let i= 0; i < options.repeatTimes-1; i++){
    rez = rez + options.separator + str;
  }
return rez;
}