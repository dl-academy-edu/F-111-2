var popupBtn = document.querySelector('.button_js');
var modal = document.querySelector('.modal');
var popupClose =document.querySelector('.close');
var input = modal.querySelector('input');

popupBtn.addEventListener('click', function() {
    modal.classList.add('modal-open');
    input.focus();
})

popupClose.addEventListener('click', function() {
    modal.classList.remove('modal-open');
    popupBtn.focus();
})

window.addEventListener('keydown', function(event) {
    // console.log(event.key);
    if (event.key === "Escape") {
        // if (modal.classList.contains('modal-open')) {
            modal.classList.remove('modal-open');
            popupBtn.focus();
        // }
        
    }
})
