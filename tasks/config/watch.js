var config = {
  taskName: 'watch',
  all: {
    files: ['tasks/**/*.js', 'Gruntfile.js', 'assets/src/scripts/**/*.js', 'assets/src/styles/**/*.less', 'assets/src/images/**/*.*'],
    tasks: ['jshint:all', 'requirejs:watch', 'less:watch', 'autoprefixer:watch', 'copy:watch'],
    options: {
      spawn: true,
      livereload: true
    }
  }
};
        
module.exports = config;