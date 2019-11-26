const inputDol = document.querySelector('#input-dol');
const outputByn = document.querySelector('#output-byn');

inputDol.onchange = function() {
  outputByn.innerHTML = (inputDol.value / 2.08).toFixed(2);
};
