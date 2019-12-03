const btnText = document.querySelector('#text');

btnText.onclick = function() {
  let tog = document.querySelector('#mySection');
  if (tog.style.display === 'none') {
    tog.style.display = 'block';
  } else {
    tog.style.display = 'none';
  }
};

const btnAlerts = document.querySelector('#alerts');

btnAlerts.onclick = function() {
  let tog = document.querySelector('#myAlerts');
  if (tog.style.display === 'none') {
    tog.style.display = 'block';
  } else {
    tog.style.display = 'none';
  }
};

const close = document.querySelectorAll('.alert__close--btn');

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let elem = this.parentNode;
    elem.style.opacity = '0';
    setTimeout(function() {
      elem.style.display = 'none';
    }, 600);
  };
}
