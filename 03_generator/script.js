/* function changeRange() {
  const rangeLeftTop = document.querySelector('#rangeLeftTop').value;
  const rangeRightTop = document.querySelector('#rangeRightTop').value;
  const rangeRightBottom = document.querySelector('#rangeRightBottom').value;
  const rangeLeftBottom = document.querySelector('#rangeLeftBottom').value;

  const textLeftTop = document.querySelector('#textLeftTop');
  const textRightTop = document.querySelector('#textRightTop');
  const textRightBottom = document.querySelector('#textRightBottom');
  const textLeftBottom = document.querySelector('#textLeftBottom');

  textLeftTop.value = rangeLeftTop;
  textRightTop.value = rangeRightTop;
  textRightBottom.value = rangeRightBottom;
  textLeftBottom.value = rangeLeftBottom;

  const main = document.querySelector('main');
  main.style.borderRadius = `${rangeLeftTop}px ${rangeRightTop}px ${rangeRightBottom}px ${rangeLeftBottom}px`;
  console.log(main.style.borderRadius);
}

function changeText() {
  const rangeLeftTop = document.querySelector('#rangeLeftTop');
  const rangeRightTop = document.querySelector('#rangeRightTop');
  const rangeRightBottom = document.querySelector('#rangeRightBottom');
  const rangeLeftBottom = document.querySelector('#rangeLeftBottom');

  const textLeftTop = document.querySelector('#textLeftTop').value;
  const textRightTop = document.querySelector('#textRightTop').value;
  const textRightBottom = document.querySelector('#textRightBottom').value;
  const textLeftBottom = document.querySelector('#textLeftBottom').value;

  rangeLeftTop.value = textLeftTop;
  rangeRightTop.value = textRightTop;
  rangeRightBottom.value = textRightBottom;
  rangeLeftBottom.value = textLeftBottom;

  const main = document.querySelector('main');
  main.style.borderRadius = `${textLeftTop}px ${textRightTop}px ${textRightBottom}px ${textLeftBottom}px`;
  console.log(main.style.borderRadius);
} */

  const rangeLeftTop = document.querySelector("#rangeLeftTop");
  const rangeRightTop = document.querySelector("#rangeRightTop");
  const rangeRightBottom = document.querySelector("#rangeRightBottom");
  const rangeLeftBottom = document.querySelector("#rangeLeftBottom");

  const textLeftTop = document.querySelector("#textLeftTop");
  const textRightTop = document.querySelector("#textRightTop");
  const textRightBottom = document.querySelector("#textRightBottom");
  const textLeftBottom = document.querySelector("#textLeftBottom");

function changeRange() {
  const myRangeLeftTop = rangeLeftTop.value;
  const myRangeRightTop = rangeRightTop.value;
  const myRangeRightBottom = rangeRightBottom.value;
  const myRangeLeftBottom = rangeLeftBottom.value;

  textLeftTop.value = myRangeLeftTop;
  textRightTop.value = myRangeRightTop;
  textRightBottom.value = myRangeRightBottom;
  textLeftBottom.value = myRangeLeftBottom;

  const main = document.querySelector("main");
  main.style.borderRadius = `${myRangeLeftTop}px ${myRangeRightTop}px ${myRangeRightBottom}px ${myRangeLeftBottom}px`;
  console.log(main.style.borderRadius);
}

function changeText() {
    const myTextLeftTop = textLeftTop.value;
    const myTextRightTop = textRightTop.value;
    const myTextRightBottom = textRightBottom.value;
    const myTextLeftBottom = textLeftBottom.value;

    rangeLeftTop.value = myTextLeftTop;
    rangeRightTop.value = myTextRightTop;
    rangeRightBottom.value = myTextRightBottom;
    rangeLeftBottom.value = myTextLeftBottom;

  const main = document.querySelector("main");
  main.style.borderRadius = `${myTextLeftTop}px ${myTextRightTop}px ${myTextRightBottom}px ${myTextLeftBottom}px`;
  console.log(main.style.borderRadius);
}
