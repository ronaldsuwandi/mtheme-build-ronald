define(['jquery'], function ( $ ) {

  var SiteHelper = function () {};

  SiteHelper.prototype.init = function () {
    var initial = this.initial();
    var logo = this.logo();
    logo.html('<p>' + initial + '</p>');
    logo.click(function (e) {
      e.preventDefault();
      document.location.href = '/';
    });
    this.hideLogoThinWidth();
  };

  SiteHelper.prototype.hideLogoThinWidth = function () {
    var screen_content = $('.screen-content');
    var icons_logo = $('.site-nav-logo');
    var trigger_top = 150;

    screen_content.scroll(function () {
      var width = screen_content.width();
      if ( width >= 900 ) {
        return;
      }

      var scroll_top = screen_content.scrollTop();

      if ( scroll_top > trigger_top && !icons_logo.hasClass('fadeaway') ) {
        icons_logo.addClass('fadeaway');
      }

      if ( scroll_top < trigger_top && icons_logo.hasClass('fadeaway')) {
        icons_logo.removeClass('fadeaway');
      }

    }.bind(this));
  };

  SiteHelper.prototype.initial = function () {
    return $('link[rel=\'alternate\']').attr('title').charAt(0).toUpperCase();
  };

  SiteHelper.prototype.logo = function () {
    return $('.icons-logo');
  };

  return SiteHelper;
});