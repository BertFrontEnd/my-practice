function funSelect() {
  const select = document.querySelector("#mySelect").selectedIndex;
  const option = document.querySelector('#mySelect').options;
  console.log(option[select].text);
}

function funRange() {
  const inputRange = document.querySelector('input[type=range]');
  const p = document.querySelector('p');
  p.innerHTML = inputRange.value;
  console.log(p.textContent);

  const inputText = document.querySelector('input[type=text]');
  inputText.value = inputRange.value;
  console.log(inputText.value);

  const myDiv = document.querySelector('div');
  myDiv.style.width = inputRange.value + 'px';
  console.log(myDiv.style.width);
}
