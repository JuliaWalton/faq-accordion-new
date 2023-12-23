# FAQ accordion NEW - Frontend Mentor

![Design preview for the FAQ accordion coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out my solution of this challenge!

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### Overview

## The challenge

Your challenge is to build out this FAQ accordion and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Links

Live Site URL: [https://juliawalton.github.io/faq-accordion-card/](https://juliawalton.github.io/faq-accordion-card/)

### My Process

## Built with

- Semantic HTML5 markup
- CSS3
- Flexbox
- CSS Grid
- JavaScript

## What I learned

This project was a helpful practice in using JS to show and hide information via css classes in response to a click. I utilized a forEach high order array method to look through the question array twice. This allowed me to check if the current item in the collection was the one firing the click event and if not remove it's active state.

```js
questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("question-button")) {
      questions.forEach((item) => {
        if (item === question) {
          item.classList.toggle("show-answer");
          const svg = item.querySelector(".svg-switch");
          if (item.classList.contains("show-answer")) {
            svg.src = "assets/images/icon-minus.svg";
          } else {
            svg.src = "assets/images/icon-plus.svg";
          }
        } else {
          item.classList.remove("show-answer");
          const svg = item.querySelector(".svg-switch");
          svg.src = "assets/images/icon-plus.svg";
        }
      });
    }
  });
});
```

## Author

- Website - [Julia's Portfolio](https://juliawalton.github.io/portfolio/)
- LinkedIn - [Julia Walton](https://www.linkedin.com/in/juliawalton/)
