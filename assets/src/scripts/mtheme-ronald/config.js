require.config({
  paths: {
    jquery: '../../../components/jquery/dist/jquery',
    lodash: '../../../components/lodash/dist/lodash',
    instantclick: '../../../components/instantclick/instantclick',
    scrollmagic: '../../../components/ScrollMagic/js/jquery.scrollmagic',
    scrollmagic_debug: '../../../components/ScrollMagic/js/jquery.scrollmagic.debug',
    tweenmax: '../../../components/ScrollMagic/js/_dependent/greensock/TweenMax.min'
  },

  shim: {
    instantclick: {
      exports: 'InstantClick'
    },

    scrollmagic: {
      exports: ['ScrollMagic'],
      deps: ['jquery', 'tweenmax']
    },

    scrollmagic_debug : {
      exports: ['ScrollMagic'],
      deps: ['scrollmagic']
    },

    tweenmax: {
      exports: ['TweenMax']
    }
  }
});