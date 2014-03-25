require(['helpers/site', 'helpers/index', 'helpers/post', 'lodash'], function (SiteHelper, IndexHelper, PostHelper, _) {

  var Mtheme = function () {};

  Mtheme.prototype.init = function () {
    var site = new SiteHelper();
    site.init();

    var bc = this.bodyClass();

    if (_.contains(bc, 'home-template')) {
      var index = new IndexHelper();
      index.init();
    }

    if (_.contains(bc, 'post-template')) {
      var post = new PostHelper();
      post.init();
    }
  };

  Mtheme.prototype.bodyClass = function () {
    return document.querySelector('body').className;
  };

  var mtheme = new Mtheme();
  mtheme.init();
});