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
