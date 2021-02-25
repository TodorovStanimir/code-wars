function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return "";

  let longStr = "";

  for (let i = 0; i < strarr.length; i++) {
    const newStr = strarr.slice(i, i + k).join("");
    if (newStr.length > longStr.length) longStr = newStr;
  }

  return longStr;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
); // "abigailtheta"
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  )
); // "oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec([], 3)); // ""
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    ],
    2
  )
); // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
); // ""
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
); // ""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)); // ""
console.log(
  longestConsec(["wlwsasphmx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
); // "wlwsasphmxxowiaxujylentrklctozmymu"
