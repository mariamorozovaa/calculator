let num1 = null;
let num2 = null;
let currentOperator = null;

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
      return divideElements(num1, num2);

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
    } else displayInput.value += number.textContent;
    if (currentOperator === null) {
      num1 = Number(displayInput.value);
    }

    if (currentOperator !== null && num2 === null) {
      num2 = number.textContent;
      num2 = Number(num2);
    } else if (currentOperator !== null && num2 !== null) {
      num2 += number.textContent;
      num2 = Number(num2);
    }

    console.log("num1", num1);
    console.log("num2", num2);
  });
});

const operators = Array.from(document.querySelectorAll(".operator"));

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator.textContent === "⌫") {
      displayInput.value = "0";
      num1 = null;
      num2 = null;
      currentOperator = null;
    } else if (operator.textContent === "-/+") {
      displayInput.value = Number(displayInput.value) * -1;
      num1 = displayInput.value;
      currentOperator = null;
    } else if (operator.textContent === "." && num2 === null && currentOperator === null) {
      displayInput.value += operator.textContent;
      num1 = Number(displayInput.value);
      //обработка num2
    } else if (operator.textContent === "%") {
      displayInput.value = Number(displayInput.value) / 100;
      num1 = displayInput.value;
      currentOperator = null;
    } else if (currentOperator === null) {
      currentOperator = operator.textContent;
      displayInput.value += operator.textContent;
    } else if (currentOperator !== null && operator.textContent !== "=" && num2 === null) {
      displayInput.value = displayInput.value.slice(0, -1);
      displayInput.value += operator.textContent;
      currentOperator = operator.textContent;
    } else if (operator.textContent === "=") {
      displayInput.value = operate(currentOperator, num1, num2);
      currentOperator = null;
      num1 = Number(displayInput.value);
      num2 = null;
    } else {
      console.log("Ошибка");
    }
    console.log(num2);
  });
});

//-5.6 + 3 = -5.63
//7.3 + 3 = 80.3
//убрать, чтобы можно было ставить точку несколько раз
//когда есть результат и начинаешь вводить новое чило, оно конкатенируется с результатом
//плавающие числа не складваюся с целыми а конкатенируются
