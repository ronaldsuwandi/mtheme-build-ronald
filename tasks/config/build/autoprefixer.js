var config = {
  taskName: 'autoprefixer',
  options: ['last 1 version', 'ie 8', 'ie 9'],
  watch: {
    files: [{
      expand: true,
      cwd: 'assets/dist/styles/',
      src: '{,*/}*.css',
      dest: 'assets/dist/styles/'
    }]
  }
};

module.exports = config;