var config = {
  taskName: 'requirejs',
  watch: {
    options: {
      optimize: 'none',
      name: 'mtheme-ronald',
      baseUrl: 'assets/src/scripts/mtheme-ronald',
      mainConfigFile: 'assets/src/scripts/mtheme-ronald/config.js',
      out: 'assets/dist/scripts/mtheme-ronald.min.js'
    }
  },

  build: {
    options: {
      optimize: 'uglify',
      name: 'mtheme-ronald',
      baseUrl: 'assets/src/scripts/mtheme-ronald',
      mainConfigFile: 'assets/src/scripts/mtheme-ronald/config.js',
      out: 'assets/dist/scripts/mtheme-ronald.min.js'
    }
  }
};

module.exports = config;