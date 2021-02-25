const tribonacci = (signature, n) => {
  const result = signature.slice(0, n);
  
  while (result.length < n)
    result.push(result.slice(-3).reduce((a, b) => a + b, 0));

  return result;
};

console.log(tribonacci([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105]
// console.log(tribonacci([0, 0, 1], 10)); // [0,0,1,1,2,4,7,13,24,44]
// console.log(tribonacci([0, 1, 1], 10)); // [0,1,1,2,4,7,13,24,44,81]
// console.log(tribonacci([1, 0, 0], 10)); // [1,0,0,1,1,2,4,7,13,24]
// console.log(tribonacci([0, 0, 0], 10)); // [0,0,0,0,0,0,0,0,0,0]
console.log(tribonacci([1, 1, 1], 1)); // []
console.log(tribonacci([300, 200, 100], 0)); // []
