/* jshint unused:false */
define(['scrollmagic', 'jquery', 'helpers/site'], function (ScrollMagic, $, SiteHelper) {

  var PostHelper = function () {};

  PostHelper.prototype.init = function () {
    this.setCoverImage();
    this.setPostScroll();
    this.setCoverArrow();
    this.setResponsiveImages();
  };

  PostHelper.prototype.setCoverImage = function () {
    var cover_image = $('img[alt=\'COVER_IMAGE\']'),
        story_cover = $('.story-cover .story-cover-image'),
        post_header = $('.post-header'),
        cover_arrow = $('.header-down-arrow');

    if (cover_image.length > 0) {
      var gradient = 'linear-gradient(to bottom, rgba(0,0,0,0) 65%, ' +
          'rgba(10,10,10,0.15))';
      story_cover.css('background-image', gradient + ', url(' + cover_image.attr('src') + ')').addClass('covered');
      
      SiteHelper.imageBrightness(cover_image.attr('src'), function(brightness) {
        if (brightness > 125) {
          post_header.addClass('dark');
          cover_arrow.addClass('dark');
        }
      });

      cover_image.remove();
    }
  };

  PostHelper.prototype.setPostScroll = function () {
    var controller = new ScrollMagic(),
        tween = TweenMax.to('.story-cover-content', 0.5, {className: '+=story-cover-fade' }),
        scene = new ScrollScene({triggerElement: '#scrollPinOne', duration: 600, offset: 0})
          .setTween(tween)
          .addTo(controller);

    return scene;
  };

  PostHelper.prototype.setCoverArrow = function () {
    var cover_arrow = $('.header-down-arrow');
    var story_cover = $('.story-cover');
    var body = $('body');

    cover_arrow.click(function (e) {
      e.preventDefault();
      body.animate({
        'scrollTop': story_cover.height()
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
