// Esolang Interpreters #3 - Custom Paintf**k Interpreter

function interpreter(code, iterations, width, height) {
  if (width <= 0 || height <= 0) return;
  const initialState = new Array(height).fill(new Array(width).fill(0));
  const returnInitState = () =>
    initialState.map((el) => el.join("")).join("\\r\\n");

  if (code === "") return returnInitState();
  if (iterations === 0) return returnInitState();
  if (iterations < 0) return;
}

console.log(interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 0, 6, 9));
//, displayExpected("000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000"),
//"Your interpreter should initialize all cells in the datagrid to 0");
console.log(interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 7, 6, 9));
//, displayExpected("111100\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000"),
//"Your interpreter should adhere to the number of iterations specified");
console.log(
  interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 19, 6, 9)
);
//, displayExpected("111100\r\n000010\r\n000001\r\n000010\r\n000100\r\n000000\r\n000000\r\n000000\r\n000000"),
//"Your interpreter should traverse the 2D datagrid correctly");
console.log(
  interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 42, 6, 9)
);
//, displayExpected("111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000"),
//"Your interpreter should traverse the 2D datagrid correctly for all of the \"n\", \"e\", \"s\" and \"w\" commands");
console.log(
  interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 100, 6, 9)
);
//, displayExpected("111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000"),
//"Your interpreter should terminate normally and return a representation of the final state of the 2D datagrid when all commands
//have been considered from left to right even if the number of iterations specified have not been fully performed");
