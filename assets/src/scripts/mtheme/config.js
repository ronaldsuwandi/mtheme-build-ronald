require.config({
  paths: {
    jquery: '../../../../../../../bower_components/jquery/dist/jquery', // use Ghost's jquery
    lodash: '../../../../../../../bower_components/lodash/dist/lodash', // use Ghost's lodash
    instantclick: '../../../components/instantclick/instantclick',
    scrollmagic: '../../../components/ScrollMagic/js/jquery.scrollmagic',
    scrollmagic_debug: '../../../components/ScrollMagic/js/jquery.scrollmagic.debug',
    tweenmax: '../../../components/ScrollMagic/js/_dependent/greensock/TweenMax.min'
  },

  shim: {
    instantclick: {
      exports: 'InstantClick'
    },

    jquery: {
      exports: ['jQuery', '$']
    },

    lodash: {
      exports: ['_']
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