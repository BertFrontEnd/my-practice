const btn = document.querySelector("button");

btn.onclick = function() {
  const elem = document.querySelector("#myAnimation");
  let pos = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (pos == 330) {
      clearInterval(id);
      elem.classList.remove("shadow");
    } else {
      pos++;
      elem.classList.add("shadow");
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
};
