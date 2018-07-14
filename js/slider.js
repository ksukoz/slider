function Slider(id) {
  this.slider = document.getElementById(id);
  this.container = this.slider.querySelector('.slider__container');
  this.activeItem = this.container.querySelector('.slider__slide.active');

  this.container.style.transform = 'translateX(0)';
}

function UI() {}


UI.prototype.slide = function(slider, container) {
  slider.addEventListener('touchstart', function(e) {
    var startPoint = e.changedTouches[0].clientX;
    
  
    slider.addEventListener('touchmove', function(e) {
      var containerPlace = container.style.transform.replace(/[^\d\-]/g, '');

      if (startPoint > e.changedTouches[0].clientX && container.clientWidth > (-containerPlace + window.innerWidth + 30)) {
        container.style.transform = 'translateX(' + (+containerPlace - 5) + 'px)';
      } else if (containerPlace != 0 && startPoint < e.changedTouches[0].clientX ) {
        container.style.transform = 'translateX(' + (+containerPlace + 5) + 'px)';
      }

    })
  })
}

document.addEventListener('DOMContentLoaded', function() {
  var sliderList  = document.querySelectorAll('.slider__custom');
  
  sliderList.forEach(function(sliderItem) {
    console.log(sliderItem)
    var ui = new UI(), 
        slider = new Slider(sliderItem.id);

    ui.slide(slider.slider, slider.container);
  })
      
      
  
  
})