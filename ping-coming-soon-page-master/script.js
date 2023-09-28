const emailInput = document.getElementById("email");
const form = document.getElementById("form-elem");
const errorMsg = document.getElementById("error-msg");
const myReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

form.addEventListener('submit', (event) => {
    if (!myReg.test(emailInput.value)) {
        event.preventDefault();
        emailInput.style.border = "1px solid red";
        errorMsg.style.display = "block";
    }
})
