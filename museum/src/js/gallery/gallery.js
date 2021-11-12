function randomImg() {
  let address = [
    `assets/img/galery/galery1.jpg`,
    `assets/img/galery/galery2.jpg`,
    `assets/img/galery/galery3.jpg`,
    `assets/img/galery/galery4.jpg`,
    `assets/img/galery/galery5.jpg`,
    `assets/img/galery/galery6.jpg`,
    `assets/img/galery/galery7.jpg`,
    `assets/img/galery/galery8.jpg`,
    `assets/img/galery/galery9.jpg`,
    `assets/img/galery/galery10.jpg`,
    `assets/img/galery/galery11.jpg`,
    `assets/img/galery/galery12.jpg`,
    `assets/img/galery/galery13.jpg`,
    `assets/img/galery/galery14.jpg`,
    `assets/img/galery/galery15.jpg`,
  ];
  shuffle(address);

  const pictureInnerContainer = document.querySelector('.gallery__list');
  pictureInnerContainer.innerHTML = '';

  address.map(n => {
    const img = `<li class="gallery__item _anim-items"><img class="gallery__img _anim-show" src=${n} alt="gallery img"></li>`;
    pictureInnerContainer.innerHTML += img;
  });
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

randomImg();



let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        animItem.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }

  animOnScroll()
}