define(['scrollmagic'], function (ScrollMagic) {

  var IndexHelper = function () {};

  IndexHelper.prototype.init = function () {
    this.setHeaderImage();
    this.setArrow();
  };
  
  IndexHelper.prototype.setHeaderImage = function() {
    var controller = new ScrollMagic();
    var tween = TweenMax.to('.hero-home', 0.5, {className: '+=hero-home-fade'});
    var scene = new ScrollScene( {triggerElement: '#scrollPinOne', duration: 200});
    scene.setTween(tween).addTo(controller);
  };
  
  IndexHelper.prototype.setArrow = function() {
    var cover_arrow = $('.header-down-arrow');
    var main = $('.main');
    var body = $('body');
    
    cover_arrow.click(function (e) {
      e.preventDefault();
      body.animate({
        'scrollTop': main.offset().top
      }, 500, function () {
        // nothing here yet.
      });
    });
  };

  return IndexHelper;
});
