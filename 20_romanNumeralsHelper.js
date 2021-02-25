const RomanNumerals = {
  myRome: {
    0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X",
    20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 100: "C", 200: "CC",
    300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM", 1000: "M", },

  mapper: { "": 0, I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10, XX: 20, XXX: 30, 
    XL: 40, L: 50, LX: 60, LXX: 70, LXXX: 80, XC: 90, C: 100, CC: 200, CCC: 300, CD: 400, D: 500, DC: 600, 
    DCC: 700, DCCC: 800, CM: 900, M: 1000, MM: 2000, MMM: 3000, },

  toRoman: function (number) {
    if (number > 3999) {
      return `Please write number less then 4000`;
    }

    const array = "0"
      .repeat(4 - String(number).length)
      .concat(String(number))
      .split("")
      .map(Number);

    const [hilyadni, stotici, desetici, edinici] = [...array];

    return this.myRome[1000]
      .repeat(hilyadni)
      .concat(this.myRome[100 * stotici])
      .concat(this.myRome[10 * desetici])
      .concat(this.myRome[edinici]);
  },

  fromRoman: function (roman) {
    const pattern = /^(MMM|MM|M)*(C|CC|CCC|CD|D|DC|DCC|DCCC|CM)?(X|XX|XXX|XL|L|LX|LXX|LXXX|XC)?(I|II|III|IV|V|VI|VII|VIII|IX)?$/gi;

    const arrayOfRoman = pattern.exec(roman);
    const [_, hilyadni, stotici, desetici, edinici] = [...arrayOfRoman];

    return [hilyadni, stotici, desetici, edinici]
      .map((el) => (el ? el : ""))
      .reduce((result, el) => (result += this.mapper[el]), 0);
  },
};

console.log(RomanNumerals.toRoman(1000));
