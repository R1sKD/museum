let items = document.querySelectorAll('.welcome__slider-item');
let currentItem = 0;
let isEnabled = true;

let numOfSlide = document.querySelector('.welcome__slider-count--current');

let welcomeButtons = document.querySelectorAll('.welcome__slider-squarebtn');

for (let i = 0; i < welcomeButtons.length; i++) {
  welcomeButtons[i].addEventListener('click', function () {
    let btn = i;
    let diff = btn - currentItem;
    if (diff < 0) {
      for (let i = 0; i < Math.abs(diff); i++) {
        previousItem(currentItem);
      }
    } else if (diff > 0) {
      for (let i = 0; i < Math.abs(diff); i++) {
        nextItem(currentItem);
      }
    }
  });

  welcomeButtons[i].addEventListener('touchstart', function (e) {
    let btn = i;
    let diff = btn - currentItem;
    if (e.target.classList.contains('welcome__slider-squarebtn')) {
      if (diff < 0) {
        for (let i = 0; i < Math.abs(diff); i++) {
          previousItem(currentItem);
        }
      } else if (diff > 0) {
        for (let i = 0; i < Math.abs(diff); i++) {
          nextItem(currentItem);
        }
      }
    }
  });
}

function changeCurrentItem(n, direction) {
  welcomeButtons[currentItem].classList.remove('active');
  currentItem = (n + items.length) % items.length;
  let num = currentItem + 1;
  if (direction === 'to-right') {
    numOfSlide.innerHTML = 0 + `${num}`;
  } else if (direction === 'to-left') {
    numOfSlide.innerHTML = 0 + `${num}`;
  }
  welcomeButtons[currentItem].classList.add('active');
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('active', direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1, 'to-right');
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1, 'to-left');
  showItem('from-right');
}

document.querySelector('.welcome__slider-btn--prev').addEventListener('click', function () {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector('.welcome__slider-btn--next').addEventListener('click', function () {
  if (isEnabled) {
    nextItem(currentItem);
  }
});


const swipedetect = (el) => {

  let surface = el;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;

  let startTime = 0;
  let elapsedTime = 0;

  let threshold = 150;
  let restraint = 100;
  let allowedTime = 300;

  surface.addEventListener('mousedown', function (e) {
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  });

  surface.addEventListener('mouseup', function (e) {
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;

    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if (distX > 0) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem);
          }
        }
      }
    }
    e.preventDefault();
  });

  surface.addEventListener('touchstart', function (e) {
    if (e.target.classList.contains('welcome__slider-btn')) {
      if (e.target.classList.contains('welcome__slider-btn--prev')) {
        if (isEnabled) {
          previousItem(currentItem);
        }
      } else if (e.target.classList.contains('welcome__slider-btn--next')) {
        if (isEnabled) {
          nextItem(currentItem);
        }
      }
    }

    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  });

  surface.addEventListener('touchmove', function (e) {
    e.preventDefault();
  });

  surface.addEventListener('touchend', function (e) {
    let touchObj = e.changedTouches[0];
    distX = touchObj.pageX - startX;
    distY = touchObj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;

    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if (distX > 0) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem);
          }
        }
      }
    }
    e.preventDefault();
  });
}



let el = document.querySelector('.welcome__slider-container');
swipedetect(el);

window.addEventListener('keydown', function (e) {
  if (e.code === 'ArrowLeft') {
    if (isEnabled) {
      previousItem(currentItem);
    }
  } else if (e.code === 'ArrowRight') {
    if (isEnabled) {
      nextItem(currentItem);
    }
  }
});