'use strict';
/**
 * @see https://github.com/gruntjs/grunt-contrib-jshint
 */
module.exports = function() {
    return {
        options: {
            jshintrc: '.jshintrc'
        },
        all: [
            'Gruntfile.js',
            'grunt/**/*.js',
            'test/**/*.js',
            'src/*.js',
            'main.js'
        ]
    };
};
