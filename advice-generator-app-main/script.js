const url = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector(".advice__id");
const adviceText = document.querySelector(".advice");
const button = document.querySelector(".random__btn");

async function getAdvice() {
    const response = await fetch(url);
    let data = await response.json();
    adviceText.innerHTML = data.slip.advice;
    adviceId.innerHTML = data.slip.id;
}

button.addEventListener("click", getAdvice);