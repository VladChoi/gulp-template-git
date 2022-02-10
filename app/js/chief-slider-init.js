document.addEventListener('DOMContentLoaded', function() {
  new ChiefSlider('.slider', {
    loop: true,
    autoplay: true,
    interval: 2500,
    swipe: true,
    refresh: false
  });
});

// настройки слайдера по-умолчанию
/*{
  loop: true,
    autoplay: false,
  interval: 5000,
  swipe: true,
  refresh: false
}*/

// инициализация для всех элементов с классом .slider
/*document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.slider');
  for (let i = 0; i < elems.length; i++) {
    new ChiefSlider(elems[i]);
  }
});*/
console.log("works!");
