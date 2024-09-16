const hamburgerIcon = document.querySelector('.hemburger');
const closeIcon = document.querySelector('.close-icon');
const navbar = document.querySelector('.navbar');

hamburgerIcon.addEventListener('click', () => {
    navbar.classList.add('open');
});

closeIcon.addEventListener('click', () => {
    navbar.classList.remove('open');
});