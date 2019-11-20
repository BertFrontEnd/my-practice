const myImgMin = document.querySelector('#imgMin');
const myModalWin = document.querySelector('#modalWin');
const close = document.querySelector('.close');
const myImgFull = document.querySelector('#imgFull');
const captionText = document.querySelector('#caption');

myImgMin.onclick = function() {
  myModalWin.style.display = 'block';
  myImgFull.src = this.src;
  captionText.innerHTML = this.alt;
};

close.onclick = function() {
  myModalWin.style.display = 'none';
};
