function rgb(r, g, b) {
  const transformer = num => num <= 0 ? "00" : num >= 255 ? "FF" : ("0"+(Number(num).toString(16))).slice(-2).toUpperCase();
  return `${transformer(r)}${transformer(g)}${transformer(b)}`;
}

console.log(rgb(0, 0, 0)); // '000000'
console.log(rgb(0, 0, -20)); // '000000'
console.log(rgb(300, 255, 255)); // 'FFFFFF'
console.log(rgb(173, 255, 47)); // 'ADFF2F'
console.log(rgb(-4, 9, 44)); // '00092C
console.log(rgb(15, 246, 201)); //0FF6C9
