let num1 = null;
let num2 = null;
let currentOperator = null;
let result = null;

function addElements(num1, num2) {
  return num1 + num2;
}

function subtractElements(num1, num2) {
  return num1 - num2;
}

function multiplyElements(num1, num2) {
  return num1 * num2;
}

function divideElements(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return addElements(num1, num2);

    case "-":
      return subtractElements(num1, num2);

    case "/":
      if (num2 === 0) {
        return "Ошибка";
      } else return divideElements(num1, num2);

    case "*":
      return multiplyElements(num1, num2);

    default:
      return "Error";
  }
}

const displayInput = document.querySelector(".input");
displayInput.value = "0";

const numbers = Array.from(document.querySelectorAll(".number"));
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (displayInput.value === "0") {
      displayInput.value = number.textContent;
    } else if (Number(displayInput.value) === result) {
      result = null;
      displayInput.value = number.textContent;
    } else displayInput.value += number.textContent;

    if (currentOperator === null) {
      num1 = Number(displayInput.value);
    } else if (currentOperator !== null) {
      if (num2 === null) {
        num2 = Number(number.textContent);
      } else if (num2 !== null) {
        num2 += number.textContent;
        num2 = Number(num2);
      }
    }

    console.log("num1", num1);
    console.log("num2", num2);
  });
});

const operators = Array.from(document.querySelectorAll(".operator"));

let dotNum1 = false;
let dotNum2 = false;

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator.textContent === "AC") {
      displayInput.value = "0";
      num1 = null;
      num2 = null;
      currentOperator = null;
      dotNum1 = false;
      dotNum2 = false;
    } else if (operator.textContent === "-/+") {
      if (num2 === null && currentOperator === null) {
        let currNum1 = Number(displayInput.value) * -1;
        num1 = currNum1;
        displayInput.value = currNum1;
        currentOperator = null;
      } else if (num1 !== null && currentOperator !== null && num2 === null) {
        num1 *= -1;
        displayInput.value = num1;
        displayInput.value += currentOperator;
      }
    } else if (operator.textContent === ".") {
      if (currentOperator === null && dotNum1 === false) {
        displayInput.value += operator.textContent;
        dotNum1 = true;
        num1 = Number(displayInput.value);
      } else if (currentOperator !== null && dotNum2 === false) {
        displayInput.value += operator.textContent;
        num2 += operator.textContent;
        dotNum2 = true;
      }
    } else if (operator.textContent === "%") {
      if (currentOperator === null && num2 === null) {
        let currNum1Perc = Number(displayInput.value) / 100;
        displayInput.value = formatResult(currNum1Perc); //не работает с пятеркой
        num1 = currNum1Perc;
      } else if (currentOperator !== null) {
        //issue12 и 8
      }
      // currentOperator = null;
    } else if (currentOperator === null && operator.textContent !== "=") {
      currentOperator = operator.textContent;
      displayInput.value += operator.textContent;
    } else if (
      currentOperator !== null &&
      operator.textContent !== "=" &&
      operator.textContent !== "%" &&
      operator.textContent !== "-/+" &&
      num2 === null
    ) {
      displayInput.value = displayInput.value.slice(0, -1);
      displayInput.value += operator.textContent;
      currentOperator = operator.textContent;
    } else if (currentOperator !== null && num1 !== null && num2 !== null) {
      if (operator.textContent === "=") {
        result = operate(currentOperator, num1, num2);
        displayInput.value = formatResult(result);
        num1 = result;
        num2 = null;
        currentOperator = null;
        dotNum2 = false;
      } else if (operator.textContent !== "=" && operator.textContent !== "%" && operator.textContent !== "-/+") {
        result = operate(currentOperator, num1, num2);
        displayInput.value = formatResult(result);
        num1 = result;
        num2 = null;
        dotNum2 = false;
        displayInput.value += operator.textContent;
        currentOperator = operator.textContent;
      }
    } else {
      alert("Ошибка");
    }
  });
});

function formatResult(result, maxLength = 12) {
  let str = String(result);

  if (str.length <= maxLength) return result;
  if (typeof result === "number" && !Number.isInteger(result)) {
    let intPart = Math.trunc(result).toString().length;
    let decimals = maxLength - intPart - 1;
    return result.toFixed(decimals);
  }

  return result.toExponential(maxLength - 5);
}

//!!!!!!!!!!!!!!chat GPT

//округлять результат перед выводом:
function cleanNumber(num) {
  // округляем до 10 знаков после запятой и убираем лишние нули
  return parseFloat(num.toFixed(10));
}

console.log(cleanNumber(9.4 - 7)); // 2.4
console.log(cleanNumber(0.1 + 0.2)); // 0.3

//Если хочешь всегда ограничивать длину числа на дисплее:
function formatResult(num, maxDecimals = 8) {
  return Number(num.toFixed(maxDecimals)) // округляет
    .toString(); // убирает лишние нули
}

console.log(formatResult(2.4000000000000004)); // "2.4"
console.log(formatResult(3.141592653589793)); // "3.14159265
