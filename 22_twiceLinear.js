function dblLinear(n) {
  let u = [1],
    point2 = 0,
    point3 = 0;

  for (let i = 1; i <= n; i++) {
    u[i] = Math.min(2 * u[point2] + 1, 3 * u[point3] + 1);
    if (u[i] == 2 * u[point2] + 1) point2++;
    if (u[i] == 3 * u[point3] + 1) point3++;
  }

  return u[n];
}

console.log(dblLinear(10)); // 22
console.log(dblLinear(20)); // 57
console.log(dblLinear(50)); // 175
console.log(dblLinear(100)); // 447
