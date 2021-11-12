const btnPopup = document.querySelector('.tickets__btn');
const popup = document.querySelector('.popup');
const popupArea = document.querySelector('.popup__area');
const popupClose = document.querySelector('.popup__close');
btnPopup.addEventListener('click', (e) => {
  popup.classList.add('open');
  e.preventDefault();
});
popupArea.addEventListener('click', (e) => {
  popup.classList.remove('open');
  e.preventDefault();
});
popupClose.addEventListener('click', (e) => {
  popup.classList.remove('open');
  e.preventDefault();
});