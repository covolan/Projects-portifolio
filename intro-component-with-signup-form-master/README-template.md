# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![A screenshot of the website for desktop and mobile](./screenshot.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Vanilla JavaScript

### What I learned

That was a quite fun challenge to put in practice the DOM manipulation with JavaScript. In another project [@Dev-MV6](https://www.frontendmentor.io/profile/Dev-MV6) pointed out that I was using too much code for something that shoul be simple, and I putted in practice in this challenge, I tried to keep the code cleaner and utilized query selector and loops, functions also, to minimize the code.

```js
const form = document.getElementById("form");
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const input = document.querySelectorAll(".input-area");
const errorMessage = document.querySelectorAll(".error");
const errorIcon = document.querySelectorAll(".error-icon");

form.addEventListener("submit", (event) => {
  for (let i = 0; i < input.length; i++) {
    inputHandler(event, input[i], errorMessage[i], errorIcon[i]);
  }
});

function inputHandler(event, input, msgError, errorIcon) {
  if (
    input.value == "" ||
    input.value == null ||
    (input.id == "email" &&
      (input.value == "" ||
        !emailRegex.test(input.value) ||
        input.value == null))
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
```

## Author

- Github - [Covolan](https://github.com/covolan)
- Frontend Mentor - [@Covolan](https://www.frontendmentor.io/profile/covolan)
- LinkedIn - [@alexandre-covolan](https://www.linkedin.com/in/alexandre-covolan/)

## Acknowledgments

Thanks for the help [@Dev-MV6](https://www.frontendmentor.io/profile/Dev-MV6)!
