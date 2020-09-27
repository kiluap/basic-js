const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let name = '';
  for (let member of members){
    if (typeof(member) == "string") {
      member = member.trim();
      name += member[0].toUpperCase();
  } else continue;
  }
  return name.split('').sort().join('');
  // remove line with error and write your code here
};
