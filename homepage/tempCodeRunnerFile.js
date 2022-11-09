var slider = new Slider("#slider1");
slider.on("slide", function (slideEvt) {
  console.log(slideEvt.value);
});
