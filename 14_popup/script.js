const btn = document.querySelector('.popup');
const popupInWindow = document.querySelector('#myPopup');

btn.onclick = function() {
  popupInWindow.classList.toggle('show');
};
