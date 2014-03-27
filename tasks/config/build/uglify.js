var config = {
  taskName: 'uglify',
  options: {
    mangle: false
  },
  watch: {
    files: [{
      expand: true,
      cwd: 'assets/src/scripts',
      src: '**/*.js',
      dest: 'assets/dist/scripts'
    }]
  }
};

module.exports = config;