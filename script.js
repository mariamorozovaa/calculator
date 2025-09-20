let result = 0;
let num1 = null;
let num2 = null;
let operator;

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
  if (operator === "add") {
    addElements(num1, num2);
  } else if (operator === "subtract") {
    subtractElements(num1, num2);
  } else if (operator === "multiply") {
    multiplyElements(num1, num2);
  } else if (operator === "divide") {
    divideElements(num1, num2);
  } else {
    console.log("operator is incorrect");
  }
}
