const alphabetPosition = (text) =>
  text
    .toLowerCase()
    .split("")
    .filter((el) => el.charCodeAt() > 96 && el.charCodeAt() < 123)
    .map((el) => el.charCodeAt() - 96)
    .join(" ");

console.log(alphabetPosition("The sunset sets at twelve o' clock."));



