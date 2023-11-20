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

    const activeCircle = document.querySelector('.active_circle')
    activeCircle.nextElementSibling.classList.add('active_circle')
    activeCircle.classList.remove('active_circle')
}
function previousImage(){
    const activeImage = document.querySelector('.active_item')
    console.log(activeImage,activeImage.previousElementSibling)
    activeImage.previousElementSibling.classList.add('active_item')
    activeImage.classList.remove('active_item')

    const activeCircle = document.querySelector('.active_circle')
    activeCircle.previousElementSibling.classList.add('active_circle')
    activeCircle.classList.remove('active_circle')
}

leftBtn.addEventListener('click', ()=>{
    previousImage()
})
rightBtn.addEventListener('click',()=>{
    nextImage()
})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42OTA5N2E2N2JhZjg5NzAwYTgyZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1zbGlkZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW1nSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX2xpc3RfaXRlbScpXHJcbmNvbnN0IGxlZnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdF9idG4nKVxyXG5jb25zdCByaWdodEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodF9idG4nKVxyXG5cclxuXHJcblxyXG5pbWdJdGVtcy5mb3JFYWNoKChpKSA9PiB7XHJcbiAgaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgY2hvb3NlQWN0aXZlKGV2ZW50LnRhcmdldCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hvb3NlQWN0aXZlKGVsZW1lbnQpIHtcclxuICBpbWdJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiBcclxuICAgIGl0ZW0gPT09IGVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgICA/IGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfaXRlbScpXHJcbiAgICAgIDogaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfaXRlbScpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIG5leHRJbWFnZSgpe1xyXG4gICAgY29uc3QgYWN0aXZlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2l0ZW0nKVxyXG4gICAgY29uc29sZS5sb2coYWN0aXZlSW1hZ2UsYWN0aXZlSW1hZ2UucHJldmlvdXNFbGVtZW50U2libGluZylcclxuICAgIGFjdGl2ZUltYWdlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfaXRlbScpXHJcbiAgICBhY3RpdmVJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfaXRlbScpXHJcblxyXG4gICAgY29uc3QgYWN0aXZlQ2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9jaXJjbGUnKVxyXG4gICAgYWN0aXZlQ2lyY2xlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfY2lyY2xlJylcclxuICAgIGFjdGl2ZUNpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfY2lyY2xlJylcclxufVxyXG5mdW5jdGlvbiBwcmV2aW91c0ltYWdlKCl7XHJcbiAgICBjb25zdCBhY3RpdmVJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfaXRlbScpXHJcbiAgICBjb25zb2xlLmxvZyhhY3RpdmVJbWFnZSxhY3RpdmVJbWFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKVxyXG4gICAgYWN0aXZlSW1hZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfaXRlbScpXHJcbiAgICBhY3RpdmVJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfaXRlbScpXHJcblxyXG4gICAgY29uc3QgYWN0aXZlQ2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9jaXJjbGUnKVxyXG4gICAgYWN0aXZlQ2lyY2xlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2NpcmNsZScpXHJcbiAgICBhY3RpdmVDaXJjbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX2NpcmNsZScpXHJcbn1cclxuXHJcbmxlZnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgcHJldmlvdXNJbWFnZSgpXHJcbn0pXHJcbnJpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgbmV4dEltYWdlKClcclxufSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9