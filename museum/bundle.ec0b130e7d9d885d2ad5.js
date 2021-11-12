(()=>{var e={449:()=>{mapboxgl.accessToken="pk.eyJ1IjoicjFza2QiLCJhIjoiY2t1Y3Q2M2R6MTNwYzJxbDlvNWZnYjI0OSJ9.UyV9JxKKG6PVkB5MMzqovg";const e=[{type:"Feature",properties:{iconSize:[25,33]},geometry:{type:"Point",coordinates:[2.3333,48.8602]}},{type:"Feature",properties:{iconSize:[25,33]},geometry:{type:"Point",coordinates:[2.3397,48.8607]}},{type:"Feature",properties:{iconSize:[25,33]},geometry:{type:"Point",coordinates:[2.333,48.8619]}},{type:"Feature",properties:{iconSize:[25,33]},geometry:{type:"Point",coordinates:[2.3365,48.8625]}},{type:"Feature",properties:{iconSize:[25,33]},geometry:{type:"Point",coordinates:[2.3364,48.86091]}}],t=new mapboxgl.Map({container:"map",style:"mapbox://styles/r1skd/ckued17lj1abc17nvr534w45u/draft",center:[2.3364,48.86091],zoom:16});for(const n of e){const i=document.createElement("div"),s=n.properties.iconSize[0],r=n.properties.iconSize[1];i.className="marker",i.style.backgroundImage=n===e[e.length-1]?"url('./assets/svg/map-marker-main.svg')":"url('./assets/svg/map-marker.svg')",i.style.width=`${s}px`,i.style.height=`${r}px`,i.style.backgroundSize="100%",new mapboxgl.Marker(i).setLngLat(n.geometry.coordinates).addTo(t)}const n=new mapboxgl.NavigationControl;t.addControl(n)},620:()=>{!function(){var e,t;for(e=document.getElementsByClassName("explore__slider-comp-overlay"),t=0;t<e.length;t++)n(e[t]);function n(e){var t,n,i,s=0;function r(e){e.preventDefault(),s=1,window.addEventListener("mousemove",l),window.addEventListener("touchmove",l)}function o(){s=0}function l(i){var r;if(0==s)return!1;r=function(t){var n;return t=t||window.event,n=e.getBoundingClientRect(),t.pageX-n.left-window.pageXOffset}(i),r<0&&(r=0),r>n&&(r=n),function(n){e.style.width=n+"px",t.style.left=e.offsetWidth-t.offsetWidth/2+"px"}(r)}n=e.offsetWidth,i=e.offsetHeight,e.style.width=Math.ceil(n/1.5)+"px",(t=document.createElement("DIV")).setAttribute("class","explore__comp-slider"),e.parentElement.insertBefore(t,e),t.style.top=i/2-t.offsetHeight/2+"px",t.style.left=Math.ceil(n/1.5)-t.offsetWidth/2+"px",t.addEventListener("mousedown",r),window.addEventListener("mouseup",o),t.addEventListener("touchstart",r),window.addEventListener("touchstop",o)}}()},673:()=>{!function(){let e=["assets/img/galery/galery1.jpg","assets/img/galery/galery2.jpg","assets/img/galery/galery3.jpg","assets/img/galery/galery4.jpg","assets/img/galery/galery5.jpg","assets/img/galery/galery6.jpg","assets/img/galery/galery7.jpg","assets/img/galery/galery8.jpg","assets/img/galery/galery9.jpg","assets/img/galery/galery10.jpg","assets/img/galery/galery11.jpg","assets/img/galery/galery12.jpg","assets/img/galery/galery13.jpg","assets/img/galery/galery14.jpg","assets/img/galery/galery15.jpg"];e.sort((()=>Math.random()-.5));const t=document.querySelector(".gallery__list");t.innerHTML="",e.map((e=>{const n=`<li class="gallery__item _anim-items"><img class="gallery__img _anim-show" src=${e} alt="gallery img"></li>`;t.innerHTML+=n}))}();let e=document.querySelectorAll("._anim-items");if(e.length>0){function t(){for(let t=0;t<e.length;t++){const i=e[t],s=i.offsetHeight,r=n(i).top,o=4;let l=window.innerHeight-s/o;s>window.innerHeight&&(l=window.innerHeight-window.innerHeight/o),window.pageYOffset>r-l&&window.pageYOffset<r+s?i.classList.add("_active"):i.classList.remove("_active")}}function n(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageOffset||document.documentElement.scrollTop;return{top:t.top+i,left:t.left+n}}window.addEventListener("scroll",t),t()}},158:()=>{let e=document.querySelector(".header__nav-btn"),t=document.querySelector(".header__nav-list"),n=document.querySelector(".header__bottom-menu"),i=document.querySelectorAll(".header__nav-link"),s=[document.querySelector(".welcome__title"),document.querySelector(".welcome__text"),document.querySelector(".welcome__link")];e.addEventListener("click",(()=>{t.classList.toggle("open"),e.classList.toggle("open"),n.classList.toggle("open");for(let e=0;e<s.length;e++)window.innerWidth>768&&t.classList.contains("open")?s[e].style.display="none":(s[e].style.display="block",window.innerWidth>768?s[2].style.display="flex":s[2].style.display="none")}));for(let r=0;r<i.length;r++)i[r].addEventListener("click",(()=>{t.classList.contains("open")&&(t.classList.remove("open"),e.classList.remove("open"),n.classList.remove("open"),window.innerWidth>768&&(s[0].style.display="block",s[1].style.display="block",s[2].style.display="flex"))}));window.addEventListener("resize",(function(){window.innerWidth>768?s[2].style.display="flex":s[2].style.display="none"}))},398:()=>{const e=document.querySelector(".tickets__type"),t=e.querySelector(".tickets__label--permanent"),n=e.querySelector(".tickets__label--temporary"),i=e.querySelector(".tickets__label--combined"),s=document.querySelector(".tickets__amount").querySelector(".tickets__total span"),r=document.querySelectorAll(".tickets__number--basic"),o=document.querySelectorAll(".tickets__number--senior"),l=document.querySelectorAll(".tickets__minus"),a=document.querySelectorAll(".tickets__plus"),c=document.getElementById("popup"),d=c.querySelector(".popup__item--type"),u=c.querySelector(".popup__overview-info--type"),p=c.querySelectorAll(".popup__overview-amount"),m=c.querySelectorAll(".popup__box-type span"),g=c.querySelectorAll(".popup__overview-amount--price"),h=c.querySelectorAll(".popup__overview-right span"),v=c.querySelector(".popup__overview-tot span");let y,f=20,L=1,E=1;function _(){y=L*f+E*(f/2),s.innerHTML=y,v.innerHTML=y,h[0].innerHTML=L*f,h[1].innerHTML=E*(f/2),m[0].innerHTML=f,m[1].innerHTML=f/2,g[0].innerHTML=f,g[1].innerHTML=f/2,T.price=y,T.amountBasic=r[0].value,T.amountBasic=r[1].value,T.amountSenior=o[0].value,T.amountSenior=o[1].value,T.hasOwnProperty("price")&&localStorage.setItem("tickets",JSON.stringify(T))}e.addEventListener("click",(function(e){e.target!==t&&e.target!==t.lastElementChild||(f=20,d.value="type1",u.innerHTML=e.target.innerHTML,T.ticketType=t.innerText,T.ticketPrice=f,_()),e.target!==n&&e.target!==n.lastElementChild||(f=25,d.value="type2",u.innerHTML=e.target.innerHTML,T.ticketType=n.innerText,T.ticketPrice=f,_()),e.target!==i&&e.target!==i.lastElementChild||(f=40,d.value="type3",u.innerHTML=e.target.innerHTML,T.ticketType=i.innerText,T.ticketPrice=f,_())})),t.addEventListener("changeTicketsType",(function(){f=20,t.firstElementChild.checked=!0,u.innerHTML=t.innerText,T.ticketType=t.innerText,T.ticketPrice=f,_()})),n.addEventListener("changeTicketsType",(function(){f=25,n.firstElementChild.checked=!0,u.innerHTML=n.innerText,T.ticketType=n.innerText,T.ticketPrice=f,_()})),i.addEventListener("changeTicketsType",(function(){f=40,i.firstElementChild.checked=!0,u.innerHTML=i.innerText,T.ticketType=i.innerText,T.ticketPrice=f,_()}));let w=new CustomEvent("changeTicketsType",{bubbles:!0,cancelable:!0});d.addEventListener("change",(function(){0==d.selectedIndex?t.dispatchEvent(w):1==d.selectedIndex?n.dispatchEvent(w):2==d.selectedIndex&&i.dispatchEvent(w)}));let k=new CustomEvent("changeTicketsAmount",{bubbles:!0,cancelable:!0});l.forEach((e=>e.addEventListener("click",(function(){this.nextElementSibling.stepDown(),this===l[0]||l[2],this.nextElementSibling.dispatchEvent(k)})))),a.forEach((e=>e.addEventListener("click",(function(){this.previousElementSibling.stepUp(),this===a[0]||a[2],this.previousElementSibling.dispatchEvent(k)})))),r.forEach((e=>e.addEventListener("changeTicketsAmount",(function(){L=this.value,p[0].innerHTML=this.value,r.forEach((e=>e.value=this.value)),T.amountBasic=L,_()})))),o.forEach((e=>e.addEventListener("changeTicketsAmount",(function(){E=this.value,p[1].innerHTML=this.value,o.forEach((e=>e.value=this.value)),T.amountSenior=E,_()}))));let T={};window.onload=function(){let e;localStorage.getItem("tickets")&&(e=JSON.parse(localStorage.getItem("tickets")),console.log(e),e.ticketType===t.innerText?(t.firstElementChild.checked=!0,u.innerHTML=t.innerText,d.value="type1"):e.ticketType===n.innerText?(n.firstElementChild.checked=!0,u.innerHTML=n.innerText,d.value="type2"):e.ticketType===i.innerText&&(i.firstElementChild.checked=!0,u.innerHTML=i.innerText,d.value="type3"),s.innerHTML=e.price,v.innerHTML=e.price,r[0].value=+e.amountBasic,r[1].value=+e.amountBasic,p[0].innerHTML=+e.amountBasic,o[0].value=+e.amountSenior,o[1].value=+e.amountSenior,p[1].innerHTML=+e.amountSenior,h[0].innerHTML=+e.amountBasic*e.ticketPrice,h[1].innerHTML=+e.amountSenior*(e.ticketPrice/2),g[0].innerHTML=+e.ticketPrice,g[1].innerHTML=+e.ticketPrice/2)}},780:()=>{const e=document.querySelector(".tickets__btn"),t=document.querySelector(".popup"),n=document.querySelector(".popup__area"),i=document.querySelector(".popup__close");e.addEventListener("click",(e=>{t.classList.add("open"),e.preventDefault()})),n.addEventListener("click",(e=>{t.classList.remove("open"),e.preventDefault()})),i.addEventListener("click",(e=>{t.classList.remove("open"),e.preventDefault()}))},263:()=>{!function(e){var t,n,i,s,r;e(".ripple").click((function(o){0==(t=e(this).parent()).find(".ink").length&&t.prepend("<span class='ink'></span>"),(n=t.find(".ink")).removeClass("animate"),n.height()||n.width()||(i=Math.max(t.outerWidth(),t.outerHeight()),n.css({height:i,width:i})),s=o.pageX-t.offset().left-n.width()/2,r=o.pageY-t.offset().top-n.height()/2,n.css({top:r+"px",left:s+"px"}).addClass("animate")}))}(jQuery)},185:()=>{const e=popup.querySelector(".popup__form"),t=e.date,n=e.time,i=e.querySelector(".popup__overview-info--date"),s=e.querySelector(".popup__overview-info--time"),r=e.name,o=e.mail,l=e.phone;let a=(new Date).toISOString().split("T")[0];t.setAttribute("min",a);const c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let d=["January","February","March","April","May","June","July","August","September","October","November","December"];function u(){let e=new Date(this.valueAsNumber),t=e.getDay(),n=e.getMonth(),s=e.getDate(),r=c[t]+","+` ${d[n]}`+` ${s}`;i.innerHTML=r}function p(){let e=this.value.split(":"),t=e[0]+" : "+e[1];s.innerHTML=t}function m(e){g.call(this),this.parentElement.insertAdjacentHTML("beforeend",`<span style="color: red; font-size: 14px;">${e}</span>`),this.parentElement.style.borderColor="red"}function g(){"SPAN"===this.parentElement.lastElementChild.tagName&&this.parentElement.removeChild(this.parentElement.lastElementChild),this.parentElement.style.borderColor="#000"}function h(e){v.call(this),this.parentElement.insertAdjacentHTML("beforeend",`<span style="color: yellow; font-size: 14px;">${e}</span>`),this.parentElement.style.borderColor="yellow"}function v(){"SPAN"===this.parentElement.lastElementChild.tagName&&this.parentElement.removeChild(this.parentElement.lastElementChild),this.parentElement.style.borderColor="#000"}r.addEventListener("blur",(function(){this.value.length<3&&0!=this.value.length?m.call(this,"Name is too short. Min length - 3"):this.value.length>15?m.call(this,"Name is too long. Max length - 15"):y.test(this.value)?m.call(this,"Invalid symbol"):g.call(this)}));let y=/[.!#$ % & '*+/=?^_`:,{|}~-\d]/;r.addEventListener("input",(function(){y.test(this.value)?m.call(this,"Invalid symbol"):g.call(this)})),l.addEventListener("input",(function(){/[\D]/.test(this.value)?h.call(this,"phone number can only contain numbers"):v.call(this)}));let f=/^(\w){3,15}@[A-Za-z]{4,}\.[\w]{2,}/;o.addEventListener("input",(function(){f.test(this.value)||0===this.value.length?g.call(this):m.call(this,"Invalid email")})),t.addEventListener("change",(function(){u.call(this)})),n.addEventListener("change",(function(){p.call(this)}))},452:()=>{$(document).ready((function(){$(".video__slider-big").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,asNavFor:".video__slider-small"}),$(".video__slider-small").slick({slidesToShow:3,slidesToScroll:1,dots:!0,asNavFor:".video__slider-big",focusOnSelect:!0,responsive:[{breakpoint:768,settings:{slidesToShow:2}}]});let e=0,t=0;$(".video__slider-big").on("afterChange",(function(n,i,o,l){t=e,e=o,s[t].paused||(s[t].pause(),s[t].currentTime=0,r.value=0)})),$(document).keydown((function(e){if(32==e.which)return!1}));const n=document.querySelector(".video__slider-box"),i=n.querySelectorAll(".video__slider-bigvideo"),s=Array.from(i).splice(1),r=n.querySelector(".video__slider-inputprogress"),o=n.querySelector(".video__slider-inputsound"),l=n.querySelector(".video__slider-btn"),a=n.querySelector(".video__slider-play"),c=n.querySelector(".video__slider-sound"),d=n.querySelector(".video__slider-screen");function u(){const t=s[e].paused?"play":"pause";s[e][t]()}function p(){l.classList.toggle("pause"),a.classList.toggle("pause")}function m(){s[e][this.name]=this.value,0==this.value?c.classList.add("mute"):c.classList.remove("mute")}function g(){0!==s[e].volume?(s[e].volume=0,o.value=0,y.call(o)):(s[e].volume=.4,o.value=.4,y.call(o)),c.classList.toggle("mute")}function h(){const t=s[e].currentTime/s[e].duration*100;r.style.background=`linear-gradient(to right, #710707 0%, #710707 ${t}%, #E5E5E5 ${t}%, #E5E5E5 100%)`,r.value=t}function v(t){const n=t.offsetX/r.offsetWidth*s[e].duration;s[e].currentTime=n}function y(){this.style.background=`linear-gradient(to right, #710707 0%, #710707 ${100*this.value}%, #E5E5E5 ${100*this.value}%, #E5E5E5 100%)`}let f=!1;function L(){d.classList.toggle("open"),f?(f=!1,s[e].webkitExitFullScreen()):(f=!0,s[e].requestFullscreen())}s.forEach((e=>e.addEventListener("click",u))),s.forEach((e=>e.addEventListener("play",p))),s.forEach((e=>e.addEventListener("pause",p))),s.forEach((e=>e.addEventListener("timeupdate",h))),l.addEventListener("click",u),a.addEventListener("click",u),o.addEventListener("click",m),o.addEventListener("mousemove",m),o.addEventListener("input",y),c.addEventListener("click",g),d.addEventListener("click",L),n.addEventListener("keydown",(t=>{return"Space"==(n=t).code&&u(),"KeyM"==n.code&&g(),"Comma"==n.code&&n.shiftKey&&(s[e].playbackRate-=.1),"Period"==n.code&&n.shiftKey&&(s[e].playbackRate+=.1),void("KeyF"==n.code&&L());var n}));let E=!1;r.addEventListener("click",v),r.addEventListener("mousemove",(e=>E&&v(e))),r.addEventListener("mousdown",(()=>E=!0)),r.addEventListener("mouseup",(()=>E=!1))}))},632:()=>{let e=document.querySelectorAll(".welcome__slider-item"),t=0,n=!0,i=document.querySelector(".welcome__slider-count--current"),s=document.querySelectorAll(".welcome__slider-squarebtn");for(let e=0;e<s.length;e++)s[e].addEventListener("click",(function(){let n=e-t;if(n<0)for(let e=0;e<Math.abs(n);e++)a(t);else if(n>0)for(let e=0;e<Math.abs(n);e++)c(t)})),s[e].addEventListener("touchstart",(function(n){let i=e-t;if(n.target.classList.contains("welcome__slider-squarebtn"))if(i<0)for(let e=0;e<Math.abs(i);e++)a(t);else if(i>0)for(let e=0;e<Math.abs(i);e++)c(t)}));function r(n,r){s[t].classList.remove("active"),t=(n+e.length)%e.length;let o=t+1;("to-right"===r||"to-left"===r)&&(i.innerHTML=`0${o}`),s[t].classList.add("active")}function o(i){n=!1,e[t].classList.add(i),e[t].addEventListener("animationend",(function(){this.classList.remove("active",i)}))}function l(i){e[t].classList.add("next",i),e[t].addEventListener("animationend",(function(){this.classList.remove("next",i),this.classList.add("active"),n=!0}))}function a(e){o("to-right"),r(e-1,"to-right"),l("from-left")}function c(e){o("to-left"),r(e+1,"to-left"),l("from-right")}document.querySelector(".welcome__slider-btn--prev").addEventListener("click",(function(){n&&a(t)})),document.querySelector(".welcome__slider-btn--next").addEventListener("click",(function(){n&&c(t)})),(e=>{let i=document.querySelector(".welcome__slider-container"),s=0,r=0,o=0,l=0,d=0,u=0;i.addEventListener("mousedown",(function(e){s=e.pageX,r=e.pageY,d=(new Date).getTime(),e.preventDefault()})),i.addEventListener("mouseup",(function(e){o=e.pageX-s,l=e.pageY-r,u=(new Date).getTime()-d,u<=300&&Math.abs(o)>=150&&Math.abs(l)<=100&&(o>0?n&&a(t):n&&c(t)),e.preventDefault()})),i.addEventListener("touchstart",(function(e){e.target.classList.contains("welcome__slider-btn")&&(e.target.classList.contains("welcome__slider-btn--prev")?n&&a(t):e.target.classList.contains("welcome__slider-btn--next")&&n&&c(t));let i=e.changedTouches[0];s=i.pageX,r=i.pageY,d=(new Date).getTime(),e.preventDefault()})),i.addEventListener("touchmove",(function(e){e.preventDefault()})),i.addEventListener("touchend",(function(e){let i=e.changedTouches[0];o=i.pageX-s,l=i.pageY-r,u=(new Date).getTime()-d,u<=300&&Math.abs(o)>=150&&Math.abs(l)<=100&&(o>0?n&&a(t):n&&c(t)),e.preventDefault()}))})(),window.addEventListener("keydown",(function(e){"ArrowLeft"===e.code?n&&a(t):"ArrowRight"===e.code&&n&&c(t)}))}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}(()=>{"use strict";n(452),n(263),n(780),n(398),n(185),n(449),n(158),n(632),n(620),n(673),console.log("В секции tickets надо дождаться полной загрузки страницы, чтобы введеные ранее данные отображались!\nВ секции видео не работают горячие клавиши, если запустить видео нажатием на большую кнопку. (запусккайте видео нажатием на маленькую кнопку play, либо нажатием на само видео для проверки горячих клавиш, пожалуйста)   Ваша оценка - 141 баллов\n  Отзыв по пунктам ТЗ:\n  Не выполненные / не засчитанные пункты:\n1) если внутри слайда проигрывается видео с YouTube, клик по стрелке перелистывания слайдов или клик по буллету останавливает проигрывание видео\n2) панель управления в полноэкранном режиме визуально выглядит так же, как на макете - кнопки равномерно распределены по всей ширине страницы, относительные размеры между кнопками и ползунками, а также относительные размеры самих кнопок остались прежними\n3) время можно выбирать с 9: 00 до 18: 00 с интервалом в 30 минут\n4) Любой собственный дополнительный функционал, улучшающий качество проекта.Например, ночная тема, плавная смена изображений в блоке Tickets, всплывающее окно с информацией про картины и их авторов, кнопка прокрутки страницы вверх, возможность проголосовать за понравившиеся картины с сохранением данных в local storage, всё зависит от вашей фантазии и чувства вкуса.Для удобства проверки выполненный вами дополнительный функционал включите в самооценку, которую выведите в консоль браузера\n  Частично выполненные пункты:\n1) если видео с YouTube проигрывается, клик по кнопке Pause останавливает его проигрывание.Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в центре другого слайда.В указанной ситуации другое видео должно запуститься, а текущее остановиться.Невозможно проигрывание нескольких YouTube видео одновременно\n2) при нажатии на кнопку fullscreen видео переходит в полноэкранный режим, при этом видео и панель управления разворачиваются во весь экран.При нажатии на кнопку fullscreen повторно видео выходит из полноэкранного режима.Нажатие на клавишу для выхода из полноэкранного режима Esc не проверяем и не оцениваем\n3) Клавиша F— включение / выключение полноэкранного режима\nfeedback: Только включение")})()})();