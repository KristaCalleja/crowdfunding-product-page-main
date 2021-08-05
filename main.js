const burger = document.querySelector('.menu-modal')
const closeMenu = document.querySelector('.close');
const navMenu = document.querySelector('.nav-menu');

const bookMarkBtn = document.querySelector('.bookmark-btn');
const bookIcon = document.querySelector('.bookmark-icon');

const callToAction = document.querySelector('button');
const modalOuterCompleted = document.querySelector('.modal-outer-completed');
const successModal = document.getElementById('modal-completed');

const selectionBtns = document.querySelectorAll('.selection');
const modalOuterSelection = document.querySelector('.modal-outer-selection');
const selectionModal = document.getElementById('selection-modal');

// Toggle mobile menu
function navShow(){
    navMenu.classList.toggle('nav-active');
    burger.classList.toggle('menu-modal-active');
}
burger.addEventListener('click', navShow);

// Toggle bookmark
function toggleBookMark(){
    bookMarkBtn.classList.toggle('bookmark-btn-active');
    bookMarkBtn.textContent = 'Bookmarked';
    bookIcon.classList.toggle('bookmark-icon-active');
}
bookMarkBtn.addEventListener('click', toggleBookMark);
bookIcon.addEventListener('click', toggleBookMark);

// Success modal
function openSuccessModal(){
    modalOuterCompleted.classList.add('open');
}
callToAction.addEventListener('click', openSuccessModal);

// Close success modal
function closeSuccessModal(){
    modalOuterCompleted.classList.remove('open');
}
modalOuterCompleted.addEventListener('click', function(event){
    console.log(event.target);
    console.log(event.currentTarget);
    const isOutside = !event.target.closest('modal-completed');
    if (isOutside){
        closeSuccessModal();
    }
});
window.addEventListener('keydown', (event) => {
    if(event.key == 'Escape'){
        closeSuccessModal();
    }
})

// Selection modal
function openSelectionModal(){
    console.log('clicked reward');
    modalOuterSelection.classList.add('open');
}
// Iteration
selectionBtns.forEach(button => button.addEventListener('click', openSelectionModal));
