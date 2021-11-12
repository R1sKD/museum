const ticketsType = document.querySelector('.tickets__type');
const ticketsTypePerm = ticketsType.querySelector('.tickets__label--permanent');
const ticketsTypeTemp = ticketsType.querySelector('.tickets__label--temporary');
const ticketsTypeComb = ticketsType.querySelector('.tickets__label--combined');

const ticketsAmount = document.querySelector('.tickets__amount');
const ticketsAmountTotal = ticketsAmount.querySelector('.tickets__total span');
const ticketsAmountBasics = document.querySelectorAll('.tickets__number--basic');
const ticketsAmountSeniors = document.querySelectorAll('.tickets__number--senior');
const btnsMinus = document.querySelectorAll('.tickets__minus');
const btnsPlus = document.querySelectorAll('.tickets__plus');

const bookingTickets = document.getElementById("popup");
const popupTicketType = bookingTickets.querySelector('.popup__item--type');

const overviewType = bookingTickets.querySelector('.popup__overview-info--type');
const overviewAmount = bookingTickets.querySelectorAll('.popup__overview-amount');

const entryPrices = bookingTickets.querySelectorAll('.popup__box-type span');
const overviewPrices = bookingTickets.querySelectorAll('.popup__overview-amount--price');

const amountTicketsType = bookingTickets.querySelectorAll('.popup__overview-right span');
const totalSum = bookingTickets.querySelector('.popup__overview-tot span');


let price = 20;
let amountBasic = 1;
let amountSenior = 1;
let totPrice;

function changePrice() {
  totPrice = amountBasic * price + amountSenior * (price / 2);
  ticketsAmountTotal.innerHTML = totPrice;
  totalSum.innerHTML = totPrice;
  amountTicketsType[0].innerHTML = amountBasic * price;
  amountTicketsType[1].innerHTML = amountSenior * (price / 2);
  entryPrices[0].innerHTML = price;
  entryPrices[1].innerHTML = price / 2;
  overviewPrices[0].innerHTML = price;
  overviewPrices[1].innerHTML = price / 2;
  ticketsInfo['price'] = totPrice;
  saveInfo();
}

function saveInfo() {
  ticketsInfo['amountBasic'] = ticketsAmountBasics[0].value;
  ticketsInfo['amountBasic'] = ticketsAmountBasics[1].value;
  ticketsInfo['amountSenior'] = ticketsAmountSeniors[0].value;
  ticketsInfo['amountSenior'] = ticketsAmountSeniors[1].value;
  if (ticketsInfo.hasOwnProperty('price')) {
    localStorage.setItem('tickets', JSON.stringify(ticketsInfo));
  }
}

ticketsType.addEventListener('click', function (e) {
  if (e.target === ticketsTypePerm || e.target === ticketsTypePerm.lastElementChild) {
    price = 20;
    popupTicketType.value = 'type1';
    overviewType.innerHTML = e.target.innerHTML;
    ticketsInfo['ticketType'] = ticketsTypePerm.innerText;
    ticketsInfo['ticketPrice'] = price;
    changePrice();
  }
  if (e.target === ticketsTypeTemp || e.target === ticketsTypeTemp.lastElementChild) {
    price = 25;
    popupTicketType.value = 'type2';
    overviewType.innerHTML = e.target.innerHTML;
    ticketsInfo['ticketType'] = ticketsTypeTemp.innerText;
    ticketsInfo['ticketPrice'] = price;
    changePrice();
  }
  if (e.target === ticketsTypeComb || e.target === ticketsTypeComb.lastElementChild) {
    price = 40;
    popupTicketType.value = 'type3';
    overviewType.innerHTML = e.target.innerHTML;
    ticketsInfo['ticketType'] = ticketsTypeComb.innerText;
    ticketsInfo['ticketPrice'] = price;
    changePrice();
  }
});

ticketsTypePerm.addEventListener('changeTicketsType', function () {
  price = 20;
  ticketsTypePerm.firstElementChild.checked = true;
  overviewType.innerHTML = ticketsTypePerm.innerText;
  ticketsInfo['ticketType'] = ticketsTypePerm.innerText;
  ticketsInfo['ticketPrice'] = price;
  changePrice();
});

ticketsTypeTemp.addEventListener('changeTicketsType', function () {
  price = 25;
  ticketsTypeTemp.firstElementChild.checked = true;
  overviewType.innerHTML = ticketsTypeTemp.innerText;
  ticketsInfo['ticketType'] = ticketsTypeTemp.innerText;
  ticketsInfo['ticketPrice'] = price;
  changePrice();
});

ticketsTypeComb.addEventListener('changeTicketsType', function () {
  price = 40;
  ticketsTypeComb.firstElementChild.checked = true;
  overviewType.innerHTML = ticketsTypeComb.innerText;
  ticketsInfo['ticketType'] = ticketsTypeComb.innerText;
  ticketsInfo['ticketPrice'] = price;
  changePrice();
});

let selectEvent = new CustomEvent('changeTicketsType', {
  bubbles: true,
  cancelable: true,
});

popupTicketType.addEventListener('change', function () {
  if (popupTicketType.selectedIndex == 0) {
    ticketsTypePerm.dispatchEvent(selectEvent);
  } else if (popupTicketType.selectedIndex == 1) {
    ticketsTypeTemp.dispatchEvent(selectEvent);
  } else if (popupTicketType.selectedIndex == 2) {
    ticketsTypeComb.dispatchEvent(selectEvent);
  }
});

let inputEvent = new CustomEvent('changeTicketsAmount', {
  bubbles: true,
  cancelable: true,
});

btnsMinus.forEach(btnMinus => btnMinus.addEventListener('click', function () {
  this.nextElementSibling.stepDown();
  if (this === btnsMinus[0] || this === btnsMinus[2]) {
    this.nextElementSibling.dispatchEvent(inputEvent);
  } else {
    this.nextElementSibling.dispatchEvent(inputEvent);
  }
}));

btnsPlus.forEach(btnPlus => btnPlus.addEventListener('click', function () {
  this.previousElementSibling.stepUp();
  if (this === btnsPlus[0] || this === btnsPlus[2]) {
    this.previousElementSibling.dispatchEvent(inputEvent);
  } else {
    this.previousElementSibling.dispatchEvent(inputEvent);
  }
}));

ticketsAmountBasics.forEach(ticketsAmountBasic => ticketsAmountBasic.addEventListener('changeTicketsAmount', function () {
  amountBasic = this.value;
  overviewAmount[0].innerHTML = this.value;
  ticketsAmountBasics.forEach(ticketsAmountBasic => ticketsAmountBasic.value = this.value);
  ticketsInfo['amountBasic'] = amountBasic;
  changePrice();
}));

ticketsAmountSeniors.forEach(ticketsAmountSenior => ticketsAmountSenior.addEventListener('changeTicketsAmount', function () {
  amountSenior = this.value;
  overviewAmount[1].innerHTML = this.value;
  ticketsAmountSeniors.forEach(ticketsAmountSeniors => ticketsAmountSeniors.value = this.value);
  ticketsInfo['amountSenior'] = amountSenior;
  changePrice();
}));


let ticketsInfo = {};

window.onload = function () {
  let storageInfo;
  if (localStorage.getItem('tickets')) {
    storageInfo = JSON.parse(localStorage.getItem('tickets'));
    console.log(storageInfo);
    if (storageInfo.ticketType === ticketsTypePerm.innerText) {
      ticketsTypePerm.firstElementChild.checked = true;
      overviewType.innerHTML = ticketsTypePerm.innerText;
      popupTicketType.value = 'type1';
    } else if (storageInfo.ticketType === ticketsTypeTemp.innerText) {
      ticketsTypeTemp.firstElementChild.checked = true;
      overviewType.innerHTML = ticketsTypeTemp.innerText;
      popupTicketType.value = 'type2';
    } else if (storageInfo.ticketType === ticketsTypeComb.innerText) {
      ticketsTypeComb.firstElementChild.checked = true;
      overviewType.innerHTML = ticketsTypeComb.innerText;
      popupTicketType.value = 'type3';
    }
    ticketsAmountTotal.innerHTML = storageInfo.price;
    totalSum.innerHTML = storageInfo.price;
    ticketsAmountBasics[0].value = +storageInfo.amountBasic;
    ticketsAmountBasics[1].value = +storageInfo.amountBasic;
    overviewAmount[0].innerHTML = +storageInfo.amountBasic;
    ticketsAmountSeniors[0].value = +storageInfo.amountSenior;
    ticketsAmountSeniors[1].value = +storageInfo.amountSenior;
    overviewAmount[1].innerHTML = +storageInfo.amountSenior;
    amountTicketsType[0].innerHTML = +storageInfo.amountBasic * storageInfo.ticketPrice;
    amountTicketsType[1].innerHTML = +storageInfo.amountSenior * (storageInfo.ticketPrice / 2);
    overviewPrices[0].innerHTML = +storageInfo.ticketPrice;
    overviewPrices[1].innerHTML = +storageInfo.ticketPrice / 2;
  }
}