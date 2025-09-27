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
    } else if (operator.textContent === "." && num2 === null && currentOperator === null) {
      displayInput.value += operator.textContent;
      num1 = Number(displayInput.value);
      //обработка num2
    } else if (operator.textContent === "%") {
      let currNum1Perc = Number(displayInput.value) / 100;
      displayInput.value = currNum1Perc;
      num1 = currNum1Perc;
      currentOperator = null;
    } else if (currentOperator === null) {
      currentOperator = operator.textContent;
      displayInput.value += operator.textContent;
    } else if (currentOperator !== null && operator.textContent !== "=" && num2 === null) {
      displayInput.value = displayInput.value.slice(0, -1);
      displayInput.value += operator.textContent;
      currentOperator = operator.textContent;
    } else if (currentOperator !== null && num2 !== null && operator.textContent === "=") {
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

//не ставится точка для второго числа
//убрать, чтобы можно было ставить точку несколько раз
//когда есть результат и начинаешь вводить новое чило, оно конкатенируется с результатом
//нельзя ставить равно если не определен оператор и num2
