const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const form = document.querySelector("form");
const singUpPage = document.querySelector(".sing__up");
const thanksPage = document.querySelector(".success__message");
const imgDesktop = document.querySelector(".webpage__img")
const btnRet = document.querySelector(".ret");
const email = document.querySelector("#email");
const errorState = document.querySelector(".error__state-text")
const content = document.querySelector(".information");
const successEmail = document.querySelector(".success__message-email")

form.addEventListener("submit", event => {
    event.preventDefault();
    if(!emailRegex.test(email.value)) {
        errorState.classList.remove("hidden");
        email.classList.add("error__state-input");
    } else {
        errorState.classList.add("hidden");
        email.classList.remove("error__state-input");
        singUpPage.classList.add("hidden");
        thanksPage.classList.remove("hidden");
        successEmail.textContent = email.value;
        email.value = "";
    }
});

btnRet.addEventListener("click", () => {
    singUpPage.classList.remove("hidden");
    thanksPage.classList.add("hidden");
});

window.addEventListener("load", () => {
    imgDesktop.classList.add("original__place");
    content.classList.add("original__place");
});