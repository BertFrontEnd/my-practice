const input = document.querySelector('#myInput');
console.log(input);

input.onkeyup = function() {
  let filter = input.value.toUpperCase();
  console.log(filter);
  let ul = document.querySelector('#myUl');
  console.log(ul);
  let li = ul.querySelectorAll('li');
  console.log(li);

  for (let i = 0; i < li.length; i++) {
    let a = li[i].querySelectorAll('a')[0];
    console.log(a);
    if (a.innerHTML.toUpperCase().indexOf(filter) != -1) {
      li[i].style.display = '';
      console.log(li);
    } else {
      li[i].style.display = 'none';
      console.log(li);
    }
  }
};
