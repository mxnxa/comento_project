const buttons = document.querySelectorAll(".button");
const operators = document.querySelectorAll(".operator");
const numBtns = document.querySelectorAll(".numBtn");
const display = document.querySelector(".display");

let operatorOn = "";
let firstNum = "";
let secondNum = "";
let result = "";

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      result = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      result = parseInt(num1) - parseInt(num2);
      break;
    case "x":
      result = parseInt(num1) * parseInt(num2);
      break;
    case "/":
      result = parseInt(num1) / parseInt(num2);
      break;
    default:
      result = "";
  }
  return result;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let action = e.target.classList[1];
    let btnContent = e.target.textContent;

    if (action === "numBtn") {
      if (display.textContent === "" && btnContent === "") {
        display.textContent = btnContent;
        firstNum = display.textContent;
      } else if (display.textContent === "" && btnContent !== "") {
        display.textContent = btnContent;
        resentNum = display.textContent;
      } else if (display.textContent !== "" && btnContent === "") {
        display.textContent += btnContent;
        firstNum = display.textContent;
      } else if (display.textContent !== "" && btnContent !== "") {
        display.textContent += btnContent;
        resentNum = display.textContent;
      }
    }

    if (action === "operator") {
      operatorOn = btnContent;
      firstNum = display.textContent;
      display.textContent = "";
    }

    if (action === "result") {
      display.textContent = calculate(firstNum, operatorOn, resentNum);
    }

    if (action === "clear") {
      display.textContent = "";
      firstNum = "";
      resentNum = "";
      operatorOn = "";
    }
  });
});
