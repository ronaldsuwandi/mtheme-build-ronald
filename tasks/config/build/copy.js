var config = {
  taskName: 'copy',
  watch: {
    files: [
      { expand: true, cwd: 'assets/src/images/', src: '**', dest: 'assets/dist/images/', flatten: true, filter: 'isFile' },
      { expand: true, cwd: 'assets/src/scripts/', src: 'modernizr.custom.js', dest: 'assets/dist/scripts/', flatten: true, filter: 'isFile' },
      { expand: true, cwd: 'assets/src/fonts/', src: '**', dest: 'assets/dist/fonts/', flatten: true, filter: 'isFile' }
    ]
  },
  build: {
    files: [
      { expand: true, cwd: '.', src: ['*.hbs', '*.png', 'pagkage.json', 'LICENSE', 'README.md'], dest: 'mtheme-ronald/', flatten: true, filter: 'isFile' },
      { expand: false, cwd: '.', src: ['package_theme.json'], dest: 'mtheme-ronald/package.json', flatten: false, filter: 'isFile' },
      { expand: true, cwd: 'partials', src: ['*.hbs'], dest: 'mtheme-ronald/partials', flatten: true, filter: 'isFile' },
      { expand: true, cwd: 'assets/dist/images/', src: '**', dest: 'mtheme-ronald/assets/images/', flatten: true, filter: 'isFile' },
      { expand: true, cwd: 'assets/dist/scripts/', src: '**', dest: 'mtheme-ronald/assets/scripts/', flatten: true, filter: 'isFile' },
      { expand: true, cwd: 'assets/dist/styles/', src: '**', dest: 'mtheme-ronald/assets/styles/', flatten: true, filter: 'isFile' },
      { expand: true, cwd: 'assets/dist/fonts/', src: '**', dest: 'mtheme-ronald/assets/fonts/', flatten: true, filter: 'isFile' },
      { expand: true, cwd: 'assets/components/requirejs/', src: 'require.js', dest: 'mtheme-ronald/assets/components/requirejs/', flatten: true, filter: 'isFile' }
    ]
  },
  templates: {
    src: 'default.hbs',
    dest: 'mtheme-ronald/default.hbs',
    options: {
      process: function (content) {
        return content.replace(/dist\//g, '');
      }
    }
  }
};

module.exports = config;