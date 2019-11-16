function plus() {
  let num1 = document.querySelector("#n1").value;
  num1 = parseInt(num1);

  let num2 = document.querySelector("#n2").value;
  num2 = parseInt(num2);

  let result = num1 + num2;

  document.querySelector("#out").innerHTML = result;
}

function minus() {
  let num1 = document.querySelector("#n1").value;
  num1 = parseInt(num1);

  let num2 = document.querySelector("#n2").value;
  num2 = parseInt(num2);

  let result = num1 - num2;

  document.querySelector("#out").innerHTML = result;
}

function multiply() {
  let num1 = document.querySelector("#n1").value;
  num1 = parseInt(num1);

  let num2 = document.querySelector("#n2").value;
  num2 = parseInt(num2);

  let result = num1 * num2;

  document.querySelector("#out").innerHTML = result;
}

function division() {
  let num1 = document.querySelector("#n1").value;
  num1 = parseInt(num1);

  let num2 = document.querySelector("#n2").value;
  num2 = parseInt(num2);

  let result = num1 / num2;

  document.querySelector("#out").innerHTML = result;
}
