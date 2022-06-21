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
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
