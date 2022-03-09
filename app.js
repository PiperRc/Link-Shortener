const hamburger = document.querySelector('.hamburger');
const heroImg = document.querySelector('main section:nth-child(2)');

hamburger.addEventListener('click', () => {
    heroImg.classList.toggle('hero-img-removed');


})
