function solution(input, markers) {
  let result = input.split('\n');

  markers.map(string => result = result.map(el => (el.includes(string)) ? el.slice(0, el.indexOf(string)).trim() : el))

  return result.join('\n')
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])) // apples, plums\npears\noranges
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])) // Q\nu\ne