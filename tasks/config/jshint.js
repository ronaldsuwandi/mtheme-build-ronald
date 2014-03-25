var config = {
  taskName: 'jshint',
  all: ['Gruntfile.js', 'tasks', 'assets/src/scripts/**/!(modernizr).js'],
  options: {
    expr: true,
    indent: 2,
    curly: true,
    eqeqeq: true,
    newcap: true,
    quotmark: 'single',
    unused: true,
    trailing: true,
    sub: true
  }
};

module.exports = config;