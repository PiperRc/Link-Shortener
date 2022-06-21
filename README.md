# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

## Desktop Screenshot
![Desktop Screenshot](https://github.com/PiperRc/Link-Shortener/blob/main/screenshots/desktop_screenshot.png)

## Mobile Screenshot
![Mobile Screenshot](https://github.com/PiperRc/Link-Shortener/blob/main/screenshots/mobile_screenshot.png)


### Links

- [Solution URL](https://github.com/PiperRc/Link-Shortener)
- [Live Site URL](https://piperrc.github.io/Link-Shortener/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- Using linear-gradient to get different background ratios.

```css
.inputLinkContainer-background {
    background: linear-gradient(white 50%, var(--gray) 50%);
}

```

- Saving content ot clipboard

```js
 copyBtn.addEventListener('click', async () => {
      await navigator.clipboard.writeText(secondP.innerHTML)
      copyBtn.innerHTML = 'Copied!'
      copyBtn.style.backgroundColor = 'var(--dViolet)'
    })
```

- changing the color of placeholder text

```css
.placeholder-color::placeholder {
    /* will change the placeholder text color when no link is present */
    color: var(--red);
}

```
- keyframes

```css
.loader {
    /* loader */
    border: 16px solid #f3f3f3;
    /* Light grey */
    border-top: 16px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
```

```html
<h1>Some HTML code I'm proud of</h1>
```


### Useful resources

- [CSS filter generator](https://codepen.io/sosuke/pen/Pjoqqp) - This helped me get the required code to change the color of an svg
- [CSS tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) - I use css tricks in every project I do. I am still learing grid so this website helps me tremendously.

## Author

- Frontend Mentor - [@PiperRc](https://www.frontendmentor.io/profile/PiperRc)


## Acknowledgments

Frontend Mentor for being a wonderful website to practice what I have learnt.
