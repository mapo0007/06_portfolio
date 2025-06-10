// const burger = document.querySelector(".burger");
// const nav = document.querySelector("nav");
// const menu = document.querySelector(".menu");

// burger.addEventListener("click", burgerClick);
// function burgerClick() {
//   burger.classList.toggle("active");
//   nav.classList.toggle("active");
// }
// menu.addEventListener("click", menuClick);
// function menuClick() {
//   burger.classList.remove("active");
//   nav.classList.remove("active");
// }

const burgerBtn = document.getElementById('burgerBtn');
const menuOverlay = document.getElementById('menuOverlay');

function toggleMenu() {
    burgerBtn.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}

function closeMenu() {
    burgerBtn.classList.remove('active');
    menuOverlay.classList.remove('active');
}

burgerBtn.addEventListener('click', toggleMenu);

// Luk menu når man klikker udenfor - virker ikke.
menuOverlay.addEventListener('click', function(e) {
    if (e.target === menuOverlay) {
        closeMenu();
    }
});

// Close menu with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
});