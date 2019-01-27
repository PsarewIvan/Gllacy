var slider = document.getElementById('range-slider');

  noUiSlider.create(slider, {
    start: [200, 400],
    connect: true,
    range: {
        'min': 100,
        'max': 500
    },
    step: 10
  });

var snapValues = [
  document.getElementById('slider-min-value'),
  document.getElementById('slider-max-value')
];

var formValues = [
  document.getElementById('min-price-value'),
  document.getElementById('max-price-value')
];

slider.noUiSlider.on('update', function (values, handle) {
  snapValues[handle].innerHTML = values[handle];
  formValues[handle].value = values[handle];
});