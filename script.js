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
      addElements(num1, num2);
      break;

    case "-":
      subtractElements(num1, num2);
      break;

    case "/":
      divideElements(num1, num2);
      break;

    case "*":
      multiplyElements(num1, num2);
      break;

    default:
      "Error";
  }
}

const displayInput = document.querySelector(".input");
displayInput.value = "0";

const numbers = Array.from(document.querySelectorAll(".number"));
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    displayInput.value += number.textContent;
    num1 = displayInput.value;
    console.log(num1);
  });
});

// let shouldResetDisplay = false;

// const displayInput = document.querySelector(".input");
// displayInput.value = "0";
// const numbers = Array.from(document.querySelectorAll(".number"));
// const operators = Array.from(document.querySelectorAll(".operator"));
// const clear = document.querySelector("#clear");

// numbers.map((number) => {
//   number.addEventListener("click", () => {
//     if (shouldResetDisplay) {
//       displayInput.value = "";
//       // shouldResetDisplay = false;
//     }
//     if (displayInput.value === "0" && number.textContent !== ".") {
//       displayInput.value = number.textContent;
//     } else {
//       displayInput.value += number.textContent;
//     }
//   });
// });

// operators.forEach((operator) => {
//   operator.addEventListener("click", () => {
//     if (operator.textContent === "⌫") {
//       displayInput.value = "0";
//       // displayInput.value = displayInput.value.slice(0, -1) || "0";
//     } else if (operator.textContent === "-/+") {
//       displayInput.value = String(Number(displayInput.value) * -1);
//     } else if (operator.textContent === "%") {
//       displayInput.value = String(Number(displayInput.value) / 100);
//     } else if (operator.textContent === "+") {
//       num1 = Number(displayInput.value);
//       displayInput.value += "+";
//       currentOperator = "+";
//       shouldResetDisplay = true;
//     } else if (operator.textContent === "=") {
//       const num2 = Number(displayInput.value);
//       if (currentOperator === "+") {
//         displayInput.value = String(addElements(num1, num2));
//       }
//       shouldResetDisplay = true;
//       num1 = null;
//       currentOperator = null;
//     }
//   });
// });
