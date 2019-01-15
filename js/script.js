var slideArray = document.querySelectorAll('.slide');
var buttonArray = document.querySelectorAll('.control-button');

var sliderClickHandler = function (controlButton, currentSlide) {
  controlButton.addEventListener('click', function() {
    currentSlide.classList.add('slide-show');
  });
  controlButton.addEventListener('blur', function() {
    currentSlide.classList.remove('slide-show');
  });
};

for (var i = 0; i < buttonArray.length; i++) {
  sliderClickHandler(buttonArray[i], slideArray[i]);
}
