'use strict';
/**
 * @see https://github.com/jscs-dev/grunt-jscs
 */
module.exports = function() {
    return {
        src: [
            'Gruntfile.js',
            'grunt/**/*.js',
            'test/*.js',
            'src/*.js',
            'main.js'
        ],
        options: {
            config: '.jscsrc',
            esnext: true,
            verbose: true,
            fix: true
        }
    };
};
