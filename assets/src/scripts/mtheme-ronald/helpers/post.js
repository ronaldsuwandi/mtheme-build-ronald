define(['scrollmagic', 'jquery'], function (ScrollMagic, $) {

  var PostHelper = function () {};

  PostHelper.prototype.init = function () {
    this.setCoverImage();
    this.setPostScroll();
    this.setCoverArrow();
    this.setResponsiveImages();
  };

  PostHelper.prototype.setCoverImage = function () {
    var cover_image = $('img[alt=\'COVER_IMAGE\']'),
        story_cover = $('.story-cover .story-cover-image');

    if (cover_image.length > 0) {
      story_cover.css('background-image', 'url(' + cover_image.attr('src') + ')').addClass('covered');
      cover_image.remove();
    }
  };

  PostHelper.prototype.setPostScroll = function () {
    var controller = new ScrollMagic({container: '.screen-content'}),
        tween = TweenMax.to('.story-cover-content', 0.5, {className: '+=story-cover-fade' }),
        scene = new ScrollScene( {triggerElement: '#scrollPinOne', duration: 600, offset: 0} )
          .setTween(tween)
          .addTo(controller);

    return scene;
  };

  PostHelper.prototype.setCoverArrow = function () {
    var cover_arrow = $('.header-down-arrow');

    cover_arrow.click(function (e) {
      e.preventDefault();
      var story_cover = $('.story-cover');
      var screen_content = $('.screen-content');
      var offset = story_cover.height();

      screen_content.animate({
        'scrollTop': offset
      }, 500, function () {
        // nothing here yet.
      });

    });
  };

  PostHelper.prototype.setResponsiveImages = function () {
    $('.container img').each(function (i, img) {
      $(img).addClass('img img-responsive');
    });
  };

  return PostHelper;
});
