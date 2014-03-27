var ConfigLoader = require('grunt-config-loader');


var gruntFile = function(grunt) {
  var configLoader = new ConfigLoader(grunt, {
    cwd: 'tasks/config',
    paths: {
      dist: 'assets/dist',
      src: 'assets/src'
    }
  });

  configLoader.loadAll();

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['jshint:all', 'requirejs', 'less:build', 'autoprefixer:watch', 'copy:build', 'copy:templates']);
  grunt.registerTask('default', ['watch']);
};

module.exports = gruntFile;
