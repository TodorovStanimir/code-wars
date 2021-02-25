function primeFactors(n) {
  const result = {};
  while (n > 1) {
    let i = 2;
    while (n % i !== 0) i++;
    result[i] = result[i] ? ++result[i] : 1;
    n /= i;
  }
  return Object.entries(result).map(([key, value]) => `(${value > 1 ? `${key}**${value}` : `${key}`})`).join("");
}

console.log(primeFactors(7775460)); // (2**2)(3**3)(5)(7)(11**2)(17)

