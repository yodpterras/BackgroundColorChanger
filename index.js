const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ["red", "green", "blue", "yellow", "pink", "purple"];

body.style.backgroundColor = "violet";

button.addEventListener("click", function () {
  body.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
});
