const btn = document.querySelector('button');
const elem = document.querySelector('#myBar');
let label = document.querySelector('#label');

btn.onclick = function() {
  let barWidth = 0;
  let barId = setInterval(frame, 15);
  function frame() {
    if (barWidth >= 100) {
      clearInterval(barId);
    } else {
      barWidth++;
      elem.style.width = barWidth + '%';
      label.innerHTML = barWidth + '%';
    }
  }
};
