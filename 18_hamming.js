function hamming(n) {
  const seq = [1];
  let i2 = 0,
    i3 = 0,
    i5 = 0;
  for (let i = 1; i < n; i++) {
    let x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5]);
    seq.push(x);
    if (2 * seq[i2] <= x) i2++;
    if (3 * seq[i3] <= x) i3++;
    if (5 * seq[i5] <= x) i5++;
  }
  return seq[n - 1];
}

// console.log(hamming(1)); // hamming(1) should be 1
// console.log(hamming(2)); // hamming(2) should be 2
// console.log(hamming(3)); // hamming(3) should be 3
// console.log(hamming(4)); // hamming(4) should be 4
// console.log(hamming(5)); // hamming(5) should be 5
// console.log(hamming(6)); // hamming(6) should be 6
// console.log(hamming(7)); // hamming(7) should be 8
// console.log(hamming(8)); // hamming(8) should be 9
console.log(hamming(9)); // hamming(9) should be 10
console.log(hamming(10)); // hamming(10) should be 12
console.log(hamming(11)); // hamming(11) should be 15
console.log(hamming(12)); // hamming(12) should be 16
console.log(hamming(13)); // hamming(13) should be 18
console.log(hamming(14)); // hamming(14) should be 20
console.log(hamming(15)); // hamming(15) should be 24
console.log(hamming(16)); // hamming(16) should be 25
console.log(hamming(17)); // hamming(17) should be 27
console.log(hamming(18)); // hamming(18) should be 30
console.log(hamming(19)); // hamming(19) should be 32
