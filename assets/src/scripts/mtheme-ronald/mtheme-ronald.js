require(['helpers/site', 'helpers/index', 'helpers/post', 'lodash'], function (SiteHelper, IndexHelper, PostHelper, _) {

  var MthemeRonald = function () {};

  MthemeRonald.prototype.init = function () {
    var site = new SiteHelper();
    site.init();

    var bc = this.bodyClass();

    if (_.intersection(bc, ['home-template', 'archive-template'])) {
      var index = new IndexHelper();
      index.init();
    }

    if (_.contains(bc, 'post-template')) {
      var post = new PostHelper();
      post.init();
    }
  };

  MthemeRonald.prototype.bodyClass = function () {
    return document.querySelector('body').className;
  };

  var mtr = new MthemeRonald();
  mtr.init();
});
