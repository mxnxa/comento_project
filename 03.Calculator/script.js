const buttons = document.querySelectorAll(".button");
const operators = document.querySelectorAll(".operator");
const numBtns = document.querySelectorAll(".numBtn");
const display = document.querySelector(".display");

const operator = "";
const num1 = 0;
const num2 = "";
const result = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("click");
    console.log(btn.textContent);

    display.innerHTML = btn.textContent;
  });
});

// operators.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     operator = btn.textContent;
//     console.log("operator:", operator);
//   });
// });

// numBtns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     console.log("click");
//     console.log(btn.textContent);

//     num1 = btn.textContent;
//   });
// });

// switch (operator) {
//   case "+":
//     result = num1 + num2;
// }

// console.log("result = ", result);

// for (i = 0; i < 100; i++) {
//   console.log(buttons[i].textContent);
// }

// const num1 = parseInt(prompt("숫자 입력"));
// const num2 = parseInt(prompt("숫자 입력"));
// const sum = num1 + num2;

// console.log(num1, num2);
// console.log(sum);

// document.querySelector(".display span").innerHTML = sum;

// const testBtn = document.querySelector(".test");

// testBtn.addEventListener("click", function () {
//   console.log("click");
//     console.log(testBtn.textContent);
// });
