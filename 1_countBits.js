const countBits = function(n) {
  return n.toString(2).split('').filter(el=>el==1).length;
};

console.log(1,countBits(0));
console.log(2,countBits(4));
console.log(3,countBits(7));
console.log(4,countBits(9));
console.log(5,countBits(10));