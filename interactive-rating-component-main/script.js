const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const form = document.getElementById("form");

const rating = document.getElementById("rating-state");
const thank = document.getElementById("thank-state");

const number = document.getElementById("number");

let clicked = [];

btn1.addEventListener("click", (event) => {
    if (clicked.length == 0) {
        btn1.style.backgroundColor = "hsl(25, 97%, 53%)";
        btn1.style.color = "white";
        clicked.push("btn1");
    } else {
        clearButton(clicked[0]);
        btn1.style.backgroundColor = "hsl(25, 97%, 53%)";
        btn1.style.color = "white";
        clicked.push("btn1");
    }
})

btn2.addEventListener("click", (event) => {
    if (clicked.length == 0) {
        btn2.style.backgroundColor = "hsl(25, 97%, 53%)";
        btn2.style.color = "white";
        clicked.push("btn2");
    } else {
        clearButton(clicked[0]);
        btn2.style.backgroundColor = "hsl(25, 97%, 53%)";
        btn2.style.color = "white";
        clicked.push("btn2");
    }
})

btn3.addEventListener("click", (event) => {
    if (clicked.length == 0) {
        btn3.style.backgroundColor = "hsl(25, 97%, 53%)";
        btn3.style.color = "white";
        clicked.push("btn3");
    } else {
        clearButton(clicked[0]);
        btn3.style.backgroundColor = "hsl(25, 97%, 53%)";
        btn3.style.color = "white";
        clicked.push("btn3");
    }
})

btn4.addEventListener("click", (event) => {
    if (clicked.length == 0) {
        btn4.style.backgroundColor = "hsl(25, 97%, 53%)";
        btn4.style.color = "white";
        clicked.push("btn4");
    } else {
        clearButton(clicked[0]);
        btn4.style.backgroundColor = "hsl(25, 97%, 53%)";
        btn4.style.color = "white";
        clicked.push("btn4");
    }
})

btn5.addEventListener("click", (event) => {
    if (clicked.length == 0) {
        btn5.style.backgroundColor = "hsl(25, 97%, 53%)";
        btn5.style.color = "white";
        clicked.push("btn5");
    } else {
        clearButton(clicked[0]);
        btn5.style.backgroundColor = "hsl(25, 97%, 53%)";
        btn5.style.color = "white";
        clicked.push("btn5");
    }
})

form.addEventListener("submit", (event) => {
    rating.style.display = "none";
    thank.style.display = "flex";
    event.preventDefault();
    if (clicked.length == 0) {
        number.innerHTML += '0';
    } else {
        number.innerHTML += clicked[0][3];
    }
})

function clearButton(btn) {
    switch(btn) {
        case "btn1":
            btn1.style.backgroundColor = "hsla(212, 20%, 37%, 0.26)";
            btn1.style.color = "hsl(217, 12%, 63%)";
            clicked.pop();
        case "btn2":
            btn2.style.backgroundColor = "hsla(212, 20%, 37%, 0.26)";
            btn2.style.color = "hsl(217, 12%, 63%)";
            clicked.pop();
        case "btn3":
            btn3.style.backgroundColor = "hsla(212, 20%, 37%, 0.26)";
            btn3.style.color = "hsl(217, 12%, 63%)";
            clicked.pop();
        case "btn4":
            btn4.style.backgroundColor = "hsla(212, 20%, 37%, 0.26)";
            btn4.style.color = "hsl(217, 12%, 63%)";
            clicked.pop();
        case "btn5":
            btn5.style.backgroundColor = "hsla(212, 20%, 37%, 0.26)";
            btn5.style.color = "hsl(217, 12%, 63%)";
            clicked.pop();
    }
}