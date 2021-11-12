let burger = document.querySelector('.header__nav-btn');
let menu = document.querySelector('.header__nav-list');
let menuBottom = document.querySelector('.header__bottom-menu');
let menuLink = document.querySelectorAll('.header__nav-link');
let welcomeTitle = document.querySelector('.welcome__title');
let welcomeText = document.querySelector('.welcome__text');
let welcomeLink = document.querySelector('.welcome__link');
let welcomeArr = [welcomeTitle, welcomeText, welcomeLink];

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  burger.classList.toggle('open');
  menuBottom.classList.toggle('open');
  for (let i = 0; i < welcomeArr.length; i++) {
    if (window.innerWidth > 768 && menu.classList.contains('open')) {
      welcomeArr[i].style.display = 'none';
    } else {
      welcomeArr[i].style.display = 'block';
      if (window.innerWidth > 768) {
        welcomeArr[2].style.display = 'flex';
      } else {
        welcomeArr[2].style.display = 'none';
      }
    }
  } 
});

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      burger.classList.remove('open');
      menuBottom.classList.remove('open');
      if (window.innerWidth > 768) {
        welcomeArr[0].style.display = 'block';
        welcomeArr[1].style.display = 'block';
        welcomeArr[2].style.display = 'flex';
      }
    }
  });
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    welcomeArr[2].style.display = 'flex';
  } else {
    welcomeArr[2].style.display = 'none';
  }
});