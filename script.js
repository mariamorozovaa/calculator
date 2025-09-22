let result = 0;
let num1 = null;
let num2 = null;
let operator;

const container = document.querySelector("#container");
const numbers = document.querySelectorAll("#numbers");
const operators = document.querySelector("#operators");

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
  if (operator === "+") {
    addElements(num1, num2);
  } else if (operator === "-") {
    subtractElements(num1, num2);
  } else if (operator === "*") {
    multiplyElements(num1, num2);
  } else if (operator === "/") {
    divideElements(num1, num2);
  } else {
    console.log("operator is incorrect");
  }
}
