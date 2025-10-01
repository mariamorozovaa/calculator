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
let dot = false;

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator.textContent === "AC") {
      displayInput.value = "0";
      num1 = null;
      num2 = null;
      currentOperator = null;
    } else if (operator.textContent === "-/+" && num2 === null && currentOperator === null) {
      let currNum1 = Number(displayInput.value) * -1;
      num1 = currNum1;
      displayInput.value = currNum1;
      currentOperator = null;
    } else if (operator.textContent === "." && num2 === null && currentOperator === null && dot === false) {
      dot = true;
      displayInput.value += operator.textContent;
      num1 = Number(displayInput.value);
      //обработка num2
    } else if (operator.textContent === "%" && currentOperator === null) {
      let currNum1Perc = Number(displayInput.value) / 100;
      displayInput.value = currNum1Perc;
      num1 = currNum1Perc;
      // currentOperator = null;
    } else if (currentOperator === null) {
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
        displayInput.value = result;
        num1 = result;
        num2 = null;
        currentOperator = null;
      }
      // else if (
      //   operator.textContent === "+" ||
      //   operator.textContent === "/" ||
      //   operator.textContent === "*" ||
      //   operator.textContent === "-"
      // ) {
      //   result = operate(currentOperator, num1, num2);
      //   num1 = Number(result);
      //   num2 = null;
      //   currentOperator = null;

      //   displayInput.value = result;
      //   displayInput.value += operator.textContent;
      // }
    } else {
      alert("Ошибка");
    }
  });
});
