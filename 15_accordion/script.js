const acc = document.querySelectorAll('.accordion');

for (let i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show');
  };
}
