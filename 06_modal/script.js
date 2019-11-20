const myModal = document.querySelector('#myModal');
console.log(myModal);
const myBtn = document.querySelector('#myBtn');
console.log(myBtn);
const close = document.querySelectorAll('.close')[0];
console.log(close);

myBtn.onclick = function() {
  myModal.style.display = 'block';
  console.log(myModal);
};

close.onclick = function() {
  myModal.style.display = 'none';
  console.log(myModal);
};

window.onclick = function(e) {
  if (e.target == myModal) {
    myModal.style.display = 'none';
    console.log(myModal);
  }
};
