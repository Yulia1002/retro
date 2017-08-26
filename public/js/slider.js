'use strict';

function _classCallCheck(instance, Constructor) 
{ if (!(instance instanceof Constructor))
   { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
  function Slider(root, options) {
    _classCallCheck(this, Slider);

    this.state = {
      classItem: options.classItem || 'slide',
      classItemActive: options.classItemActive || 'active',
      classItemActivePrev: options.classItemActivePrev || 'activePrev',
      slideTimeout: options.slideTimeout || 3000,
      fadeDuration: options.fadeDuration || 1000,
      loop: options.loop || false,
      reverse: options.reverse || false
    };
    this.root = root;
    this.slides = this.root.querySelectorAll('.' + this.state.classItem);
    this.amount = this.slides.length;
    this.currentSlide = '';
    this.counter = 0;
  }
  Slider.prototype.activate = activate;
  Slider.prototype.activatePrev = activatePrev;
  Slider.prototype.deactivate = deactivate;
  Slider.prototype.deactivatePrev = deactivatePrev;
  Slider.prototype.change = change;
  Slider.prototype.next = next;
  Slider.prototype.prev = prev;
  Slider.prototype.start = start;

 function activate(slide) {
    slide.classList.add(this.state.classItemActive);
  };
  function deactivate(slide) {
    slide.classList.remove(this.state.classItemActive);
  };

  function activatePrev(slide) {
    slide.classList.add(this.state.classItemActivePrev);
  };
  function deactivatePrev(slide) {
    slide.classList.remove(this.state.classItemActivePrev);
  };

  function change(inverse) {
    var _this = this;

    var counter = this.counter;
    var amount = this.amount;
    var currentSlideIndex = (amount + counter % amount) % amount;
    var nextSlideIndex = undefined;
    if (inverse) {
      nextSlideIndex = (amount + currentSlideIndex - 1) % amount;
      this.deactivate(this.slides[currentSlideIndex]);
      this.deactivatePrev(this.slides[currentSlideIndex]);
      setTimeout(function () {
        return _this.activatePrev(_this.slides[nextSlideIndex]);
      }, this.state.fadeDuration);

    } else {
      nextSlideIndex = (amount + currentSlideIndex + 1) % amount;
      this.deactivate(this.slides[currentSlideIndex]);
      this.deactivatePrev(this.slides[currentSlideIndex]);
      setTimeout(function () {
        return _this.activate(_this.slides[nextSlideIndex]);
      }, this.state.fadeDuration);
    }
  };

 function next() {
    this.change(this.state.reverse);
    this.counter += 1;
  };

 function prev() {
    this.change(!this.state.reverse);
    this.counter -= 1;
  };

function start() {
    var _this = this;

    for (var index = 0; index < this.amount; index++) {
      if (this.slides[index].classList.contains(this.state.classItemActive)) {
        this.counter = index;
      }
    }
    this.globalInterval = setInterval(function () {
      return _this.next();
    }, this.state.slideTimeout);
  };

  return Slider;
}();

window.onload = init;
var slider = new Slider(document.querySelector('.slider'), { loop: true, fadeDuration: 500, reverse: false });

function init() {
  slider.start();
}
function prev() {
  slider.prev();  
}
function next() { 
  slider.next();
}