'use strict';

var CONNECT_PORT = 9090;
var CONNECT_PORT_TEST = 9091;
var LIVERELOAD_PORT = 35742;

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var alarm = {
    app: 'app',
    src: 'src',
    livereloadPort: LIVERELOAD_PORT,
    connectPort: CONNECT_PORT,
    connectPortTest: CONNECT_PORT_TEST
  };
  var options = ['jshint', 'jscs', 'mochaTest', 'coveralls', 'mocha_istanbul'];

  grunt.config.init(options.reduce(function (accumulator, val) {
    accumulator[val] = (require('./grunt/' + val + '.js'))(accumulator.alarm, grunt);
    return accumulator;
  }, {
    alarm: alarm
  }));

  grunt.event.on('coverage', function (lcov, done) {
    require('coveralls').handleInput(lcov, function (err) {
      if (err) {
        return done(err);
      }
      done();
    });
  });

  grunt.registerTask('default', 'Default build tasks', [
    'jshint',
    'jscs'
  ]);

  grunt.registerTask('test', 'Default build tasks', [
    'default',
    'mochaTest:test'
  ]);

  grunt.registerTask('coverage', 'Save coverage in coveralls', [
    'mocha_istanbul:coveralls',
    'coveralls'
  ]);
};
