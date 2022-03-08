const hamburger = document.querySelector('.navbar-toggler');
const s = document.querySelector('main section:nth-child(2)')
const heroImg = document.querySelector('.hero-img');
// const header = document.querySelector('header h1')

hamburger.addEventListener('click', () => {
    if (s.classList.contains("hero-img-removed")) {
        s.classList.remove("hero-img-removed");
    } else {
        s.classList.add("hero-img-removed");
    }

})