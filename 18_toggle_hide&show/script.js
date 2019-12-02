const btn = document.querySelector('button');

btn.onclick = function() {
  let tog = document.querySelector('#mySection');
  if (tog.style.display === 'none') {
    tog.style.display = 'block';
  } else {
    tog.style.display = 'none';
  }
};
