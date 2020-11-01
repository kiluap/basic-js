const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: arr = [],
  getLength() {
    return arr.length;
  },
  addLink(value) {
    arr.push(value);
  },
  removeLink(position) {
    if (position > arr.length || isNaN(position) ){
      arr.splice(0,arr.length);
      throw new Error('error');
    }
    arr.slice(position, 1);
  },
  reverseChain() {
    arr.reverse();
  },
  finishChain() {
    console.log(  '(' + arr.join(')~~(') +')');
  }
};

module.exports = chainMaker;
