function topThreeWords(text) {
  const regex = /[a-z']+/gi;
  const result = text
    .split(" ")
    .filter((el) => el !== "" && el.trim() !== "'")
    .reduce((acc, el) => {
      const key = (el.match(regex) && el.match(regex)[0].toLowerCase());

      if (key in acc) acc[key] = acc[key] + 1;
      else if (el.match(regex)) acc[key] = 1;

      return acc;
    }, {});

  return Object.entries(result)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((el) => el[0]);
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")); //['e','d','a'])
console.log(topThreeWords("a a c b b")); //['a','b','c'])
console.log(
  topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
); // ['e','ddd','aa'])
console.log(topThreeWords("  //wont won't won't ")); // ["won't", "wont"])
console.log(topThreeWords("  , e   .. ")); // ["e"])
console.log(topThreeWords("  ...  ")); // [])
console.log(topThreeWords("  '  ")); // [])
