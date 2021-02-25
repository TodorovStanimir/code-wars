function solution(list) {
  let output = "";

  for (let i = 0; i < list.length; i++) {
    let endI = i;

    while (list[endI] + 1 === list[endI + 1]) endI++;

    output +=
      endI - i >= 2
        ? `${list[i]}-${list[endI]},`
        : endI - i === 1
        ? `${list[i]},${list[endI]},`
        : `${list[i]},`;

    i = endI;
  }
  return output.slice(0, -1);
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// "-6,-3-1,3-5,7-11,14,15,17-20")
