console.log("hello");

const btn = document.querySelectorAll(".button");

btn.forEach((b) => {
  b.addEventListener("click", function () {
    console.log("click");
  });
});
