let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('.mySlides');
  const MyDots = document.querySelectorAll('.dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < MyDots.length; i++) {
    MyDots[i].className = MyDots[i].className.replace('active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  MyDots[slideIndex - 1].className += ' active';
}
