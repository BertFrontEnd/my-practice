let myNodeList = document.querySelectorAll('li');
console.log(myNodeList);

for (let i = 0; i < myNodeList.length; i++) {
  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  myNodeList[i].appendChild(span);
  span.appendChild(txt);
  console.log(span);
  console.log(txt);
}

const close = document.querySelectorAll('.close');
console.log(close);

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let elem = this.parentNode;
    elem.style.display = 'none';
    console.log(elem);
  };
}

const addBtn = document.querySelector('.addBtn');
console.log(addBtn);

addBtn.onclick = function newElement() {
  let li = document.createElement('li');
  let inputValue = document.querySelector('#myInput').value;
  let myTextValue = document.createTextNode(inputValue);
  li.appendChild(myTextValue);
  if (inputValue === '') {
    alert('Please, add the Task!');
  } else {
    document.querySelector('#myUl').appendChild(li);
  }
  document.querySelector('#myInput').value = '';
};

const list = document.querySelector('ul');
console.log(list);
list.addEventListener(
  'click',
  function(e) {
    if (e.target.tagName === 'li') {
      e.target.className.toggle('checked');
    }
  },
  false
);

/* document.querySelector('ul').onclick = function(e) {
  const target = e.target;
  if (target.tagName == 'li') {
    for (let i = 0; i < li.length; i++) {
      if (target == li[i]) {
        target.className.toggle('checked');
        console.log(list);
        break;
      }
    }
  }
}; */
