# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./rating.png)
![](./active-state.png)
![](./thank-you.png)
![](./error.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

My main takeaway from this challenge was the ability to change the display state of the page based on a certain event. This worked both for the change between the ratingState and thankYouState and for the error alert modal when the user tries to submit without selecting a rating.

```js
submitButton.addEventListener('click', () => {
  if (ratingValue > 0) {
    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
  } else {
    alertBox.style.display = 'block';
    overlay.style.display = 'block';

    setTimeout(() => {
      alertBox.style.display = 'none';
      overlay.style.display = 'none';
    }, 5000);
  }
});
```
```js
overlay.addEventListener('click', () => {
  alertBox.style.display = 'none';
  overlay.style.display = 'none';
});
```

## Author

- Frontend Mentor - [@LucasMartinToth](https://www.frontendmentor.io/profile/LucasMartinToth)