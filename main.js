let submit = document.querySelector('.submit_btn');
let popup = document.querySelector('.popup');
let ok_btn = document.querySelector('.popup__btn');


function openPopup() {
    popup.classList.add("open-popup");
};

function closaPopup() {
    setTimeout(() => {
        popup.classList.remove("open-popup");
    }, 700);
};

// popup.addEventListener('click', () => {
//     popup.classList.remove("open-popup");
// })