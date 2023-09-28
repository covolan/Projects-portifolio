btn5.addEventListener("click", (event) => {
    if (clicked.length == 0) {
        btn5.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn5.style.color = "white";
        clicked.push("btn5");
    } else {
        clearButton(clicked[0]);
        btn5.style.backgroundColor = "hsl(217, 12%, 63%)";
        btn5.style.color = "white";
        clicked.push("btn5");
    }
})