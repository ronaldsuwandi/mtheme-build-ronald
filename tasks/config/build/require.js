var config = {
  taskName: 'requirejs',
  watch: {
    options: {
      optimize: 'none',
      name: 'mtheme',
      baseUrl: 'assets/src/scripts/mtheme',
      mainConfigFile: 'assets/src/scripts/mtheme/config.js',
      out: 'assets/dist/scripts/mtheme.min.js'
    }
  },

  build: {
    options: {
      optimize: 'uglify',
      name: 'mtheme',
      baseUrl: 'assets/src/scripts/mtheme',
      mainConfigFile: 'assets/src/scripts/mtheme/config.js',
      out: 'assets/dist/scripts/mtheme.min.js'
    }
  }
};

module.exports = config;