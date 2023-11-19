const imgItems = document.querySelectorAll('.slider_list_item');

console.log(imgItems);

imgItems.forEach((i) => {
  i.addEventListener('click', (event) => {
    chooseActive(event.target);
  });
});

function chooseActive(element) {
  imgItems.forEach((item) => {
    console.log(`i: ${item}`, element.parentElement);
    item === element.parentElement
      ? element.parentElement.classList.add('active_item')
      : item.classList.remove('active_item');
  });
}
