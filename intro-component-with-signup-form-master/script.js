const form = document.getElementById("form");
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const pwr = document.getElementById("password");

const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const pwrError = document.getElementById("pwr-error");

const ericonFirstName = document.getElementById("ericon-first-name");
const ericonLastName = document.getElementById("ericon-last-name");
const ericonEmail = document.getElementById("ericon-email");
const ericonPwr = document.getElementById("ericon-pwr");

form.addEventListener("submit", (event) => {
    inputHandler(event, firstName, firstNameError, ericonFirstName);
    inputHandler(event, lastName, lastNameError, ericonLastName);
    inputHandler(event, pwr, pwrError, ericonPwr)

    if(email.value == '' || !emailRegex.text(email) || email.value == null) {
        event.preventDefault();
        emailError.style.display = "block";
        email.style.border = "1px solid hsl(0, 100%, 74%)";
        ericonEmail.style.display = "block";
    } else {
        emailError.style.display = "none";
        email.style.border = "1px solid hsl(246, 25%, 77%)";
        ericonEmail.style.display = "none";
    }
})

function inputHandler(event, name, nameError, nameEricon) {
    if(name.value == '' || name.value == null) {
        event.preventDefault();
        nameError.style.display = "block";
        name.style.border = "1px solid hsl(0, 100%, 74%)";
        nameEricon.style.display = "block";
    } else {
        nameError.style.display = "none";
        name.style.border = "1px solid hsl(246, 25%, 77%)";
        nameEricon.style.display = "none";
    }
}