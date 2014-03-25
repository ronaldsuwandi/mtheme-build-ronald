define(['scrollmagic'], function ( ScrollMagic ) {

  var IndexHelper = function () {};

  IndexHelper.prototype.init = function () {
    var controller = new ScrollMagic({container: '.screen-content'}),
        tween = TweenMax.to('.image-source-blur', 0.5, {className: '+=image-source-blur-visible' }),
        scene = new ScrollScene( {triggerElement: '#scrollPinOne', duration: 200} )
          .setTween(tween)
          .addTo(controller);

    return scene;
  };

  return IndexHelper;
});