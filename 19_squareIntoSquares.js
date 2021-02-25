function decompose(n) {
  const calcSum = (arr, n = 0) => arr.reduce((ac, el) => (ac = ac + el * el), n * n);

  let output = [];

  for (let i = n - 1; i >= 1; i--) {
    const curSec = [i];

    for (let y = i - 1; y >= 1; y--) {
      const currentSum = calcSum(curSec, y);

      if (currentSum <= n * n) curSec.unshift(y);

      if (currentSum === n * n) break;
    }
    if (
      output.slice(-1) < curSec.slice(-1) &&  calcSum(curSec, undefined) === n * n
    ) {
      output = [].concat(curSec);
      break;
    }
  }
  
  return output.length > 0 ? output : null;
}

console.log(decompose(2)); // null)
console.log(decompose(7)); // [2, 3, 6])
