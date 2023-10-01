const form = document.getElementById("form");
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const input = document.querySelectorAll(".input-area");
const errorMessage = document.querySelectorAll(".error");
const errorIcon = document.querySelectorAll(".error-icon");

console.log(input, errorMessage, errorIcon);

form.addEventListener("submit", (event) => {
  for (let i = 0; i < input.length; i++) {
    inputHandler(event, input[i], errorMessage[i], errorIcon[i]);
  }
});

function inputHandler(event, input, msgError, errorIcon) {
  if (
    input.value == "" ||
    input.value == null ||
    (input.id == "email" && !emailRegex.test(input.value)) ||
    input.value == ""
  ) {
    event.preventDefault();
    msgError.classList.remove("hidden-element");
    errorIcon.classList.remove("hidden-element");
    input.classList.add("red-border");
  } else {
    msgError.classList.add("hidden-element");
    errorIcon.classList.add("hidden-element");
    input.classList.remove("red-border");
  }
}
