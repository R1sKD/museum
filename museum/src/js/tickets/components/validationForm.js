const popupForm = popup.querySelector('.popup__form');
const date = popupForm.date;
const time = popupForm.time;
const overviewDate = popupForm.querySelector('.popup__overview-info--date');
const overviewTime = popupForm.querySelector('.popup__overview-info--time');
const clientName = popupForm.name;
const clientEmail = popupForm.mail;
const clientPhone = popupForm.phone;

let today = new Date().toISOString().split('T')[0];
date.setAttribute('min', today);

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function showDate() {
  let dateValue = new Date(this.valueAsNumber);
  let day = dateValue.getDay();1
  let month = dateValue.getMonth();9
  let date = dateValue.getDate();11
  let res = weekDays[day] + ',' + ` ${months[month]}` + ` ${date}`;
  overviewDate.innerHTML = res;
}

function showTime() {
  let timeValue = this.value.split(':');
  let res = timeValue[0] + ' : ' + timeValue[1];
  overviewTime.innerHTML = res;
}

function showError(message) {
  removeError.call(this);
  this.parentElement.insertAdjacentHTML(
    'beforeend',
    `<span style="color: red; font-size: 14px;">${message}</span>`,
  )
  this.parentElement.style.borderColor = 'red';
}

function removeError() {
  if (this.parentElement.lastElementChild.tagName === 'SPAN') {
    this.parentElement.removeChild(this.parentElement.lastElementChild);
  }
  this.parentElement.style.borderColor = '#000';
}

function showWarning(message) {
  removeWarning.call(this);
  this.parentElement.insertAdjacentHTML(
    'beforeend',
    `<span style="color: yellow; font-size: 14px;">${message}</span>`,
  )
  this.parentElement.style.borderColor = 'yellow';
}

function removeWarning() {
  if (this.parentElement.lastElementChild.tagName === 'SPAN') {
    this.parentElement.removeChild(this.parentElement.lastElementChild);
  }
  this.parentElement.style.borderColor = '#000'
}

clientName.addEventListener('blur', function() {
  if (this.value.length < 3 && this.value.length != 0) {
    showError.call(this, 'Name is too short. Min length - 3');
  } else if (this.value.length > 15) {
    showError.call(this, 'Name is too long. Max length - 15');
  } else if (checkName.test(this.value)) {
    showError.call(this, 'Invalid symbol');
  } else {
    removeError.call(this);
  }
}); 

let checkName = /[.!#$ % & '*+/=?^_`:,{|}~-\d]/;
clientName.addEventListener('input', function () {
  if (checkName.test(this.value)) {
    showError.call(this, 'Invalid symbol');
  } else {
    removeError.call(this)
  }
});

clientPhone.addEventListener('input', function () {
  let checkPhone = /[\D]/;
  if (checkPhone.test(this.value)) {
    showWarning.call(this, 'phone number can only contain numbers');
  } else {
    removeWarning.call(this);
  }
});

let checkEmail = /^(\w){3,15}@[A-Za-z]{4,}\.[\w]{2,}/;
clientEmail.addEventListener('input', function() {
  if (checkEmail.test(this.value) || this.value.length === 0) {
    removeError.call(this);
  } else {
    showError.call(this, 'Invalid email');
  }
});

date.addEventListener('change', function() {
  showDate.call(this);
});

time.addEventListener('change', function () {
  showTime.call(this);
});