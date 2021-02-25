function listSquared(m, n) {
  const output = [];

  for (let i = m; i <= n; i++) {
    let sumSqDiv = 0;

    for (let y = 1; y <= i; y++) if (i % y === 0) sumSqDiv += y * y;

    if (Math.sqrt(sumSqDiv) % 1 === 0) output.push([i, sumSqDiv]);
  }
  return output;
}

console.log(listSquared(1, 250)); // [[1, 1], [42, 2500], [246, 84100]])
console.log(listSquared(42, 250)); // [[42, 2500], [246, 84100]])
console.log(listSquared(250, 500)); // [[287, 84100]])
