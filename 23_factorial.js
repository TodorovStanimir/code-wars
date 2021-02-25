function factorial(n) {
  let output = "1";
  for (let b = 1; b <= n; b++) {
    let curRes = [];
    let desetici = 0;
    let edinici = 0;
    for (let i = output.length - 1; i >= 0; i--) {
      let newNumber = +output[i] * b + desetici;
      edinici = newNumber % 10;
      desetici = Math.floor(newNumber / 10);
      curRes.unshift(edinici.toString());
    }
    if (desetici) curRes.unshift(desetici.toString());
    output = curRes.join("");
  }
  return output;
}
console.log(factorial(102)); // 961446671503512660926865558697259548455355905059659464369444714048531715130254590603314961882364451384985595980362059157503710042865532928000000000000000000000000
console.log(factorial(5)); // 120
console.log(factorial(9)); // 362880
console.log(factorial(15)); // 1307674368000
