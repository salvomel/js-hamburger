
const burgerButton = document.querySelector('.header-right > a');

burgerButton.addEventListener('click', 
    function () {
        const burgerMenu = document.querySelector('.hamburger-menu');
        burgerMenu.style.display = 'block'
    }
)

const closeMenu = document.querySelector('.close');

closeMenu.addEventListener('click',
    function () {
        const burgerMenu = document.querySelector('.hamburger-menu');
        burgerMenu.style.display = 'none'
    }
)


