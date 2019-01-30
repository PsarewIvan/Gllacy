'use strict';

var modalButton = document.querySelector('.contact-us-button');
var popup = document.querySelector('.modal-contact');
var modalClose = popup.querySelector('.modal-close-button');
var inputName = popup.querySelector('#modal-contact-name');
var inputEmail = popup.querySelector('#modal-contact-email');
var inputText = popup.querySelector('#modal-contact-about');
var modalForm = popup.querySelector('.modal-form');
var overlay = document.querySelector('.modal-overlay');

var slideWrapper = document.querySelector('#slide-wrapper');
var slideArray = document.querySelectorAll('.slide');
var btnSlideArray = document.querySelectorAll('.control-button');
var btnInSlideArray = document.querySelectorAll('.slide-button');
var bodyBackground = document.querySelector('#body-wrapper');

var isStorage = true;
var storageName = '';
var storageEmail = '';

function slideChange(indexSlideOn, slideLength) {
  if (indexSlideOn >= slideLength) return;
  for (var i = 0; i < slideLength; i++) {
    if (i === indexSlideOn) {
      slideWrapper.classList.add('slider-wrapper-' + (i + 1));
      btnSlideArray[i].classList.add('control-button-checked');
      btnInSlideArray[i].setAttribute('tabindex', 0);
      slideArray[i].classList.add('slide-show');
      bodyBackground.classList.add('body-wrapper-' + (i + 1));
    } else {
      slideWrapper.classList.remove('slider-wrapper-' + (i + 1));
      btnSlideArray[i].classList.remove('control-button-checked');
      btnInSlideArray[i].setAttribute('tabindex', -1);
      slideArray[i].classList.remove('slide-show');
      bodyBackground.classList.remove('body-wrapper-' + (i + 1));
    }
  }
} 

[].forEach.call(btnSlideArray, function(el, i) {
  el.addEventListener('click', function(evt) {
    evt.preventDefault();
    slideChange(this.valueOf(), btnSlideArray.length);
  }.bind(i));
});

try {
  storageName = localStorage.getItem('login');
  storageEmail = localStorage.getItem('email');  
} catch(err) {
  isStorage = false;
}

modalButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  overlay.classList.add('overlay-show');
  
  if (storageName && storageEmail) {
    inputName.value = storageName;
    inputEmail.value = storageEmail;
    inputText.focus();
  } else if (storageEmail) {
    inputEmail.value = storageEmail;
    inputName.focus();
  } else if (storageName) {
    inputName.value = storageName;
    inputEmail.focus();
  } else {
    inputName.focus();
  }
});

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
  popup.classList.remove('modal-error');
});

modalForm.addEventListener('submit', function(evt) {
  if (!inputName.value || !inputEmail.value || !inputText.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
//    не работает с use strict
//    popup.offsetWidth = popup.offsetWidth;
    void popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorage) {
      localStorage.setItem('login', inputName.value);
      localStorage.setItem('email', inputEmail.value);
    }    
  }
  
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
      overlay.classList.remove('overlay-show');
    }
  }
});

overlay.addEventListener('click', function(evt) {
  if (popup.classList.contains('modal-show')) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
    overlay.classList.remove('overlay-show');
  }
});


var searchForm = document.querySelector('.search-wrapper');

searchForm.addEventListener('focus', function() {
  this.classList.remove('display-hidden')
}, true);

searchForm.addEventListener('blur', function() {
  this.classList.add('display-hidden')
}, true);

var loginForm = document.querySelector('.main-navigation-login-form');

loginForm.addEventListener('focus', function() {
  this.classList.remove('display-hidden')
}, true);

loginForm.addEventListener('blur', function() {
  this.classList.add('display-hidden')
}, true);




















