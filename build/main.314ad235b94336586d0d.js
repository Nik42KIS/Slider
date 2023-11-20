/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const imgItems = document.querySelectorAll('.slider_list_item')
const leftBtn = document.querySelector('.left_btn')
const rightBtn = document.querySelector('.right_btn')



imgItems.forEach((i) => {
  i.addEventListener('click', (event) => {
    chooseActive(event.target);
  });
});

function chooseActive(element) {
  imgItems.forEach((item) => {
 
    item === element.parentElement
      ? element.parentElement.classList.add('active_item')
      : item.classList.remove('active_item');
  });
}
function nextImage(){
    const activeImage = document.querySelector('.active_item')
    console.log(activeImage,activeImage.previousElementSibling)
    activeImage.nextElementSibling.classList.add('active_item')
    activeImage.classList.remove('active_item')
}
function previousImage(){
    const activeImage = document.querySelector('.active_item')
    console.log(activeImage,activeImage.previousElementSibling)
    activeImage.previousElementSibling.classList.add('active_item')
    activeImage.classList.remove('active_item')
}

leftBtn.addEventListener('click', ()=>{
    previousImage()
})
rightBtn.addEventListener('click',()=>{
    nextImage()
})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMTRhZDIzNWI5NDMzNjU4NmQwZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXNsaWRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbWdJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfbGlzdF9pdGVtJylcclxuY29uc3QgbGVmdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0X2J0bicpXHJcbmNvbnN0IHJpZ2h0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0X2J0bicpXHJcblxyXG5cclxuXHJcbmltZ0l0ZW1zLmZvckVhY2goKGkpID0+IHtcclxuICBpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjaG9vc2VBY3RpdmUoZXZlbnQudGFyZ2V0KTtcclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjaG9vc2VBY3RpdmUoZWxlbWVudCkge1xyXG4gIGltZ0l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuIFxyXG4gICAgaXRlbSA9PT0gZWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgID8gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9pdGVtJylcclxuICAgICAgOiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9pdGVtJyk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbmV4dEltYWdlKCl7XHJcbiAgICBjb25zdCBhY3RpdmVJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfaXRlbScpXHJcbiAgICBjb25zb2xlLmxvZyhhY3RpdmVJbWFnZSxhY3RpdmVJbWFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKVxyXG4gICAgYWN0aXZlSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9pdGVtJylcclxuICAgIGFjdGl2ZUltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9pdGVtJylcclxufVxyXG5mdW5jdGlvbiBwcmV2aW91c0ltYWdlKCl7XHJcbiAgICBjb25zdCBhY3RpdmVJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfaXRlbScpXHJcbiAgICBjb25zb2xlLmxvZyhhY3RpdmVJbWFnZSxhY3RpdmVJbWFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKVxyXG4gICAgYWN0aXZlSW1hZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfaXRlbScpXHJcbiAgICBhY3RpdmVJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfaXRlbScpXHJcbn1cclxuXHJcbmxlZnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgcHJldmlvdXNJbWFnZSgpXHJcbn0pXHJcbnJpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgbmV4dEltYWdlKClcclxufSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9