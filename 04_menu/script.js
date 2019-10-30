const nav = document.querySelector('nav');

nav.onmouseover = function(e) {
  let target = e.target;
  if (target.className == 'menu__item') {
    let subMenu = target.querySelectorAll('.menu__item_submenu-item');
    closeMenu();
    for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].style.display = 'block';
    }
  }
}

document.onmouseover = function(e) {
  let target = e.target;
  /* console.log(e.target); */
  console.log(`target = ${e.target.tagName}, this = ${this.tagName}`);
  if (target.className != 'menu__item' && target.className != 'menu__item_submenu-item') {
    closeMenu();
  }
}

function closeMenu() {
  /* let nav = document.querySelector('nav'); */
  let subMenu = document.querySelectorAll(".menu__item_submenu-item");
  for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].style.display = 'none';
  }
}
