const button = document.querySelector("input");
const mainCard = document.querySelectorAll(".dashboard__card");
const overCard = document.querySelectorAll(".overview__card");
const header = document.querySelectorAll(".head");
const main = document.querySelector("body");
const modeName = document.querySelector(".mode__switcher");
const slider = document.getElementById("slider");



let switched = false;

console.log(header)

button.addEventListener("click", (event) => {
    if(!switched) {
        switched = true;
        main.classList.add("dark__bg");
        mainCard.forEach((card) => {
            card.classList.add("dark__card");
        })
        overCard.forEach((card) => {
            card.classList.add("dark__card");
        })
        header.forEach((head) => {
            head.classList.add("dark__header");
        })
        slider.classList.add("slider__color");
        modeName.innerHTML = "Light Mode";
    } else {
        switched = false;
        main.classList.remove("dark__bg");
        mainCard.forEach((card) => {
            card.classList.remove("dark__card");
        })
        overCard.forEach((card) => {
            card.classList.remove("dark__card");
        })
        header.forEach((head) => {
            head.classList.remove("dark__header");
        })
        slider.classList.remove("slider__color");
        modeName.innerHTML = "Dark Mode";
    }
})