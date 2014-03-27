var config = {
  taskName: 'less',
  watch: {
    options: {
      paths: ['assets/src/styles/**/*.less']
    },
    files: {
      'assets/dist/styles/mtheme.css': 'assets/src/styles/mtheme.less'
    }
  },
  build: {
    options: {
      paths: ['assets/src/styles/**/*.less'],
      cleancss: true
    },
    files: {
      'assets/dist/styles/mtheme.css': 'assets/src/styles/mtheme.less'
    }
  }
};

module.exports = config;