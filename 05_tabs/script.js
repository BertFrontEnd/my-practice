let tab;
let tabContent;

window.onload = function() {
  tab = document.querySelectorAll('.tab');
  console.log(tab);
  tabContent = document.querySelectorAll('.tabContent');
  console.log(tabContent);
  hideTabsContent(1);
}

function hideTabsContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    console.log(tabContent);
    tabContent[i].classList.add('hide');
    console.log(tabContent);
    tab[i].classList.remove('whiteBorder');
    console.log(tab);
  }
}

document.querySelector('#tabs').onclick = function(e) {
  const target = e.target;
  if (target.className == 'tab') {
    for (let i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
}

function showTabsContent(b) {
  if (tabContent[b].classList.contains('hide')) {
    hideTabsContent(0);
    tab[b].classList.add('whiteBorder');
    console.log(tab);
    tabContent[b].classList.remove('hide');
    console.log(tabContent);
    tabContent[b].classList.add('show');
    console.log(tabContent);
  }
}
