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

function btnEvent(btn, btnNumber) {
  btn.addEventListener("click", () => {
    if (clicked.length == 0) {
      btn.style.backgroundColor = "hsl(25, 97%, 53%)";
      btn.style.color = "white";
      clicked.push(btnNumber);
    } else {
      clearButton(clicked[0]);
      btn.style.backgroundColor = "hsl(25, 97%, 53%)";
      btn.style.color = "white";
      clicked.push(btnNumber);
    }
  });
}

form.addEventListener("submit", (event) => {
  rating.style.display = "none";
  thank.style.display = "flex";
  event.preventDefault();
  if (clicked.length == 0) {
    number.innerHTML += "0";
  } else {
    number.innerHTML += clicked[0][3];
  }
});

function clearButton(btn) {
  switch (btn) {
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

btnEvent(btn1, "btn1");
btnEvent(btn2, "btn2");
btnEvent(btn3, "btn3");
btnEvent(btn4, "btn4");
btnEvent(btn5, "btn5");
