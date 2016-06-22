'use strict';
/**
 * @see https://github.com/jsoverson/mocha_istanbul
 */
module.exports = function() {
    return {
        coveralls: {
            src: ['test', 'testSpecial', 'testUnique'], // multiple folders also works
            options: {
                coverage: true, // this will make the grunt.event.on('coverage') event listener to be triggered
                check: {
                    lines: 75,
                    statements: 75
                },
                root: './src', // define where the cover task should consider the root of libraries that are covered by tests
                reportFormats: ['cobertura', 'lcovonly']
            }
        }
    };
};
