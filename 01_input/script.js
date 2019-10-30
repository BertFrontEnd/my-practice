function myChecking() {
  let checkBox = document.querySelector('#one');

  if (checkBox.checked) {
    console.log(`Выбрано`);
  } else {
    console.log(`Не выбрано`);
  }
}

function myRadio() {
  let radio = document.querySelectorAll('[name="r1"]');
  console.log(radio);
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      // console.log(radio[i]);
      console.log(`Radio ${i} выбран`);
    } else {
      console.log(`Radio ${i} не выбран`);
    }
  }
}
