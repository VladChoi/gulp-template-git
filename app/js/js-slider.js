let slideIndex = 1;
showSlides(slideIndex);

function prevSlide () {
  showSlides(slideIndex -= 1);
}

function nextSlide () {
  showSlides(slideIndex += 1);
}

function currentSlide (n) {
  showSlides(slideIndex = n)
}

function showSlides (n) {
  const slides = document.querySelectorAll('.js-slider__item');
  const triggers = document.querySelectorAll('.js-slider__trigger');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < triggers.length; i++) {
    triggers[i].className = triggers[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  triggers[slideIndex - 1].className += ' active';
}