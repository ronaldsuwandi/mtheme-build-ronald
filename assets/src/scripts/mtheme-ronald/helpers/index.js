define(['scrollmagic'], function (ScrollMagic) {

  var IndexHelper = function () {};

  IndexHelper.prototype.init = function () {
    this.setHeaderImage();
    this.setArrow();
  };
  
  IndexHelper.prototype.setHeaderImage = function() {
    var controller = new ScrollMagic({container: '.screen-content'});
    var tween = TweenMax.to('.image-source-blur', 0.5, {className: '+=image-source-blur-visible' });
    
    var scene = new ScrollScene( {triggerElement: '#scrollPinOne', duration: 200});
    scene.setTween(tween).addTo(controller);
    
    scene = new ScrollScene( {triggerElement: '#scrollPinOne', duration: 200});
    tween = TweenMax.to('.hero-home', 0.5, {className: '+=hero-home-fade'});
    scene.setTween(tween).addTo(controller);
  };
  
  IndexHelper.prototype.setArrow = function() {
    var cover_arrow = $('.header-down-arrow');

    cover_arrow.click(function (e) {
      e.preventDefault();
      var image_header = $('.image-header');
      var screen_content = $('.screen-content');
      var offset = image_header.height();

      screen_content.animate({
        'scrollTop': offset
      }, 500, function () {
        // nothing here yet.
      });
    });
  };

  return IndexHelper;
});