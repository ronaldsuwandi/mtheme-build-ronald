var config = {
  taskName: 'less',
  watch: {
    options: {
      paths: ['assets/src/styles/**/*.less']
    },
    files: {
      'assets/dist/styles/mtheme-ronald.css': 'assets/src/styles/mtheme-ronald.less'
    }
  },
  build: {
    options: {
      paths: ['assets/src/styles/**/*.less'],
      cleancss: true
    },
    files: {
      'assets/dist/styles/mtheme-ronald.css': 'assets/src/styles/mtheme-ronald.less'
    }
  }
};

module.exports = config;