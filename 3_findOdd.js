function findOdd(arr) {
  return arr.reduce((a,b) => a ^ b)
  for (let a of new Set(arr))
    if (arr.filter((el) => el == a).length % 2 !== 0) return a;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.