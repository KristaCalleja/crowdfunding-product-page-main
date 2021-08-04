const burger = document.querySelector('.menu-modal')
const closeMenu = document.querySelector('.close');
const navMenu = document.querySelector('.nav-menu');

const bookMarkBtn = document.querySelector('.bookmark-btn');
const bookIcon = document.querySelector('.bookmark-icon');

const callToAction = document.querySelector('button');
const successModal = document.getElementById('success-modal');
const wrapper = document.querySelector('.wrapper');

// Toggle mobile menu
function navShow(){
    navMenu.classList.toggle('nav-active');
    burger.classList.toggle('menu-modal-active');
}
burger.addEventListener('click', navShow);

// Toggle bookmark
function toggleBookMark(){
    bookMarkBtn.classList.toggle('bookmark-btn-active');
    bookIcon.classList.toggle('bookmark-icon-active');
}
bookMarkBtn.addEventListener('click', toggleBookMark);
bookIcon.addEventListener('click', toggleBookMark);

// Success modal
function onOpen(){
    alert(successModal.textContent);
}
callToAction.addEventListener('click', onOpen);